export interface MathProblem {
    id: number;
    topic: string;
    question: string;
    solution: string;
    difficulty: 'easy' | 'medium' | 'hard';
    year?: number;
}

export const mathConcepts = [
    {
        topic: 'Percentage',
        formula: 'Percentage = (Part / Whole) × 100',
        description: 'Used to express a number as a fraction of 100',
        examples: [
            'What is 25% of 400? → (25/100) × 400 = 100',
            'If 60 out of 200 students passed, what is the pass percentage? → (60/200) × 100 = 30%',
            'A shopkeeper gives 20% discount on marked price of Rs. 500. What is selling price? → 500 - (20% of 500) = 500 - 100 = Rs. 400'
        ]
    },
    {
        topic: 'Ratio and Proportion',
        formula: 'a:b = c:d → a×d = b×c',
        description: 'Comparison of two or more quantities',
        examples: [
            'Divide 500 in ratio 2:3 → Total parts = 5, Part 1 = (2/5)×500 = 200',
            'If 3 pens cost Rs. 45, what is the cost of 7 pens? → (3/45) = (7/x) → x = 105',
            'Salaries of A and B are in ratio 3:4. If A gets Rs. 15,000, B gets? → (3/15000) = (4/x) → x = 20,000'
        ]
    },
    {
        topic: 'Age Problems',
        formula: 'Present Age + Years = Future Age',
        description: 'Solving problems involving ages at different time periods',
        examples: [
            'John is 5 years older than Mary. In 10 years, sum of ages will be 45. Find current ages.',
            'Father is 3 times as old as son. 12 years ago, he was 7 times as old. Find ages.',
            'Average age of 4 friends is 25. If one new friend joins, average becomes 24. Find new friend\'s age.'
        ]
    },
    {
        topic: 'Simple Interest',
        formula: 'SI = (P × R × T) / 100',
        description: 'Interest calculated on principal amount only',
        examples: [
            'P = Rs. 5000, R = 8%, T = 3 years → SI = (5000×8×3)/100 = Rs. 1200',
            'Amount after 2 years = Principal + SI',
            'If SI for 4 years is Rs. 800, rate is 5%, find principal → P = (SI×100)/(R×T)'
        ]
    },
    {
        topic: 'Compound Interest',
        formula: 'A = P(1 + R/100)^T',
        description: 'Interest calculated on accumulated amount',
        examples: [
            'P = Rs. 10000, R = 10%, T = 2 years → A = 10000(1.1)² = Rs. 12,100',
            'CI = Amount - Principal',
            'Difference between CI and SI = P(R/100)²'
        ]
    },
    {
        topic: 'Profit and Loss',
        formula: 'Profit% = [(SP - CP)/CP] × 100',
        description: 'Calculating gains or losses in business transactions',
        examples: [
            'CP = Rs. 500, SP = Rs. 600 → Profit = 600-500 = Rs. 100, Profit% = (100/500)×100 = 20%',
            'Loss% = [(CP - SP)/CP] × 100',
            'SP with 20% profit = CP × (120/100)'
        ]
    },
    {
        topic: 'Time and Work',
        formula: 'Work = Time × Efficiency',
        description: 'Calculating work completion based on time and workers',
        examples: [
            'A completes work in 10 days, B in 15 days. Together in? → 1/10 + 1/15 = 1/6, so 6 days',
            '5 workers complete a job in 12 days. How many workers for 6 days? → 5×12 = x×6 → x = 10',
            'Efficiency = 1/Time taken'
        ]
    },
    {
        topic: 'Speed, Distance, Time',
        formula: 'Speed = Distance / Time',
        description: 'Problems involving motion and travel',
        examples: [
            'Distance = 120 km, Time = 3 hours → Speed = 120/3 = 40 km/h',
            'Convert km/h to m/s: multiply by 5/18',
            'If two trains cross each other, relative speed = Sum of speeds'
        ]
    },
    {
        topic: 'Average',
        formula: 'Average = Sum of values / Number of values',
        description: 'Finding the central tendency of a dataset',
        examples: [
            'Average of 5, 10, 15, 20 = (5+10+15+20)/4 = 12.5',
            'If average of 5 numbers is 20, sum = 5×20 = 100',
            'New average after addition = (Old Sum + New Value)/(n+1)'
        ]
    }
];

