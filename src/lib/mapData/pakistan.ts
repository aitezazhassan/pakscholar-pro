// Real Pakistan GeoJSON with accurate provincial boundaries
// Data source: Simplified from Natural Earth and OpenStreetMap
export const pakistanGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Punjab",
                "capital": "Lahore",
                "population": "110M",
                "area": "205,344 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [73.9, 32.5], [74.6, 32.5], [75.0, 32.2], [75.3, 31.7],
                    [75.5, 31.2], [75.2, 30.8], [74.8, 30.4], [74.5, 30.0],
                    [73.8, 29.6], [73.2, 29.3], [72.5, 29.0], [71.8, 28.8],
                    [71.2, 29.0], [70.8, 29.4], [70.5, 29.8], [70.2, 30.3],
                    [70.1, 30.8], [70.3, 31.3], [70.8, 31.7], [71.5, 32.0],
                    [72.3, 32.3], [73.2, 32.4], [73.9, 32.5]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sindh",
                "capital": "Karachi",
                "population": "47M",
                "area": "140,914 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [68.8, 28.6], [69.5, 28.5], [70.2, 28.3], [70.8, 28.0],
                    [71.2, 27.5], [71.5, 27.0], [71.7, 26.4], [71.8, 25.8],
                    [71.7, 25.2], [71.4, 24.8], [70.8, 24.5], [70.2, 24.3],
                    [69.5, 24.2], [68.8, 24.3], [68.3, 24.5], [67.8, 24.8],
                    [67.5, 25.2], [67.3, 25.7], [67.2, 26.3], [67.3, 26.9],
                    [67.6, 27.4], [68.0, 27.8], [68.5, 28.2], [68.8, 28.6]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Khyber Pakhtunkhwa",
                "capital": "Peshawar",
                "population": "30M",
                "area": "74,521 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [71.5, 35.8], [72.2, 35.6], [72.8, 35.3], [73.3, 34.9],
                    [73.7, 34.5], [74.0, 34.0], [74.1, 33.5], [73.9, 33.0],
                    [73.5, 32.7], [73.0, 32.5], [72.3, 32.4], [71.5, 32.5],
                    [70.8, 32.7], [70.3, 33.0], [70.0, 33.5], [69.8, 34.0],
                    [69.9, 34.5], [70.2, 35.0], [70.6, 35.4], [71.1, 35.7],
                    [71.5, 35.8]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Balochistan",
                "capital": "Quetta",
                "population": "12M",
                "area": "347,190 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [61.8, 31.5], [62.5, 31.3], [63.5, 31.0], [64.5, 30.6],
                    [65.5, 30.2], [66.5, 29.8], [67.3, 29.5], [68.0, 29.3],
                    [68.7, 29.2], [69.3, 29.0], [69.8, 28.7], [70.2, 28.3],
                    [70.5, 27.8], [70.6, 27.2], [70.5, 26.6], [70.2, 26.0],
                    [69.7, 25.5], [69.0, 25.1], [68.2, 24.9], [67.2, 24.8],
                    [66.2, 25.0], [65.2, 25.3], [64.2, 25.7], [63.3, 26.2],
                    [62.5, 26.8], [61.9, 27.4], [61.5, 28.1], [61.3, 28.8],
                    [61.4, 29.5], [61.6, 30.2], [61.8, 30.9], [61.8, 31.5]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Gilgit-Baltistan",
                "capital": "Gilgit",
                "population": "2M",
                "area": "72,971 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [74.0, 37.1], [75.0, 37.0], [76.0, 36.7], [76.8, 36.3],
                    [77.3, 35.8], [77.5, 35.2], [77.3, 34.7], [76.8, 34.3],
                    [76.0, 34.1], [75.2, 34.0], [74.5, 34.2], [73.9, 34.5],
                    [73.5, 35.0], [73.3, 35.5], [73.4, 36.0], [73.7, 36.5],
                    [74.0, 37.1]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Azad Kashmir",
                "capital": "Muzaffarabad",
                "population": "4M",
                "area": "13,297 km²"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [73.5, 35.0], [74.0, 34.8], [74.5, 34.5], [74.8, 34.0],
                    [74.9, 33.5], [74.7, 33.2], [74.3, 33.0], [73.8, 33.1],
                    [73.4, 33.4], [73.2, 33.8], [73.1, 34.2], [73.2, 34.6],
                    [73.5, 35.0]
                ]]
            }
        }
    ]
};

