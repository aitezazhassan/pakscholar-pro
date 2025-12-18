// COMPREHENSIVE PUNJAB PROVINCE DATA
// Complete reference for PPSC Geography preparation

export const punjabData = {
    // ==================== BASIC INFO ====================
    basic: {
        name: 'Punjab',
        meaning: 'Land of Five Rivers (Punj = Five, Aab = Water)',
        capital: 'Lahore',
        largestCity: 'Lahore',
        area: '205,344 km²',
        population: '127.7 Million (2023)',
        density: '618 persons/km²',
        literacy: '66.47%',
        founded: '1947 (Partition)',
        officialLanguages: ['Urdu', 'Punjabi'],
        timeZone: 'PKT (UTC+5)',
        calling: '+92-42 (Lahore)'
    },

    // ==================== GEOGRAPHY ====================
    geography: {
        location: 'Central-eastern Pakistan',
        borders: {
            north: 'Azad Kashmir, Islamabad Capital Territory',
            south: 'Sindh province',
            east: 'India (Indian Punjab, Rajasthan)',
            west: 'Khyber Pakhtunkhwa, Balochistan'
        },
        topography: {
            plains: 'Vast Indus plains - most fertile in Pakistan',
            mountains: 'Salt Range in north (highest: Sakesar 1,522m)',
            deserts: 'Cholistan Desert in south (16,000 km²)',
            plateaus: 'Pothohar Plateau in north'
        },
        climate: {
            type: 'Semi-arid to sub-humid',
            summer: 'Very hot (May-Aug), up to 50°C',
            winter: 'Mild to cold (Dec-Feb), 5-20°C',
            monsoon: 'July-September',
            rainfall: '250-800mm annually'
        },
        rivers: [
            { name: 'Indus', length: '3,180 km total', flows: 'North to South' },
            { name: 'Jhelum', length: '725 km', tributary: 'of Chenab' },
            { name: 'Chenab', length: '1,086 km', formed: 'by Chandra & Bhaga' },
            { name: 'Ravi', length: '720 km', city: 'Flows through Lahore' },
            { name: 'Sutlej', length: '1,450 km', border: 'Forms India border' }
        ],
        naturalFeatures: [
            'Thal Desert (20,000 km²)',
            'Cholistan Desert (16,000 km²)',
            'Salt Range mountains',
            'Kirana Hills',
            'Murree Hills (north)'
        ]
    },

    // ==================== ADMINISTRATIVE ====================
    administrative: {
        divisions: [
            { name: 'Bahawalpur', districts: 3, headquarters: 'Bahawalpur' },
            { name: 'Dera Ghazi Khan', districts: 4, headquarters: 'D.G. Khan' },
            { name: 'Faisalabad', districts: 3, headquarters: 'Faisalabad' },
            { name: 'Gujranwala', districts: 5, headquarters: 'Gujranwala' },
            { name: 'Lahore', districts: 6, headquarters: 'Lahore' },
            { name: 'Multan', districts: 6, headquarters: 'Multan' },
            { name: 'Rawalpindi', districts: 5, headquarters: 'Rawalpindi' },
            { name: 'Sahiwal', districts: 4, headquarters: 'Sahiwal' },
            { name: 'Sargodha', districts: 5, headquarters: 'Sargodha' }
        ],
        totalDivisions: 9,
        totalDistricts: 42,
        districtsList: [
            'Attock', 'Bahawalnagar', 'Bahawalpur', 'Bhakkar', 'Chakwal',
            'Chiniot', 'Dera Ghazi Khan', 'Faisalabad', 'Gujranwala', 'Gujrat',
            'Hafizabad', 'Jhang', 'Jhelum', 'Kasur', 'Khanewal',
            'Khushab', 'Lahore', 'Layyah', 'Lodhran', 'Mandi Bahauddin',
            'Mianwali', 'Multan', 'Muzaffargarh', 'Nankana Sahib', 'Narowal',
            'Okara', 'Pakpattan', 'Rahim Yar Khan', 'Rajanpur', 'Rawalpindi',
            'Sahiwal', 'Sargodha', 'Sheikhupura', 'Sialkot', 'Toba Tek Singh',
            'Vehari', 'Wazirabad', 'Talagang', 'Murree', 'Kot Addu',
            'Mianwali', 'Khushab'
        ],
        currentGovernment: {
            chiefMinister: 'Maryam Nawaz Sharif',
            governor: 'Sardar Salim Haider Khan',
            assembly: '371 seats',
            rulingParty: 'PML-N (2024)'
        }
    },

    // ==================== MAJOR CITIES ====================
    majorCities: [
        {
            name: 'Lahore',
            population: '11.1 Million',
            famous: 'Cultural capital, Mughal architecture',
            nickname: 'City of Gardens'
        },
        {
            name: 'Faisalabad',
            population: '3.2 Million',
            famous: 'Textile industry',
            nickname: 'Manchester of Pakistan'
        },
        {
            name: 'Rawalpindi',
            population: '2.1 Million',
            famous: 'Army headquarters, twin city of Islamabad',
            nickname: 'Pindi'
        },
        {
            name: 'Multan',
            population: '1.9 Million',
            famous: 'Sufi shrines, mangoes',
            nickname: 'City of Saints'
        },
        {
            name: 'Gujranwala',
            population: '2.0 Million',
            famous: 'Wrestling, food',
            nickname: 'City of Wrestlers'
        },
        {
            name: 'Sialkot',
            population: '0.9 Million',
            famous: 'Sports goods, surgical instruments',
            nickname: 'Sports City'
        },
        {
            name: 'Bahawalpur',
            population: '0.8 Million',
            famous: 'Palaces, desert',
            nickname: 'City of Nawabs'
        },
        {
            name: 'Sargodha',
            population: '0.7 Million',
            famous: 'Citrus fruits, PAF base',
            nickname: 'California of Pakistan'
        }
    ],

    // ==================== ECONOMY ====================
    economy: {
        gdpContribution: '52% of national GDP',
        gdpPerCapita: 'PKR 275,000 (approx)',
        mainSectors: {
            agriculture: '25%',
            services: '55%',
            industry: '20%'
        },
        agriculture: {
            majorCrops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton', 'Maize'],
            production: {
                wheat: '75% of Pakistan total',
                rice: '45% of Pakistan total',
                cotton: '65% of Pakistan total',
                sugarcane: '60% of Pakistan total'
            },
            livestock: 'Largest livestock population in Pakistan'
        },
        industry: {
            textiles: '70% of Pakistan\'s textile industry',
            sports: 'Sialkot - 70% world\'s soccer balls',
            surgical: 'Sialkot - 20% world\'s surgical instruments',
            ceramics: 'Gujranwala - tiles & pottery',
            leather: 'Major leather goods hub'
        },
        exports: [
            'Textiles & garments ($15B)',
            'Sports goods ($600M)',
            'Surgical instruments ($400M)',
            'Rice (Basmati)',
            'Leather products'
        ]
    },

    // ==================== CULTURE & HERITAGE ====================
    culture: {
        languages: [
            { name: 'Punjabi', speakers: '75%', dialects: ['Majhi', 'Pothohari', 'Hindko', 'Saraiki'] },
            { name: 'Urdu', speakers: '20%', status: 'Official' },
            { name: 'Saraiki', speakers: '15%', region: 'South Punjab' },
            { name: 'English', speakers: '5%', status: 'Administrative' }
        ],
        festivals: [
            'Basant (Spring festival)',
            'Mela Chiraghan (Festival of Lights)',
            'Urs celebrations at shrines',
            'Harvest festivals'
        ],
        cuisine: [
            'Lahori chargha',
            'Paya',
            'Haleem',
            'Sohan Halwa (Multan)',
            'Siri Paye',
            'Kunna (Sargodha)'
        ],
        handicrafts: [
            'Phulkari embroidery',
            'Blue pottery (Multan)',
            'Camel skin products',
            'Carpet weaving',
            'Truck art painting'
        ]
    },

    // ==================== HISTORICAL SITES ====================
    historicalSites: [
        {
            name: 'Lahore Fort (Shahi Qila)',
            period: 'Mughal Era (1566)',
            unesco: 'Yes',
            significance: 'Royal residence of Mughal emperors'
        },
        {
            name: 'Badshahi Mosque',
            period: '1673 (Aurangzeb)',
            unesco: 'Yes',
            significance: '2nd largest mosque in Pakistan'
        },
        {
            name: 'Shalimar Gardens',
            period: '1641 (Shah Jahan)',
            unesco: 'Yes',
            significance: 'Mughal garden complex'
        },
        {
            name: 'Taxila',
            period: 'Gandhara Civilization',
            unesco: 'Yes',
            significance: 'Ancient Buddhist learning center'
        },
        {
            name: 'Rohtas Fort',
            period: '1541 (Sher Shah Suri)',
            unesco: 'Yes',
            significance: 'Largest fort in Pakistan'
        },
        {
            name: 'Minar-e-Pakistan',
            period: '1960s',
            unesco: 'No',
            significance: '1940 Pakistan Resolution site'
        },
        {
            name: 'Noor Mahal (Bahawalpur)',
            period: '1872',
            unesco: 'No',
            significance: 'Palace of Nawabs'
        },
        {
            name: 'Derawar Fort',
            period: '9th century',
            unesco: 'No',
            significance: 'Cholistan desert fortress'
        }
    ],

    // ==================== EDUCATION ====================
    education: {
        literacy: '66.47%',
        male: '72%',
        female: '60%',
        universities: [
            'University of the Punjab (1882)',
            'University of Engineering & Technology, Lahore',
            'Government College University, Lahore',
            'Quaid-e-Azam University, Islamabad',
            'University of Agriculture, Faisalabad',
            'NUST, Islamabad',
            'Bahauddin Zakariya University, Multan',
            'Islamia University, Bahawalpur'
        ],
        totalUniversities: '45+',
        colleges: '1,200+',
        schools: '52,000+'
    },

    // ==================== INFRASTRUCTURE ====================
    infrastructure: {
        motorways: [
            'M-1 (Peshawar-Islamabad-Lahore)',
            'M-2 (Lahore-Islamabad)',
            'M-3 (Pindi Bhattian-Faisalabad)',
            'M-4 (Faisalabad-Multan)',
            'M5 (Multan-Sukkur)'
        ],
        airports: [
            'Allama Iqbal International Airport, Lahore',
            'Faisalabad International Airport',
            'Multan International Airport',
            'Sialkot International Airport',
            'Bahawalpur Airport'
        ],
        seaports: 'None (landlocked)',
        railways: 'Extensive Pakistan Railways network',
        metroSystems: [
            'Lahore Metro Bus',
            'Lahore Orange Line Metro Train',
            'Multan Metro Bus',
            'Rawalpindi-Islamabad Metro Bus'
        ]
    },

    // ==================== QUICK FACTS ====================
    quickFacts: [
        'Punjab produces 90% of Pakistan\'s paper and board',
        'Home to 5 UNESCO World Heritage Sites',
        'Lahore is over 2,000 years old',
        'Sialkot exports to 120+ countries',
        'Salt Range has 2nd largest salt deposits in world',
        'Cholistan hosts annual Jeep Rally',
        'Bahawalpur once was a princely state',
        'Murree receives snow in winter',
        'Thal Desert is smallest desert in Pakistan',
        'Punjab has highest road density in Pakistan'
    ]
};
