#!/usr/bin/env ts-node
/**
 * Content Seeding Script
 * Generates dummy essays and MCQs to populate the platform
 * Run with: npx ts-node scripts/seed-content.ts
 */

import fs from 'fs';
import path from 'path';

// Essay topics and data
const essays = [
    {
        slug: 'cpec-phase-2-economic-impact',
        title: 'CPEC Phase 2: Economic Impact on Pakistan',
        excerpt: 'An in-depth analysis of China-Pakistan Economic Corridor Phase 2 and its transformative impact on Pakistan\'s economy, infrastructure, and regional connectivity.',
        category: 'current-affairs',
        tags: ['CPEC', 'Economy', 'Infrastructure', 'China Pakistan Relations'],
        content: `## Introduction

The China-Pakistan Economic Corridor (CPEC) Phase 2 represents a pivotal shift in Pakistan's economic trajectory. As part of China's Belt and Road Initiative, CPEC Phase 2 focuses on industrialization, agriculture, and socio-economic development.

## Key Components

### Industrial Cooperation
- Special Economic Zones (SEZs) development
- Technology transfer and manufacturing
- Job creation in key sectors

### Agricultural Modernization
- Introduction of modern farming techniques
- Water management systems
- Agricultural processing facilities

### Energy Security
- Renewable energy projects
- Grid modernization
- Energy efficiency programs

## Economic Impact

CPEC Phase 2 is expected to contribute significantly to Pakistan's GDP growth through increased foreign direct investment, infrastructure development, and trade facilitation.

## Challenges

Despite its potential, CPEC faces challenges including:
- Debt sustainability concerns
- Security issues in remote areas
- Environmental impact assessments
- Local community integration

## Conclusion

CPEC Phase 2 offers Pakistan an unprecedented opportunity for economic transformation, provided challenges are addressed through transparent governance and inclusive development strategies.`,
    },
    {
        slug: 'climate-change-pakistan-challenges',
        title: 'Climate Change Challenges in Pakistan',
        excerpt: 'Exploring Pakistan\'s vulnerability to climate change, including floods, droughts, and heatwaves, and the urgent need for adaptation and mitigation strategies.',
        category: 'current-affairs',
        tags: ['Climate Change', 'Environment', 'Natural Disasters', 'Sustainability'],
        content: `## Introduction

Pakistan ranks among the top ten countries most affected by climate change, facing unprecedented environmental challenges that threaten food security, water availability, and economic stability.

## Major Climate Threats

### Glacial Melting
The Himalayan and Karakoram glaciers are melting at alarming rates, threatening water resources for millions.

### Extreme Weather Events
- Devastating floods (2022 catastrophe)
- Prolonged droughts
- Intense heatwaves

### Agricultural Impact
Climate variability affects crop yields, threatening food security for a population of over 220 million.

## Government Initiatives

### Climate Change Policy
- National Climate Change Policy framework
- Billion Tree Tsunami project
- Renewable energy targets

### International Cooperation
Pakistan actively participates in global climate forums and seeks climate financing for adaptation projects.

## Way Forward

Addressing climate change requires:
- Investment in green infrastructure
- Community-based adaptation programs
- Sustainable agricultural practices
- Water resource management
- Disaster risk reduction

## Conclusion

Climate change poses an existential threat to Pakistan. Immediate action combining mitigation, adaptation, and international cooperation is essential for safeguarding future generations.`,
    },
    {
        slug: '18th-amendment-power-devolution',
        title: '18th Amendment: Power Devolution in Pakistan',
        excerpt: 'A comprehensive analysis of the 18th Constitutional Amendment and its impact on federal-provincial relations, governance structure, and democratic consolidation in Pakistan.',
        category: 'pakistan-affairs',
        tags: ['Constitution', '18th Amendment', 'Federalism', 'Provincial Autonomy'],
        content: `## Introduction

The 18th Amendment to Pakistan's Constitution, passed in 2010, stands as a landmark achievement in the country's constitutional history, fundamentally reshaping federal-provincial dynamics.

## Key Provisions

### Abolition of Concurrent List
The amendment abolished the Concurrent Legislative List, transferring 17 ministries to provincial governments.

### Provincial Autonomy
Enhanced provincial authority in:
- Education policy
- Healthcare management
- Agricultural development
- Local governance

### NFC Award
Strengthened National Finance Commission's role in resource distribution, increasing provincial share from 50% to 57.5%.

## Political Impact

### Strengthening Democracy
- Removed Presidential powers to dissolve assemblies
- Restored parliamentary supremacy
- Limited President's role to ceremonial

### Judicial Appointments
Established Judicial Commission for transparent judge appointments.

## Challenges in Implementation

Despite its progressive nature, implementation faces obstacles:
- Capacity constraints at provincial level
- Coordination issues between federal and provincial governments
- Resource management challenges
- Need for further devolution to local governments

## Impact on Governance

The amendment has led to:
- Improved provincial accountability
- Region-specific policy formulation
- Enhanced democratic culture
- Greater stake of provinces in national affairs

## Conclusion

The 18th Amendment represents a maturation of Pakistan's democratic institutions, though its full potential requires continued commitment to federalism and effective implementation.`,
    },
    {
        slug: 'digital-pakistan-policy-implementation',
        title: 'Digital Pakistan Policy: Vision and Implementation',
        excerpt: 'Examining Pakistan\'s digital transformation initiatives, focusing on e-governance, digital infrastructure, IT exports, and the pathway to becoming a knowledge economy.',
        category: 'current-affairs',
        tags: ['Digital Pakistan', 'Technology', 'IT Industry', 'E-Governance'],
        content: `## Introduction

Digital Pakistan is a comprehensive initiative aimed at transforming Pakistan into a digitally progressive nation through innovation, digital infrastructure, and technology-enabled services.

## Vision and Objectives

### Core Pillars
1. Access and Connectivity
2. Digital Infrastructure  
3. E-Governance
4. Digital Skills and Literacy
5. Innovation and Entrepreneurship

### Target Outcomes
- $10 billion IT exports by 2025
- Digital access for all citizens
- Paperless government operations
- Thriving startup ecosystem

## Key Initiatives

### Infrastructure Development
- Fiber optic network expansion
- 4G/5G rollout nationwide
- Data center establishment
- Cloud computing infrastructure

### E-Governance
- Pakistan Citizen Portal
- Digital ID (NADRA)
- Online tax filing (FBR)
- E-passport system

### IT Industry Growth
- Software Technology Parks
- Freelancer support programs
- Startup incubation centers
- Special Economic Zones for IT

## Achievements

- IT exports reaching $2.6 billion
- 100 million broadband subscribers
- Successful digital payment adoption
- Growing startup ecosystem

## Challenges

Despite progress, challenges persist:
- Digital divide (urban-rural gap)
- Cybersecurity concerns
- Limited digital literacy
- Infrastructure gaps
- Regulatory hurdles

## International Comparisons

Pakistan's digital journey shows promise compared to regional peers, with competitive IT talent and cost advantages.

## Way Forward

Success requires:
- Consistent policy implementation
- Public-private partnerships
- Investment in digital skills
- Cybersecurity frameworks
- Inclusive digital access

## Conclusion

Digital Pakistan represents a transformative vision for economic growth and societal advancement, requiring sustained commitment and strategic execution.`,
    },
    {
        slug: 'judiciary-independence-pakistan',
        title: 'Judiciary Independence in Pakistan: Challenges and Progress',
        excerpt: 'Analyzing the struggle for judicial independence in Pakistan, landmark cases, constitutional safeguards, and ongoing challenges to an autonomous judicial system.',
        category: 'pakistan-affairs',
        tags: ['Judiciary', 'Constitution', 'Rule of Law', 'Legal System'],
        content: `## Introduction

Judicial independence is the cornerstone of democracy and rule of law. Pakistan's judiciary has experienced periods of both assertion and subjugation throughout the nation's history.

## Constitutional Safeguards

### Tenure Security
- Fixed terms for judges
- Protection from arbitrary removal
- Retirement age provisions

### Financial Independence
- Separate judicial budget
- Salary and benefits protection
- Administrative autonomy

## Historical Evolution

### Pre-2007 Era
- Judicial subordination to executive
- Limited judicial review
- Political interference in appointments

### Lawyers' Movement (2007-2009)
Watershed moment leading to:
- Restoration of deposed judges
- Strengthened judicial independence
- Enhanced public confidence

## Landmark Judicial Assertions

### PCO Judges Case
Established principle against oath violations.

### Al-Jihad Trust Case
Affirmed superior judiciary's review powers.

### Asma Jilani Case
Declared martial law unconstitutional, strengthening constitutional supremacy.

## Current Institutional Framework

### Judicial Commission
- Transparent appointment process
- Merit-based selection
- Reduced executive influence

### Supreme Judicial Council
- Disciplinary authority
- Judge accountability
- Misconduct proceedings

## Contemporary Challenges

### Political Pressure
- Executive-judiciary tensions
- Public pressure on sensitive cases
- Media trial influence

### Administrative Issues
- Case backlog (millions pending)
- Infrastructure limitations
- Need for digitization

### Transparency Concerns
- Judicial accountability debates
- Public access to justice
- Asset declarat ion requirements

## Reform Initiatives

Ongoing reforms focus on:
- Speedy trial mechanisms
- Alternative dispute resolution
- Judicial training programs
- Technology integration
- Court management systems

## International Comparisons

Pakistan's judicial independence indicators compared to regional democracies show improvement but room for further progress.

## Conclusion

While significant progress has been made, ensuring sustained judicial independence requires continuous vigilance, institutional strengthening, and societal commitment to rule of law.`,
    },
    {
        slug: 'education-reforms-modern-pakistan',
        title: 'Education Reforms for Modern Pakistan',
        excerpt: 'Critical analysis of Pakistan\'s education system failures, proposed reforms, and the pathway to building a knowledge-based economy through educational transformation.',
        category: 'pakistan-affairs',
        tags: ['Education', 'Reforms', 'Policy', 'Human Development'],
        content: `## Introduction

Education is the bedrock of national development. Pakistan faces critical challenges in educational access, quality, and relevance, requiring comprehensive reforms.

## Current State of Education

### Key Statistics
- Literacy rate: 58% (one of lowest in South Asia)
- Out-of-school children: 22.8 million
- Gender gap: Significant, especially in rural areas
- Quality concerns: Poor learning outcomes

### Systemic Issues
- Multiple education systems (public, private, madrassah)
- Curriculum outdated
- Teacher quality and training
- Infrastructure deficits
- Funding inadequacy (2% of GDP vs 4% recommended)

## Proposed Reforms

### Universal Access
- Increase education budget to 4% of GDP
- Free quality education up to secondary level
- School infrastructure development
- Transportation for rural students

### Curriculum Modernization
- STEM focus
- Critical thinking emphasis
- Digital literacy integration
- Life skills development
- Multilingual education

### Teacher Development
- Improved recruitment standards
- Continuous professional development
- Competitive salaries
- Performance-based incentives

### Technology Integration  
- Digital classrooms
- E-learning platforms
- Online resources access
- Computer literacy programs

## Single National Curriculum

Recent initiative aims to:
- Standardize education quality
- Reduce disparities
- Promote national cohesion
- Ensure minimum standards

### Debates
- Provincial autonomy concerns
- Implementation challenges
- Content controversies
- Resource requirements

## Vocational and Technical Education

- Skill development programs
- Industry partnerships
- Apprenticeship models
- Job-ready training

## Higher Education

### University Reforms
- Research culture
- Industry linkages
- International collaborations
- Quality assurance
- Funding models

### HEC Role
Strengthening Higher Education Commission's capacity for:
- Quality assessment
- Research promotion
- Scholarship programs
- International rankings improvement

## Success Stories

- NUST, LUMS as global standard universities
- TCF model for low-cost quality education
- Citizen Foundation schools
- Edtech startups emergence

## International Comparisons

Pakistan lags behind regional peers (India, Bangladesh, Sri Lanka) in education indicators, requiring accelerated reform implementation.

## Way Forward

Achieving educational transformation requires:
- Political will and continuity
- Adequate funding allocation
- Public-private partnerships
- Community engagement
- Monitoring and evaluation systems
- Cultural shift valuing education

## Conclusion

Education reform is not optional but essential for Pakistan's survival and prosperity. A well-educated population is the only sustainable path to economic growth, social cohesion, and global competitiveness.`,
    },
];

