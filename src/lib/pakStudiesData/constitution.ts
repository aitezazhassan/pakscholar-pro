// PAKISTAN STUDIES - CONSTITUTION OF PAKISTAN 1973
// Complete reference for PPSC preparation

export interface ConstitutionArticle {
    number: string;
    part: string;
    chapter?: string;
    title: string;
    summary: string;
    importance: 'Critical' | 'High' | 'Medium';
    amendment?: string;
}

export const constitutionParts = [
    { number: 'I', name: 'Introductory', articles: '1-7', description: 'The state, its territory, religion, and fundamental principles' },
    { number: 'II', name: 'Fundamental Rights and Principles of Policy', articles: '8-40', description: 'Rights of citizens and directive principles' },
    { number: 'III', name: 'The Federation of Pakistan', articles: '41-99', description: 'Executive, Parliament, and legislative powers' },
    { number: 'IV', name: 'Provinces', articles: '100-146', description: 'Provincial governments and assemblies' },
    { number: 'V', name: 'Relations between Federation and Provinces', articles: '141-159', description: 'Distribution of powers' },
    { number: 'VI', name: 'Finance, Property, Contracts and Suits', articles: '160-169', description: 'Financial matters' },
    { number: 'VII', name: 'The Judicature', articles: '175-212', description: 'Supreme Court and High Courts' },
    { number: 'VIII', name: 'Elections', articles: '213-226', description: 'Election Commission and electoral process' },
    { number: 'IX', name: 'Islamic Provisions', articles: '227-231', description: 'Islamic ideology and advisory' },
    { number: 'X', name: 'Emergency Provisions', articles: '232-237', description: 'Emergency powers' },
    { number: 'XI', name: 'Amendment of the Constitution', articles: '238-239', description: 'Amendment procedure' },
    { number: 'XII', name: 'Miscellaneous', articles: '240-280', description: 'Other provisions' }
];

export const criticalArticles: ConstitutionArticle[] = [
    {
        number: '1',
        part: 'I',
        title: 'The Republic and its territories',
        summary: 'Pakistan is a Federal Republic. Territories include all provinces, Islamabad, FATA (merged with KPK), and other areas.',
        importance: 'Critical'
    },
    {
        number: '2',
        part: 'I',
        title: 'Islam as State Religion',
        summary: 'Islam shall be the state religion of Pakistan.',
        importance: 'Critical'
    },
    {
        number: '8',
        part: 'II',
        title: 'Laws inconsistent with Fundamental Rights',
        summary: 'Any law inconsistent with fundamental rights shall be void to the extent of inconsistency.',
        importance: 'Critical'
    },
    {
        number: '9',
        part: 'II',
        title: 'Security of Person',
        summary: 'No person shall be deprived of life or liberty save in accordance with law.',
        importance: 'Critical'
    },
    {
        number: '10',
        part: 'II',
        title: 'Safeguards as to arrest and detention',
        summary: 'Person arrested must be informed of grounds, have right to consult lawyer, be produced before magistrate within 24 hours.',
        importance: 'Critical'
    },
    {
        number: '14',
        part: 'II',
        title: 'Inviolability of dignity of man',
        summary: 'Dignity of man and privacy of home shall be inviolable.',
        importance: 'High'
    },
    {
        number: '15',
        part: 'II',
        title: 'Freedom of movement',
        summary: 'Every citizen shall have right to remain and move freely within Pakistan.',
        importance: 'High'
    },
    {
        number: '16',
        part: 'II',
        title: 'Freedom of assembly',
        summary: 'Every citizen has right to assemble peacefully without arms.',
        importance: 'High'
    },
    {
        number: '17',
        part: 'II',
        title: 'Freedom of association',
        summary: 'Every citizen has right to form associations or unions.',
        importance: 'High'
    },
    {
        number: '18',
        part: 'II',
        title: 'Freedom of trade',
        summary: 'Every citizen has right to enter upon any lawful profession or occupation.',
        importance: 'High'
    },
    {
        number: '19',
        part: 'II',
        title: 'Freedom of speech',
        summary: 'Every citizen has right to freedom of speech and expression, subject to reasonable restrictions.',
        importance: 'Critical'
    },
    {
        number: '20',
        part: 'II',
        title: 'Freedom of religion',
        summary: 'Subject to law and morality, every citizen has right to profess, practice and propagate religion.',
        importance: 'Critical'
    },
    {
        number: '25',
        part: 'II',
        title: 'Equality of citizens',
        summary: 'All citizens are equal before law. No discrimination on basis of sex alone.',
        importance: 'Critical'
    },
    {
        number: '37',
        part: 'II',
        title: 'Promotion of social justice',
        summary: 'State shall promote social justice and eradicate social evils.',
        importance: 'High'
    },
    {
        number: '41',
        part: 'III',
        title: 'The President',
        summary: 'There shall be a President of Pakistan who shall be Head of State.',
        importance: 'Critical'
    },
    {
        number: '48',
        part: 'III',
        title: 'President to act on advice',
        summary: 'President shall act on advice of Prime Minister or Cabinet.',
        importance: 'Critical'
    },
    {
        number: '50',
        part: 'III',
        chapter: '2',
        title: 'Majlis-e-Shoora (Parliament)',
        summary: 'Parliament consists of President and two Houses: National Assembly and Senate.',
        importance: 'Critical'
    },
    {
        number: '51',
        part: 'III',
        title: 'National Assembly',
        summary: 'Total 342 seats: 272 general, 60 women, 10 minorities.',
        importance: 'Critical'
    },
    {
        number: '59',
        part: 'III',
        title: 'The Senate',
        summary: 'Senate consists of 100 members. Equal representation from provinces (23 each).',
        importance: 'Critical'
    },
    {
        number: '62',
        part: 'III',
        title: 'Qualifications for membership',
        summary: 'Must be citizen, of good character, adequate knowledge of Islam, not convicted.',
        importance: 'High'
    },
    {
        number: '63',
        part: 'III',
        title: 'Disqualifications',
        summary: 'Detailed disqualifications for membership of Parliament.',
        importance: 'High'
    },
    {
        number: '91',
        part: 'III',
        title: 'The Cabinet',
        summary: 'Prime Minister and Ministers constitute the Federal Cabinet.',
        importance: 'Critical'
    },
    {
        number: '175',
        part: 'VII',
        title: 'Establishment of Courts',
        summary: 'Supreme Court, High Courts, and other courts established.',
        importance: 'Critical'
    },
    {
        number: '184',
        part: 'VII',
        title: 'Original jurisdiction of Supreme Court',
        summary: 'SC can take suo motu notice on matters of public importance.',
        importance: 'Critical'
    },
    {
        number: '213',
        part: 'VIII',
        title: 'Election Commission',
        summary: 'Chief Election Commissioner and members appointed to conduct elections.',
        importance: 'Critical'
    },
    {
        number: '227',
        part: 'IX',
        title: 'Islamic provisions',
        summary: 'All laws shall be brought in conformity with Islam.',
        importance: 'Critical'
    },
    {
        number: '238',
        part: 'XI',
        title: 'Amendment of Constitution',
        summary: 'Parliament can amend Constitution with 2/3rd majority.',
        importance: 'Critical'
    }
];

