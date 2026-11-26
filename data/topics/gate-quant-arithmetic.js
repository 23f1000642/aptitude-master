APT.addTopic({
 "id": "gate-quant-arithmetic",
 "section": "gate",
 "title": "GATE · Quant: Arithmetic",
 "tagline": "Percentages, profit, interest, ratios, speed, work and averages from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Arithmetic questions are everyday money-and-time stories: shops making profit, prices going up, cars racing, workers building walls, friends sharing a gift.",
   "Almost all of them use one idea: <b>pick an easy number</b> (100 for percentages, a total distance like 120 km, a whole wall = 1) and the story becomes simple counting."
  ],
  "memory": "Percent → start from 100. Speed/work → pick a handy total. Ratio → write it as k parts.",
  "formulas": [
   "<b>Percentage change</b> = (new − old)/old × 100; two changes a% and b% → a + b + ab/100",
   "<b>Profit %</b> = (SP − CP)/CP × 100; same SP with +x% and −x% → overall loss of x²/100 %",
   "<b>Simple interest</b> = PRT/100; <b>compound amount</b> = P(1 + r/100)ⁿ; rule of 72 → doubling time ≈ 72/r years",
   "<b>Average</b> = total ÷ count; a correction of d marks changes the average by d/n",
   "<b>Speed</b> = distance/time; average speed = total distance ÷ total time (never the plain average of speeds)",
   "<b>Work</b>: if one worker finishes in n days, the rate is 1/n per day; rates add up",
   "<b>Replacement</b>: removing x of V and refilling, n times → V(1 − x/V)ⁿ of the original stays",
   "<b>Clock angle</b> = |30H − 5.5M| degrees",
   "<b>Ratio</b> a : b → amounts ak and bk; total (a + b)k must be a whole number"
  ],
  "tricks": [
   "Plug the options back in when the equation is messy — one usually fits instantly.",
   "For \"same profit level\" questions, profit = revenue − cost; keep units sold fixed.",
   "Two discounts on the same total fare add (10% + 5% = 15%); successive discounts multiply.",
   "For mixed groups (men/women, countries), use a weighted average, not the plain average."
  ],
  "patterns": [
   [
    "Percentages and growth",
    "Start from 100; multiply the factors"
   ],
   [
    "Profit, loss, discount",
    "CP → SP → MP chain"
   ],
   [
    "Speed, distance, time",
    "Total distance ÷ total time; relative speed"
   ],
   [
    "Work and wages",
    "Rates per worker per day"
   ],
   [
    "Ratios and ages",
    "k parts, then one equation"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G9.1.1",
   "source": "GATE",
   "level": "easy",
   "q": "Stock A is Rs. 50 and Stock B is Rs. 80 on a day. An investor invests Rs. 100 in A and Rs. 80 in B. He sells everything the next day when A is Rs. 55 and B is Rs. 70. The profit made is Rs. ____",
   "options": [
    "0",
    "5",
    "10",
    "20"
   ],
   "answer": 0,
   "steps": [
    "Shares bought: A = 100/50 = 2, B = 80/80 = 1.",
    "Next day value: 2 × 55 + 1 × 70 = 180. He invested 180.",
    "Profit = 0."
   ]
  },
  {
   "pdf": "G9.4.1",
   "source": "GATE CSE 2011 Q 65",
   "level": "medium",
   "q": "A container has 10 litres of pure spirit. 1 litre is replaced with water, and this is repeated two more times (three times in all). How much spirit is left?",
   "options": [
    "7.58 litres",
    "7.84 litres",
    "7 litres",
    "7.29 litres"
   ],
   "answer": 3,
   "steps": [
    "Each replacement keeps 9/10 of the spirit.",
    "Spirit left = 10 × (9/10)³ = 10 × 0.729 = 7.29 litres."
   ],
   "trick": "Replacement formula V(1 − x/V)ⁿ."
  },
  {
   "pdf": "G9.4.2",
   "source": "GATE2010 TF: GA-9",
   "level": "medium",
   "q": "A tank has 100 litres of water. Every hour: (i) water equal to m% of the current contents is added, then (ii) water equal to n% of the current contents is removed. After 5 hours the tank has exactly 100 litres. The relation between m and n is:",
   "options": [
    "m = n",
    "m > n",
    "m < n",
    "None of the previous"
   ],
   "answer": 1,
   "steps": [
    "Each hour the amount is multiplied by (1 + m/100)(1 − n/100), and this must equal 1.",
    "So 1 − n/100 = 1/(1 + m/100) → n/100 = (m/100)/(1 + m/100), which is smaller than m/100.",
    "Therefore m > n. (Removing n% of a bigger amount needs a smaller percentage.)"
   ]
  },
  {
   "pdf": "G9.7.1",
   "source": "GATE CSE 2025 · Set 1 · GA Q 3",
   "level": "easy",
   "q": "The average marks of a class were calculated as 30.8. One student's marks were entered as 24 instead of 42. After correcting, the average becomes 31.4. How many students are in the class?",
   "options": [
    "25",
    "28",
    "30",
    "32"
   ],
   "answer": 2,
   "steps": [
    "Correction adds 42 − 24 = 18 to the total.",
    "The average rose by 31.4 − 30.8 = 0.6, so 0.6 × n = 18.",
    "n = 30."
   ]
  },
  {
   "pdf": "G9.12.1",
   "source": "GATE CSE 2014 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "At what time between 6 a.m. and 7 a.m. will the minute hand and hour hand make an angle closest to 60°?",
   "options": [
    "6:22 a.m.",
    "6:27 a.m.",
    "6:38 a.m.",
    "6:45 a.m."
   ],
   "answer": 0,
   "steps": [
    "Angle at 6:m = |30 × 6 − 5.5m| = |180 − 5.5m|.",
    "180 − 5.5m = 60 → m = 21.8 min (or 5.5m − 180 = 60 → m = 43.6).",
    "At 6:22 the angle is 180 − 121 = 59°, the closest option."
   ],
   "trick": "Clock angle = |30H − 5.5M|."
  },
  {
   "pdf": "G9.14.1",
   "source": "GATE DS&AI 2024 · GA Q 8",
   "level": "medium",
   "q": "Person 1 invests Rs. 10,000, 20,000, 20,000 in mutual funds A, B, C; Person 2 invests 20,000, 15,000, 15,000. After one year Person 1 gets Rs. 500 more than Person 2. Funds B and C return 15% each. What is the annual return of fund A?",
   "options": [
    "7.5%",
    "10%",
    "15%",
    "20%"
   ],
   "answer": 1,
   "steps": [
    "Both invested 50,000, so only the returns differ.",
    "Person 1 returns: 10,000a + 40,000 × 0.15 = 10,000a + 6,000. Person 2: 20,000a + 30,000 × 0.15 = 20,000a + 4,500.",
    "(10,000a + 6,000) − (20,000a + 4,500) = 500 → 1,500 − 10,000a = 500 → a = 0.10 = 10%."
   ],
   "figures": [
    "gq-9.14.1.jpg"
   ]
  },
  {
   "pdf": "G9.14.2",
   "source": "GATE2010 MN: GA-5",
   "level": "easy",
   "q": "A person invests Rs. 1000 at 10% annual compound interest for 2 years. The whole amount is then invested at 12% simple interest for 5 years. The final value is",
   "options": [
    "1776",
    "1760",
    "1920",
    "1936"
   ],
   "answer": 3,
   "steps": [
    "After 2 years: 1000 × 1.1² = 1210.",
    "Simple interest for 5 years at 12% = 60% → 1210 × 1.6 = 1936."
   ]
  },
  {
   "pdf": "G9.14.3",
   "source": "GATE2014 AG: GA-5",
   "level": "medium",
   "q": "The population of a new city is 5 million and growing at 20% annually. How many years would it take to double?",
   "options": [
    "3–4 years",
    "4–5 years",
    "5–6 years",
    "6–7 years"
   ],
   "answer": 0,
   "steps": [
    "Need 1.2ⁿ ≥ 2.",
    "1.2² = 1.44, 1.2³ = 1.728, 1.2⁴ = 2.07.",
    "Doubles between 3 and 4 years."
   ],
   "trick": "Rule of 72: 72/20 ≈ 3.6 years."
  },
  {
   "pdf": "G9.17.1",
   "source": "GATE CSE 2011 Q 63",
   "level": "medium",
   "q": "Variable cost V = 4q and fixed cost F = 100/q, where q is quantity. How many units minimise the total cost V + F?",
   "options": [
    "5",
    "4",
    "7",
    "6"
   ],
   "answer": 0,
   "steps": [
    "Total = 4q + 100/q. Minimum when derivative 4 − 100/q² = 0 → q² = 25 → q = 5.",
    "Check: q = 4 → 41, q = 5 → 40, q = 6 → 40.67."
   ],
   "trick": "ax + b/x is smallest at x = √(b/a)."
  },
  {
   "pdf": "G9.17.2",
   "source": "GATE CSE 2012 Q 56",
   "level": "easy",
   "q": "Cost function 5q² where q is production; selling price Rs. 50 per unit. Units that maximise profit:",
   "options": [
    "5",
    "10",
    "15",
    "25"
   ],
   "answer": 0,
   "steps": [
    "Profit = 50q − 5q².",
    "Derivative 50 − 10q = 0 → q = 5. (Profit 125, the peak of the parabola.)"
   ]
  },
  {
   "pdf": "G9.17.3",
   "source": "GATE CSE 2019 · GA Q 4",
   "level": "easy",
   "q": "Ten friends planned to share the cost of a gift equally. When two decided not to contribute, each of the others paid Rs. 150 more. The cost of the gift was Rs.",
   "options": [
    "666",
    "3000",
    "6000",
    "12000"
   ],
   "answer": 2,
   "steps": [
    "C/8 − C/10 = 150.",
    "C(5 − 4)/40 = 150 → C = 6000."
   ],
   "trick": "Check options: 6000/10 = 600, 6000/8 = 750 → difference 150 ✓."
  },
  {
   "pdf": "G9.17.4",
   "source": "GATE2014 AE: GA-5",
   "level": "easy",
   "q": "A foundry has a fixed daily cost of Rs. 50,000 whenever it operates and a variable cost of Rs. 800Q, where Q is daily production in tonnes. What is the cost per tonne for a daily production of 100 tonnes?",
   "options": null,
   "answerText": "1300",
   "accept": [
    "1300"
   ],
   "steps": [
    "Total cost = 50,000 + 800 × 100 = 1,30,000.",
    "Per tonne = 1,30,000 / 100 = 1300."
   ]
  },
  {
   "pdf": "G9.19.1",
   "source": "GATE2012 CY: GA-10",
   "level": "easy",
   "q": "Raju has 14 notes of only Rs. 20 and Rs. 10. The total value is Rs. 230. The number of Rs. 10 notes is",
   "options": [
    "5",
    "6",
    "9",
    "10"
   ],
   "answer": 0,
   "steps": [
    "If all 14 were Rs. 10 notes: 140. Extra 90 comes from Rs. 20 notes, each adding 10 → 9 twenties.",
    "Ten-rupee notes = 14 − 9 = 5."
   ]
  },
  {
   "pdf": "G9.23.1",
   "source": "GATE CSE 2018 · GA Q 6",
   "level": "medium",
   "q": "A philanthropist gifts Rs. 750 to each male and Rs. 1000 to each female senior citizen. There were 300 eligible, but only 8/9 of the men and 2/3 of the women claimed. Total money given?",
   "options": [
    "1,50,000",
    "2,00,000",
    "1,75,000",
    "1,51,000"
   ],
   "answer": 1,
   "steps": [
    "With m men and w women (m + w = 300): money = 750 × 8m/9 + 1000 × 2w/3.",
    "= (2000/3)m + (2000/3)w = (2000/3)(m + w).",
    "= (2000/3) × 300 = 2,00,000."
   ],
   "trick": "Both groups end up getting Rs. 2000/3 per eligible person, so the split doesn't matter."
  },
  {
   "pdf": "G9.37.1",
   "source": "GATE CSE 2014 · Set 1 · GA Q 4",
   "level": "easy",
   "q": "If (z + 1/z)² = 98, compute z² + 1/z².",
   "options": null,
   "answerText": "96",
   "accept": [
    "96"
   ],
   "steps": [
    "(z + 1/z)² = z² + 2 + 1/z².",
    "So z² + 1/z² = 98 − 2 = 96."
   ]
  },
  {
   "pdf": "G9.37.2",
   "source": "GATE CSE 2014 · Set 2 · GA Q 4",
   "level": "easy",
   "q": "What is the average of all multiples of 10 from 2 to 198?",
   "options": [
    "90",
    "100",
    "110",
    "120"
   ],
   "answer": 1,
   "steps": [
    "Multiples: 10, 20, …, 190 (an AP).",
    "Average of an AP = (first + last)/2 = (10 + 190)/2 = 100."
   ]
  },
  {
   "pdf": "G9.37.3",
   "source": "GATE CSE 2017 · Set 1 · GA Q 4",
   "level": "easy",
   "q": "Find the smallest number y such that y × 162 is a perfect cube.",
   "options": [
    "24",
    "27",
    "32",
    "36"
   ],
   "answer": 3,
   "steps": [
    "162 = 2 × 3⁴.",
    "For a cube every power must be a multiple of 3: need 2² and 3² more.",
    "y = 4 × 9 = 36 (162 × 36 = 5832 = 18³)."
   ]
  },
  {
   "pdf": "G9.37.4",
   "source": "GATE CSE 2017 · Set 2 · GA Q 4",
   "level": "easy",
   "q": "A test has 20 questions worth 100 marks. Multiple-choice questions are 3 marks each and essay questions 11 marks each. How many multiple-choice questions are there?",
   "options": [
    "12",
    "15",
    "18",
    "19"
   ],
   "answer": 1,
   "steps": [
    "m + e = 20 and 3m + 11e = 100.",
    "3(20 − e) + 11e = 100 → 8e = 40 → e = 5.",
    "m = 15."
   ]
  },
  {
   "pdf": "G9.37.5",
   "source": "GATE CSE 2026 · Set 1 · GA Q 3",
   "level": "easy",
   "q": "A knock-out tournament starts with 64 players and has no ties. How many games are played to declare the winner?",
   "options": [
    "127",
    "64",
    "63",
    "32"
   ],
   "answer": 2,
   "steps": [
    "Each game eliminates exactly one player.",
    "63 players must be eliminated → 63 games."
   ],
   "trick": "Knock-out with n players → n − 1 games."
  },
  {
   "pdf": "G9.37.6",
   "source": "GATE CSE 2026 · Set 1 · GA Q 4",
   "level": "easy",
   "q": "A student must enrol for at least 60 and at most 70 credits: exactly 15 credits of core courses, exactly 20 of project, and at least 10 of specialisation courses; the rest elective. The maximum elective credits is",
   "options": [
    "10",
    "15",
    "20",
    "25"
   ],
   "answer": 3,
   "steps": [
    "To maximise electives, take the maximum total (70) and the minimum of everything else.",
    "70 − 15 − 20 − 10 = 25."
   ]
  },
  {
   "pdf": "G9.37.7",
   "source": "GATE CSE 2026 · Set 1 · GA Q 8",
   "level": "medium",
   "q": "H_K(S) = max(S − K, 0). The graph of N(S) is 0 up to S = 10, rises with slope 1 to 10 at S = 20, and stays at 10 afterwards. N(S) can be expressed as",
   "options": [
    "H₁₀(S) − H₂₀(S)",
    "H₁₀(S) − 2H₂₀(S)",
    "−H₁₀(S) + H₂₀(S)",
    "H₁₅(S) − H₂₀(S)"
   ],
   "answer": 0,
   "steps": [
    "H₁₀ starts rising at S = 10 with slope 1.",
    "Subtracting H₂₀ cancels that rise from S = 20 onwards, making the graph flat at 10.",
    "Check S = 30: (30 − 10) − (30 − 20) = 10 ✓."
   ],
   "figures": [
    "gq-9.37.7.jpg"
   ]
  },
  {
   "pdf": "G9.37.8",
   "source": "GATE2010 TF: GA-10",
   "level": "medium",
   "q": "65 MCQs: +1 for correct, −1/4 for wrong, −1/8 for unattempted. A student scores 37. The least possible number of unanswered questions is",
   "options": [
    "6",
    "5",
    "7",
    "4"
   ],
   "answer": 0,
   "steps": [
    "c + w + u = 65 and c − w/4 − u/8 = 37 → 8c − 2w − u = 296.",
    "Put c = 65 − w − u: 520 − 10w − 9u = 296 → 10w + 9u = 224.",
    "Need 224 − 9u to be a multiple of 10 → smallest u = 6 (then w = 17, c = 42)."
   ]
  },
  {
   "pdf": "G9.37.9",
   "source": "GATE2013 CE: GA-1",
   "level": "easy",
   "q": "A number is as much greater than 75 as it is smaller than 117. The number is",
   "options": [
    "91",
    "93",
    "89",
    "96"
   ],
   "answer": 3,
   "steps": [
    "It is exactly halfway: (75 + 117)/2 = 96."
   ]
  },
  {
   "pdf": "G9.38.1",
   "source": "GATE CSE 2014 · Set 1 · GA Q 8",
   "level": "easy",
   "q": "Round-trip tickets get a 10% discount on the total fare, and groups of 4 or more get another 5% on the total fare. If the one-way fare is Rs. 100, a group of 5 tourists buying round-trip tickets pays Rs. ____",
   "options": null,
   "answerText": "850",
   "accept": [
    "850"
   ],
   "steps": [
    "Total fare = 5 people × 2 ways × 100 = 1000.",
    "Both discounts are on the total fare: 10% + 5% = 15% → 150 off.",
    "Pay 850."
   ]
  },
  {
   "pdf": "G9.38.2",
   "source": "GATE CSE 2014 · Set 3 · GA Q 8",
   "level": "medium",
   "q": "India's GDP in Rupees grew 7% in 2012–13, while the exchange rate went from Rs. 50/USD to Rs. 60/USD. India's GDP in USD",
   "options": [
    "increased by 5%",
    "decreased by 13%",
    "decreased by 20%",
    "decreased by 11%"
   ],
   "answer": 3,
   "steps": [
    "GDP in USD ∝ rupee GDP ÷ exchange rate.",
    "New/old = 1.07 / (60/50) = 1.07/1.2 ≈ 0.892.",
    "About 11% decrease."
   ]
  },
  {
   "pdf": "G9.38.3",
   "source": "GATE CSE 2024 · Set 1 · GA Q 4",
   "level": "easy",
   "q": "Coins of Rs. 1, Rs. 5 and Rs. 10 are in the ratio 5 : 3 : 13. The percentage of the total money that is in Rs. 5 coins is",
   "options": [
    "21%",
    "14 2/7 %",
    "10%",
    "30%"
   ],
   "answer": 2,
   "steps": [
    "Money ratio = 5 × 1 : 3 × 5 : 13 × 10 = 5 : 15 : 130 (total 150).",
    "Rs. 5 share = 15/150 = 10%."
   ],
   "trick": "Count ratio × face value = money ratio."
  },
  {
   "pdf": "G9.38.4",
   "source": "GATE2011 AG: GA-4",
   "level": "medium",
   "q": "40% of voters promised to vote for P and the rest for Q. On election day 15% of P's promisers switched to Q, and 25% of Q's promisers switched to P. P lost by 2 votes. Total voters?",
   "options": [
    "100",
    "110",
    "90",
    "95"
   ],
   "answer": 0,
   "steps": [
    "Let N voters. P gets 0.85 × 0.4N + 0.25 × 0.6N = 0.34N + 0.15N = 0.49N.",
    "Q gets 0.51N. Difference 0.02N = 2 → N = 100."
   ]
  },
  {
   "pdf": "G9.38.5",
   "source": "GATE2012 AE: GA-7",
   "level": "easy",
   "q": "Runs in 2009 → 2010: P 802 → 1008, Q 765 → 912, R 429 → 619, S 501 → 701. The player with the lowest percentage increase is",
   "options": [
    "P",
    "Q",
    "R",
    "S"
   ],
   "answer": 1,
   "steps": [
    "P: 206/802 ≈ 25.7%. Q: 147/765 ≈ 19.2%. R: 190/429 ≈ 44.3%. S: 200/501 ≈ 39.9%.",
    "Lowest: Q."
   ]
  },
  {
   "pdf": "G9.38.6",
   "source": "GATE2012 CY: GA-8",
   "level": "easy",
   "q": "Monthly budget: Food 4000, Rent 2000, Savings 1500, Other 1800, Clothing 1200. The approximate percentage NOT spent on savings is",
   "options": [
    "10%",
    "14%",
    "81%",
    "86%"
   ],
   "answer": 3,
   "steps": [
    "Total = 10,500. Savings = 1500/10,500 ≈ 14.3%.",
    "Not savings ≈ 100 − 14.3 ≈ 86%."
   ]
  },
  {
   "pdf": "G9.38.7",
   "source": "GATE2013 EE: GA-2",
   "level": "medium",
   "q": "Mean temperature Monday–Wednesday was 41 °C and Tuesday–Thursday 43 °C. Thursday was 15% higher than Monday. Thursday's temperature was",
   "options": [
    "40",
    "43",
    "46",
    "49"
   ],
   "answer": 2,
   "steps": [
    "Mon + Tue + Wed = 123; Tue + Wed + Thu = 129 → Thu − Mon = 6.",
    "Thu = 1.15 Mon → 0.15 Mon = 6 → Mon = 40, Thu = 46."
   ]
  },
  {
   "pdf": "G9.38.8",
   "source": "GATE2014 AE: GA-9",
   "level": "easy",
   "q": "1% of country X and 2% of country Y are taller than 6 ft. X has thrice as many people as Y. Taking both together, the percentage taller than 6 ft is",
   "options": [
    "3.0",
    "2.5",
    "1.5",
    "1.25"
   ],
   "answer": 3,
   "steps": [
    "Let Y = 100 people, X = 300.",
    "Tall: 3 + 2 = 5 out of 400 = 1.25%."
   ],
   "trick": "Weighted average, not the plain average of 1% and 2%."
  },
  {
   "pdf": "G9.45.1",
   "source": "GATE CSE 2021 · Set 1 · GA Q 7",
   "level": "medium",
   "q": "Item P: cost Rs. 5,400, marked price 5,860. Item Q: profit 25%, marked price 10,000. Cost of P : cost of Q = 3 : 4. The discount on Q as a percentage of its marked price is",
   "options": [
    "25",
    "12.5",
    "10",
    "5"
   ],
   "answer": 2,
   "steps": [
    "Cost of Q = 5400 × 4/3 = 7200.",
    "Selling price of Q = 7200 × 1.25 = 9000.",
    "Discount = 10,000 − 9000 = 1000 → 10% of marked price."
   ],
   "figures": [
    "gq-9.45.1.jpg"
   ]
  },
  {
   "pdf": "G9.45.2",
   "source": "GATE CSE 2024 · Set 2 · GA Q 7",
   "level": "medium",
   "q": "A person sold two items at the same price, with 10% profit on one and 10% loss on the other. Overall he made",
   "options": [
    "1% profit",
    "2% profit",
    "1% loss",
    "2% loss"
   ],
   "answer": 2,
   "steps": [
    "Same selling price, equal % gain and loss → always a loss of (x²/100)%.",
    "10²/100 = 1% loss.",
    "Check: SP 99 each → costs 90 and 110 → total cost 200, SP 198 → 1% loss."
   ],
   "trick": "Equal SP, ±x% → loss of x²/100 %."
  },
  {
   "pdf": "G9.45.3",
   "source": "GATE2013 CE: GA-9",
   "level": "medium",
   "q": "A firm sells at Rs. 60 per unit; total cost is Rs. 100 and total profit Rs. 500. Cost rises by 30%. By what percentage must the price rise to keep the same profit?",
   "options": [
    "5",
    "10",
    "15",
    "30"
   ],
   "answer": 0,
   "steps": [
    "Revenue = 100 + 500 = 600 → units = 600/60 = 10.",
    "New cost 130 → revenue needed 630 → price 63.",
    "Increase = 3/60 = 5%."
   ]
  },
  {
   "pdf": "G9.48.1",
   "source": "GATE CSE 2016 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "Cycles to failure fall exponentially as load rises. At load 80 it takes 100 cycles; at load 40 it takes 10,000 cycles. The load for failure at 5000 cycles is",
   "options": [
    "40.00",
    "46.02",
    "60.01",
    "92.02"
   ],
   "answer": 1,
   "steps": [
    "N = A·e^(−kL). From 40 to 80 the cycles drop by ×100 → e^(40k) = 100.",
    "From 10,000 to 5000 is ×1/2 → e^(k(L − 40)) = 2.",
    "L − 40 = 40 × ln 2/ln 100 = 40 × 0.301/2 ≈ 6.02 → L ≈ 46.02."
   ]
  },
  {
   "pdf": "G9.48.2",
   "source": "GATE CSE 2018 · GA Q 8",
   "level": "easy",
   "q": "60% of invited guests are male and 40% female. 80% of the invited guests attended and all females attended. Ratio of males to females among attendees?",
   "options": [
    "2:3",
    "1:1",
    "3:2",
    "2:1"
   ],
   "answer": 1,
   "steps": [
    "Take 100 invited: 60 M, 40 F. 80 attended, including all 40 F → 40 M.",
    "Ratio 40 : 40 = 1 : 1."
   ]
  },
  {
   "pdf": "G9.48.3",
   "source": "GATE CSE 2021 · Set 1 · GA Q 1",
   "level": "easy",
   "q": "The ratio of boys to girls in a class is 7 : 3. An acceptable value for the total number of students is",
   "options": [
    "21",
    "37",
    "50",
    "73"
   ],
   "answer": 2,
   "steps": [
    "Total = 7k + 3k = 10k → a multiple of 10.",
    "Only 50 works."
   ]
  },
  {
   "pdf": "G9.48.4",
   "source": "GATE CSE 2021 · Set 2 · GA Q 8",
   "level": "medium",
   "q": "Students in three classes are in ratio 3 : 13 : 6. After adding 18 to each class, the ratio becomes 15 : 35 : 21. The total at the beginning was",
   "options": [
    "22",
    "66",
    "88",
    "110"
   ],
   "answer": 2,
   "steps": [
    "Let classes be 3k, 13k, 6k. (3k + 18)/(6k + 18) = 15/21 = 5/7.",
    "21k + 126 = 30k + 90 → k = 4.",
    "Total = 22k = 88. Check: 30 : 70 : 42 = 15 : 35 : 21 ✓."
   ]
  },
  {
   "pdf": "G9.48.5",
   "source": "GATE CSE 2024 · Set 1 · GA Q 2",
   "level": "easy",
   "q": "If distinct non-zero x and y are such that (x + y) is proportional to (x − y), then x/y",
   "options": [
    "depends on xy",
    "depends only on x",
    "depends only on y",
    "is a constant"
   ],
   "answer": 3,
   "steps": [
    "x + y = c(x − y) → x(c − 1) = y(c + 1) → x/y = (c + 1)/(c − 1), a fixed number."
   ]
  },
  {
   "pdf": "G9.48.6",
   "source": "GATE2011 AG: GA-8",
   "level": "medium",
   "q": "R took 1/3 of the toffees but returned 4. S took 1/4 of what was left but returned 3. T took half of the remainder but returned 2. If 17 were left, how many were originally in the bowl?",
   "options": [
    "38",
    "31",
    "48",
    "41"
   ],
   "answer": 2,
   "steps": [
    "Work backwards. Before T returned 2: 15 = half of what T found → 30.",
    "Before S returned 3: 27 = 3/4 of what S found → 36.",
    "Before R returned 4: 32 = 2/3 of the original → 48."
   ],
   "trick": "Undo each step in reverse order."
  },
  {
   "pdf": "G9.48.7",
   "source": "GATE2011 GG: GA-4",
   "level": "medium",
   "q": "If m students need m pages of stationery in m days, then 100 students need 100 pages in",
   "options": [
    "100 days",
    "m/100 days",
    "100/m days",
    "m days"
   ],
   "answer": 3,
   "steps": [
    "One student uses m/(m × m) = 1/m page per day.",
    "100 students use 100/m pages per day → 100 pages last m days."
   ]
  },
  {
   "pdf": "G9.48.8",
   "source": "GATE2013 AE: GA-1",
   "level": "easy",
   "q": "If 3 ≤ X ≤ 5 and 8 ≤ Y ≤ 11, which is TRUE?",
   "options": [
    "3/5 ≤ X/Y ≤ 8/5",
    "3/11 ≤ X/Y ≤ 5/8",
    "3/11 ≤ X/Y ≤ 8/5",
    "3/5 ≤ X/Y ≤ 8/11"
   ],
   "answer": 1,
   "steps": [
    "Smallest X/Y: smallest X over largest Y = 3/11.",
    "Largest X/Y: largest X over smallest Y = 5/8."
   ]
  },
  {
   "pdf": "G9.48.9",
   "source": "GATE2014 AE: GA-8",
   "level": "medium",
   "q": "The smallest angle of a triangle is 2/3 of the smallest angle of a quadrilateral whose angles are in ratio 3 : 4 : 5 : 6. The triangle's largest angle is twice its smallest. Find the sum of the triangle's second-largest angle and the quadrilateral's largest angle (degrees).",
   "options": null,
   "answerText": "180",
   "accept": [
    "180"
   ],
   "steps": [
    "Quadrilateral: 18 parts = 360° → 60°, 80°, 100°, 120°.",
    "Triangle smallest = 2/3 × 60 = 40°, largest = 80°, so the middle = 180 − 120 = 60°.",
    "Sum = 60 + 120 = 180."
   ]
  },
  {
   "pdf": "G9.51.1",
   "source": "GATE CSE 2013 Q 64",
   "level": "medium",
   "q": "A tourist covers half his journey by train at 60 km/h, half of the remainder by bus at 30 km/h and the rest by cycle at 10 km/h. His average speed (km/h) is",
   "options": [
    "36",
    "30",
    "24",
    "18"
   ],
   "answer": 2,
   "steps": [
    "Take total 120 km: train 60 km (1 h), bus 30 km (1 h), cycle 30 km (3 h).",
    "Average = 120/5 = 24 km/h."
   ],
   "trick": "Pick a convenient total distance."
  },
  {
   "pdf": "G9.51.2",
   "source": "GATE CSE 2019 · GA Q 3",
   "level": "easy",
   "q": "Two cars start together from the same place in the same direction at 50 km/h and 60 km/h. After how many hours will they be 20 km apart?",
   "options": [
    "1",
    "2",
    "3",
    "6"
   ],
   "answer": 1,
   "steps": [
    "The gap grows at 60 − 50 = 10 km/h.",
    "20/10 = 2 hours."
   ]
  },
  {
   "pdf": "G9.51.3",
   "source": "GATE2013 AE: GA-6",
   "level": "easy",
   "q": "Velocity of an object fired upward is V = 80 − 32t (t in seconds). When is the velocity between 32 m/s and 64 m/s?",
   "options": [
    "(1, 3/2)",
    "(1/2, 1)",
    "(1/2, 3/2)",
    "(1, 3)"
   ],
   "answer": 2,
   "steps": [
    "80 − 32t = 64 → t = 1/2. 80 − 32t = 32 → t = 3/2.",
    "V falls as t grows, so 32 < V < 64 for 1/2 < t < 3/2."
   ]
  },
  {
   "pdf": "G9.51.4",
   "source": "GATE2013 EE: GA-9",
   "level": "easy",
   "q": "A car travels 8 km in the first quarter hour, 6 km in the second and 16 km in the third. Average speed over the journey (km/h)?",
   "options": [
    "30",
    "36",
    "40",
    "24"
   ],
   "answer": 2,
   "steps": [
    "Distance = 30 km; time = 3 quarters = 0.75 h.",
    "Average = 30/0.75 = 40 km/h."
   ]
  },
  {
   "pdf": "G9.59.1",
   "source": "GATE CSE 2010 Q 64",
   "level": "medium",
   "q": "5 skilled workers build a wall in 20 days; 8 semi-skilled in 25 days; 10 unskilled in 30 days. How long will 2 skilled, 6 semi-skilled and 5 unskilled take?",
   "options": [
    "20 days",
    "18 days",
    "16 days",
    "15 days"
   ],
   "answer": 3,
   "steps": [
    "Per worker per day: skilled 1/100, semi-skilled 1/200, unskilled 1/300 of the wall.",
    "Team = 2/100 + 6/200 + 5/300 = 6/300 + 9/300 + 5/300 = 20/300 = 1/15.",
    "Time = 15 days."
   ]
  },
  {
   "pdf": "G9.59.2",
   "source": "GATE CSE 2011 Q 64",
   "level": "hard",
   "q": "A transporter gets the same number of orders daily and has a backlog. With 7 trucks he clears everything by the end of day 4; with 3 trucks by the end of day 10. Minimum trucks needed to clear everything by the end of day 5?",
   "options": [
    "4",
    "5",
    "6",
    "7"
   ],
   "answer": 2,
   "steps": [
    "Let one truck ship t per day, daily orders d, backlog B.",
    "B + 4d = 28t and B + 10d = 30t → 6d = 2t → d = t/3, B = 28t − 4t/3 = 80t/3.",
    "In 5 days the load is B + 5d = 85t/3. With n trucks: 5nt ≥ 85t/3 → n ≥ 17/3 ≈ 5.67.",
    "Minimum 6 trucks."
   ]
  },
  {
   "pdf": "G9.59.3",
   "source": "GATE CSE 2013 Q 65",
   "level": "medium",
   "q": "The current erection cost of a structure is Rs. 13,200. If daily labour wages rise by 1/5 and working time falls by 1/24, the new cost is",
   "options": [
    "16,500",
    "15,180",
    "11,000",
    "10,120"
   ],
   "answer": 1,
   "steps": [
    "Cost ∝ wage × time.",
    "New cost = 13,200 × (6/5) × (23/24) = 13,200 × 1.15 = 15,180."
   ]
  }
 ]
});