// Generate more essays (simple variations for seed data)
const additionalEssays = [
    {
        slug: 'economic-challenges-post-2023',
        title: 'Economic Challenges Facing Pakistan Post-2023',
        excerpt: 'Analysis of Pakistan\'s macroeconomic challenges including inflation, debt burden, current account deficit, and strategies for economic stabilization and growth.',
        category: 'current-affairs',
        tags: ['Economy', 'Inflation', 'IMF', 'Fiscal Policy'],
    },
    {
        slug: 'pakistan-foreign-policy-dynamics',
        title: 'Pakistan\'s Foreign Policy: Balancing Regional Dynamics',
        excerpt: 'Examining Pakistan\'s foreign policy challenges and opportunities in managing relationships with China, USA, India, and Middle Eastern countries.',
        category: 'pakistan-affairs',
        tags: ['Foreign Policy', 'Diplomacy', 'International Relations'],
    },
    {
        slug: 'water-crisis-management-strategies',
        title: 'Water Crisis in Pakistan: Management Strategies',
        excerpt: 'Pakistan faces severe water scarcity. This essay explores dam projects, water conservation, and agricultural water management solutions.',
        category: 'current-affairs',
        tags: ['Water Crisis', 'Dams', 'Agriculture', 'Climate'],
    },
    {
        slug: 'agricultural-modernization-initiatives',
        title: 'Agricultural Modernization in Pakistan',
        excerpt: 'Transforming Pakistan\'s agricultural sector through technology, irrigation reform, crop diversification, and value chain development.',
        category: 'pakistan-affairs',
        tags: ['Agriculture', 'Farming', 'Rural Development', 'Technology'],
    },
];