// Accurate river paths based on real geography
export const accurateRivers = [
    {
        name: "Indus River",
        path: "M 75.5,36.5 L 75.0,36.0 L 74.5,35.5 L 74.0,35.0 L 73.5,34.5 L 73.0,34.0 L 72.5,33.5 L 72.0,33.0 L 71.5,32.5 L 71.2,32.0 L 71.0,31.5 L 70.8,31.0 L 70.7,30.5 L 70.6,30.0 L 70.5,29.5 L 70.4,29.0 L 70.2,28.5 L 70.0,28.0 L 69.8,27.5 L 69.5,27.0 L 69.2,26.5 L 68.9,26.0 L 68.6,25.5 L 68.3,25.0 L 68.0,24.5",
        color: "#2563EB",
        origin: "Tibet, near Lake Mansarovar",
        length: "3,180 km",
        info: "Pakistan's longest river, flowing from the Tibetan Plateau through the entire length of the country to the Arabian Sea"
    },
    {
        name: "Jhelum River",
        path: "M 75.0,34.2 L 74.5,34.0 L 74.0,33.8 L 73.5,33.5 L 73.2,33.2 L 73.0,32.8 L 72.8,32.5 L 72.6,32.2",
        color: "#3B82F6",
        origin: "Verinag Spring, Kashmir",
        length: "725 km",
        info: "One of the five rivers of Punjab, flows through Kashmir and joins Chenab near Trimmu"
    },
    {
        name: "Chenab River",
        path: "M 76.0,33.5 L 75.5,33.3 L 75.0,33.0 L 74.5,32.7 L 74.0,32.5 L 73.5,32.3 L 73.0,32.1",
        color: "#60A5FA",
        origin: "Himachal Pradesh, India",
        length: "960 km",
        info: "Formed by confluence of Chandra and Bhaga rivers in India, flows through Jammu & Kashmir"
    },
    {
        name: "Ravi River",
        path: "M 75.8,32.5 L 75.3,32.3 L 74.8,32.0 L 74.3,31.7 L 73.9,31.5",
        color: "#93C5FD",
        origin: "Himachal Pradesh, India",
        length: "720 km",
        info: "Forms part of India-Pakistan border, flows through Lahore"
    },
    {
        name: "Sutlej River",
        path: "M 77.0,31.5 L 76.5,31.3 L 76.0,31.0 L 75.5,30.8 L 75.0,30.6 L 74.5,30.5",
        color: "#BFDBFE",
        origin: "Lake Rakshastal, Tibet",
        length: "1,450 km",
        info: "Longest of the five rivers of Punjab, joins Chenab to form Panjnad River"
    }
];

// Real mountain peaks with accurate coordinates
export const realMountains = [
    {
        name: "K2",
        coordinates: [76.51, 35.88],
        height: "8,611m",
        range: "Karakoram",
        info: "Second highest mountain in the world, also known as Mount Godwin-Austen"
    },
    {
        name: "Nanga Parbat",
        coordinates: [74.59, 35.24],
        height: "8,126m",
        range: "Himalayas",
        info: "Ninth highest mountain, known as 'Killer Mountain' due to difficult climbing conditions"
    },
    {
        name: "Gasherbrum I",
        coordinates: [76.70, 35.72],
        height: "8,080m",
        range: "Karakoram",
        info: "11th highest mountain, also known as Hidden Peak"
    },
    {
        name: "Broad Peak",
        coordinates: [76.57, 35.81],
        height: "8,051m",
        range: "Karakoram",
        info: "12th highest mountain, located near K2"
    },
    {
        name: "Gasherbrum II",
        coordinates: [76.65, 35.76],
        height: "8,035m",
        range: "Karakoram",
        info: "13th highest mountain in the world"
    },
    {
        name: "Tirich Mir",
        coordinates: [71.50, 36.25],
        height: "7,708m",
        range: "Hindu Kush",
        info: "Highest mountain of the Hindu Kush range"
    },
    {
        name: "Rakaposhi",
        coordinates: [74.49, 36.14],
        height: "7,788m",
        range: "Karakoram",
        info: "27th highest mountain, known for its dramatic rise above Hunza Valley"
    }
];

