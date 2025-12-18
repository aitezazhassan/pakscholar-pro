// ENGLISH LANGUAGE - Grammar & Vocabulary for PPSC

export interface GrammarRule {
    id: number;
    topic: string;
    rule: string;
    examples: string[];
    commonError?: string;
    difficulty: 'Basic' | 'Intermediate' | 'Advanced';
}

export interface VocabularyWord {
    word: string;
    meaning: string;
    synonym?: string;
    antonym?: string;
    example: string;
    category: string;
}

// Grammar Rules
export const grammarRules: GrammarRule[] = [
    {
        id: 1,
        topic: 'Parts of Speech - Noun',
        rule: 'A noun is a word used to name a person, place, thing, or idea.',
        examples: ['Person: teacher, doctor', 'Place: school, Pakistan', 'Thing: book, computer', 'Idea: freedom, love'],
        difficulty: 'Basic'
    },
    {
        id: 2,
        topic: 'Parts of Speech - Pronoun',
        rule: 'A pronoun replaces a noun to avoid repetition.',
        examples: ['He, she, it, they', 'This, that, these, those', 'Who, which, what'],
        difficulty: 'Basic'
    },
    {
        id: 3,
        topic: 'Subject-Verb Agreement',
        rule: 'Singular subject takes singular verb, plural subject takes plural verb.',
        examples: ['He goes (singular)', 'They go (plural)', 'The team is ready (collective noun - singular)'],
        commonError: 'The team are ready ❌',
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        topic: 'Present Simple Tense',
        rule: 'Used for habits, facts, and general truths. Form: Subject + V1 (add s/es for he/she/it)',
        examples: ['I work daily', 'She works in a bank', 'The sun rises in the east'],
        difficulty: 'Basic'
    },
    {
        id: 5,
        topic: 'Present Continuous Tense',
        rule: 'Used for actions happening now. Form: Subject + am/is/are + V1+ing',
        examples: ['I am studying', 'He is working', 'They are playing'],
        difficulty: 'Basic'
    },
    {
        id: 6,
        topic: 'Past Simple Tense',
        rule: 'Used for completed actions in past. Form: Subject + V2',
        examples: ['I completed the task', 'She went to school', 'They played cricket'],
        difficulty: 'Basic'
    },
    {
        id: 7,
        topic: 'Active vs Passive Voice',
        rule: 'Active: Subject does action. Passive: Action is done to subject.',
        examples: ['Active: John writes a letter', 'Passive: A letter is written by John'],
        difficulty: 'Intermediate'
    },
    {
        id: 8,
        topic: 'Direct vs Indirect Speech',
        rule: 'Direct: Exact words in quotes. Indirect: Reported speech with tense changes.',
        examples: ['Direct: He said, "I am busy"', 'Indirect: He said that he was busy'],
        difficulty: 'Intermediate'
    },
    {
        id: 9,
        topic: 'Articles - A, An, The',
        rule: 'A/An = indefinite (any one), The = definite (specific one). An before vowel sound.',
        examples: ['A book, An apple, The Quran', 'A university (u sounds like yu)', 'An hour (h is silent)'],
        commonError: 'An university ❌',
        difficulty: 'Basic'
    },
    {
        id: 10,
        topic: 'Prepositions of Time',
        rule: 'In (months/years), On (days/dates), At (time)',
        examples: ['In June, In 2024', 'On Monday, On 14th August', 'At 5 PM, At night'],
        commonError: 'In Monday ❌',
        difficulty: 'Basic'
    }
];

// Common Errors
export const commonErrors = [
    {
        error: 'Between you and I',
        correct: 'Between you and me',
        explanation: 'Use object pronoun "me" after preposition'
    },
    {
        error: 'One of my friend',
        correct: 'One of my friends',
        explanation: '"One of" is always followed by plural noun'
    },
    {
        error: 'Less people',
        correct: 'Fewer people',
        explanation: 'Use "fewer" with countable nouns, "less" with uncountable'
    },
    {
        error: 'More better',
        correct: 'Better',
        explanation: '"Better" already means "more good", don\'t add "more"'
    },
    {
        error: 'I am agree',
        correct: 'I agree',
        explanation: '"Agree" is a verb, not an adjective'
    },
    {
        error: 'He is having a car',
        correct: 'He has a car',
        explanation: '"Have" for possession doesn\'t use continuous tense'
    },
    {
        error: 'I am understanding',
        correct: 'I understand',
        explanation: 'Stative verbs (understand, know, believe) don\'t use continuous'
    },
    {
        error: 'Each students',
        correct: 'Each student',
        explanation: '"Each" takes singular noun'
    },
    {
        error: 'There is many people',
        correct: 'There are many people',
        explanation: '"People" is plural, use "are"'
    },
    {
        error: 'Despite of',
        correct: 'Despite / In spite of',
        explanation: '"Despite" doesn\'t need "of", but "in spite of" does'
    }
];

