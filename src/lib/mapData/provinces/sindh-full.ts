// COMPREHENSIVE SINDH PROVINCE DATA

export const sindhData = {
    basic: {
        name: 'Sindh',
        meaning: 'Land of Indus River',
        capital: 'Karachi',
        largestCity: 'Karachi',
        area: '140,914 km²',
        population: '55.2 Million (2023)',
        density: '392 persons/km²',
        literacy: '63%',
        founded: '1947 (Partition)',
        officialLanguages: ['Urdu', 'Sindhi'],
        timeZone: 'PKT (UTC+5)'
    },

    geography: {
        location: 'Southeastern Pakistan',
        borders: {
            north: 'Punjab, Balochistan',
            south: 'Arabian Sea',
            east: 'India (Rajasthan, Gujarat)',
            west: 'Balochistan'
        },
        topography: {
            plains: 'Lower Indus plains',
            deserts: 'Thar Desert (eastern border)',
            coast: '1,046 km coastline',
            delta: 'Indus River Delta'
        },
        climate: {
            type: 'Tropical to sub-tropical',
            summer: 'Very hot & humid (up to 48°C)',
            winter: 'Mild (15-25°C)',
            monsoon: 'July-September',
            rainfall: '150-500mm annually'
        },
        rivers: [
            { name: 'Indus', feature: 'Main river, flows south to Arabian Sea' },
            { name: 'Hub', feature: 'Forms Sindh-Balochistan border' }
        ],
        naturalFeatures: [
            'Thar Desert (Great Indian Desert)',
            'Indus Delta mangroves',
            'Keenjhar Lake (largest in Pakistan)',
            'Manchar Lake',
            'Hub Dam'
        ]
    },

    administrative: {
        divisions: [
            { name: 'Karachi', districts: 7, headquarters: 'Karachi' },
            { name: 'Hyderabad', districts: 7, headquarters: 'Hyderabad' },
            { name: 'Sukkur', districts: 6, headquarters: 'Sukkur' },
            { name: 'Mirpurkhas', districts: 4, headquarters: 'Mirpurkhas' },
            { name: 'Shaheed Benazirabad', districts: 3, headquarters: 'Nawabshah' },
            { name: 'Larkana', districts: 3, headquarters: 'Larkana' }
        ],
        totalDivisions: 6,
        totalDistricts: 30,
        districtsList: [
            'Karachi Central', 'Karachi East', 'Karachi South', 'Karachi West', 'Korangi', 'Malir', 'Keamari',
            'Badin', 'Dadu', 'Ghotki', 'Hyderabad', 'Jacobabad', 'Jamshoro', 'Kambar Shahdadkot',
            'Kashmore', 'Khairpur', 'Larkana', 'Matiari', 'Mirpur Khas', 'Naushahro Feroze',
            'Sanghar', 'Shaheed Benazirabad', 'Shikarpur', 'Sukkur', 'Tando Allahyar', 'Tando Muhammad Khan',
            'Tharparkar', 'Thatta', 'Umerkot', 'Sujawal'
        ],
        currentGovernment: {
            chiefMinister: 'Murad Ali Shah',
            governor: 'Kamran Tessori',
            assembly: '168 seats',
            rulingParty: 'PPP (2024)'
        }
    },

    majorCities: [
        { name: 'Karachi', population: '14.9 Million', famous: 'Economic hub, largest port', nickname: 'City of Lights' },
        { name: 'Hyderabad', population: '1.7 Million', famous: 'Cultural center', nickname: 'Paris of Sindh' },
        { name: 'Sukkur', population: '0.5 Million', famous: 'Sukkur Barrage', nickname: 'Gateway to North Sindh' },
        { name: 'Larkana', population: '0.5 Million', famous: 'Mohenjo-daro proximity', nickname: 'Home of Bhuttos' },
        { name: 'Nawabshah', population: '0.3 Million', famous: 'Sugar industry', nickname: 'Sugar Bowl' },
        { name: 'Mirpur Khas', population: '0.4 Million', famous: 'Mangoes', nickname: 'Mango City' }
    ],

    economy: {
        gdpContribution: '30% of national GDP',
        gdpPerCapita: 'PKR 235,000',
        mainSectors: {
            services: '65%',
            industry: '25%',
            agriculture: '10%'
        },
        agriculture: {
            majorCrops: ['Rice', 'Cotton', 'Sugarcane', 'Wheat', 'Bananas'],
            production: {
                rice: '30% of Pakistan total',
                cotton: '25% of Pakistan total',
                sugarcane: '30% of Pakistan total',
                bananas: '70% of Pakistan total'
            }
        },
        industry: {
            textiles: 'Major textile mills in Karachi',
            cement: 'Several large cement plants',
            chemicals: 'Chemical & pharmaceutical hub',
            shipping: 'Karachi & Qasim ports handle 95% cargo',
            fisheries: 'Largest fishing industry'
        },
        exports: [
            'Textiles ($8B)',
            'Seafood ($400M)',
            'Cement ($200M)',
            'Rice',
            'Handicrafts'
        ]
    },

    culture: {
        languages: [
            { name: 'Sindhi', speakers: '60%', status: 'Provincial official' },
            { name: 'Urdu', speakers: '30%', status: 'National official' },
            { name: 'Balochi', speakers: '5%' },
            { name: 'Pashto', speakers: '3%' }
        ],
        festivals: [
            'Sindhi Cultural Day',
            'Urs of Sufi saints',
            'Thar Festival',
            'Jeay Sindh celebration'
        ],
        cuisine: [
            'Sindhi Biryani',
            'Palla fish',
            'Sai Bhaji',
            'Koki',
            'Seyal Mani'
        ],
        handicrafts: [
            'Ajrak (block-printed shawl)',
            'Sindhi embroidery',
            'Rilli (patchwork)',
            'Lacquered wood',
            'Blue pottery'
        ]
    },

    historicalSites: [
        { name: 'Mohenjo-daro', period: '2500 BCE (Indus Valley)', unesco: 'Yes', significance: 'Ancient Harappan city' },
        { name: 'Makli Necropolis', period: '14th-18th century', unesco: 'Yes', significance: 'Largest necropolis in world' },
        { name: 'Shah Jahan Mosque (Thatta)', period: '1647', unesco: 'Yes', significance: 'Mughal architecture masterpiece' },
        { name: 'Ranikot Fort', period: '17th century', unesco: 'No', significance: 'World\'s largest fort' },
        { name: 'Chaukhandi Tombs', period: '15th-18th century', unesco: 'No', significance: 'Unique Baloch-style tombs' },
        { name: 'Kot Diji Fort', period: '18th century', unesco: 'No', significance: 'Pre-Harappan archaeological site' }
    ],

    education: {
        literacy: '63%',
        male: '71%',
        female: '54%',
        universities: [
            'University of Karachi',
            'NED University of Engineering',
            'Aga Khan University',
            'University of Sindh, Jamshoro',
            'Mehran University of Engineering, Jamshoro',
            'SZABIST',
            'IBA Karachi',
            'DUHS (Dow University)'
        ],
        totalUniversities: '35+',
        colleges: '800+',
        schools: '45,000+'
    },

    infrastructure: {
        motorways: ['M-9 (Karachi-Hyderabad)', 'M-10 (under construction)'],
        airports: [
            'Jinnah International Airport, Karachi',
            'Sukkur Airport',
            'Mohenjo-daro Airport'
        ],
        seaports: [
            'Port of Karachi (busiest)',
            'Port Qasim'
        ],
        railways: 'Karachi Circular Railway, main line',
        metroSystems: ['Karachi Orange Line (under construction)']
    },

    quickFacts: [
        'Home to Mohenjo-daro - 5,000 year old civilization',
        'Karachi contributes 25% to Pakistan\'s GDP alone',
        'Thar Desert has coal reserves of 175 billion tonnes',
        'Sindh means "river" or "ocean" in Sanskrit',
        'Makli has over 1 million graves',
        'Port Qasim is Pakistan\'s 2nd busiest port',
        'Keenjhar Lake is Karachi\'s water source',
        'Historical homeland of Sindhi culture',
        'Ajrak is symbol of Sindh',
        'Ancient seat of Sindhi civilization'
    ]
};
