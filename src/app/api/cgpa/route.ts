import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface Course {
    code: string;
    name: string;
    creditHours: number;
    marks: number;
    grade: string;
    gradePoints: number;
    qualityPoints: number;
}

interface Semester {
    semester: number;
    semesterName: string;
    courses: Course[];
    totalCreditHours: number;
    totalQualityPoints: number;
    gpa: number;
}

interface StudentResult {
    studentInfo: {
        name: string;
        registrationNo: string;
        program: string;
        faculty: string;
    };
    semesters: Semester[];
    cgpa: number;
    totalCreditHours: number;
    totalQualityPoints: number;
    status: string;
}

// Grade to Grade Points mapping (UAF standard)
function getGradePoints(grade: string): number {
    const gradeMap: Record<string, number> = {
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.3,
        'D': 1.0,
        'F': 0.0,
        'W': 0.0,  // Withdrawn
        'I': 0.0,  // Incomplete
    };
    return gradeMap[grade.toUpperCase()] ?? 0.0;
}

// Calculate grade from marks (UAF grading system)
function getGradeFromMarks(marks: number): string {
    if (marks >= 85) return 'A';
    if (marks >= 80) return 'A-';
    if (marks >= 75) return 'B+';
    if (marks >= 70) return 'B';
    if (marks >= 65) return 'B-';
    if (marks >= 60) return 'C+';
    if (marks >= 55) return 'C';
    if (marks >= 50) return 'C-';
    if (marks >= 45) return 'D+';
    if (marks >= 40) return 'D';
    return 'F';
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { registrationNo, includeTwoDegree } = body;

        // Validate registration number format
        const regNoPattern = /^\d{4}-ag-\d{4}$/i;
        if (!registrationNo || !regNoPattern.test(registrationNo.trim())) {
            return NextResponse.json(
                { error: 'Invalid registration number format. Use: YYYY-ag-XXXX' },
                { status: 400 }
            );
        }

        const regNo = registrationNo.trim().toLowerCase();

        // UAF LMS Result Page URL
        // The actual URL pattern may need adjustment based on UAF's LMS structure
        const lmsUrl = `https://lms.uaf.edu.pk/Student/StudentResult.aspx?RegNo=${regNo}`;

        // Alternative URLs to try if the first doesn't work
        const alternativeUrls = [
            `https://lms.uaf.edu.pk/Result/StudentResult.aspx?RegNo=${regNo}`,
            `https://result.uaf.edu.pk/StudentResult.aspx?RegNo=${regNo}`,
            `https://lms.uaf.edu.pk/Student/Result.aspx?StudentID=${regNo}`,
        ];

        let html = '';
        let fetchSuccess = false;

        // Try main URL first
        try {
            const response = await fetch(lmsUrl, {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                },
                // Timeout after 10 seconds
                signal: AbortSignal.timeout(10000),
            });

            if (response.ok) {
                html = await response.text();
                fetchSuccess = true;
            }
        } catch {
            // Try alternative URLs
            for (const altUrl of alternativeUrls) {
                try {
                    const response = await fetch(altUrl, {
                        method: 'GET',
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                        },
                        signal: AbortSignal.timeout(10000),
                    });

                    if (response.ok) {
                        html = await response.text();
                        fetchSuccess = true;
                        break;
                    }
                } catch {
                    continue;
                }
            }
        }

        if (!fetchSuccess || !html) {
            // Return demo data if LMS is unavailable (for testing)
            return NextResponse.json({
                success: true,
                data: generateDemoResult(regNo, includeTwoDegree),
                isDemo: true,
                message: 'UAF LMS is currently unavailable. Showing demo data.'
            });
        }

        // Parse the HTML using Cheerio
        const $ = cheerio.load(html);

        // Extract student information and result data
        const result = parseResultPage($, regNo, includeTwoDegree);

        if (!result) {
            return NextResponse.json(
                { error: 'Unable to parse result data. Student may not exist or result not available.' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: result,
            isDemo: false
        });

    } catch (error) {
        console.error('CGPA Calculation Error:', error);
        return NextResponse.json(
            { error: 'Failed to calculate CGPA. Please try again later.' },
            { status: 500 }
        );
    }
}