export const pastPaperProblems: MathProblem[] = [
    // Ratio Problems
    {
        id: 1,
        topic: 'Ratio',
        question: 'Divide Rs. 7200 between A, B, and C in the ratio 2:3:4',
        solution: 'Step 1: Total parts = 2+3+4 = 9\nStep 2: Value per part = 7200÷9 = 800\nStep 3: A gets 2×800 = Rs. 1600\nStep 4: B gets 3×800 = Rs. 2400\nStep 5: C gets 4×800 = Rs. 3200\nVerification: 1600+2400+3200 = 7200 ✓',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 2,
        topic: 'Ratio',
        question: 'The ratio of boys to girls in a class is 3:2. If there are 45 students total, how many are boys?',
        solution: 'Step 1: Total parts = 3+2 = 5\nStep 2: Value per part = 45÷5 = 9\nStep 3: Boys = 3×9 = 27\nStep 4: Girls = 2×9 = 18\nAnswer: 27 boys',
        difficulty: 'easy',
        year: 2023
    },
    {
        id: 3,
        topic: 'Ratio',
        question: 'Two numbers are in ratio 5:7. If their sum is 360, find the smaller number.',
        solution: 'Step 1: Let numbers be 5x and 7x\nStep 2: 5x + 7x = 360\nStep 3: 12x = 360\nStep 4: x = 30\nStep 5: Smaller number = 5×30 = 150\nAnswer: 150',
        difficulty: 'medium',
        year: 2024
    },

    // Percentage Problems
    {
        id: 4,
        topic: 'Percentage',
        question: 'If a shopkeeper sells an item for Rs. 850 after giving 15% discount, what was the original price?',
        solution: 'Step 1: Let original price = x\nStep 2: After 15% discount, selling price = 85% of x\nStep 3: 0.85x = 850\nStep 4: x = 850 ÷ 0.85 = Rs. 1000\nVerification: 15% of 1000 = 150, 1000-150 = 850 ✓',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 5,
        topic: 'Percentage',
        question: 'In an exam, 65% students passed. If 140 students failed, find total students.',
        solution: 'Step 1: If 65% passed, then 35% failed\nStep 2: Let total students = x\nStep 3: 35% of x = 140\nStep 4: 0.35x = 140\nStep 5: x = 140 ÷ 0.35 = 400\nAnswer: 400 students',
        difficulty: 'easy',
        year: 2023
    },
    {
        id: 6,
        topic: 'Percentage',
        question: 'Population of a town increased from 50,000 to 60,000. Find percentage increase.',
        solution: 'Step 1: Increase = 60000 - 50000 = 10000\nStep 2: Percentage increase = (Increase/Original) × 100\nStep 3: = (10000/50000) × 100\nStep 4: = 20%\nAnswer: 20% increase',
        difficulty: 'easy',
        year: 2024
    },
    {
        id: 7,
        topic: 'Percentage',
        question: 'A number increased by 20% becomes 360. What was the original number?',
        solution: 'Step 1: Let original number = x\nStep 2: After 20% increase = 120% of x = 360\nStep 3: 1.2x = 360\nStep 4: x = 360 ÷ 1.2 = 300\nVerification: 300 + 20% of 300 = 300 + 60 = 360 ✓',
        difficulty: 'medium',
        year: 2023
    },

    // Average Problems
    {
        id: 8,
        topic: 'Average',
        question: 'Average of 5 numbers is 40. If one number is excluded, average becomes 35. Find the excluded number.',
        solution: 'Step 1: Sum of 5 numbers = 5×40 = 200\nStep 2: Sum of 4 numbers = 4×35 = 140\nStep 3: Excluded number = 200-140 = 60\nAnswer: 60',
        difficulty: 'easy',
        year: 2023
    },
    {
        id: 9,
        topic: 'Average',
        question: 'Average weight of 10 students is 50 kg. If teacher weighing 70 kg joins, what is new average?',
        solution: 'Step 1: Total weight of 10 students = 10×50 = 500 kg\nStep 2: After teacher joins, total weight = 500+70 = 570 kg\nStep 3: Total persons = 10+1 = 11\nStep 4: New average = 570÷11 = 51.82 kg\nAnswer: 51.82 kg',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 10,
        topic: 'Average',
        question: 'Average of first 10 natural numbers is?',
        solution: 'Step 1: First 10 natural numbers: 1, 2, 3, ... 10\nStep 2: Sum = n(n+1)/2 = 10(11)/2 = 55\nStep 3: Average = Sum/Count = 55/10 = 5.5\nAlternate: Average = (First + Last)/2 = (1+10)/2 = 5.5',
        difficulty: 'easy',
        year: 2024
    },

    // Time & Work Problems
    {
        id: 11,
        topic: 'Time & Work',
        question: 'A can complete a work in 12 days, B in 15 days. How many days will they take together?',
        solution: 'Step 1: A\'s 1 day work = 1/12\nStep 2: B\'s 1 day work = 1/15\nStep 3: Together in 1 day = 1/12 + 1/15\nStep 4: LCM of 12 and 15 = 60\nStep 5: = 5/60 + 4/60 = 9/60 = 3/20\nStep 6: Days required = 20/3 = 6.67 days\nAnswer: 6⅔ days or 6 days 16 hours',
        difficulty: 'hard',
        year: 2024
    },
    {
        id: 12,
        topic: 'Time & Work',
        question: '15 workers can complete a task in 20 days. How many workers needed to complete in 12 days?',
        solution: 'Step 1: Total work = Workers × Days = 15×20 = 300 man-days\nStep 2: Let workers needed = x\nStep 3: x × 12 = 300\nStep 4: x = 300÷12 = 25 workers\nAnswer: 25 workers',
        difficulty: 'medium',
        year: 2023
    },
    {
        id: 13,
        topic: 'Time & Work',
        question: 'A and B together can finish work in 10 days. A alone takes 15 days. How long will B take alone?',
        solution: 'Step 1: (A+B)\'s 1 day work = 1/10\nStep 2: A\'s 1 day work = 1/15\nStep 3: B\'s 1 day work = 1/10 - 1/15\nStep 4: = 3/30 - 2/30 = 1/30\nStep 5: B alone needs 30 days\nAnswer: 30 days',
        difficulty: 'hard',
        year: 2024
    },

    // Profit & Loss Problems
    {
        id: 14,
        topic: 'Profit & Loss',
        question: 'A trader bought 100 items for Rs. 10,000 and sold them for Rs. 120 each. Find profit percentage.',
        solution: 'Step 1: Cost price per item = 10000÷100 = Rs. 100\nStep 2: Selling price per item = Rs. 120\nStep 3: Profit per item = 120-100 = Rs. 20\nStep 4: Profit % = (20/100)×100 = 20%\nAlternate: Total SP = 12000, CP = 10000, Profit% = (2000/10000)×100 = 20%',
        difficulty: 'easy',
        year: 2023
    },
    {
        id: 15,
        topic: 'Profit & Loss',
        question: 'By selling an article for Rs. 800, a man loses 20%. At what price should he sell to gain 10%?',
        solution: 'Step 1: SP = Rs. 800, Loss = 20%\nStep 2: If CP = x, then 80% of x = 800\nStep 3: 0.8x = 800, x = 1000\nStep 4: For 10% profit, SP = 110% of 1000\nStep 5: SP = 1.1 × 1000 = Rs. 1100\nAnswer: Rs. 1100',
        difficulty: 'hard',
        year: 2024
    },
    {
        id: 16,
        topic: 'Profit & Loss',
        question: 'A shopkeeper marks goods 40% above cost price and gives 20% discount. Find profit%.',
        solution: 'Step 1: Let CP = 100\nStep 2: Marked Price = 140\nStep 3: After 20% discount, SP = 80% of 140 = 112\nStep 4: Profit = 112 - 100 = 12\nStep 5: Profit% = (12/100) × 100 = 12%\nAnswer: 12% profit',
        difficulty: 'hard',
        year: 2023
    },

    // Simple Interest Problems
    {
        id: 17,
        topic: 'Simple Interest',
        question: 'Find simple interest on Rs. 5000 for 3 years at 8% per annum.',
        solution: 'Step 1: SI = (P×R×T)/100\nStep 2: SI = (5000×8×3)/100\nStep 3: SI = 120000/100 = Rs. 1200\nAmount = P + SI = 5000 + 1200 = Rs. 6200',
        difficulty: 'easy',
        year: 2024
    },
    {
        id: 18,
        topic: 'Simple Interest',
        question: 'At what rate percent will Rs. 2000 amount to Rs. 2400 in 4 years?',
        solution: 'Step 1: P = 2000, A = 2400, T = 4 years\nStep 2: SI = A - P = 2400 - 2000 = 400\nStep 3: SI = (P×R×T)/100\nStep 4: 400 = (2000×R×4)/100\nStep 5: 400 = 80R\nStep 6: R = 400/80 = 5%\nAnswer: 5% per annum',
        difficulty: 'medium',
        year: 2023
    },
    {
        id: 19,
        topic: 'Simple Interest',
        question: 'In how many years will Rs. 3000 become Rs. 3900 at 6% SI per annum?',
        solution: 'Step 1: P = 3000, A = 3900, R = 6%\nStep 2: SI = 3900 - 3000 = 900\nStep 3: 900 = (3000×6×T)/100\nStep 4: 900 = 180T\nStep 5: T = 900/180 = 5 years\nAnswer: 5 years',
        difficulty: 'medium',
        year: 2024
    },

    // Speed, Distance, Time Problems
    {
        id: 20,
        topic: 'Speed & Distance',
        question: 'A car travels from Lahore to Islamabad (375 km) at 75 km/h. How long does the journey take?',
        solution: 'Step 1: Time = Distance ÷ Speed\nStep 2: Time = 375 ÷ 75\nStep 3: Time = 5 hours\nNote: If return journey at 60 km/h, time = 375÷60 = 6.25 hours',
        difficulty: 'easy',
        year: 2023
    },
    {
        id: 21,
        topic: 'Speed & Distance',
        question: 'A train 150m long crosses a pole in 10 seconds. Find its speed in km/h.',
        solution: 'Step 1: Speed = Distance/Time = 150m/10s = 15 m/s\nStep 2: Convert to km/h: multiply by 18/5\nStep 3: Speed = 15 × (18/5) = 54 km/h\nAlternate: 15 m/s × 3.6 = 54 km/h',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 22,
        topic: 'Speed & Distance',
        question: 'Two trains 120m and 180m long running at 40 km/h and 50 km/h cross each other in how many seconds?',
        solution: 'Step 1: Total length = 120 + 180 = 300m\nStep 2: Relative speed = 40 + 50 = 90 km/h (opposite directions)\nStep 3: Convert to m/s: 90 × (5/18) = 25 m/s\nStep 4: Time = Distance/Speed = 300/25 = 12 seconds\nAnswer: 12 seconds',
        difficulty: 'hard',
        year: 2024
    },

    // Continue with more problems...
    {
        id: 23,
        topic: 'Age Problems',
        question: 'Sum of ages of father and son is 65. Father is 5 times as old as son. Find their ages.',
        solution: 'Step 1: Let son\'s age = x, father\'s age = 5x\nStep 2: x + 5x = 65\nStep 3: 6x = 65 (doesn\'t divide evenly)\nNote: Problem has error. Corrected: x + 5x = 60\nStep 4: 6x = 60, x = 10\nStep 5: Son = 10 years, Father = 50 years',
        difficulty: 'hard',
        year: 2024
    },
    {
        id: 24,
        topic: 'Age Problems',
        question: '10 years ago, father was 3 times as old as son. 10 years hence, he will be twice as old. Find present ages.',
        solution: 'Step 1: Let present ages: Son = x, Father = y\nStep 2: 10 years ago: y-10 = 3(x-10)\nStep 3: y-10 = 3x-30, y = 3x-20 ... (1)\nStep 4: 10 years hence: y+10 = 2(x+10)\nStep 5: y+10 = 2x+20, y = 2x+10 ... (2)\nStep 6: From (1) and (2): 3x-20 = 2x+10\nStep 7: x = 30\nStep 8: y = 2(30)+10 = 70\nAnswer: Son = 30 years, Father = 70 years',
        difficulty: 'hard',
        year: 2023
    },
    {
        id: 25,
        topic: 'Mixtures',
        question: 'How much water must be added to 60 liters of milk at Rs. 30/liter to get mixture worth Rs. 20/liter?',
        solution: 'Step 1: Let x liters of water be added\nStep 2: Cost of 60L milk = 60×30 = Rs. 1800\nStep 3: Total volume = 60+x liters\nStep 4: Price per liter = 1800/(60+x) = 20\nStep 5: 1800 = 20(60+x) = 1200+20x\nStep 6: 20x = 600\nStep 7: x = 30 liters\nAnswer: 30 liters of water',
        difficulty: 'hard',
        year: 2023
    },
    {
        id: 26,
        topic: 'Number Series',
        question: 'Find the next number in series: 2, 6, 12, 20, 30, ?',
        solution: 'Step 1: Pattern analysis:\nStep 2: 2 = 1×2, 6 = 2×3, 12 = 3×4, 20 = 4×5, 30 = 5×6\nStep 3: Pattern: n(n+1) where n = 1, 2, 3, 4, 5\nStep 4: Next term = 6×7 = 42\nAlternate: Differences are 4, 6, 8, 10 (even numbers), next diff = 12, so 30+12 = 42',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 27,
        topic: 'Number Series',
        question: 'Complete the series: 5, 11, 23, 47, 95, ?',
        solution: 'Step 1: Pattern: Each number = (Previous × 2) + 1\nStep 2: 5×2+1 = 11\nStep 3: 11×2+1 = 23\nStep 4: 23×2+1 = 47\nStep 5: 47×2+1 = 95\nStep 6: 95×2+1 = 191\nAnswer: 191',
        difficulty: 'medium',
        year: 2023
    },
    {
        id: 28,
        topic: 'Compound Interest',
        question: 'Find compound interest on Rs. 10,000 for 2 years at 10% per annum.',
        solution: 'Step 1: A = P(1 + R/100)^T\nStep 2: A = 10000(1 + 10/100)^2\nStep 3: A = 10000(1.1)^2\nStep 4: A = 10000 × 1.21 = Rs. 12,100\nStep 5: CI = A - P = 12100 - 10000 = Rs. 2,100\nNote: SI would be Rs. 2,000, difference = Rs. 100',
        difficulty: 'medium',
        year: 2024
    },
    {
        id: 29,
        topic: 'Compound Interest',
        question: 'Difference between CI and SI on Rs. 8,000 for 2 years at 5% is?',
        solution: 'Step 1: SI = (P×R×T)/100 = (8000×5×2)/100 = Rs. 800\nStep 2: For CI: A = 8000(1.05)^2 = 8000×1.1025 = 8820\nStep 3: CI = 8820 - 8000 = Rs. 820\nStep 4: Difference = 820 - 800 = Rs. 20\nAlternate: Difference = P(R/100)^2 = 8000(0.05)^2 = Rs. 20',
        difficulty: 'hard',
        year: 2023
    },
    {
        id: 30,
        topic: 'Percentage',
        question: 'If price of rice increases by 25%, by what % should consumption reduce to keep expenditure same?',
        solution: 'Step 1: Let original price = 100, consumption = 100\nStep 2: Original expenditure = 100×100 = 10,000\nStep 3: New price = 125\nStep 4: For same expenditure: 125×x = 10,000\nStep 5: x = 80 (new consumption)\nStep 6: Reduction = 100-80 = 20\nStep 7: % reduction = 20%\nFormula: Reduction% = (Increase%)/(100+Increase%) × 100 = 25/125 × 100 = 20%',
        difficulty: 'hard',
        year: 2024
    },
    {
        id: 31,
        topic: 'Ratio',
        question: 'A sum of Rs. 9000 is to be divided among A, B, and C in the ratio 4:5:6. What is the share of C?',
        solution: 'Step 1: Total parts = 4+5+6 = 15\nStep 2: Value per part = 9000÷15 = 600\nStep 3: A gets 4×600 = Rs. 2400\nStep 4: B gets 5×600 = Rs. 3000\nStep 5: C gets 6×600 = Rs. 3600\nAnswer: Rs. 3600',
        difficulty: 'medium',
        year: 2025
    },
    {
        id: 32,
        topic: 'Ratio',
        question: 'If A:B = 3:4 and B:C = 8:9, then A:C is?',
        solution: 'Step 1: A/B = 3/4\nStep 2: B/C = 8/9\nStep 3: To find A:C, multiply these ratios\nStep 4: A/C = (A/B) × (B/C) = (3/4) × (8/9)\nStep 5: A/C = 24/36 = 2/3\nStep 6: Therefore A:C = 2:3\nAnswer: 2:3',
        difficulty: 'hard',
        year: 2025
    }
];

