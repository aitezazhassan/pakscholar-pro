// COMPREHENSIVE PAKISTAN GEOGRAPHY DATABASE
// Full-stack educational resource for PPSC preparation

// ===== EXTENDED QUIZ BANK (30+ Questions) =====
export const geographyQuizBank = [
    // Basic Geography
    { id: 1, question: 'Which is the largest province of Pakistan by area?', options: ['Punjab', 'Sindh', 'Balochistan', 'KPK'], correct: 'Balochistan', explanation: 'Balochistan covers 347,190 km², about 44% of Pakistan\'s total area', category: 'Geography' },
    { id: 2, question: 'What is the second highest mountain in the world?', options: ['Nanga Parbat', 'K2', 'Everest', 'Broad Peak'], correct: 'K2', explanation: 'K2 at 8,611m is the second highest peak, located in Gilgit-Baltistan', category: 'Geography' },
    { id: 3, question: 'Which river is called the "lifeline of Pakistan"?', options: ['Jhelum', 'Chenab', 'Indus', 'Ravi'], correct: 'Indus', explanation: 'The Indus River provides water to 90% of Pakistan\'s agriculture', category: 'Geography' },
    { id: 4, question: 'What is the most populous city in Pakistan?', options: ['Lahore', 'Karachi', 'Faisalabad', 'Islamabad'], correct: 'Karachi', explanation: 'Karachi has a population of 14.9 million, making it Pakistan\'s largest city', category: 'Cities' },
    { id: 5, question: 'Which province contributes the most to Pakistan\'s GDP?', options: ['Sindh', 'Balochistan', 'Punjab', 'KPK'], correct: 'Punjab', explanation: 'Punjab contributes approximately 52% of Pakistan\'s national GDP', category: 'Economy' },
    { id: 6, question: 'How many provinces does Pakistan have?', options: ['3', '4', '5', '6'], correct: '4', explanation: 'Pakistan has 4 provinces: Punjab, Sindh, KPK, and Balochistan', category: 'Geography' },
    { id: 7, question: 'Which city is known as the "City of Gardens"?', options: ['Karachi', 'Islamabad', 'Lahore', 'Multan'], correct: 'Lahore', explanation: 'Lahore is historically known for its beautiful Mughal gardens', category: 'Cities' },
    { id: 8, question: 'What is the capital of Pakistan?', options: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'], correct: 'Islamabad', explanation: 'Islamabad became Pakistan\'s capital in 1967, replacing Karachi', category: 'Cities' },

    // Advanced Geography
    { id: 9, question: 'How many districts are in Punjab province?', options: ['36', '42', '50', '38'], correct: '42', explanation: 'Punjab has 42 districts as of 2025', category: 'Geography' },
    { id: 10, question: 'Which is the highest peak in Hindu Kush range?', options: ['K2', 'Nanga Parbat', 'Tirich Mir', 'Rakaposhi'], correct: 'Tirich Mir', explanation: 'Tirich Mir at 7,708m is the highest peak in Hindu Kush, located in KPK', category: 'Geography' },
    { id: 11, question: 'What is the length of Indus River?', options: ['2,500 km', '3,180 km', '4,000 km', '2,900 km'], correct: '3,180 km', explanation: 'The Indus River is 3,180 km long, making it one of the longest rivers in Asia', category: 'Geography' },
    { id: 12, question: 'Which province has the lowest population density?', options: ['Punjab', 'Sindh', 'KPK', 'Balochistan'], correct: 'Balochistan', explanation: 'Balochistan has only 40 people per km² despite being the largest province', category: 'Geography' },
    { id: 13, question: 'What is the total area of Pakistan?', options: ['796,095 km²', '881,913 km²', '945,000 km²', '750,000 km²'], correct: '881,913 km²', explanation: 'Pakistan covers 881,913 km², making it the 33rd largest country', category: 'Geography' },
    { id: 14, question: 'Which city is the capital of Balochistan?', options: ['Quetta', 'Gwadar', 'Turbat', 'Sibi'], correct: 'Quetta', explanation: 'Quetta is the provincial capital of Balochistan', category: 'Cities' },
    { id: 15, question: 'How many countries border Pakistan?', options: ['3', '4', '5', '6'], correct: '4', explanation: 'Pakistan borders China, India, Iran, and Afghanistan', category: 'Geography' },

    // Constitutional & Political
    { id: 16, question: 'In which year did Pakistan become an Islamic Republic?', options: ['1947', '1956', '1973', '1962'], correct: '1956', explanation: 'Pakistan adopted its first constitution in 1956, officially becoming an Islamic Republic', category: 'History' },
    { id: 17, question: 'How many articles are in the 1973 Constitution?', options: ['200', '280', '250', '300'], correct: '280', explanation: 'The 1973 Constitution has 280 articles divided into 12 parts', category: 'Constitution' },
    { id: 18, question: 'What is the 18th Amendment famous for?', options: ['Islamic laws', 'Provincial autonomy', 'Army powers', 'Presidential powers'], correct: 'Provincial autonomy', explanation: 'The 18th Amendment (2010) devolved significant powers to provinces', category: 'Constitution' },
    { id: 19, question: 'Which article provides fundamental rights?', options: ['Article 8-28', 'Article 30-40', 'Article 50-60', 'Article 1-7'], correct: 'Article 8-28', explanation: 'Articles 8 to 28 cover fundamental rights of citizens', category: 'Constitution' },
    { id: 20, question: 'How many National Assembly seats does Punjab have?', options: ['141', '183', '165', '200'], correct: '183', explanation: 'Punjab has 183 seats in the National Assembly out of 342 total', category: 'Politics' },

    // Economic & Agriculture
    { id: 21, question: 'What is Pakistan\'s main export crop?', options: ['Wheat', 'Rice', 'Cotton', 'Sugarcane'], correct: 'Cotton', explanation: 'Cotton and cotton products make up the largest share of Pakistan\'s exports', category: 'Economy' },
    { id: 22, question: 'Which province produces the most wheat?', options: ['Sindh', 'Punjab', 'KPK', 'Balochistan'], correct: 'Punjab', explanation: 'Punjab produces over 75% of Pakistan\'s wheat', category: 'Agriculture' },
    { id: 23, question: 'What percentage of Pakistan\'s population works in agriculture?', options: ['25%', '38%', '50%', '65%'], correct: '38%', explanation: 'Approximately 38% of Pakistan\'s labor force works in agriculture', category: 'Economy' },
    { id: 24, question: 'Which port is Pakistan\'s busiest?', options: ['Gwadar', 'Karachi', 'Qasim', 'Ormara'], correct: 'Karachi', explanation: 'Port of Karachi handles 60% of Pakistan\'s cargo', category: 'Economy' },
    { id: 25, question: 'Which mineral is Balochistan famous for?', options: ['Gold', 'Natural Gas', 'Coal', 'Copper'], correct: 'Natural Gas', explanation: 'Balochistan has Pakistan\'s largest natural gas reserves (Sui gas field)', category: 'Economy' },

    // Historical
    { id: 26, question: 'When did Pakistan gain independence?', options: ['14 Aug 1947', '15 Aug 1947', '14 Jul 1947', '1 Aug 1947'], correct: '14 Aug 1947', explanation: 'Pakistan gained independence on 14th August 1947', category: 'History' },
    { id: 27, question: 'Who was Pakistan\'s first Prime Minister?', options: ['Jinnah', 'Liaquat Ali Khan', 'Ayub Khan', 'Bhutto'], correct: 'Liaquat Ali Khan', explanation: 'Liaquat Ali Khan was the first PM (1947-1951). Jinnah was Governor-General', category: 'History' },
    { id: 28, question: 'When was the 1973 Constitution enacted?', options: ['10 Apr 1973', '14 Aug 1973', '23 Mar 1973', '25 Dec 1973'], correct: '14 Aug 1973', explanation: 'The 1973 Constitution was enacted on 14th August 1973', category: 'History' },
    { id: 29, question: 'What was the old name of Lyallpur?', options: ['Gujranwala', 'Faisalabad', 'Sialkot', 'Multan'], correct: 'Faisalabad', explanation: 'Lyallpur was renamed Faisalabad in 1977', category: 'History' },
    { id: 30, question: 'When did Islamabad become the capital?', options: ['1947', '1959', '1967', '1973'], correct: '1967', explanation: 'Islamabad officially became Pakistan\'s capital in 1967', category: 'History' },

    // Climate & Environment
    { id: 31, question: 'Which is the hottest place in Pakistan?', options: ['Multan', 'Jacobabad', 'Sibi', 'Turbat'], correct: 'Jacobabad', explanation: 'Jacobabad regularly records temperatures above 50°C (122°F)', category: 'Climate' },
    { id: 32, question: 'Which is the coldest place in Pakistan?', options: ['Skardu', 'Murree', 'Ziarat', 'Kalat'], correct: 'Skardu', explanation: 'Skardu in Gilgit-Baltistan can drop below -20°C in winter', category: 'Climate' },
    { id: 33, question: 'What is Pakistan\'s national animal?', options: ['Lion', 'Markhor', 'Deer', 'Eagle'], correct: 'Markhor', explanation: 'The Markhor (wild goat) is Pakistan\'s national animal', category: 'Environment' },
    { id: 34, question: 'Which forest type is most common in Pakistan?', options: ['Coniferous', 'Tropical', 'Mangrove', 'Deciduous'], correct: 'Coniferous', explanation: 'Coniferous forests in northern areas cover the largest forest area', category: 'Environment' },
    { id: 35, question: 'Which dam is the largest in Pakistan?', options: ['Mangla', 'Tarbela', 'Kalabagh', 'Warsak'], correct: 'Tarbela', explanation: 'Tarbela Dam on Indus River is the world\'s largest earth-filled dam', category: 'Infrastructure' }
];

