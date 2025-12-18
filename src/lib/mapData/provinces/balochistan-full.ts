// COMPREHENSIVE BALOCHISTAN PROVINCE DATA

export const balochistanData = {
    basic: {
        name: 'Balochistan',
        meaning: 'Land of the Baloch people',
        capital: 'Quetta',
        largestCity: 'Quetta',
        area: '347,190 km²',
        population: '14.9 Million (2023)',
        density: '43 persons/km²',
        literacy: '43%',
        founded: '1947 (Partition)',
        officialLanguages: ['Urdu', 'Balochi', 'Pashto'],
        timeZone: 'PKT (UTC+5)'
    },

    geography: {
        location: 'Southwestern Pakistan',
        borders: {
            north: 'KPK, Afghanistan',
            south: 'Arabian Sea',
            east: 'Punjab, Sindh',
            west: 'Iran'
        },
        topography: {
            mountains: 'Sulai man Range, Toba Kakar Range',
            plateaus: 'Balochistan Plateau (600-900m)',
            deserts: 'Kharan Desert, Chagai Hills',
            coast: '750 km coastline (Arabian Sea)'
        },
        climate: {
            type: 'Arid to semi-arid',
            summer: 'Extremely hot in plains (45°C+), moderate in highlands',
            winter: 'Very cold in highlands (-20°C), mild in plains',
            monsoon: 'Very low rainfall',
            rainfall: 'Less than 250mm annually (driest)'
        },
        rivers: [
            { name: 'Hub River', feature: 'Sindh-Balochistan border' },
            { name: 'Porali River', feature: 'Coastal river' },
            { name: 'Hingol River', feature: 'National park river' },
            { name: 'Zhob River', feature: 'Northern Balochistan' }
        ],
        naturalFeatures: [
            'Hingol National Park (largest in Pakistan)',
            'Princess of Hope rock formation',
            'Mud volcanoes (Chandragup)',
            'Makran Coastal Highway',
            'Ziarat Juniper Forest (largest in world)',
            'Bolan Pass'
        ]
    },

    administrative: {
        divisions: [
            { name: 'Kalat', districts: 7, headquarters: 'Kalat' },
            { name: 'Makran', districts: 5, headquarters: 'Turbat' },
            { name: 'Nasirabad', districts: 5, headquarters: 'Nasirabad' },
            { name: 'Quetta', districts: 9, headquarters: 'Quetta' },
            { name: 'Sibi', districts: 6, headquarters: 'Sibi' },
            { name: 'Zhob', districts: 3, headquarters: 'Zhob' },
            { name: 'Loralai', districts: 3, headquarters: 'Loralai' },
            { name: 'Rakhshan', districts: 2, headquarters: 'Kharan' }
        ],
        totalDivisions: 8,
        totalDistricts: 35,
        districtsList: [
            'Awaran', 'Barkhan', 'Chagai', 'Dera Bugti', 'Gwadar', 'Harnai',
            'Jafarabad', 'Jhal Magsi', 'Kachhi', 'Kalat', 'Kech (Turbat)', 'Kharan',
            'Khuzdar', 'Killa Abdullah', 'Killa Saifullah', 'Kohlu', 'Lasbela',
            'Loralai', 'Mastung', 'Musakhel', 'Nasirabad', 'Nushki', 'Panjgur',
            'Pishin', 'Quetta', 'Sherani', 'Sibi', 'Sohbatpur', 'Washuk',
            'Zhob', 'Ziarat', 'Duki', 'Lehri', 'Surab', 'Chaman'
        ],
        currentGovernment: {
            chiefMinister: 'Mir Sarfraz Bugti',
            governor: 'Jaffar Khan Mandokhail',
            assembly: '65 seats',
            rulingParty: 'PPP alliance (2024)'
        }
    },

    majorCities: [
        { name: 'Quetta', population: '1.2 Million', famous: 'Fruit garden, Bolan Pass', nickname: 'Fruit Garden of Pakistan' },
        { name: 'Turbat', population: '0.2 Million', famous: 'Makran division HQ', nickname: '' },
        { name: 'Gwadar', population: '0.2 Million', famous: 'Deep-sea port, CPEC', nickname: 'Port City' },
        { name: 'Khuzdar', population: '0.4 Million', famous: 'Industrial city', nickname: '' },
        { name: 'Chaman', population: '0.1 Million', famous: 'Afghanistan border', nickname: 'Gateway to Afghanistan' },
        { name: 'Hub', population: '0.2 Million', famous: 'Industrial hub', nickname: '' }
    ],

    economy: {
        gdpContribution: '4% of national GDP',
        gdpPerCapita: 'PKR 120,000',
        mainSectors: {
            mining: '45%',
            agriculture: '30%',
            services: '25%'
        },
        agriculture: {
            majorCrops: ['Dates', 'Apples', 'Almonds', 'Apricots', 'Wheat', 'Grapes'],
            production: {
                dates: '60% of Pakistan total',
                apples: '50% of Pakistan total',
                almonds: '90% of Pakistan total'
            },
            livestock: 'Largest livestock population relative to area'
        },
        industry: {
            minerals: 'Natural gas (Sui field - 1st in Pakistan)',
            mining: 'Coal, copper, gold, chromite',
            fisheries: '750 km coastline fisheries',
            energy: 'Coal reserves (175 billion tonnes in Thar)',
            gwadar: 'Gwadar Port (CPEC project)'
        },
        exports: [
            'Natural gas ($1B internally)',
            'Minerals',
            'Dried fruits',
            'Fish',
            'Marble'
        ]
    },

    culture: {
        languages: [
            { name: 'Balochi', speakers: '55%', status: 'Provincial official' },
            { name: 'Brahui', speakers: '20%', unique: 'Dravidian language' },
            { name: 'Pashto', speakers: '20%' },
            { name: 'Urdu', speakers: '3%', status: 'National official' }
        ],
        festivals: [
            'Sibi Mela (cultural festival)',
            'Buzkashi (traditional sport)',
            'Balochi cultural shows',
            'Traditional tribal gatherings'
        ],
        cuisine: [
            'Sajji (whole lamb roast)',
            'Landhi (dried meat)',
            'Khaddi Kabab',
            'Dampukht',
            'Roosh (local soup)'
        ],
        handicrafts: [
            'Balochi embroidery',
            'Mirror work',
            'Ralli quilts',
            'Camel skin products',
            'Traditional jewelry'
        ]
    },

    historicalSites: [
        { name: 'Mehrgarh', period: '7000 BCE (Neolithic)', unesco: 'Tentative', significance: 'Oldest civilization in South Asia' },
        { name: 'Quetta Fort', period: '1893', unesco: 'No', significance: 'British-era fort' },
        { name: 'Gwadar Fort', period: '18th century', unesco: 'No', significance: 'Coastal defense fort' },
        { name: 'Jandool Fort', period: 'Ancient', unesco: 'No', significance: 'Historical fortress' },
        { name: 'Ziarat Residency', period: '1892', unesco: 'No', significance: 'Quaid-e-Azam spent last days' },
        { name: 'Hinglaj Mata Temple', period: 'Ancient', unesco: 'No', significance: 'Hindu pilgrimage site' }
    ],

    education: {
        literacy: '43%',
        male: '57%',
        female: '28%',
        universities: [
            'University of Balochistan, Quetta',
            'Balochistan University of IT & Management Sciences (BUITEMS)',
            'Sardar Bahadur Khan Women\'s University',
            'Lasbela University of Agriculture, Water and Marine Sciences',
            'University of Turbat',
            'University of Loralai'
        ],
        totalUniversities: '15+',
        colleges: '300+',
        schools: '12,000+'
    },

    infrastructure: {
        motorways: ['M-8 (Gwadar-Khuzdar)', 'Gwadar-Karachi Coastal Highway (Makran Coastal Highway)'],
        airports: [
            'Quetta International Airport',
            'Gwadar International Airport (new)',
            'Turbat Airport',
            'Dalbandin Airport'
        ],
        seaports: [
            'Gwadar Port (deep-sea port, CPEC flagship)',
            'Jiwani Port',
            'Pasni Port'
        ],
        railways: 'Main line through Sibi-Quetta',
        metroSystems: []
    },

    quickFacts: [
        'Largest province by area (44% of Pakistan)',
        'Lowest population density (43/km²)',
        'Mehrgarh - oldest Neolithic site in South Asia (9000 years)',
        'Sui gas field discovered 1952 - 1st natural gas in Pakistan',
        'Ziarat has world\'s largest Juniper forest',
        'Gwadar Port - deep-sea warm water port',
        'Chagai nuclear test site (1998)',
        'Richest in minerals but poorest in development',
        'Home to Baloch, Brahui, Pashtun tribes',
        'Hingol National Park - 6,100 km² (largest)'
    ]
};