// MCQ data
const mcqCategories = {
    'pakistan-history': [
        {
            question: 'Who presented the Lahore Resolution in 1940?',
            options: ['Muhammad Ali Jinnah', 'Allama Iqbal', 'A.K. Fazlul Haq', 'Liaquat Ali Khan'],
            correct: 'C',
            explanation: 'A.K. Fazlul Haq, the Chief Minister of Bengal, presented the historic Lahore Resolution on March 23, 1940, which laid the foundation for the creation of Pakistan.',
        },
        {
            question: 'When was the first Constitution of Pakistan promulgated?',
            options: ['1947', '1956', '1962', '1973'],
            correct: 'B',
            explanation: 'Pakistan\'s first Constitution was promulgated in 1956, establishing the country as an Islamic Republic with a parliamentary system.',
        },
        {
            question: 'Who was the first Prime Minister of Pakistan?',
            options: ['Muhammad Ali Jinnah', 'Liaquat Ali Khan', 'Khawaja Nazimuddin', 'Hussain Shaheed Suhrawardy'],
            correct: 'B',
            explanation: 'Liaquat Ali Khan became Pakistan\'s first Prime Minister in 1947, serving until his assassination in 1951.',
        },
        {
            question: 'The Kargil conflict between Pakistan and India occurred in which year?',
            options: ['1965', '1971', '1999', '2001'],
            correct: 'C',
            explanation: 'The Kargil conflict took place in 1999 in the Kargil district of Kashmir, involving intense fighting between Indian and Pakistani forces.',
        },
        {
            question: 'Who drafted the Pakistan Resolution?',
            options: ['Muhammad Zafarullah Khan', 'Muhammad Iqbal', 'A.K. Fazlul Haq', 'Hussain Shaheed Suhrawardy'],
            correct: 'A',
            explanation: 'Muhammad Zafarullah Khan drafted the Pakistan Resolution, which was presented by A.K. Fazlul Haq at the Lahore session in 1940.',
        },
    ],
    'pakistan-geography': [
        {
            question: 'Which is the longest river in Pakistan?',
            options: ['Jhelum', 'Chenab', 'Indus', 'Ravi'],
            correct: 'C',
            explanation: 'The Indus River, approximately 3,180 km long, is the longest river in Pakistan and forms the backbone of the country\'s irrigation system.',
        },
        {
            question: 'K2, the second highest mountain in the world, is located in which range?',
            options: ['Himalayas', 'Karakoram', 'Hindu Kush', 'Suleiman'],
            correct: 'B',
            explanation: 'K2 (8,611m), also known as Chhogori, is located in the Karakoram Range in Gilgit-Baltistan, Pakistan.',
        },
        {
            question: 'What percentage of Pakistan\'s land area is arable?',
            options: ['15%', '25%', '35%', '45%'],
            correct: 'B',
            explanation: 'Approximately 25% of Pakistan\'s land area is cultivable, with the Indus Basin providing the most fertile agricultural land.',
        },
        {
            question: 'Which city is known as the "City of Gardens"?',
            options: ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad'],
            correct: 'B',
            explanation: 'Lahore is famously known as the "City of Gardens" due to its numerous parks, gardens, and green spaces with Mughal heritage.',
        },
        {
            question: 'Gwadar Port is located in which province?',
            options: ['Sindh', 'Punjab', 'Balochistan', 'KPK'],
            correct: 'C',
            explanation: 'Gwadar Port is located in Balochistan province and is a key component of the China-Pakistan Economic Corridor (CPEC).',
        },
    ],
    'islamiyat': [
        {
            question: 'How many times is the word "Allah" mentioned in the Quran?',
            options: ['2000', '2500', '2698', '3000'],
            correct: 'C',
            explanation: 'The word "Allah" appears 2,698 times in the Holy Quran, emphasizing the central importance of God in Islamic faith.',
        },
        {
            question: 'Which Surah is called the heart of the Quran?',
            options: ['Surah Al-Fatiha', 'Surah Yasin', 'Surah Al-Baqarah', 'Surah Ar-Rahman'],
            correct: 'B',
            explanation: 'Surah Yasin (Chapter 36) is often referred to as the "heart of the Quran" according to various Hadith narrations.',
        },
        {
            question: 'What is the first pillar of Islam?',
            options: ['Salat', 'Zakat', 'Shahada', 'Hajj'],
            correct: 'C',
            explanation: 'Shahada (declaration of faith) is the first and most fundamental pillar of Islam, stating "There is no god but Allah, and Muhammad is His messenger."',
        },
        {
            question: 'In which year did the Battle of Badr take place?',
            options: ['2 AH', '3 AH', '5 AH', '8 AH'],
            correct: 'A',
            explanation: 'The Battle of Badr, the first major battle in Islamic history, took place in 2 AH (624 CE) during the month of Ramadan.',
        },
        {
            question: 'Which angel is responsible for bringing revelation to the Prophets?',
            options: ['Israfil', 'Mikail', 'Jibreel', 'Izrael'],
            correct: 'C',
            explanation: 'Jibreel (Gabriel) is the angel responsible for bringing divine revelations from Allah to the Prophets, including the Quran to Prophet Muhammad (PBUH).',
        },
    ],
};