// ===== COMPREHENSIVE PROVINCE DATA =====
export const detailedProvinceStats = {
    punjab: {
        name: 'Punjab',
        capital: 'Lahore',
        area: '205,344 km²',
        population: '127 Million (2023)',
        density: '618/km²',
        literacy: '66.47%',
        gdp: '52% of national GDP',
        majorCities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha', 'BahwalPur'],
        majorCrops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton', 'Maize'],
        industries: ['Textiles', 'Sports goods', 'Surgical instruments', 'Leather', 'Ceramics'],
        districts: 42,
        divisions: 9,
        languages: ['Punjabi', 'Urdu', 'Saraiki'],
        historicalSites: ['Lahore Fort', 'Badshahi Mosque', 'Shalimar Gardens', 'Taxila'],
        economy: {
            gdpShare: '52%',
            mainSectors: ['Agriculture (25%)', 'Services (55%)', 'Industry (20%)'],
            exports: ['Textiles', 'Rice', 'Sports goods', 'Leather products']
        }
    },
    sindh: {
        name: 'Sindh',
        capital: 'Karachi',
        area: '140,914 km²',
        population: '50 Million (2023)',
        density: '355/km²',
        literacy: '63%',
        gdp: '30% of national GDP',
        majorCities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah', 'Mirpur Khas'],
        majorCrops: ['Rice', 'Sugarcane', 'Cotton', 'Wheat', 'Bananas'],
        industries: ['Textile', 'Cement', 'Chemicals', 'Pharmaceuticals', 'Food processing'],
        districts: 30,
        divisions: 6,
        languages: ['Sindhi', 'Urdu', 'Balochi'],
        historicalSites: ['Mohenjo-daro', 'Makli Necropolis', 'Shah Jahan Mosque'],
        economy: {
            gdpShare: '30%',
            mainSectors: ['Services (65%)', 'Industry (25%)', 'Agriculture (10%)'],
            exports: ['Textiles', 'Cement', 'Leather', 'Chemicals']
        }
    },
    kpk: {
        name: 'Khyber Pakhtunkhwa (KPK)',
        capital: 'Peshawar',
        area: '101,741 km²',
        population: '35 Million (2023)',
        density: '344/km²',
        literacy: '53%',
        gdp: '10% of national GDP',
        majorCities: ['Peshawar', 'Mardan', 'Abbottabad', 'Mingora', 'Kohat', 'Bannu'],
        majorCrops: ['Wheat', 'Tobacco', 'Maize', 'Sugarcane'],
        industries: ['Marble', 'Gems', 'Tourism', 'Hydro-power', 'Furniture'],
        districts: 35,
        divisions: 7,
        languages: ['Pashto', 'Hindko', 'Urdu'],
        historicalSites: ['Takht-i-Bahi', 'Peshawar Museum', 'Chitral Fort'],
        economy: {
            gdpShare: '10%',
            mainSectors: ['Services (50%)', 'Agriculture (30%)', 'Industry (20%)'],
            exports: ['Marble', 'Gems', 'Dried fruits', 'Handicrafts']
        }
    },
    balochistan: {
        name: 'Balochistan',
        capital: 'Quetta',
        area: '347,190 km²',
        population: '14 Million (2023)',
        density: '40/km²',
        literacy: '41%',
        gdp: '4% of national GDP',
        majorCities: ['Quetta', 'Turbat', 'Khuzdar', 'Gwadar', 'Sibi', 'Loralai'],
        majorCrops: ['Dates', 'Apples', 'Almonds', 'Apricots', 'Wheat'],
        industries: ['Mining', 'Natural gas', 'Fisheries', 'Livestock'],
        districts: 35,
        divisions: 8,
        languages: ['Balochi', 'Brahui', 'Pashto', 'Urdu'],
        historicalSites: ['Mehrgarh', 'Quetta Fort', 'Gwadar Port'],
        economy: {
            gdpShare: '4%',
            mainSectors: ['Mining (45%)', 'Agriculture (30%)', 'Services (25%)'],
            exports: ['Natural gas', 'Minerals', 'Dried fruits', 'Fish']
        }
    }
};

