// FORMULA REFERENCE SHEET
// Quick formulas for PPSC Mathematics

export interface FormulaCategory {
    category: string;
    formulas: Formula[];
}

export interface Formula {
    name: string;
    formula: string;
    variables?: string;
    example?: string;
}

export const formulaSheet: FormulaCategory[] = [
    {
        category: 'Percentages',
        formulas: [
            {
                name: 'Basic Percentage',
                formula: 'Percentage = (Part/Whole) × 100',
                variables: 'Part = portion, Whole = total',
                example: '25% of 200 = (25/100) × 200 = 50'
            },
            {
                name: 'Percentage Increase',
                formula: 'Increase% = ((New - Old)/Old) × 100',
                example: 'Price increased from 100 to 120: ((120-100)/100) × 100 = 20%'
            },
            {
                name: 'Percentage Decrease',
                formula: 'Decrease% = ((Old - New)/Old) × 100',
                example: 'Price decreased from 100 to 80: ((100-80)/100) × 100 = 20%'
            },
            {
                name: 'Successive Percentage Changes',
                formula: 'Net% = A + B + (A×B)/100',
                variables: 'A = first %, B = second %',
                example: '+20% then -10%: 20 + (-10) + (20×-10)/100 = 8%'
            }
        ]
    },
    {
        category: 'Ratio & Proportion',
        formulas: [
            {
                name: 'Ratio Division',
                formula: 'Part = (Ratio/Sum of Ratios) × Whole',
                example: 'Divide 100 in ratio 2:3 = (2/5)×100 = 40 and (3/5)×100 = 60'
            },
            {
                name: 'Direct Proportion',
                formula: 'a/b = c/d  or  a:b = c:d',
                example: 'If 2:3 = 4:x, then x = 6'
            },
            {
                name: 'Inverse Proportion',
                formula: 'a × b = c × d',
                example: 'If 2 workers take 6 days, 3 workers take 4 days (2×6 = 3×4)'
            }
        ]
    },
    {
        category: 'Profit & Loss',
        formulas: [
            {
                name: 'Profit',
                formula: 'Profit = SP - CP',
                variables: 'SP = Selling Price, CP = Cost Price'
            },
            {
                name: 'Loss',
                formula: 'Loss = CP - SP'
            },
            {
                name: 'Profit Percentage',
                formula: 'Profit% = (Profit/CP) × 100'
            },
            {
                name: 'Loss Percentage',
                formula: 'Loss% = (Loss/CP) × 100'
            },
            {
                name: 'SP with Profit%',
                formula: 'SP = CP × (100 + Profit%)/100'
            },
            {
                name: 'SP with Loss%',
                formula: 'SP = CP × (100 - Loss%)/100'
            },
            {
                name: 'CP from SP and Profit%',
                formula: 'CP = (SP × 100)/(100 + Profit%)'
            }
        ]
    },
    {
        category: 'Simple Interest',
        formulas: [
            {
                name: 'Simple Interest',
                formula: 'SI = (P × R × T)/100',
                variables: 'P = Principal, R = Rate%, T = Time (years)'
            },
            {
                name: 'Amount',
                formula: 'A = P + SI = P(1 + RT/100)',
                variables: 'A = Total amount'
            },
            {
                name: 'Principal from SI',
                formula: 'P = (SI × 100)/(R × T)'
            },
            {
                name: 'Rate from SI',
                formula: 'R = (SI × 100)/(P × T)'
            },
            {
                name: 'Time from SI',
                formula: 'T = (SI × 100)/(P × R)'
            }
        ]
    },
    {
        category: 'Compound Interest',
        formulas: [
            {
                name: 'Compound Interest (Annual)',
                formula: 'A = P(1 + R/100)^T',
                variables: 'A = Amount, P = Principal, R = Rate%, T = Time'
            },
            {
                name: 'Compound Interest',
                formula: 'CI = A - P = P[(1 + R/100)^T - 1]'
            },
            {
                name: 'Half-yearly Compounding',
                formula: 'A = P(1 + R/200)^(2T)'
            },
            {
                name: 'Quarterly Compounding',
                formula: 'A = P(1 + R/400)^(4T)'
            }
        ]
    },
    {
        category: 'Time & Work',
        formulas: [
            {
                name: 'Work Done',
                formula: 'Work = Efficiency × Time'
            },
            {
                name: 'Combined Work',
                formula: '1/A + 1/B = 1/Together',
                variables: 'A, B = time taken individually',
                example: 'A takes 6 days, B takes 12 days: 1/6 + 1/12 = 1/Together = 4 days'
            },
            {
                name: 'Man-Days',
                formula: 'M₁×D₁ = M₂×D₂',
                variables: 'M = Men, D = Days'
            }
        ]
    },
    {
        category: 'Speed, Distance & Time',
        formulas: [
            {
                name: 'Basic Formula',
                formula: 'Speed = Distance/Time'
            },
            {
                name: 'Distance',
                formula: 'Distance = Speed × Time'
            },
            {
                name: 'Time',
                formula: 'Time = Distance/Speed'
            },
            {
                name: 'km/h to m/s',
                formula: 'Speed (m/s) = Speed (km/h) × 5/18'
            },
            {
                name: 'm/s to km/h',
                formula: 'Speed (km/h) = Speed (m/s) × 18/5'
            },
            {
                name: 'Average Speed',
                formula: 'Average Speed = Total Distance/Total Time'
            },
            {
                name: 'Relative Speed (same direction)',
                formula: 'Relative Speed = |S₁ - S₂|'
            },
            {
                name: 'Relative Speed (opposite direction)',
                formula: 'Relative Speed = S₁ + S₂'
            }
        ]
    },
    {
        category: 'Averages',
        formulas: [
            {
                name: 'Average',
                formula: 'Average = Sum of all values/Number of values'
            },
            {
                name: 'Weighted Average',
                formula: 'Weighted Average = Σ(value × weight)/Σ(weight)'
            }
        ]
    },
    {
        category: 'Algebra',
        formulas: [
            {
                name: '(a+b)²',
                formula: 'a² + 2ab + b²'
            },
            {
                name: '(a-b)²',
                formula: 'a² - 2ab + b²'
            },
            {
                name: 'a² - b²',
                formula: '(a+b)(a-b)'
            },
            {
                name: 'Quadratic Formula',
                formula: 'x = (-b ± √(b²-4ac))/2a',
                variables: 'For ax² + bx + c = 0'
            }
        ]
    },
    {
        category: 'Geometry',
        formulas: [
            {
                name: 'Area of Rectangle',
                formula: 'Area = Length × Width'
            },
            {
                name: 'Area of Square',
                formula: 'Area = Side²'
            },
            {
                name: 'Area of Triangle',
                formula: 'Area = ½ × Base × Height'
            },
            {
                name: 'Area of Circle',
                formula: 'Area = πr²',
                variables: 'r = radius'
            },
            {
                name: 'Circumference of Circle',
                formula: 'C = 2πr'
            },
            {
                name: 'Perimeter of Rectangle',
                formula: 'P = 2(L + W)'
            },
            {
                name: 'Volume of Cube',
                formula: 'V = a³',
                variables: 'a = side'
            },
            {
                name: 'Volume of Cuboid',
                formula: 'V = L × W × H'
            },
            {
                name: 'Volume of Cylinder',
                formula: 'V = πr²h'
            },
            {
                name: 'Volume of Sphere',
                formula: 'V = (4/3)πr³'
            }
        ]
    }
];

// Export helper function to search formulas
export const searchFormulas = (query: string) => {
    const results: Formula[] = [];
    formulaSheet.forEach(category => {
        category.formulas.forEach(formula => {
            if (
                formula.name.toLowerCase().includes(query.toLowerCase()) ||
                formula.formula.toLowerCase().includes(query.toLowerCase())
            ) {
                results.push({ ...formula, category: category.category } as any);
            }
        });
    });
    return results;
};