// Parse the UAF LMS result page
function parseResultPage(
    $: cheerio.CheerioAPI,
    regNo: string,
    includeTwoDegree: boolean
): StudentResult | null {
    try {
        // These selectors may need adjustment based on actual UAF LMS HTML structure
        const studentName = $('span#lblStudentName, .student-name, #studentName').text().trim() || 'Student';
        const program = $('span#lblProgram, .program-name, #program').text().trim() || 'Program';
        const faculty = $('span#lblFaculty, .faculty-name').text().trim() || 'Faculty';

        const semesters: Semester[] = [];
        let totalCreditHours = 0;
        let totalQualityPoints = 0;

        // Find all semester tables/sections
        // The exact selector depends on UAF's HTML structure
        $('table.result-table, .semester-result, table[id*="Result"]').each((semIndex, semTable) => {
            const courses: Course[] = [];
            let semCreditHours = 0;
            let semQualityPoints = 0;

            // Find course rows
            $(semTable).find('tr').slice(1).each((_, row) => {
                const cells = $(row).find('td');
                if (cells.length >= 4) {
                    const courseCode = $(cells[0]).text().trim();
                    const courseName = $(cells[1]).text().trim();
                    const creditHours = parseFloat($(cells[2]).text().trim()) || 3;
                    const marks = parseFloat($(cells[3]).text().trim()) || 0;

                    // Get grade from marks or from table if available
                    let grade = $(cells[4]).text().trim() || getGradeFromMarks(marks);
                    const gradePoints = getGradePoints(grade);
                    const qualityPoints = creditHours * gradePoints;

                    if (courseCode && courseName) {
                        courses.push({
                            code: courseCode,
                            name: courseName,
                            creditHours,
                            marks,
                            grade,
                            gradePoints,
                            qualityPoints
                        });

                        semCreditHours += creditHours;
                        semQualityPoints += qualityPoints;
                    }
                }
            });

            if (courses.length > 0) {
                const semesterGPA = semCreditHours > 0 ? semQualityPoints / semCreditHours : 0;

                semesters.push({
                    semester: semIndex + 1,
                    semesterName: `Semester ${semIndex + 1}`,
                    courses,
                    totalCreditHours: semCreditHours,
                    totalQualityPoints: semQualityPoints,
                    gpa: parseFloat(semesterGPA.toFixed(2))
                });

                totalCreditHours += semCreditHours;
                totalQualityPoints += semQualityPoints;
            }
        });

        // If no semesters found, return null
        if (semesters.length === 0) {
            return null;
        }

        const cgpa = totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;

        return {
            studentInfo: {
                name: studentName,
                registrationNo: regNo.toUpperCase(),
                program,
                faculty
            },
            semesters,
            cgpa: parseFloat(cgpa.toFixed(2)),
            totalCreditHours,
            totalQualityPoints: parseFloat(totalQualityPoints.toFixed(2)),
            status: cgpa >= 2.0 ? 'Good Standing' : 'Academic Warning'
        };

    } catch {
        return null;
    }
}