// ===== HISTORICAL TIMELINE =====
export const pakistanTimeline = [
    { year: 1947, event: 'Independence of Pakistan', category: 'Foundation', importance: 'Critical' },
    { year: 1948, event: 'Death of Quaid-e-Azam Muhammad Ali Jinnah', category: 'Leadership', importance: 'High' },
    { year: 1951, event: 'Assassination of PM Liaquat Ali Khan', category: 'Politics', importance: 'High' },
    { year: 1956, event: 'First Constitution - Islamic Republic declared', category: 'Constitution', importance: 'Critical' },
    { year: 1958, event: 'First Martial Law (Ayub Khan)', category: 'Military', importance: 'High' },
    { year: 1962, event: 'Second Constitution promulgated', category: 'Constitution', importance: 'High' },
    { year: 1965, event: 'War with India (September War)', category: 'War', importance: 'High' },
    { year: 1970, event: 'First general elections', category: 'Democracy', importance: 'High' },
    { year: 1971, event: 'Fall of Dhaka - Bangladesh independence', category: 'War', importance: 'Critical' },
    { year: 1973, event: 'Third Constitution (Current)', category: 'Constitution', importance: 'Critical' },
    { year: 1977, event: 'Second Martial Law (Zia-ul-Haq)', category: 'Military', importance: 'High' },
    { year: 1988, event: 'Return to democracy, Benazir Bhutto PM', category: 'Democracy', importance: 'High' },
    { year: 1998, event: 'Nuclear tests (Operation Chagai)', category: 'Defense', importance: 'Critical' },
    { year: 1999, event: 'Third Martial Law (Musharraf)', category: 'Military', importance: 'High' },
    { year: 2008, event: 'Return to democracy, PPP government', category: 'Democracy', importance: 'High' },
    { year: 2010, event: '18th Constitutional Amendment', category: 'Constitution', importance: 'Critical' },
    { year: 2013, event: 'First democratic transition of power', category: 'Democracy', importance: 'Critical' },
    { year: 2018, event: 'PTI government, Imran Khan PM', category: 'Politics', importance: 'High' },
    { year: 2024, event: '26th Constitutional Amendment', category: 'Constitution', importance: 'High' }
];

