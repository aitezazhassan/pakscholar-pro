// GENERAL SCIENCE - Physics, Chemistry, Biology for PPSC

export interface ScienceTopic {
    id: number;
    subject: 'Physics' | 'Chemistry' | 'Biology' | 'Everyday Science';
    topic: string;
    concept: string;
    explanation: string;
    example?: string;
    formula?: string;
    importance: 'Critical' | 'High' | 'Medium';
}

// PHYSICS Topics
export const physicsTopics: ScienceTopic[] = [
    {
        id: 1,
        subject: 'Physics',
        topic: 'Speed, Velocity & Acceleration',
        concept: 'Speed is distance/time. Velocity is speed with direction. Acceleration is rate of change of velocity.',
        explanation: 'Speed = Distance/Time (scalar). Velocity = Displacement/Time (vector). Acceleration = Change in velocity/Time.',
        formula: 'Speed = d/t, Velocity = Δs/Δt, Acceleration = Δv/Δt',
        importance: 'Critical'
    },
    {
        id: 2,
        subject: 'Physics',
        topic: 'Newton\'s Laws of Motion',
        concept: '1st: Body at rest stays at rest. 2nd: F=ma. 3rd: Action-reaction.',
        explanation: '1st Law (Inertia): Object continues its state unless force applied. 2nd Law: Force equals mass times acceleration. 3rd Law: Every action has equal and opposite reaction.',
        formula: 'F = ma',
        importance: 'Critical'
    },
    {
        id: 3,
        subject: 'Physics',
        topic: 'Energy',
        concept: 'Capacity to do work. Cannot be created or destroyed, only transformed.',
        explanation: 'Types: Kinetic (motion), Potential (position), Thermal (heat), Chemical, Electrical, Nuclear. Law of Conservation: Energy can change forms but total remains constant.',
        example: 'Battery (chemical) → Bulb (light + heat)',
        importance: 'Critical'
    },
    {
        id: 4,
        subject: 'Physics',
        topic: 'Electricity',
        concept: 'Flow of electric charge. Measured in Amperes (current), Volts (potential), Ohms (resistance).',
        explanation: 'Current (I) = flow of electrons. Voltage (V) = electrical pressure. Resistance (R) = opposition to flow. Ohm\'s Law: V = IR',
        formula: 'V = IR, P = VI',
        importance: 'Critical'
    },
    {
        id: 5,
        subject: 'Physics',
        topic: 'Light',
        concept: 'Electromagnetic radiation visible to human eye. Travels at 3×10⁸ m/s in vacuum.',
        explanation: 'Reflection: light bounces off surfaces. Refraction: light bends when changing medium. Dispersion: white light splits into colors (VIBGYOR).',
        example: 'Rainbow is dispersion of sunlight by water droplets',
        importance: 'High'
    },
    {
        id: 6,
        subject: 'Physics',
        topic: 'Sound',
        concept: 'Mechanical wave that requires medium to travel. Cannot travel in vacuum.',
        explanation: 'Produced by vibrations. Speed in air ≈ 343 m/s. Measured in Hertz (Hz). Human hearing range: 20 Hz - 20,000 Hz.',
        example: 'Thunder is heard after lightning because light travels faster than sound',
        importance: 'High'
    }
];

