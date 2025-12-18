// EXTERNAL RESOURCES DIRECTORY
// Curated links for PPSC preparation

export interface ResourceLink {
    name: string;
    url: string;
    description: string;
    category: string;
    type: 'Official' | 'Educational' | 'Reference' | 'Practice' | 'Video';
    verified: boolean;
}

export const externalResources: ResourceLink[] = [
    // ==================== OFFICIAL GOVERNMENT ====================
    {
        name: 'PPSC Official Website',
        url: 'https://www.ppsc.gop.pk',
        description: 'Punjab Public Service Commission - Official announcements, results, past papers',
        category: 'Official',
        type: 'Official',
        verified: true
    },
    {
        name: 'FPSC Official Website',
        url: 'https://www.fpsc.gov.pk',
        description: 'Federal Public Service Commission - Jobs, results, syllabus',
        category: 'Official',
        type: 'Official',
        verified: true
    },
    {
        name: 'Pakistan Parliament',
        url: 'https://www.na.gov.pk',
        description: 'National Assembly official website - Bills, sessions, members',
        category: 'Official',
        type: 'Official',
        verified: true
    },
    {
        name: 'Constitution of Pakistan',
        url: 'http://www.na.gov.pk/uploads/documents/1333523681_951.pdf',
        description: 'Official PDF of 1973 Constitution with all amendments',
        category: 'Official',
        type: 'Reference',
        verified: true
    },
    {
        name: 'Pakistan Bureau of Statistics',
        url: 'https://www.pbs.gov.pk',
        description: 'Official statistics, census data, economic indicators',
        category: 'Official',
        type: 'Reference',
        verified: true
    },

    // ==================== GEOGRAPHY & PAKISTAN STUDIES ====================
    {
        name: 'Pakistan - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Pakistan',
        description: 'Comprehensive overview of Pakistan - geography, history, politics',
        category: 'Geography',
        type: 'Reference',
        verified: true
    },
    {
        name: 'Geography of Pakistan - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Geography_of_Pakistan',
        description: 'Detailed geographical information - provinces, rivers, mountains',
        category: 'Geography',
        type: 'Reference',
        verified: true
    },
    {
        name: 'Provinces of Pakistan - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Administrative_units_of_Pakistan',
        description: 'All provinces, territories, districts, and divisions',
        category: 'Geography',
        type: 'Reference',
        verified: true
    },
    {
        name: 'History of Pakistan - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/History_of_Pakistan',
        description: 'Complete history from independence to present',
        category: 'History',
        type: 'Reference',
        verified: true
    },

    // ==================== MATHEMATICS ====================
    {
        name: 'Khan Academy - Math',
        url: 'https://www.khanacademy.org/math',
        description: 'Free interactive math lessons from basic to advanced',
        category: 'Mathematics',
        type: 'Educational',
        verified: true
    },
    {
        name: 'Math is Fun',
        url: 'https://www.mathsisfun.com',
        description: 'Clear math explanations with examples and practice',
        category: 'Mathematics',
        type: 'Educational',
        verified: true
    },
    {
        name: 'Purplemath - Algebra',
        url: 'https://www.purplemath.com',
        description: 'Practical algebra lessons with step-by-step solutions',
        category: 'Mathematics',
        type: 'Educational',
        verified: true
    },

    // ==================== CURRENT AFFAIRS ====================
    {
        name: 'Dawn News',
        url: 'https://www.dawn.com',
        description: 'Pakistan\'s leading English newspaper - daily news and analysis',
        category: 'Current Affairs',
        type: 'Reference',
        verified: true
    },
    {
        name: 'The News International',
        url: 'https://www.thenews.com.pk',
        description: 'Pakistani English-language newspaper',
        category: 'Current Affairs',
        type: 'Reference',
        verified: true
    },
    {
        name: 'BBC News - Pakistan',
        url: 'https://www.bbc.com/news/world/asia/pakistan',
        description: 'International perspective on Pakistan news',
        category: 'Current Affairs',
        type: 'Reference',
        verified: true
    },

    // ==================== ENGLISH LANGUAGE ====================
    {
        name: 'Grammarly Handbook',
        url: 'https://www.grammarly.com/blog/category/handbook/',
        description: 'Complete English grammar guide with examples',
        category: 'English',
        type: 'Educational',
        verified: true
    },
    {
        name: 'Oxford Learner\'s Dictionary',
        url: 'https://www.oxfordlearnersdictionaries.com',
        description: 'Comprehensive English dictionary with pronunciation',
        category: 'English',
        type: 'Reference',
        verified: true
    },
    {
        name: 'Cambridge Dictionary',
        url: 'https://dictionary.cambridge.org',
        description: 'British and American English dictionary',
        category: 'English',
        type: 'Reference',
        verified: true
    },

    // ==================== GENERAL SCIENCE ====================
    {
        name: 'Khan Academy - Science',
        url: 'https://www.khanacademy.org/science',
        description: 'Physics, chemistry, biology - video lessons and practice',
        category: 'Science',
        type: 'Educational',
        verified: true
    },
    {
        name: 'NASA',
        url: 'https://www.nasa.gov',
        description: 'Space science, astronomy, latest discoveries',
        category: 'Science',
        type: 'Reference',
        verified: true
    },
    {
        name: 'How Stuff Works',
        url: 'https://www.howstuffworks.com',
        description: 'Explains how everyday things work - science and technology',
        category: 'Science',
        type: 'Educational',
        verified: true
    },

    // ==================== ISLAMIC STUDIES ====================
    {
        name: 'Quran.com',
        url: 'https://quran.com',
        description: 'Complete Quran with translations in multiple languages',
        category: 'Islamic Studies',
        type: 'Reference',
        verified: true
    },
    {
        name: 'Sunnah.com',
        url: 'https://sunnah.com',
        description: 'Hadith collection - Sahih Bukhari, Muslim, and others',
        category: 'Islamic Studies',
        type: 'Reference',
        verified: true
    },

    // ==================== COMPUTER SCIENCE ====================
    {
        name: 'Microsoft Learn',
        url: 'https://learn.microsoft.com',
        description: 'Official Microsoft Office and technology courses',
        category: 'Computer',
        type: 'Educational',
        verified: true
    },
    {
        name: 'Google Digital Garage',
        url: 'https://learndigital.withgoogle.com',
        description: 'Free digital skills courses from Google',
        category: 'Computer',
        type: 'Educational',
        verified: true
    },

    // ==================== YOUTUBE CHANNELS ====================
    {
        name: 'CrashCourse - YouTube',
        url: 'https://www.youtube.com/@crashcourse',
        description: 'Educational videos on history, science, literature',
        category: 'Video',
        type: 'Video',
        verified: true
    },
    {
        name: 'Khan Academy - YouTube',
        url: 'https://www.youtube.com/@khanacademy',
        description: 'Math and science video lessons',
        category: 'Video',
        type: 'Video',
        verified: true
    },
    {
        name: '3Blue1Brown - Math',
        url: 'https://www.youtube.com/@3blue1brown',
        description: 'Visual and intuitive math explanations',
        category: 'Video',
        type: 'Video',
        verified: true
    },

    // ==================== PRACTICE PLATFORMS ====================
    {
        name: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Free online courses from top universities',
        category: 'Practice',
        type: 'Educational',
        verified: true
    },
    {
        name: 'edX',
        url: 'https://www.edx.org',
        description: 'University-level online courses',
        category: 'Practice',
        type: 'Educational',
        verified: true
    }
];

export const resourceCategories = [
    { name: 'Official', count: externalResources.filter(r => r.type === 'Official').length },
    { name: 'Geography', count: externalResources.filter(r => r.category === 'Geography').length },
    { name: 'Mathematics', count: externalResources.filter(r => r.category === 'Mathematics').length },
    { name: 'Current Affairs', count: externalResources.filter(r => r.category === 'Current Affairs').length },
    { name: 'English', count: externalResources.filter(r => r.category === 'English').length },
    { name: 'Science', count: externalResources.filter(r => r.category === 'Science').length },
    { name: 'Islamic Studies', count: externalResources.filter(r => r.category === 'Islamic Studies').length },
    { name: 'Computer', count: externalResources.filter(r => r.category === 'Computer').length },
    { name: 'Video', count: externalResources.filter(r => r.type === 'Video').length }
];
