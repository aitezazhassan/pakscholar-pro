export interface MCQ {
    id: string;
    subject: string;
    topic: string;
    question: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    tags: string[];
}

export interface MCQSet {
    subject: string;
    totalQuestions: number;
    questions: MCQ[];
}