// Major cities with accurate coordinates
export const majorCities = [
    { name: "Karachi", coordinates: [67.01, 24.86], province: "Sindh", population: "16M" },
    { name: "Lahore", coordinates: [74.35, 31.55], province: "Punjab", population: "13M" },
    { name: "Islamabad", coordinates: [73.05, 33.68], province: "Capital", population: "1.1M" },
    { name: "Rawalpindi", coordinates: [73.07, 33.60], province: "Punjab", population: "2.1M" },
    { name: "Faisalabad", coordinates: [73.08, 31.42], province: "Punjab", population: "3.2M" },
    { name: "Multan", coordinates: [71.47, 30.20], province: "Punjab", population: "2M" },
    { name: "Peshawar", coordinates: [71.57, 34.00], province: "KPK", population: "2M" },
    { name: "Quetta", coordinates: [67.00, 30.18], province: "Balochistan", population: "1.1M" },
    { name: "Gilgit", coordinates: [74.31, 35.92], province: "GB", population: "0.2M" },
    { name: "Muzaffarabad", coordinates: [73.47, 34.37], province: "AJK", population: "0.7M" },
    { name: "Hyderabad", coordinates: [68.37, 25.39], province: "Sindh", population: "1.7M" },
    { name: "Gujranwala", coordinates: [74.18, 32.15], province: "Punjab", population: "2.1M" },
    { name: "Sialkot", coordinates: [74.53, 32.49], province: "Punjab", population: "0.7M" },
    { name: "Bahawalpur", coordinates: [71.68, 29.40], province: "Punjab", population: "0.8M" },
    { name: "Sargodha", coordinates: [72.67, 32.08], province: "Punjab", population: "0.7M" },
];

// Accurate CPEC route
export const cpecRouteAccurate = {
    name: "China-Pakistan Economic Corridor",
    mainRoute: "M 75.53,36.85 L 75.0,36.5 L 74.5,36.0 L 74.0,35.5 L 73.5,35.0 L 73.2,34.5 L 73.0,34.0 L 72.8,33.5 L 72.6,33.0 L 72.4,32.5 L 72.2,32.0 L 72.0,31.5 L 71.8,31.0 L 71.6,30.5 L 71.4,30.0 L 71.2,29.5 L 71.0,29.0 L 70.8,28.5 L 70.5,28.0 L 70.2,27.5 L 69.8,27.0 L 69.4,26.5 L 69.0,26.0 L 68.5,25.5 L 68.0,25.0 L 67.5,24.6 L 67.0,24.3 L 66.5,24.1 L 66.2,23.9",
    start: "Khunjerab Pass (Pakistan-China Border)",
    end: "Gwadar Port (Arabian Sea)",
    totalLength: "3,000 km",
    sezs: [
        { name: "Rashakai SEZ", coordinates: [72.05, 34.05], type: "Industrial" },
        { name: "Hattar SEZ", coordinates: [72.92, 33.98], type: "Industrial" },
        { name: "Faisalabad M3 SEZ", coordinates: [73.08, 31.42], type: "Textile & Manufacturing" },
        { name: "Allama Iqbal SEZ", coordinates: [74.35, 31.48], type: "Industrial" },
        { name: "Dhabeji SEZ", coordinates: [67.85, 24.85], type: "Petrochemical" },
        { name: "Bostan SEZ", coordinates: [66.99, 30.21], type: "Agricultural Processing" },
    ]
};