// Generate demo result when LMS is unavailable
function generateDemoResult(regNo: string, includeTwoDegree: boolean): StudentResult {
    const semesters: Semester[] = [
        {
            semester: 1,
            semesterName: 'Fall 2021',
            courses: [
                { code: 'CS-101', name: 'Introduction to Computing', creditHours: 3, marks: 85, grade: 'A', gradePoints: 4.0, qualityPoints: 12.0 },
                { code: 'MATH-101', name: 'Calculus I', creditHours: 3, marks: 78, grade: 'B+', gradePoints: 3.3, qualityPoints: 9.9 },
                { code: 'ENG-101', name: 'English I', creditHours: 3, marks: 82, grade: 'A-', gradePoints: 3.7, qualityPoints: 11.1 },
                { code: 'PHY-101', name: 'Physics', creditHours: 3, marks: 75, grade: 'B+', gradePoints: 3.3, qualityPoints: 9.9 },
                { code: 'ISL-101', name: 'Islamic Studies', creditHours: 2, marks: 88, grade: 'A', gradePoints: 4.0, qualityPoints: 8.0 }
            ],
            totalCreditHours: 14,
            totalQualityPoints: 50.9,
            gpa: 3.64
        },
        {
            semester: 2,
            semesterName: 'Spring 2022',
            courses: [
                { code: 'CS-102', name: 'Programming Fundamentals', creditHours: 4, marks: 88, grade: 'A', gradePoints: 4.0, qualityPoints: 16.0 },
                { code: 'MATH-102', name: 'Calculus II', creditHours: 3, marks: 72, grade: 'B', gradePoints: 3.0, qualityPoints: 9.0 },
                { code: 'ENG-102', name: 'English II', creditHours: 3, marks: 80, grade: 'A-', gradePoints: 3.7, qualityPoints: 11.1 },
                { code: 'CS-103', name: 'Digital Logic Design', creditHours: 3, marks: 76, grade: 'B+', gradePoints: 3.3, qualityPoints: 9.9 }
            ],
            totalCreditHours: 13,
            totalQualityPoints: 46.0,
            gpa: 3.54
        },
        {
            semester: 3,
            semesterName: 'Fall 2022',
            courses: [
                { code: 'CS-201', name: 'Data Structures', creditHours: 4, marks: 82, grade: 'A-', gradePoints: 3.7, qualityPoints: 14.8 },
                { code: 'CS-202', name: 'Object Oriented Programming', creditHours: 3, marks: 90, grade: 'A', gradePoints: 4.0, qualityPoints: 12.0 },
                { code: 'MATH-201', name: 'Linear Algebra', creditHours: 3, marks: 68, grade: 'B-', gradePoints: 2.7, qualityPoints: 8.1 },
                { code: 'STAT-201', name: 'Probability & Statistics', creditHours: 3, marks: 74, grade: 'B', gradePoints: 3.0, qualityPoints: 9.0 }
            ],
            totalCreditHours: 13,
            totalQualityPoints: 43.9,
            gpa: 3.38
        }
    ];

    // Add B.Ed courses if second degree is included
    if (includeTwoDegree) {
        semesters.push({
            semester: 4,
            semesterName: 'B.Ed - Semester 1',
            courses: [
                { code: 'EDU-101', name: 'Foundations of Education', creditHours: 3, marks: 78, grade: 'B+', gradePoints: 3.3, qualityPoints: 9.9 },
                { code: 'EDU-102', name: 'Educational Psychology', creditHours: 3, marks: 82, grade: 'A-', gradePoints: 3.7, qualityPoints: 11.1 },
                { code: 'EDU-103', name: 'Curriculum Development', creditHours: 3, marks: 75, grade: 'B+', gradePoints: 3.3, qualityPoints: 9.9 }
            ],
            totalCreditHours: 9,
            totalQualityPoints: 30.9,
            gpa: 3.43
        });
    }

    // Calculate totals
    const totalCreditHours = semesters.reduce((sum, sem) => sum + sem.totalCreditHours, 0);
    const totalQualityPoints = semesters.reduce((sum, sem) => sum + sem.totalQualityPoints, 0);
    const cgpa = totalQualityPoints / totalCreditHours;

    return {
        studentInfo: {
            name: 'Demo Student',
            registrationNo: regNo.toUpperCase(),
            program: 'BS Computer Science',
            faculty: 'Faculty of Sciences'
        },
        semesters,
        cgpa: parseFloat(cgpa.toFixed(2)),
        totalCreditHours,
        totalQualityPoints: parseFloat(totalQualityPoints.toFixed(2)),
        status: 'Good Standing (Demo Data)'
    };
}
