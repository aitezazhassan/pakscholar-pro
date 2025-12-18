// Major cities in Pakistan with coordinates
export const pakistanCities = [
    // Punjab
    { name: 'Lahore', lat: 31.5497, lng: 74.3436, province: 'Punjab', population: '11.1M' },
    { name: 'Faisalabad', lat: 31.4180, lng: 73.0790, province: 'Punjab', population: '3.2M' },
    { name: 'Rawalpindi', lat: 33.5651, lng: 73.0169, province: 'Punjab', population: '2.1M' },
    { name: 'Multan', lat: 30.1575, lng: 71.5249, province: 'Punjab', population: '1.9M' },
    { name: 'Gujranwala', lat: 32.1617, lng: 74.1883, province: 'Punjab', population: '2.0M' },

    // Sindh
    { name: 'Karachi', lat: 24.8607, lng: 67.0011, province: 'Sindh', population: '14.9M' },
    { name: 'Hyderabad', lat: 25.3960, lng: 68.3578, province: 'Sindh', population: '1.7M' },
    { name: 'Sukkur', lat: 27.7050, lng: 68.8574, province: 'Sindh', population: '0.5M' },

    // KPK
    { name: 'Peshawar', lat: 34.0151, lng: 71.5249, province: 'KPK', population: '1.97M' },
    { name: 'Mardan', lat: 34.1958, lng: 72.0447, province: 'KPK', population: '0.4M' },
    { name: 'Abbottabad', lat: 34.1495, lng: 73.1995, province: 'KPK', population: '0.3M' },

    // Balochistan
    { name: 'Quetta', lat: 30.1798, lng: 66.9750, province: 'Balochistan', population: '1.0M' },
    { name: 'Gwadar', lat: 25.1264, lng: 62.3250, province: 'Balochistan', population: '0.09M' },

    // Capital
    { name: 'Islamabad', lat: 33.6844, lng: 73.0479, province: 'Capital', population: '1.0M' }
];

// Province boundaries (simplified GeoJSON)
export const provinceBoundaries = {
    punjab: {
        name: 'Punjab',
        color: '#10b981',
        coordinates: [
            [31.5, 74.3], [32.5, 74.5], [33.0, 73.0], [32.0, 70.5],
            [30.0, 70.0], [28.5, 71.0], [29.5, 73.5], [31.5, 74.3]
        ]
    },
    sindh: {
        name: 'Sindh',
        color: '#3b82f6',
        coordinates: [
            [24.8, 67.0], [26.0, 68.5], [28.5, 69.0], [28.5, 71.0],
            [26.0, 70.0], [24.0, 68.0], [23.5, 67.0], [24.8, 67.0]
        ]
    },
    kpk: {
        name: 'KPK (Khyber Pakhtunkhwa)',
        color: '#8b5cf6',
        coordinates: [
            [34.0, 71.5], [35.5, 72.5], [36.0, 74.5], [35.0, 75.5],
            [34.0, 73.5], [33.0, 72.0], [34.0, 71.5]
        ]
    },
    balochistan: {
        name: 'Balochistan',
        color: '#f59e0b',
        coordinates: [
            [30.2, 67.0], [31.0, 62.0], [28.0, 61.5], [25.0, 62.3],
            [25.0, 66.0], [28.5, 69.0], [28.5, 71.0], [30.0, 70.0], [30.2, 67.0]
        ]
    }
};

// Pakistan center point
export const pakistanCenter = {
    lat: 30.3753,
    lng: 69.3451,
    zoom: 6
};
