// COMPREHENSIVE KPK (KHYBER PAKHTUNKHWA) PROVINCE DATA

export const kpkData = {
    basic: {
        name: 'Khyber Pakhtunkhwa (KPK)',
        meaning: 'Land of Pashtuns (Khyber = Famous pass, Pakhtunkhwa = Land of Pashtuns)',
        oldName: 'North-West Frontier Province (NWFP) until 2010',
        capital: 'Peshawar',
        largestCity: 'Peshawar',
        area: '101,741 km²',
        population: '40.9 Million (2023)',
        density: '402 persons/km²',
        literacy: '55%',
        founded: '1947 (Partition)',
        officialLanguages: ['Urdu', 'Pashto'],
        timeZone: 'PKT (UTC+5)'
    },

    geography: {
        location: 'Northwestern Pakistan',
        borders: {
            north: 'Gilgit-Baltistan',
            south: 'Balochistan, Punjab',
            east: 'Azad Kashmir, Punjab, Islamabad',
            west: 'Afghanistan'
        },
        topography: {
            mountains: 'Hindu Kush, Himalayas (north)',
            valleys: 'Swat, Dir, Chitral valleys',
            plains: 'Peshawar Valley',
            peaks: 'Tirich Mir (7,708m - highest in Hindu Kush)'
        },
        climate: {
            type: 'Varies from arid to alpine',
            summer: 'Hot in plains (up to 40°C), cool in mountains',
            winter: 'Cold (5-15°C in plains, subzero in mountains)',
            monsoon: 'July-August',
            rainfall: '400-1,200mm annually'
        },
        rivers: [
            { name: 'Kabul River', feature: 'Flows through Peshawar' },
            { name: 'Swat River', feature: 'Flows through Swat Valley' },
            { name: 'Kunar River', feature: 'From Afghanistan' },
            { name: 'Chitral River', feature: 'Northern KPK' },
            { name: 'Indus', feature: 'Forms eastern boundary' }
        ],
        naturalFeatures: [
            'Hindu Kush mountain range',
            'Khyber Pass (famous historical route)',
            'Swat Valley ("Switzerland of Pakistan")',
            'Chitral Valley',
            'Malakand Pass',
            'Tarbela Dam (on Indus)'
        ]
    },

    administrative: {
        divisions: [
            { name: 'Bannu', districts: 3, headquarters: 'Bannu' },
            { name: 'Dera Ismail Khan', districts: 3, headquarters: 'D.I. Khan' },
            { name: 'Hazara', districts: 7, headquarters: 'Abbottabad' },
            { name: 'Kohat', districts: 5, headquarters: 'Kohat' },
            { name: 'Malakand', districts: 7, headquarters: 'Swat' },
            { name: 'Mardan', districts: 3, headquarters: 'Mardan' },
            { name: 'Peshawar', districts: 4, headquarters: 'Peshawar' }
        ],
        totalDivisions: 7,
        totalDistricts: 35,
        districtsList: [
            'Abbottabad', 'Bajaur', 'Bannu', 'Battagram', 'Buner', 'Charsadda',
            'Chitral', 'Dera Ismail Khan', 'Hangu', 'Haripur', 'Karak', 'Khyber',
            'Kohat', 'Kohistan', 'Kurram', 'Lakki Marwat', 'Lower Dir', 'Malakand',
            'Mansehra', 'Mardan', 'Mohmand', 'North Waziristan', 'Nowshera', 'Orakzai',
            'Peshawar', 'Shangla', 'South Waziristan', 'Swabi', 'Swat', 'Tank',
            'Torghar', 'Upper Chitral', 'Upper Dir', 'Upper South Waziristan', 'Lower South Waziristan'
        ],
        currentGovernment: {
            chiefMinister: 'Ali Amin Gandapur',
            governor: 'Faisal Karim Kundi',
            assembly: '145 seats',
            rulingParty: 'PTI (2024)'
        }
    },

    majorCities: [
        { name: 'Peshawar', population: '2.3 Million', famous: 'Ancient city, Qissa Khwani', nickname: 'City of Flowers' },
        { name: 'Mardan', population: '0.4 Million', famous: 'Sugar mills, Takht-i-Bahi', nickname: '' },
        { name: 'Abbottabad', population: '0.3 Million', famous: 'Hill station, PMA Kakul', nickname: 'City of Schools' },
        { name: 'Mingora (Swat)', population: '0.4 Million', famous: 'Tourism, Swat Valley', nickname: 'Heart of Swat' },
        { name: 'Kohat', population: '0.2 Million', famous: 'Kohat Pass', nickname: '' },
        { name: 'D.I. Khan', population: '0.2 Million', famous: 'Trade center', nickname: '' }
    ],

    economy: {
        gdpContribution: '10% of national GDP',
        gdpPerCapita: 'PKR 175,000',
        mainSectors: {
            services: '50%',
            agriculture: '30%',
            industry: '20%'
        },
        agriculture: {
            majorCrops: ['Wheat', 'Maize', 'Tobacco', 'Sugarcane', 'Rice'],
            production: {
                tobacco: '70% of Pakistan total',
                maize: '30% of Pakistan total'
            },
            livestock: 'Significant sheep and goat rearing'
        },
        industry: {
            marble: 'World-class marble & granite',
            gems: 'Emeralds, rubies, aquamarine',
            hydropower: 'Tarbela Dam (3,478 MW)',
            tourism: 'Major tourism industry',
            handicrafts: 'Woodwork, carpets'
        },
        exports: [
            'Marble & granite ($100M)',
            'Gems & gemstones',
            'Dried fruits',
            'Handicrafts',
            'Furniture'
        ]
    },

    culture: {
        languages: [
            { name: 'Pashto', speakers: '75%', status: 'Provincial official' },
            { name: 'Hindko', speakers: '15%', region: 'Hazara division' },
            { name: 'Urdu', speakers: '5%', status: 'National official' },
            { name: 'Khowar', speakers: '2%', region: 'Chitral' }
        ],
        festivals: [
            'Shandur Polo Festival',
            'Kalash festivals (Chilam Joshi, Uchal)',
            'Jashn-e-Baharan (Spring festival)',
            'Traditional Jirga gatherings'
        ],
        cuisine: [
            'Chapli Kebab',
            'Peshawari Ice Cream',
            'Lamb Karahi',
            'Dum Pukht',
            'Namkeen Gosht'
        ],
        handicrafts: [
            'Chitrali caps',
            'Swati shawls',
            'Wooden furniture',
            'Handwoven carpets',
            'Peshawari chappals'
        ]
    },

    historicalSites: [
        { name: 'Takht-i-Bahi', period: '1st century BCE (Buddhist monastery)', unesco: 'Yes', significance: 'Gandhara Buddhist complex' },
        { name: 'Peshawar Museum', period: '1907', unesco: 'No', significance: 'Largest collection of Gandhara art' },
        { name: 'Bala Hisar Fort (Peshawar)', period: '1526 (Mughal)', unesco: 'No', significance: 'Ancient Peshawar fortress' },
        { name: 'Naran & Kaghan Valley', period: 'Natural', unesco: 'No', significance: 'Scenic mountain valleys' },
        { name: 'Chitral Fort', period: '300 years', unesco: 'No', significance: 'Historic fort in Chitral' },
        { name: 'Saidu Sharif (Swat Museum)', period: '1959', unesco: 'No', significance: 'Gandhara artifacts' }
    ],

    education: {
        literacy: '55%',
        male: '70%',
        female: '40%',
        universities: [
            'University of Peshawar',
            'Khyber Medical University',
            'Gandhara University',
            'CECOS University',
            'Gomal University, D.I. Khan',
            'University of Swat',
            'Hazara University',
            'University of Engineering & Technology, Peshawar'
        ],
        totalUniversities: '30+',
        colleges: '500+',
        schools: '28,000+'
    },

    infrastructure: {
        motorways: [
            'M-1 (Peshawar-Islamabad)',
            'Swat Motorway'
        ],
        airports: [
            'Bacha Khan International Airport, Peshawar',
            'Saidu Sharif Airport, Mingora',
            'Chitral Airport'
        ],
        seaports: 'None (landlocked)',
        railways: 'Main railway line',
        metroSystems: ['Peshawar BRT (operational)']
    },

    quickFacts: [
        'Former NWFP, renamed KPK in 2010 (18th Amendment)',
        'Khyber Pass - historic Silk Road route',
        'Swat called "Switzerland of Pakistan"',
        'Gandhara civilization flourished here',
        'Tarbela Dam - world\'s largest earth-filled dam',
        'Shandur Polo - highest polo ground (3,738m)',
        'Chitral home to Kalash people (ancient culture)',
        'Peshawar over 2,000 years old',
        'Major marble producer',
        'Hub of Pashto culture'
    ]
};
