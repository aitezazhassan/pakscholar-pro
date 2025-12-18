// ISLAMIC STUDIES - PPSC Preparation
// Quran, Hadith, Islamic History & Pillars

export interface QuranSurah {
    number: number;
    name: string;
    arabicName: string;
    meaning: string;
    verses: number;
    revelation: 'Makki' | 'Madani';
    importance: string;
}

export interface Hadith {
    id: number;
    book: string;
    hadithNumber: number;
    narrator: string;
    text: string;
    theme: string;
    importance: 'Critical' | 'High' | 'Medium';
}

export interface Prophet {
    name: string;
    arabicName: string;
    book?: string;
    people: string;
    miracle?: string;
    mentioned: string;
}

// Important Surahs for PPSC
export const importantSurahs: QuranSurah[] = [
    { number: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', meaning: 'The Opening', verses: 7, revelation: 'Makki', importance: 'Recited in every prayer, essence of Quran' },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', meaning: 'The Cow', verses: 286, revelation: 'Madani', importance: 'Longest surah, Ayatul Kursi (verse 255)' },
    { number: 36, name: 'Ya-Sin', arabicName: 'يس', meaning: 'Ya-Sin', verses: 83, revelation: 'Makki', importance: 'Heart of Quran' },
    { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', meaning: 'The Most Merciful', verses: 78, revelation: 'Madani', importance: 'Describes Allah\'s blessings' },
    { number: 67, name: 'Al-Mulk', arabicName: 'الملك', meaning: 'The Sovereignty', verses: 30, revelation: 'Makki', importance: 'Protection from grave punishment' },
    { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', meaning: 'The Sincerity', verses: 4, revelation: 'Makki', importance: 'Tawheed - equals 1/3rd of Quran' },
    { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', meaning: 'The Daybreak', verses: 5, revelation: 'Makki', importance: 'Seeking refuge from evil' },
    { number: 114, name: 'An-Nas', arabicName: 'الناس', meaning: 'Mankind', verses: 6, revelation: 'Makki', importance: 'Seeking refuge from whispers' }
];

// Quran Quick Facts
export const quranFacts = {
    totalSurahs: 114,
    totalVerses: 6236,
    totalWords: 77439,
    totalLetters: 323671,
    totalParas: 30,
    totalRukus: 558,
    revelationPeriod: '23 years',
    firstRevelation: 'Surah Al-Alaq (96:1-5)',
    lastRevelation: 'Surah An-Nasr (110)',
    longestSurah: 'Al-Baqarah (286 verses)',
    shortestSurah: 'Al-Kawthar (3 verses)',
    middleSurah: 'Al-Kahf (18)',
    sujoodAyaat: 14
};

// Five Pillars of Islam
export const fivePillars = [
    {
        name: 'Shahadah',
        arabic: 'الشهادة',
        meaning: 'Declaration of Faith',
        description: 'La ilaha illallah, Muhammad ur Rasulullah (There is no god but Allah, Muhammad is the messenger of Allah)',
        importance: 'Foundation of Islam'
    },
    {
        name: 'Salah',
        arabic: 'الصلاة',
        meaning: 'Prayer',
        description: '5 daily prayers: Fajr, Dhuhr, Asr, Maghrib, Isha',
        importance: 'Direct connection with Allah'
    },
    {
        name: 'Zakat',
        arabic: 'الزكاة',
        meaning: 'Almsgiving',
        description: '2.5% of wealth given to poor annually',
        importance: 'Purification of wealth, helping needy'
    },
    {
        name: 'Sawm',
        arabic: 'الصوم',
        meaning: 'Fasting',
        description: 'Fasting during Ramadan from dawn to sunset',
        importance: 'Self-discipline, empathy for poor'
    },
    {
        name: 'Hajj',
        arabic: 'الحج',
        meaning: 'Pilgrimage',
        description: 'Pilgrimage to Makkah once in lifetime if able',
        importance: 'Unity of Muslims, following Prophet Ibrahim'
    }
];

// Important Prophets (25 mentioned in Quran)
export const prophets: Prophet[] = [
    { name: 'Adam', arabicName: 'آدم', people: 'First human', mentioned: 'Father of mankind' },
    { name: 'Nuh (Noah)', arabicName: 'نوح', people: 'His people', miracle: 'The Ark', mentioned: 'Saved from flood' },
    { name: 'Ibrahim (Abraham)', arabicName: 'إبراهيم', people: 'Mesopotamia', miracle: 'Survived fire', mentioned: 'Friend of Allah, father of prophets' },
    { name: 'Ismail (Ishmael)', arabicName: 'إسماعيل', people: 'Arabs', mentioned: 'Son of Ibrahim, built Kaaba' },
    { name: 'Ishaq (Isaac)', arabicName: 'إسحاق', people: 'Israelites', mentioned: 'Son of Ibrahim' },
    { name: 'Yaqub (Jacob)', arabicName: 'يعقوب', people: 'Israelites', mentioned: 'Also called Israel' },
    { name: 'Yusuf (Joseph)', arabicName: 'يوسف', people: 'Egypt', mentioned: 'Story in Surah Yusuf' },
    { name: 'Musa (Moses)', arabicName: 'موسى', book: 'Torah', people: 'Israelites', miracle: 'Staff, splitting sea', mentioned: 'Most mentioned prophet in Quran' },
    { name: 'Harun (Aaron)', arabicName: 'هارون', people: 'Israelites', mentioned: 'Brother of Musa' },
    { name: 'Dawud (David)', arabicName: 'داوود', book: 'Zabur', people: 'Israelites', miracle: 'Beautiful voice', mentioned: 'King and prophet' },
    { name: 'Sulaiman (Solomon)', arabicName: 'سليمان', people: 'Israelites', miracle: 'Control over jinn, animals', mentioned: 'Wise king' },
    { name: 'Isa (Jesus)', arabicName: 'عيسى', book: 'Injil', people: 'Israelites', miracle: 'Born without father, healing, raising dead', mentioned: 'Messiah, will return' },
    { name: 'Muhammad', arabicName: 'محمد', book: 'Quran', people: 'All mankind', miracle: 'Quran', mentioned: 'Last and final prophet (PBUH)' }
];

// Important Hadiths
export const importantHadiths: Hadith[] = [
    {
        id: 1,
        book: 'Sahih Bukhari',
        hadithNumber: 1,
        narrator: 'Umar ibn al-Khattab',
        text: 'Actions are judged by intentions, and every person will get reward according to what he intended.',
        theme: 'Intention (Niyyah)',
        importance: 'Critical'
    },
    {
        id: 2,
        book: 'Sahih Muslim',
        hadithNumber: 1,
        narrator: 'Abdullah ibn Umar',
        text: 'Islam is built upon five: testimony that there is no god but Allah and Muhammad is His messenger, establishing prayer, paying Zakat, Hajj, and fasting Ramadan.',
        theme: 'Five Pillars',
        importance: 'Critical'
    },
    {
        id: 3,
        book: 'Sahih Bukhari',
        hadithNumber: 10,
        narrator: 'Abu Musa',
        text: 'The best of people are those with the most excellent character.',
        theme: 'Good Character',
        importance: 'High'
    },
    {
        id: 4,
        book: 'Sahih Muslim',
        hadithNumber: 45,
        narrator: 'Abu Hurairah',
        text: 'The strong person is not the one who can wrestle, but the one who controls himself in anger.',
        theme: 'Self-control',
        importance: 'High'
    },
    {
        id: 5,
        book: 'Sahih Bukhari',
        hadithNumber: 24,
        narrator: 'Abu Hurairah',
        text: 'Whoever believes in Allah and the Last Day should speak good or remain silent.',
        theme: 'Speech',
        importance: 'High'
    }
];

// Islamic Calendar
export const islamicMonths = [
    { number: 1, name: 'Muharram', significance: 'Sacred month, Ashura (10th)' },
    { number: 2, name: 'Safar', significance: 'No specific events' },
    { number: 3, name: 'Rabi al-Awwal', significance: 'Birth of Prophet Muhammad (12th)' },
    { number: 4, name: 'Rabi al-Thani', significance: 'No specific events' },
    { number: 5, name: 'Jumada al-Awwal', significance: 'No specific events' },
    { number: 6, name: 'Jumada al-Thani', significance: 'No specific events' },
    { number: 7, name: 'Rajab', significance: 'Sacred month, Isra and Miraj (27th)' },
    { number: 8, name: 'Shaban', significance: 'Preparation for Ramadan' },
    { number: 9, name: 'Ramadan', significance: 'Fasting month, Laylatul Qadr' },
    { number: 10, name: 'Shawwal', significance: 'Eid ul-Fitr (1st)' },
    { number: 11, name: 'Dhul Qadah', significance: 'Sacred month' },
    { number: 12, name: 'Dhul Hijjah', significance: 'Hajj month, Eid ul-Adha (10th)' }
];

// Important Islamic Events
export const islamicHistory = [
    { year: 570, event: 'Year of Elephant, Birth of Prophet Muhammad (PBUH)', location: 'Makkah' },
    { year: 610, event: 'First revelation in Cave Hira', location: 'Makkah' },
    { year: 622, event: 'Hijrah (Migration) to Madinah - Start of Islamic calendar', location: 'Madinah' },
    { year: 624, event: 'Battle of Badr', location: 'Badr' },
    { year: 625, event: 'Battle of Uhud', location: 'Uhud' },
    { year: 627, event: 'Battle of Trench (Khandaq)', location: 'Madinah' },
    { year: 630, event: 'Conquest of Makkah', location: 'Makkah' },
    { year: 632, event: 'Farewell Pilgrimage, Death of Prophet (PBUH)', location: 'Makkah/Madinah' },
    { year: 632, event: 'Abu Bakr becomes first Caliph', location: 'Madinah' },
    { year: 634, event: 'Umar ibn al-Khattab becomes 2nd Caliph', location: 'Madinah' },
    { year: 644, event: 'Uthman ibn Affan becomes 3rd Caliph', location: 'Madinah' },
    { year: 656, event: 'Ali ibn Abi Talib becomes 4th Caliph', location: 'Madinah' }
];

// Khulafa-e-Rashideen (Rightly Guided Caliphs)
export const khulafaRashideen = [
    {
        name: 'Abu Bakr as-Siddiq',
        period: '632-634 CE (2 years)',
        title: 'As-Siddiq (The Truthful)',
        achievements: ['Compiled Quran', 'Wars against apostasy', 'Expanded Islamic state'],
        death: 'Natural causes'
    },
    {
        name: 'Umar ibn al-Khattab',
        period: '634-644 CE (10 years)',
        title: 'Al-Farooq (The Criterion)',
        achievements: ['Greatest expansion', 'Established Islamic calendar', 'Justice system', 'Conquered Persia, Egypt, Syria'],
        death: 'Assassinated by Abu Lulu'
    },
    {
        name: 'Uthman ibn Affan',
        period: '644-656 CE (12 years)',
        title: 'Dhun-Nurain (Possessor of Two Lights)',
        achievements: ['Standardized Quran', 'Expanded navy', 'Built infrastructure'],
        death: 'Assassinated by rebels'
    },
    {
        name: 'Ali ibn Abi Talib',
        period: '656-661 CE (5 years)',
        title: 'Asadullah (Lion of Allah)',
        achievements: ['Focus on justice', 'Arabic grammar', 'Islamic jurisprudence'],
        death: 'Assassinated by Khawarij'
    }
];
