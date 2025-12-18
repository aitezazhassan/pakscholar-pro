// Extended geographic data for Pakistan

export const pakistanRivers = [
    { name: 'Indus', length: '3,180 km', provinces: ['Punjab', 'Sindh', 'KPK'], coordinates: [[36.0, 74.5], [34.5, 72.0], [31.0, 71.0], [27.0, 68.0], [24.0, 67.5]] },
    { name: 'Jhelum', length: '725 km', provinces: ['Punjab', 'KPK'], coordinates: [[34.0, 73.2], [33.0, 73.5], [32.5, 73.0]] },
    { name: 'Chenab', length: '1,086 km', provinces: ['Punjab'], coordinates: [[33.0, 75.0], [31.5, 72.5], [29.5, 71.0]] },
    { name: 'Ravi', length: '720 km', provinces: ['Punjab'], coordinates: [[32.5, 75.5], [31.5, 74.3], [30.5, 72.0]] },
    { name: 'Sutlej', length: '1,450 km', provinces: ['Punjab'], coordinates: [[31.8, 76.0], [30.8, 73.5], [29.5, 71.5]] }
];

export const pakistanMountains = [
    { name: 'K2', height: '8,611 m', location: 'Gilgit-Baltistan', lat: 35.8825, lng: 76.5133, rank: '2nd highest in world' },
    { name: 'Nanga Parbat', height: '8,126 m', location: 'Gilgit-Baltistan', lat: 35.2372, lng: 74.5894, rank: '9th highest in world' },
    { name: 'Gasherbrum I', height: '8,080 m', location: 'Gilgit-Baltistan', lat: 35.7242, lng: 76.6958, rank: '11th highest in world' },
    { name: 'Broad Peak', height: '8,051 m', location: 'Gilgit-Baltistan', lat: 35.8111, lng: 76.5678, rank: '12th highest in world' },
    { name: 'Tirich Mir', height: '7,708 m', location: 'KPK', lat: 36.2575, lng: 71.8447, rank: 'Highest in Hindu Kush' }
];

export const pakistanFacts = [
    { category: 'Geography', fact: 'Pakistan is the 33rd largest country by area (881,913 km²)' },
    { category: 'Population', fact: 'Pakistan is the 5th most populous country with 241 million people' },
    { category: 'Water', fact: 'The Indus River system provides water to 90% of Pakistan\'s agriculture' },
    { category: 'Mountains', fact: 'Pakistan has 5 of the 14 highest peaks in the world (8000m+)' },
    { category: 'Borders', fact: 'Pakistan borders 4 countries: China, India, Iran, and Afghanistan' },
    { category: 'Climate', fact: 'Pakistan has 4 distinct seasons and 6 major climate zones' }
];

export const provinceStats = {
    punjab: {
        name: 'Punjab',
        area: '205,344 km²',
        population: '127 Million',
        density: '618/km²',
        literacy: '66.47%',
        gdp: '52% of national GDP',
        majorCrops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton'],
        industries: ['Textiles', 'Sports goods', 'Surgical instruments'],
        districts: 42
    },
    sindh: {
        name: 'Sindh',
        area: '140,914 km²',
        population: '50 Million',
        density: '355/km²',
        literacy: '63%',
        gdp: '30% of national GDP',
        majorCrops: ['Rice', 'Sugarcane', 'Cotton', 'Wheat'],
        industries: ['Textile', 'Cement', 'Chemicals'],
        districts: 30
    },
    kpk: {
        name: 'KPK',
        area: '101,741 km²',
        population: '35 Million',
        density: '344/km²',
        literacy: '53%',
        gdp: '10% of national GDP',
        majorCrops: ['Wheat', 'Tobacco', 'Maize'],
        industries: ['Marble', 'Gems', 'Tourism'],
        districts: 35
    },
    balochistan: {
        name: 'Balochistan',
        area: '347,190 km²',
        population: '14 Million',
        density: '40/km²',
        literacy: '41%',
        gdp: '4% of national GDP',
        majorCrops: ['Dates', 'Apples', 'Almonds'],
        industries: ['Mining', 'Natural gas', 'Fisheries'],
        districts: 35
    }
};

export const geographyQuiz = [
    {
        id: 1,
        question: 'Which is the largest province of Pakistan by area?',
        options: ['Punjab', 'Sindh', 'Balochistan', 'KPK'],
        correct: 'Balochistan',
        explanation: 'Balochistan covers 347,190 km², about 44% of Pakistan\'s total area'
    },
    {
        id: 2,
        question: 'What is the second highest mountain in the world?',
        options: ['Nanga Parbat', 'K2', 'Everest', 'Broad Peak'],
        correct: 'K2',
        explanation: 'K2 at 8,611m is the second highest peak, located in Gilgit-Baltistan'
    },
    {
        id: 3,
        question: 'Which river is called the "lifeline of Pakistan"?',
        options: ['Jhelum', 'Chenab', 'Indus', 'Ravi'],
        correct: 'Indus',
        explanation: 'The Indus River provides water to 90% of Pakistan\'s agriculture'
    },
    {
        id: 4,
        question: 'What is the most populous city in Pakistan?',
        options: ['Lahore', 'Karachi', 'Faisalabad', 'Islamabad'],
        correct: 'Karachi',
        explanation: 'Karachi has a population of 14.9 million, making it Pakistan\'s largest city'
    },
    {
        id: 5,
        question: 'Which province contributes the most to Pakistan\'s GDP?',
        options: ['Sindh', 'Balochistan', 'Punjab', 'KPK'],
        correct: 'Punjab',
        explanation: 'Punjab contributes approximately 52% of Pakistan\'s national GDP'
    },
    {
        id: 6,
        question: 'How many provinces does Pakistan have?',
        options: ['3', '4', '5', '6'],
        correct: '4',
        explanation: 'Pakistan has 4 provinces: Punjab, Sindh, KPK, and Balochistan'
    },
    {
        id: 7,
        question: 'Which city is known as the "City of Gardens"?',
        options: ['Karachi', 'Islamabad', 'Lahore', 'Multan'],
        correct: 'Lahore',
        explanation: 'Lahore is historically known for its beautiful Mughal gardens'
    },
    {
        id: 8,
        question: 'What is the capital of Pakistan?',
        options: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'],
        correct: 'Islamabad',
        explanation: 'Islamabad became Pakistan\'s capital in 1967, replacing Karachi'
    }
];
