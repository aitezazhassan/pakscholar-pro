import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },

    collections: {
        essays: collection({
            label: 'Essays',
            slugField: 'title',
            path: 'content/essays/*',
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                excerpt: fields.text({
                    label: 'Excerpt',
                    description: '150-200 characters for card previews',
                    validation: { length: { min: 150, max: 200 } },
                    multiline: true,
                }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/essays',
                    publicPath: '/images/essays/',
                }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'PPSC Preparation', value: 'ppsc' },
                        { label: 'FPSC Preparation', value: 'fpsc' },
                        { label: 'CSS Preparation', value: 'css' },
                        { label: 'NTS Preparation', value: 'nts' },
                        { label: 'General Knowledge', value: 'general-knowledge' },
                        { label: 'Current Affairs', value: 'current-affairs' },
                        { label: 'Pakistan Studies', value: 'pakistan-studies' },
                        { label: 'English Preparation', value: 'english' },
                        { label: 'Mathematics', value: 'mathematics' },
                    ],
                    defaultValue: 'general-knowledge',
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        description: '3-5 tags for filtering',
                        itemLabel: (props) => props.value,
                    }
                ),
                author: fields.relationship({
                    label: 'Author',
                    collection: 'authors',
                }),
                publishedDate: fields.date({
                    label: 'Published Date',
                    defaultValue: { kind: 'today' },
                }),
                featured: fields.checkbox({
                    label: 'Featured',
                    description: 'Display on homepage',
                    defaultValue: false,
                }),
                status: fields.select({
                    label: 'Status',
                    options: [
                        { label: 'Draft', value: 'draft' },
                        { label: 'Published', value: 'published' },
                        { label: 'Archived', value: 'archived' },
                    ],
                    defaultValue: 'draft',
                }),
            },
        }),

        mcqs: collection({
            label: 'MCQs',
            slugField: 'question',
            path: 'content/mcqs/*',
            schema: {
                question: fields.slug({
                    name: {
                        label: 'Question',
                        description: 'The question text',
                        validation: { length: { min: 10, max: 300 } },
                    },
                }),
                optionA: fields.text({ label: 'Option A' }),
                optionB: fields.text({ label: 'Option B' }),
                optionC: fields.text({ label: 'Option C' }),
                optionD: fields.text({ label: 'Option D' }),
                correctAnswer: fields.select({
                    label: 'Correct Answer',
                    options: [
                        { label: 'A', value: 'A' },
                        { label: 'B', value: 'B' },
                        { label: 'C', value: 'C' },
                        { label: 'D', value: 'D' },
                    ],
                    defaultValue: 'A',
                }),
                explanation: fields.text({
                    label: 'Explanation',
                    description: 'Why is this the correct answer?',
                    validation: { length: { min: 30, max: 500 } },
                    multiline: true,
                }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'General Knowledge', value: 'general-knowledge' },
                        { label: 'Pakistan Affairs', value: 'pakistan-affairs' },
                        { label: 'Current Affairs', value: 'current-affairs' },
                        { label: 'Islamic Studies', value: 'islamic-studies' },
                        { label: 'English', value: 'english' },
                        { label: 'Urdu', value: 'urdu' },
                        { label: 'Mathematics', value: 'mathematics' },
                        { label: 'Computer Science', value: 'computer-science' },
                        { label: 'Everyday Science', value: 'everyday-science' },
                    ],
                    defaultValue: 'general-knowledge',
                }),
                difficulty: fields.select({
                    label: 'Difficulty',
                    options: [
                        { label: 'Easy', value: 'easy' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Hard', value: 'hard' },
                    ],
                    defaultValue: 'medium',
                }),
                examTypes: fields.multiselect({
                    label: 'Exam Types',
                    options: [
                        { label: 'PPSC', value: 'ppsc' },
                        { label: 'FPSC', value: 'fpsc' },
                        { label: 'CSS', value: 'css' },
                        { label: 'NTS', value: 'nts' },
                        { label: 'SPSC', value: 'spsc' },
                        { label: 'BPSC', value: 'bpsc' },
                    ],
                    defaultValue: ['ppsc'],
                }),
                source: fields.text({
                    label: 'Source/Reference',
                    description: 'Past paper reference or source',
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        itemLabel: (props) => props.value,
                    }
                ),
            },
        }),

        pastPapers: collection({
            label: 'Past Papers',
            slugField: 'title',
            path: 'content/past-papers/*',
            schema: {
                title: fields.slug({
                    name: {
                        label: 'Title',
                        description: 'e.g., PPSC Lecturer English 2023',
                        validation: { length: { min: 10, max: 100 } },
                    },
                }),
                year: fields.integer({
                    label: 'Year',
                    description: 'Year of exam',
                    validation: { min: 2000, max: 2030 },
                }),
                examType: fields.select({
                    label: 'Exam Type',
                    options: [
                        { label: 'PPSC', value: 'ppsc' },
                        { label: 'FPSC', value: 'fpsc' },
                        { label: 'CSS', value: 'css' },
                        { label: 'NTS', value: 'nts' },
                        { label: 'SPSC', value: 'spsc' },
                        { label: 'BPSC', value: 'bpsc' },
                    ],
                    defaultValue: 'ppsc',
                }),
                department: fields.text({
                    label: 'Department/Subject',
                    description: 'e.g., Lecturer English, Assistant Director',
                }),
                description: fields.text({
                    label: 'Description',
                    description: 'Additional context',
                    validation: { length: { max: 300 } },
                    multiline: true,
                }),
                pdfFile: fields.file({
                    label: 'PDF File',
                    directory: 'public/past-papers',
                    publicPath: '/past-papers/',
                }),
                totalQuestions: fields.integer({
                    label: 'Total Questions',
                    description: 'Number of questions in paper',
                }),
                duration: fields.integer({
                    label: 'Duration (minutes)',
                    description: 'Time limit in minutes',
                }),
                answerKeyIncluded: fields.checkbox({
                    label: 'Answer Key Included',
                    defaultValue: false,
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        itemLabel: (props) => props.value,
                    }
                ),
            },
        }),

        authors: collection({
            label: 'Authors',
            slugField: 'name',
            path: 'content/authors/*',
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                bio: fields.text({
                    label: 'Bio',
                    description: 'Max 200 characters',
                    validation: { length: { max: 200 } },
                    multiline: true,
                }),
                avatar: fields.image({
                    label: 'Avatar',
                    description: 'Square image recommended (400x400px)',
                    directory: 'public/images/authors',
                    publicPath: '/images/authors/',
                }),
                email: fields.text({
                    label: 'Email',
                    description: 'For contact purposes',
                }),
                socialLinks: fields.object({
                    twitter: fields.url({ label: 'Twitter URL' }),
                    linkedin: fields.url({ label: 'LinkedIn URL' }),
                    website: fields.url({ label: 'Website URL' }),
                }),
            },
        }),

        categories: collection({
            label: 'Categories',
            slugField: 'name',
            path: 'content/categories/*',
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                description: fields.text({
                    label: 'Description',
                    description: 'Category overview',
                    multiline: true,
                }),
                badgeColor: fields.select({
                    label: 'Badge Color',
                    options: [
                        { label: 'Blue', value: 'blue' },
                        { label: 'Green', value: 'green' },
                        { label: 'Red', value: 'red' },
                        { label: 'Yellow', value: 'yellow' },
                        { label: 'Purple', value: 'purple' },
                    ],
                    defaultValue: 'blue',
                }),
            },
        }),
    },
});