// CHEMISTRY Topics
export const chemistryTopics: ScienceTopic[] = [
    {
        id: 11,
        subject: 'Chemistry',
        topic: 'Atoms & Elements',
        concept: 'Atom is smallest unit of matter. Element is pure substance made of one type of atom.',
        explanation: 'Atom has nucleus (protons + neutrons) and electrons orbiting. Atomic number = protons. Mass number = protons + neutrons.',
        example: 'Hydrogen (H) has 1 proton, Oxygen (O) has 8 protons',
        importance: 'Critical'
    },
    {
        id: 12,
        subject: 'Chemistry',
        topic: 'Periodic Table',
        concept: 'Organized arrangement of all chemical elements by atomic number.',
        explanation: '118 elements. Rows = Periods (7). Columns = Groups (18). Elements in same group have similar properties.',
        example: 'Group 1: Alkali metals (Li, Na, K), Group 18: Noble gases (He, Ne, Ar)',
        importance: 'Critical'
    },
    {
        id: 13,
        subject: 'Chemistry',
        topic: 'Acids, Bases & pH',
        concept: 'Acids taste sour, turn litmus red. Bases taste bitter, turn litmus blue. pH scale 0-14.',
        explanation: 'pH < 7 = Acidic, pH = 7 = Neutral, pH > 7 = Basic. Strong acids: HCl, H₂SO₄. Strong bases: NaOH, KOH.',
        example: 'Lemon juice (acidic), Water (neutral), Soap (basic)',
        importance: 'Critical'
    },
    {
        id: 14,
        subject: 'Chemistry',
        topic: 'Chemical Reactions',
        concept: 'Process where substances (reactants) transform into new substances (products).',
        explanation: 'Types: Combination, Decomposition, Displacement, Double displacement, Redox. Law of Conservation of Mass: Mass remains constant.',
        example: '2H₂ + O₂ → 2H₂O (Combination)',
        importance: 'High'
    },
    {
        id: 15,
        subject: 'Chemistry',
        topic: 'Common Compounds',
        concept: 'Important chemical compounds in daily life.',
        explanation: 'Water (H₂O), Salt (NaCl), Sugar (C₁₂H₂₂O₁₁), Baking Soda (NaHCO₃), Vinegar (CH₃COOH)',
        importance: 'High'
    }
];

// BIOLOGY Topics
export const biologyTopics: ScienceTopic[] = [
    {
        id: 21,
        subject: 'Biology',
        topic: 'Cell - Basic Unit of Life',
        concept: 'Cell is smallest living unit. All living things made of cells.',
        explanation: 'Parts: Cell membrane (boundary), Cytoplasm (jelly), Nucleus (control center), Mitochondria (powerhouse). Plant cells have cell wall and chloroplasts.',
        importance: 'Critical'
    },
    {
        id: 22,
        subject: 'Biology',
        topic: 'Human Body Systems',
        concept: 'Body has 11 major organ systems working together.',
        explanation: 'Circulatory (heart, blood), Respiratory (lungs), Digestive (stomach, intestines), Nervous (brain, nerves), Skeletal (bones), Muscular (muscles), etc.',
        importance: 'Critical'
    },
    {
        id: 23,
        subject: 'Biology',
        topic: 'Blood & Circulation',
        concept: 'Blood carries oxygen and nutrients. Heart pumps blood throughout body.',
        explanation: 'Blood components: RBC (carry oxygen), WBC (fight infection), Platelets (clotting), Plasma (liquid). Blood groups: A, B, AB, O with +/- Rh factor.',
        importance: 'High'
    },
    {
        id: 24,
        subject: 'Biology',
        topic: 'Photosynthesis',
        concept: 'Plants make food using sunlight, water, and CO₂.',
        explanation: 'Occurs in chloroplasts. 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂. Plants release oxygen helpful for animals.',
        formula: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
        importance: 'Critical'
    },
    {
        id: 25,
        subject: 'Biology',
        topic: 'DNA & Genetics',
        concept: 'DNA carries genetic information. Inherited from parents.',
        explanation: 'DNA = Deoxyribonucleic Acid. Double helix structure. Made of 4 bases: A, T, G, C. Genes are segments of DNA that code for traits.',
        importance: 'High'
    },
    {
        id: 26,
        subject: 'Biology',
        topic: 'Vitamins',
        concept: 'Essential nutrients needed in small amounts for body functions.',
        explanation: 'Vitamin A (eyes), B (energy), C (immunity, scurvy prevention), D (bones, from sunlight), E (antioxidant), K (blood clotting)',
        example: 'Vitamin C deficiency causes scurvy',
        importance: 'High'
    }
];