// Vocabulary - Academic Words
export const academicVocabulary: VocabularyWord[] = [
    { word: 'Analyze', meaning: 'To examine in detail', synonym: 'Examine', antonym: 'Synthesize', example: 'We need to analyze the data', category: 'Academic' },
    { word: 'Subsequently', meaning: 'Afterwards, later', synonym: 'Later', antonym: 'Previously', example: 'He graduated and subsequently got a job', category: 'Academic' },
    { word: 'Significant', meaning: 'Important, meaningful', synonym: 'Important', antonym: 'Insignificant', example: 'This is a significant discovery', category: 'Academic' },
    { word: 'Implement', meaning: 'To put into effect', synonym: 'Execute', antonym: 'Abandon', example: 'The government will implement new policies', category: 'Academic' },
    { word: 'Constitute', meaning: 'To make up, form', synonym: 'Comprise', example: 'Women constitute 50% of the population', category: 'Academic' },
    { word: 'Adjacent', meaning: 'Next to, adjoining', synonym: 'Nearby', antonym: 'Distant', example: 'The library is adjacent to the school', category: 'Academic' },
    { word: 'Coherent', meaning: 'Logical and consistent', synonym: 'Logical', antonym: 'Incoherent', example: 'Please write a coherent essay', category: 'Academic' },
    { word: 'Diverse', meaning: 'Varied, different', synonym: 'Varied', antonym: 'Uniform', example: 'Pakistan has a diverse culture', category: 'Academic' },
    { word: 'Enhance', meaning: 'To improve, increase', synonym: 'Improve', antonym: 'Diminish', example: 'This will enhance your skills', category: 'Academic' },
    { word: 'Preliminary', meaning: 'Initial, introductory', synonym: 'Initial', antonym: 'Final', example: 'These are preliminary results', category: 'Academic' }
];

// Idioms & Phrases
export const commonIdioms = [
    { idiom: 'A piece of cake', meaning: 'Very easy', example: 'The exam was a piece of cake' },
    { idiom: 'Break the ice', meaning: 'Start a conversation', example: 'He told a joke to break the ice' },
    { idiom: 'Hit the books', meaning: 'Study hard', example: 'I need to hit the books for exams' },
    { idiom: 'Once in a blue moon', meaning: 'Very rarely', example: 'He visits us once in a blue moon' },
    { idiom: 'Under the weather', meaning: 'Feeling sick', example: 'I\'m feeling under the weather today' },
    { idiom: 'Bite the bullet', meaning: 'Face a difficult situation', example: 'I had to bite the bullet and resign' },
    { idiom: 'Cost an arm and a leg', meaning: 'Very expensive', example: 'The car cost an arm and a leg' },
    { idiom: 'Let the cat out of the bag', meaning: 'Reveal a secret', example: 'Don\'t let the cat out of the bag' },
    { idiom: 'Burn the midnight oil', meaning: 'Study/work late at night', example: 'He burnt the midnight oil before exams' },
    { idiom: 'The ball is in your court', meaning: 'It\'s your decision/turn', example: 'I\'ve made my offer, now the ball is in your court' }
];

// One-word Substitutions
export const oneWordSubstitutions = [
    { phrase: 'One who studies insects', word: 'Entomologist' },
    { phrase: 'A government by the people', word: 'Democracy' },
    { phrase: 'A study of ancient things', word: 'Archaeology' },
    { phrase: 'One who doesn\'t believe in God', word: 'Atheist' },
    { phrase: 'A place where birds are kept', word: 'Aviary' },
    { phrase: 'One who loves mankind', word: 'Philanthropist' },
    { phrase: 'A person who hates mankind', word: 'Misanthrope' },
    { phrase: 'A book published after author\'s death', word: 'Posthumous' },
    { phrase: 'A government by nobles', word: 'Aristocracy' },
    { phrase: 'One who can use both hands equally', word: 'Ambidextrous' }
];