// Function to write essay file
function writeEssayFile(essay: any) {
    const essayContent = essay.content || generateGenericContent(essay.title);
    const fileName = `${essay.slug}.mdoc`;
    const filePath = path.join(process.cwd(), 'content', 'essays', fileName);

    const content = `---
title: "${essay.title}"
excerpt: "${essay.excerpt}"
category: "${essay.category}"
tags:
${essay.tags.map((tag: string) => `  - "${tag}"`).join('\n')}
author: "dr-ahmed-khan"
publishedDate: "${new Date().toISOString().split('T')[0]}"
featured: ${Math.random() > 0.7 ? 'true' : 'false'}
status: "published"
---

${essayContent}
`;

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Created essay: ${fileName}`);
}

// Function to write MCQ file
function writeMCQFile(mcq: any, category: string, index: number) {
    const fileName = `${category}-${index + 1}.yaml`;
    const filePath = path.join(process.cwd(), 'content', 'mcqs', fileName);

    const content = `---
question: "${mcq.question}"
optionA: "${mcq.options[0]}"
optionB: "${mcq.options[1]}"
optionC: "${mcq.options[2]}"
optionD: "${mcq.options[3]}"
correctAnswer: "${mcq.correct}"
explanation: "${mcq.explanation}"
category: "${category}"
difficulty: "${mcq.difficulty || 'medium'}"
examTypes:
  - "ppsc"
  - "fpsc"
  - "css"
source: "Generated Content"
tags:
  - "${category.replace('-', ' ')}"
---
`;

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Created MCQ: ${fileName}`);
}