export const majorAmendments = [
    {
        number: '18th',
        year: 2010,
        significance: 'Devolved powers to provinces, renamed NWFP to KPK, abolished concurrent list',
        impact: 'Critical',
        keyChanges: [
            'Provincial autonomy increased',
            'Concurrent legislative list abolished',
            '17 ministries devolved to provinces',
            'NFC Award formula changed',
            'NWFP renamed Khyber Pakhtunkhwa'
        ]
    },
    {
        number: '19th',
        year: 2011,
        significance: 'Judicial appointments reformed',
        impact: 'High',
        keyChanges: [
            'Judicial Commission for appointments',
            'Parliamentary committee for confirmation'
        ]
    },
    {
        number: '21st',
        year: 2015,
        significance: 'Military courts for terrorism cases',
        impact: 'High',
        keyChanges: [
            'Military courts for terrorism (temporary)',
            'Death penalty for terrorism'
        ]
    },
    {
        number: '25th',
        year: 2018,
        significance: 'FATA merger with KPK',
        impact: 'Critical',
        keyChanges: [
            'FATA merged with Khyber Pakhtunkhwa',
            'Constitutional amendments for merger',
            'Article 246 and 247 repealed'
        ]
    },
    {
        number: '26th',
        year: 2024,
        significance: 'Recent judicial reforms',
        impact: 'High',
        keyChanges: [
            'Chief Justice appointment procedure modified',
            'Constitutional benches established'
        ]
    }
];

export const nationalSymbols = {
    flag: {
        name: 'National Flag',
        description: 'Dark green with white crescent and five-pointed star, white vertical stripe on hoist',
        adopted: '11 August 1947',
        designer: 'Amiruddin Kidwai',
        meaning: 'Green for Muslim majority, White for minorities, Crescent for progress, Star for light and knowledge'
    },
    anthem: {
        name: 'Qaumi Tarana',
        lyrics: 'Hafeez Jalandhari',
        music: 'Ahmad G. Chagla',
        adopted: 'August 1954',
        duration: '80 seconds'
    },
    animal: { name: 'Markhor', scientificName: 'Capra falconeri', status: 'Near threatened' },
    bird: { name: 'Chukar Partridge', scientificName: 'Alectoris chukar' },
    tree: { name: 'Deodar (Himalayan Cedar)', scientificName: 'Cedrus deodara' },
    flower: { name: 'Jasmine', scientificName: 'Jasminum officinale' },
    sport: { name: 'Field Hockey' },
    language: { name: 'Urdu' },
    founder: { name: 'Quaid-e-Azam Muhammad Ali Jinnah', born: '25 December 1876', died: '11 September 1948' },
    poet: { name: 'Allama Muhammad Iqbal', born: '9 November 1877', died: '21 April 1938' }
};

export const politicalSystem = {
    type: 'Federal Parliamentary Republic',
    government: 'Parliamentary Democracy',
    headOfState: 'President (Ceremonial)',
    headOfGovernment: 'Prime Minister (Executive)',
    legislature: 'Bicameral Parliament',
    nationalAssembly: {
        totalSeats: 342,
        generalSeats: 272,
        womenSeats: 60,
        minoritySeats: 10,
        term: '5 years'
    },
    senate: {
        totalSeats: 100,
        provincialSeats: 92,
        islamabadSeats: 4,
        fataSeats: 4,
        term: '6 years (half elected every 3 years)'
    },
    judiciary: {
        supremeCourt: 'Apex court',
        highCourts: '5 (one per province + Islamabad)',
        districtCourts: 'At district level'
    },
    provinces: 4,
    administrativeUnits: 'Divisions, Districts, Tehsils, Union Councils'
};
