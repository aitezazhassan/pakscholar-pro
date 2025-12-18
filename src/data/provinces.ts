export interface Province {
    name: string;
    capital: string;
    population: string;
    area: string;
    literacy: string;
    districts: number;
    divisions: string[];
    economy: {
        mainIndustries: string[];
        gdpContribution: string;
    };
    history: {
        brief: string;
        governors: { name: string; period: string }[];
    };
    geography: {
        borders: string[];
        majorCities: string[];
        rivers: string[];
    };
}

export const provinces: Record<string, Province> = {
    punjab: {
        name: 'Punjab',
        capital: 'Lahore',
        population: '127 Million',
        area: '205,344 km²',
        literacy: '66.47%',
        districts: 42,
        divisions: [
            'Lahore Division',
            'Gujranwala Division',
            'Faisalabad Division',
            'Rawalpindi Division',
            'Multan Division',
            'Bahawalpur Division',
            'Sargodha Division',
            'Dera Ghazi Khan Division',
            'Sahiwal Division',
            'Mianwali Division'
        ],
        economy: {
            mainIndustries: ['Agriculture', 'Textiles', 'Manufacturing', 'Services'],
            gdpContribution: '52% of Pakistan GDP'
        },
        history: {
            brief: 'Punjab has been the heart of many ancient civilizations including the Indus Valley Civilization. It was the center of Mughal Empire and later became the breadbasket of Pakistan after independence in 1947. The name Punjab derives from the Persian words "Panj" (five) and "Āb" (water), referring to five rivers: Jhelum, Chenab, Ravi, Sutlej, and Beas.',
            governors: [
                { name: 'Sardar Saleem Haider', period: '2025-Present' },
                { name: 'Muhammad Baligh Ur Rehman', period: '2022-2025' },
                { name: 'Chaudhry Muhammad Sarwar', period: '2018-2021' }
            ]
        },
        geography: {
            borders: ['Sindh', 'Balochistan', 'KPK', 'Azad Kashmir', 'India'],
            majorCities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha', 'Bahawalpur'],
            rivers: ['Indus', 'Jhelum', 'Chenab', 'Ravi', 'Sutlej']
        }
    },
    sindh: {
        name: 'Sindh',
        capital: 'Karachi',
        population: '47 Million',
        area: '140,914 km²',
        literacy: '56%',
        districts: 29,
        divisions: [
            'Karachi Division',
            'Hyderabad Division',
            'Sukkur Division',
            'Mirpurkhas Division',
            'Larkana Division',
            'Shaheed Benazirabad Division'
        ],
        economy: {
            mainIndustries: ['Trade', 'Services', 'Manufacturing', 'Fishing'],
            gdpContribution: '28% of Pakistan GDP'
        },
        history: {
            brief: 'Sindh is home to the ancient Indus Valley Civilization and Mohenjo-daro. It has a rich history of trade, Sufism, and cultural exchange. The province has been a key part of various empires including Arab Caliphates and Mughal Empire.',
            governors: [
                { name: 'Kamran Khan Tessori', period: '2022-Present' },
                { name: 'Imran Ismail', period: '2018-2022' }
            ]
        },
        geography: {
            borders: ['Punjab', 'Balochistan', 'India', 'Arabian Sea'],
            majorCities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Mirpurkhas'],
            rivers: ['Indus']
        }
    },
    kpk: {
        name: 'Khyber Pakhtunkhwa',
        capital: 'Peshawar',
        population: '30 Million',
        area: '74,521 km²',
        literacy: '53%',
        districts: 35,
        divisions: [
            'Peshawar Division',
            'Mardan Division',
            'Hazara Division',
            'Kohat Division',
            'Bannu Division',
            'Dera Ismail Khan Division',
            'Malakand Division'
        ],
        economy: {
            mainIndustries: ['Agriculture', 'Tourism', 'Hydropower', 'Mining'],
            gdpContribution: '10% of Pakistan GDP'
        },
        history: {
            brief: 'KPK has been a crossroads of civilization, part of ancient Gandhara, and home to rich Buddhist heritage. The Khyber Pass has been historically significant for trade and military campaigns between Central Asia and South Asia.',
            governors: [
                { name: 'Haji Ghulam Ali', period: '2022-Present' },
                { name: 'Shah Farman', period: '2018-2022' }
            ]
        },
        geography: {
            borders: ['Punjab', 'Balochistan', 'Afghanistan', 'Gilgit-Baltistan', 'Azad Kashmir'],
            majorCities: ['Peshawar', 'Mardan', 'Abbottabad', 'Swat', 'Kohat'],
            rivers: ['Indus', 'Kabul', 'Swat', 'Kurram']
        }
    },
    balochistan: {
        name: 'Balochistan',
        capital: 'Quetta',
        population: '12 Million',
        area: '347,190 km²',
        literacy: '41%',
        districts: 33,
        divisions: [
            'Quetta Division',
            'Kalat Division',
            'Makran Division',
            'Nasirabad Division',
            'Sibi Division',
            'Zhob Division',
            'Rakhshan Division'
        ],
        economy: {
            mainIndustries: ['Mining', 'Natural Gas', 'Agriculture', 'Fisheries'],
            gdpContribution: '4% of Pakistan GDP'
        },
        history: {
            brief: 'Balochistan is Pakistan\'s largest province by area with a rich tribal history and abundant natural resources. The province has been strategically important due to its proximity to Iran, Afghanistan, and the Arabian Sea.',
            governors: [
                { name: 'Malik Abdul Wali Khan Kakar', period: '2022-Present' },
                { name: 'Syed Zahoor Ahmad Agha', period: '2018-2022' }
            ]
        },
        geography: {
            borders: ['Punjab', 'Sindh', 'KPK', 'Iran', 'Afghanistan', 'Arabian Sea'],
            majorCities: ['Quetta', 'Gwadar', 'Turbat', 'Khuzdar', 'Sibi'],
            rivers: ['Hub', 'Porali', 'Hingol']
        }
    }
};
