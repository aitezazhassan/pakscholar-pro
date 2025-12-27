const fs = require('fs');

// Read the current file
const data = JSON.parse(fs.readFileSync('public/data/mock-exams/pms-2023.json', 'utf8'));

// Add the remaining 15 questions
const newQuestions = [
    {
        id: 86,
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Physics",
        explanation: "The Ampere (A) is the SI unit of electric current."
    },
    {
        id: 87,
        question: "Which gas is known as laughing gas?",
        options: ["Nitrogen", "Nitrous Oxide", "Carbon Dioxide", "Oxygen"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Chemistry",
        explanation: "Nitrous oxide (N₂O) is commonly known as laughing gas."
    },
    {
        id: 88,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Biology",
        explanation: "Mitochondria generate most of the cell's ATP (energy)."
    },
    {
        id: 89,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Astronomy",
        explanation: "Mars is called the Red Planet due to iron oxide on its surface."
    },
    {
        id: 90,
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "H2O2"],
        correctAnswer: 0,
        subject: "Everyday Science",
        topic: "Chemistry",
        explanation: "Water has the chemical formula H₂O."
    },
    {
        id: 91,
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: 3,
        subject: "Everyday Science",
        topic: "Biology",
        explanation: "Vitamin D is synthesized in the skin when exposed to sunlight."
    },
    {
        id: 92,
        question: "What is the speed of light in vacuum?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
        correctAnswer: 0,
        subject: "Everyday Science",
        topic: "Physics",
        explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s."
    },
    {
        id: 93,
        question: "Which organ in the human body filters blood?",
        options: ["Liver", "Heart", "Kidney", "Lungs"],
        correctAnswer: 2,
        subject: "Everyday Science",
        topic: "Biology",
        explanation: "The kidneys filter blood to remove waste products."
    },
    {
        id: 94,
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Environmental Science",
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
    },
    {
        id: 95,
        question: "Which metal is liquid at room temperature?",
        options: ["Gold", "Silver", "Mercury", "Copper"],
        correctAnswer: 2,
        subject: "Everyday Science",
        topic: "Chemistry",
        explanation: "Mercury is the only metal that remains liquid at room temperature."
    },
    {
        id: 96,
        question: "What type of bond is formed when electrons are shared?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Chemistry",
        explanation: "A covalent bond is formed when atoms share electrons."
    },
    {
        id: 97,
        question: "Who developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Physics",
        explanation: "Albert Einstein developed the theory of general relativity in 1915."
    },
    {
        id: 98,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        correctAnswer: 2,
        subject: "Everyday Science",
        topic: "Biology",
        explanation: "The skin is the largest organ of the human body."
    },
    {
        id: 99,
        question: "Which process do plants use to make their food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Biology",
        explanation: "Photosynthesis is how plants produce glucose using sunlight."
    },
    {
        id: 100,
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1,
        subject: "Everyday Science",
        topic: "Physics",
        explanation: "Water boils at 100°C at sea level atmospheric pressure."
    }
];

// Add new questions to the array
data.questions.push(...newQuestions);

// Write back to file
fs.writeFileSync('public/data/mock-exams/pms-2023.json', JSON.stringify(data, null, 4));

console.log(`Total questions: ${data.questions.length}`);
