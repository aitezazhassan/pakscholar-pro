export interface Essay {
    slug: string;
    entry: {
        title: string;
        excerpt: string;
        coverImage?: string;
        category: string;
        tags: string[];
        author: string;
        publishedDate: string;
        featured: boolean;
        status: string;
        seo: {
            metaTitle?: string;
            metaDescription?: string;
        };
    };
}

export interface MCQ {
    slug: string;
    entry: {
        question: string;
        optionA: string;
        optionB: string;
        optionC: string;
        optionD: string;
        correctAnswer: 'A' | 'B' | 'C' | 'D';
        explanation: string;
        category: string;
        difficulty: 'easy' | 'medium' | 'hard';
        examTypes: string[];
        source?: string;
        tags: string[];
    };
}

export interface PastPaper {
    slug: string;
    entry: {
        title: string;
        year: number;
        examType: string;
        department?: string;
        description?: string;
        pdfFile?: string;
        totalQuestions?: number;
        duration?: number;
        answerKeyIncluded: boolean;
        tags: string[];
    };
}

export interface Author {
    slug: string;
    entry: {
        name: string;
        bio?: string;
        avatar?: string;
        email?: string;
        socialLinks: {
            twitter?: string;
            linkedin?: string;
            website?: string;
        };
    };
}

export interface Category {
    slug: string;
    entry: {
        name: string;
        description?: string;
        badgeColor: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
    };
}