// EVERYDAY SCIENCE Facts
export const everydayScience: ScienceTopic[] = [
    {
        id: 31,
        subject: 'Everyday Science',
        topic: 'Why is sky blue?',
        concept: 'Rayleigh scattering of sunlight by atmosphere.',
        explanation: 'Blue light has shorter wavelength, scatters more in all directions making sky appear blue. At sunset, light travels longer path, more scattering, only red/orange reaches us.',
        importance: 'Medium'
    },
    {
        id: 32,
        subject: 'Everyday Science',
        topic: 'Why do we have seasons?',
        concept: 'Earth\'s tilted axis (23.5°) as it orbits the sun.',
        explanation: 'When northern hemisphere tilted toward sun = summer there, winter in southern hemisphere. Vice versa 6 months later.',
        importance: 'High'
    },
    {
        id: 33,
        subject: 'Everyday Science',
        topic: 'How do refrigerators work?',
        concept: 'Evaporation removes heat.',
        explanation: 'Refrigerant liquid evaporates inside fridge, absorbing heat. Gas is compressed outside, releases heat. Cycle repeats.',
        importance: 'Medium'
    },
    {
        id: 34,
        subject: 'Everyday Science',
        topic: 'Why do objects fall?',
        concept: 'Gravity - force of attraction between masses.',
        explanation: 'Earth\'s gravity pulls objects toward its center. All objects fall at same rate (ignoring air resistance). Acceleration = 9.8 m/s².',
        importance: 'Critical'
    },
    {
        id: 35,
        subject: 'Everyday Science',
        topic: 'Boiling & Melting Points',
        concept: 'Temperature at which substance changes state.',
        explanation: 'Water boils at 100°C (212°F), freezes at 0°C (32°F) at sea level. Pressure affects these values.',
        importance: 'High'
    }
];

// Important Scientists
export const famousScientists = [
    { name: 'Isaac Newton', field: 'Physics', contribution: 'Laws of Motion, Gravity, Calculus', era: '1642-1727' },
    { name: 'Albert Einstein', field: 'Physics', contribution: 'Theory of Relativity (E=mc²)', era: '1879-1955' },
    { name: 'Marie Curie', field: 'Chemistry/Physics', contribution: 'Radioactivity, Polonium, Radium', era: '1867-1934' },
    { name: 'Charles Darwin', field: 'Biology', contribution: 'Theory of Evolution by Natural Selection', era: '1809-1882' },
    { name: 'Louis Pasteur', field: 'Biology', contribution: 'Germ Theory, Pasteurization, Vaccines', era: '1822-1895' },
    { name: 'Gregor Mendel', field: 'Biology', contribution: 'Laws of Inheritance (Father of Genetics)', era: '1822-1884' },
    { name: 'Dmitri Mendeleev', field: 'Chemistry', contribution: 'Periodic Table of Elements', era: '1834-1907' },
    { name: 'Galileo Galilei', field: 'Physics/Astronomy', contribution: 'Telescope, Laws of Motion', era: '1564-1642' }
];

// Scientific Inventions
export const majorInventions = [
    { invention: 'Telephone', inventor: 'Alexander Graham Bell', year: 1876 },
    { invention: 'Light Bulb', inventor: 'Thomas Edison', year: 1879 },
    { invention: 'X-Ray', inventor: 'Wilhelm Röntgen', year: 1895 },
    { invention: 'Penicillin (Antibiotic)', inventor: 'Alexander Fleming', year: 1928 },
    { invention: 'Computer', inventor: 'Charles Babbage (concept)', year: '1940s (modern)' },
    { invention: 'Internet', inventor: 'Tim Berners-Lee (WWW)', year: 1989 },
    { invention: 'Airplane', inventor: 'Wright Brothers', year: 1903 },
    { invention: 'Radio', inventor: 'Guglielmo Marconi', year: 1895 }
];

export const allScienceTopics = [
    ...physicsTopics,
    ...chemistryTopics,
    ...biologyTopics,
    ...everydayScience
];

export const scienceCategories = [
    { name: 'Physics', count: physicsTopics.length },
    { name: 'Chemistry', count: chemistryTopics.length },
    { name: 'Biology', count: biologyTopics.length },
    { name: 'Everyday Science', count: everydayScience.length }
];