// Generate generic content for simple essays
function generateGenericContent(title: string): string {
    return `## Introduction

${title} is a crucial topic for competitive exam preparation in Pakistan. This essay provides a comprehensive overview of the subject matter.

## Key Points

Understanding this topic requires analysis of multiple dimensions including historical context, current situation, and future implications.

### Historical Background

The historical evolution of this subject has shaped current policies and practices.

### Current Scenario  

Present circumstances require careful examination of various factors affecting the situation.

### Future Outlook

Looking ahead, several strategic initiatives and policy reforms are necessary for sustainable development.

## Challenges

Multiple challenges persist that require coordinated efforts:
- Policy implementation gaps
- Resource constraints
- Institutional weaknesses
- Stakeholder coordination

## Recommendations

Addressing these challenges requires:
1. Comprehensive planning
2. Adequate resource allocation
3. Institutional strengthening
4. Capacity building
5. Monitoring and evaluation

## Conclusion

This topic remains highly relevant for Pakistan's development agenda and requires sustained attention from policymakers, researchers, and civil society.`;
}

// Main execution
console.log('🚀 Starting content seeding...\n');

// Create all 10 essays
console.log('📚 Creating essays...');
[...essays, ...additionalEssays].forEach(writeEssayFile);

console.log('\n🧠 Creating MCQs...');
// Create MCQs for each category
Object.entries(mcqCategories).forEach(([category, questions]) => {
    questions.forEach((mcq, index) => {
        writeMCQFile(mcq, category, index);
    });
});

// Generate additional MCQs to reach 50 total
const additionalMCQCount = 50 - Object.values(mcqCategories).flat().length;
const currentAffairsMCQs = Array.from({ length: additionalMCQCount }, (_, i) => ({
    question: `Current Affairs Question ${i + 1}: Sample question about recent developments in Pakistan?`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
    explanation: 'This is a sample MCQ created for demonstration purposes. In production, these would be replaced with real questions.',
    difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)],
}));

currentAffairsMCQs.forEach((mcq, index) => {
    writeMCQFile(mcq, 'current-affairs', index);
});

console.log('\n✨ Content seeding completed!');
console.log(`\n📊 Summary:`);
console.log(`   Essays: 10`);
console.log(`   MCQs: 50`);
console.log(`\n🎉 Your platform now has real content!`);