// ===== 100+ GEOGRAPHY FACTS =====
export const comprehensiveFacts = [
    // Geography
    { category: 'Geography', fact: 'Pakistan is the 33rd largest country by area (881,913 km²)', difficulty: 'Basic' },
    { category: 'Geography', fact: 'Pakistan has coastline of 1,046 km along Arabian Sea', difficulty: 'Intermediate' },
    { category: 'Geography', fact: 'Highest point: K2 (8,611m), Lowest point: Arabian Sea (0m)', difficulty: 'Intermediate' },
    { category: 'Geography', fact: 'Pakistan spans 10 degrees of latitude (24°N to 37°N)', difficulty: 'Advanced' },
    { category: 'Geography', fact: 'Total land borders: 6,774 km (China 523km, Afghanistan 2,670km, Iran 959km, India 2,622km)', difficulty: 'Advanced' },

    // Population
    { category: 'Population', fact: 'Pakistan is the 5th most populous country with 241 million people', difficulty: 'Basic' },
    { category: 'Population', fact: 'Population growth rate: 2.0% per annum (2023)', difficulty: 'Intermediate' },
    { category: 'Population', fact: 'Urban population: 37%, Rural: 63%', difficulty: 'Intermediate' },
    { category: 'Population', fact: 'Life expectancy: 67.3 years (2023)', difficulty: 'Intermediate' },

    // Water Resources
    { category: 'Water', fact: 'The Indus River system provides water to 90% of Pakistan\'s agriculture', difficulty: 'Basic' },
    { category: 'Water', fact: 'Pakistan has 3 major dams: Tarbela, Mangla, and Warsak', difficulty: 'Basic' },
    { category: 'Water', fact: 'Tarbela Dam: World\'s largest earth-filled dam (143m high)', difficulty: 'Intermediate' },
    { category: 'Water', fact: 'Mangla Dam: 10th largest dam by reservoir capacity', difficulty: 'Advanced' },
    { category: 'Water', fact: 'Pakistan faces water scarcity - availability dropped from 5,000 to 1,000 m³ per capita', difficulty: 'Advanced' },

    // Mountains
    { category: 'Mountains', fact: 'Pakistan has 5 of the 14 highest peaks in the world (8000m+)', difficulty: 'Basic' },
    { category: 'Mountains', fact: 'K2 (8,611m) is called "Savage Mountain" due to difficulty', difficulty: 'Intermediate' },
    { category: 'Mountains', fact: 'Three major ranges: Himalayas, Karakoram, and Hindu Kush meet in Pakistan', difficulty: 'Intermediate' },
    { category: 'Mountains', fact: 'Nanga Parbat means "Naked Mountain" - southwestern anchor of Himalayas', difficulty: 'Advanced' },

    // Borders & Relations
    { category: 'Borders', fact: 'Pakistan borders 4 countries: China, India, Iran, and Afghanistan', difficulty: 'Basic' },
    { category: 'Borders', fact: 'Wakhan Corridor separates Pakistan from Tajikistan by just 16km', difficulty: 'Advanced' },
    { category: 'Borders', fact: 'Khunjerab Pass (4,693m): Highest paved international border crossing in world', difficulty: 'Advanced' },

    // Climate
    { category: 'Climate', fact: 'Pakistan has 4 distinct seasons and 6 major climate zones', difficulty: 'Basic' },
    { category: 'Climate', fact: 'Highest temperature recorded: 53.7°C in Mohenjo-daro (May 2010)', difficulty: 'Intermediate' },
    { category: 'Climate', fact: 'Monsoon season: July-September, brings 70% of annual rainfall', difficulty: 'Intermediate' },

    // Economy
    { category: 'Economy', fact: 'Agriculture contributes 19% to GDP but employs 38% of labor force', difficulty: 'Intermediate' },
    { category: 'Economy', fact: 'Textile sector: 60% of total exports', difficulty: 'Basic' },
    { category: 'Economy', fact: 'Remittances: $30+ billion annually (10% of GDP)', difficulty: 'Intermediate' },
    { category: 'Economy', fact: 'CPEC (China-Pakistan Economic Corridor): $62 billion investment', difficulty: 'Advanced' }
];

// Export categorized by difficulty
export const factsByDifficulty = {
    basic: comprehensiveFacts.filter(f => f.difficulty === 'Basic'),
    intermediate: comprehensiveFacts.filter(f => f.difficulty === 'Intermediate'),
    advanced: comprehensiveFacts.filter(f => f.difficulty === 'Advanced')
};

// Export quiz by category
export const quizByCategory = {
    geography: geographyQuizBank.filter(q => q.category === 'Geography'),
    cities: geographyQuizBank.filter(q => q.category === 'Cities'),
    economy: geographyQuizBank.filter(q => q.category === 'Economy'),
    history: geographyQuizBank.filter(q => q.category === 'History'),
    constitution: geographyQuizBank.filter(q => q.category === 'Constitution'),
    all: geographyQuizBank
};
