import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.title || !data.description || !data.duration || !data.passingScore || !data.totalQuestions) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create exam ID
        const examId = `exam_${Date.now()}`;
        const fileName = data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        // Create exam object
        const exam = {
            id: examId,
            title: data.title,
            description: data.description,
            duration: data.duration,
            totalQuestions: data.totalQuestions,
            passingScore: data.passingScore,
            subjects: {
                'General Knowledge': Math.floor(data.totalQuestions * 0.4),
                'Geography': Math.floor(data.totalQuestions * 0.2),
                'Computer Science': Math.floor(data.totalQuestions * 0.2),
                'Mathematics': Math.floor(data.totalQuestions * 0.2),
            },
            questions: [], // Will be populated from MCQ bank when exam is taken
            createdAt: new Date().toISOString(),
        };

        // Save to file
        const filePath = path.join(process.cwd(), 'public', 'data', 'mock-exams', `${fileName}.json`);
        await writeFile(filePath, JSON.stringify(exam, null, 2));

        return NextResponse.json({ success: true, exam });
    } catch (error) {
        console.error('Error creating exam:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create exam' },
            { status: 500 }
        );
    }
}
