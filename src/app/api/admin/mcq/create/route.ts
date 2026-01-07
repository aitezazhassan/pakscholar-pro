import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.question || !data.subject || !data.optionA || !data.optionB || !data.optionC || !data.optionD || !data.correctAnswer) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create MCQ object
        const mcq = {
            id: `mcq_${Date.now()}`,
            question: data.question,
            subject: data.subject,
            difficulty: data.difficulty || 'Medium',
            options: {
                A: data.optionA,
                B: data.optionB,
                C: data.optionC,
                D: data.optionD,
            },
            correctAnswer: data.correctAnswer,
            explanation: data.explanation || '',
            createdAt: new Date().toISOString(),
        };

        // Determine which file to append to based on subject
        const subjectFileMap: Record<string, string> = {
            'General Knowledge': 'general-knowledge',
            'Geography': 'geography',
            'Computer Science': 'computer',
            'Mathematics': 'mathematics',
            'English': 'english',
            'Urdu': 'urdu',
            'Islamic Studies': 'islamic-studies',
            'Pakistan Studies': 'pakistan-studies',
            'Current Affairs': 'current-affairs',
        };

        const fileName = subjectFileMap[data.subject] || 'general-knowledge';
        const filePath = path.join(process.cwd(), 'public', 'data', 'mcqs', `${fileName}.json`);

        // Read existing file or create new array
        let mcqs = [];
        try {
            const fileContent = await readFile(filePath, 'utf-8');
            mcqs = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist, start with empty array
            mcqs = [];
        }

        // Add new MCQ
        mcqs.push(mcq);

        // Write back to file
        await writeFile(filePath, JSON.stringify(mcqs, null, 2));

        return NextResponse.json({ success: true, mcq });
    } catch (error) {
        console.error('Error creating MCQ:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create MCQ' },
            { status: 500 }
        );
    }
}
