APT.addTopic({
 "id": "gate-quant-di",
 "section": "gate",
 "title": "GATE · Quant: Data Interpretation",
 "tagline": "Bar, pie, line, table, radar and contour charts from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Data Interpretation gives you a picture full of numbers — a bar chart, pie chart, line graph, table, radar or contour map — and asks one sharp question.",
   "Read the question first, then pull <b>only the numbers you need</b>. Write them down neatly before calculating."
  ],
  "memory": "Question first, then pick only the needed numbers, then compute (approximating is fine).",
  "formulas": [
   "<b>Growth %</b> = (this year − last year)/last year × 100",
   "<b>Pie chart</b>: part = share % × total; with two pies, compare shares only if the totals are the same",
   "<b>Per-unit value</b> (revenue per kg) ∝ revenue share ÷ quantity share",
   "<b>Average from a frequency chart</b> = Σ(value × count) ÷ Σ count",
   "<b>Contour lines</b>: close together = steep (fast change); a closed loop marks a hill or a hollow",
   "<b>Percentile</b>: k% of the data lies below the k-th percentile — so \"every year\" claims can't be guaranteed"
  ],
  "tricks": [
   "Approximate big numbers (39,284 × 173 ≈ 39,000 × 170) — options are usually far apart.",
   "When two items have the same base, compare the changes directly instead of computing percentages.",
   "Check the units and the axis labels: \"mg needed to kill\" means smaller = deadlier.",
   "In tables of right/wrong/not attempted, the class size is the row total."
  ],
  "patterns": [
   [
    "Bar and line graphs",
    "Read values, compute change or ratio"
   ],
   [
    "Pie charts",
    "Share × total; compare shares"
   ],
   [
    "Tables",
    "Totals, averages, percentage change"
   ],
   [
    "Special charts (radar, contour, bubble)",
    "Understand what each axis or line means first"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G9.8.1",
   "source": "GATE CSE 2015 · Set 3 · GA Q 10",
   "level": "medium",
   "q": "The exports and imports (in crores of Rs.) of a country from 2000 to 2007 are given in the bar chart. In which year is the combined percentage increase in imports and exports the highest?",
   "options": null,
   "answerText": "2006",
   "accept": [
    "2006"
   ],
   "steps": [
    "Read (exports, imports): 2000 (50,40), 2001 (60,50), 2002 (70,60), 2003 (60,70), 2004 (70,80), 2005 (70,90), 2006 (100,120), 2007 (110,120).",
    "Combined totals: 90, 110, 130, 130, 150, 160, 220, 230.",
    "Increase over previous year: 2001 22.2%, 2002 18.2%, 2003 0%, 2004 15.4%, 2005 6.7%, 2006 37.5%, 2007 4.5%.",
    "Highest: 2006."
   ],
   "figures": [
    "gq-9.8.1.jpg"
   ]
  },
  {
   "pdf": "G9.8.2",
   "source": "GATE CSE 2020 · GA Q 10",
   "level": "medium",
   "q": "The total revenue of a company during 2014–2018 is shown in the bar graph. If the total expenditure in each year is 500 million rupees, the aggregate profit or loss (in %) on total expenditure during 2014–2018 is",
   "options": [
    "16.67% profit",
    "16.67% loss",
    "20% profit",
    "20% loss"
   ],
   "answer": 2,
   "steps": [
    "Revenue: 500 + 700 + 800 + 600 + 400 = 3000.",
    "Expenditure: 5 × 500 = 2500.",
    "Profit = 500 → 500/2500 = 20% profit."
   ],
   "figures": [
    "gq-9.8.2.jpg"
   ]
  },
  {
   "pdf": "G9.8.3",
   "source": "GATE CSE 2021 · Set 2 · GA Q 9",
   "level": "hard",
   "q": "The bar chart shows units sold (Year 1: 100, Year 2: 200, Year 3: 300) and net profit in Rs. (Year 1: 240, Year 2: 296, Year 3: 210). Cost/unit in Year 3 was Rs. 1, which was half the cost/unit in Year 2 and one-third of the cost/unit in Year 1. Taxes were 10%, 13% and 15% of the selling price in the three years. Net profit = selling price − (cost + taxes). The ratio of the selling price in Year 2 to the selling price in Year 3 is",
   "options": [
    "4:3",
    "1:1",
    "3:4",
    "1:2"
   ],
   "answer": 0,
   "steps": [
    "Cost/unit: Year 3 = 1, Year 2 = 2, Year 1 = 3. Total cost: Year 2 = 200 × 2 = 400, Year 3 = 300 × 1 = 300.",
    "Profit = SP − cost − t·SP → SP(1 − t) = profit + cost.",
    "Year 2: 0.87·SP = 296 + 400 = 696 → SP = 800. Year 3: 0.85·SP = 210 + 300 = 510 → SP = 600.",
    "Ratio 800 : 600 = 4 : 3."
   ],
   "figures": [
    "gq-9.8.3.jpg"
   ]
  },
  {
   "pdf": "G9.8.4",
   "source": "GATE DA 2025 · GA Q 10",
   "level": "medium",
   "q": "The number of patients per shift (X) for Dr. Gita over 100 shifts is shown (X = 5: 20 shifts, 6: 40, 7: 30, 8: 10). If she earns Rs. 1000(X − 0.2) per shift, what is her average earning per shift?",
   "options": [
    "6,100",
    "6,300",
    "6,000",
    "6,500"
   ],
   "answer": 0,
   "steps": [
    "Average X = (5·20 + 6·40 + 7·30 + 8·10)/100 = 630/100 = 6.3.",
    "Earning is linear in X, so average earning = 1000(6.3 − 0.2) = 6,100."
   ],
   "figures": [
    "gq-9.8.4.jpg"
   ]
  },
  {
   "pdf": "G9.16.1",
   "source": "GATE CSE 2017 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "A contour line joins places of the same height. In the contour plot (lines every 25 m), if flood water rises to 525 m, which of the villages P, Q, R, S, T get submerged?",
   "options": [
    "P, Q",
    "P, Q, T",
    "R, S, T",
    "Q, R, S"
   ],
   "answer": 2,
   "steps": [
    "A village is submerged if its height is below 525 m.",
    "P and Q sit inside the 550 m closed contours — above 525 m, safe.",
    "R lies near the 425–450 m lines, S inside a small 450 m loop, and T just inside the 500 m line (below 525).",
    "Submerged: R, S, T."
   ],
   "figures": [
    "gq-9.16.1.jpg"
   ]
  },
  {
   "pdf": "G9.16.2",
   "source": "GATE CSE 2017 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "In an air-pressure contour plot (lines every 0.05 bar), a thunderstorm is most likely where pressure changes fastest over distance. Which region — P, Q, R or S — is most likely to have a thunderstorm?",
   "options": [
    "P",
    "Q",
    "R",
    "S"
   ],
   "answer": 2,
   "steps": [
    "Fast change in pressure = contour lines packed closely together.",
    "At R the 0.65, 0.7 and 0.75 lines are bunched tightly; elsewhere they are spread out.",
    "So R."
   ],
   "trick": "Close contours = steep change (same idea as steep hills on a map).",
   "figures": [
    "gq-9.16.2.jpg"
   ]
  },
  {
   "pdf": "G9.20.1",
   "source": "GATE CSE 2011 Q 62",
   "level": "hard",
   "q": "P, Q, R, S are dangerous microbes. In the chart, x = potency (probability of beating immunity), y = toxicity (mg of microbe needed to destroy half the body mass), and circle diameter shows growth in 24 hours: P (0.4, 800, 50 mm), Q (0.5, 600, 40 mm), R (0.4, 300, 30 mm), S (0.8, 200, 20 mm). Danger varies with toxicity, potency and growth. Which microbe should a vaccine target first?",
   "options": [
    "P",
    "Q",
    "R",
    "S"
   ],
   "answer": 3,
   "steps": [
    "Fewer milligrams needed = MORE toxic, so danger ∝ potency × growth ÷ (mg needed). Growth ∝ circle area ∝ diameter².",
    "P: 0.4 × 2500 / 800 = 1.25. Q: 0.5 × 1600 / 600 = 1.33. R: 0.4 × 900 / 300 = 1.2. S: 0.8 × 400 / 200 = 1.6.",
    "S is the most dangerous."
   ],
   "trick": "Read the y-axis carefully: a smaller dose needed means a deadlier microbe.",
   "figures": [
    "gq-9.20.1.jpg"
   ]
  },
  {
   "pdf": "G9.20.2",
   "source": "GATE CSE 2026 · Set 2 · GA Q 8",
   "level": "hard",
   "q": "Figures (i) (a 4 × 4 grid of cities) and (ii) (a 5-city network) show intercity highways. A salesperson must start at a city, visit every other city exactly once, and return to the start. Which is true?",
   "options": [
    "Possible for (i), but not for (ii)",
    "Possible for (ii), but not for (i)",
    "Possible for both",
    "Possible for neither"
   ],
   "answer": 0,
   "steps": [
    "(i): walk around the outer ring but dip into the middle columns in a snake pattern — a 4 × 4 grid (even number of cities) has such a round trip.",
    "(ii): three cities have only 2 roads each, so the trip must use both roads at each of them.",
    "Those forced roads give the top-left city 3 used roads, but a round trip uses exactly 2 roads at each city → impossible."
   ],
   "trick": "A city with only 2 roads forces both roads into the tour.",
   "figures": [
    "gq-9.20.2.jpg"
   ]
  },
  {
   "pdf": "G9.20.3",
   "source": "GATE DA 2025 · GA Q 7",
   "level": "medium",
   "q": "Weight as a function of age is identical for two brothers: it increases until age 50, then decreases. Their ages are a₁ < a₂. On a day when they have the same weight, which is correct?",
   "options": [
    "a₁ < a₂ < 50",
    "a₁ < 50 < a₂",
    "50 < a₁ < a₂",
    "Either a₁ = 50 or a₂ = 50"
   ],
   "answer": 1,
   "steps": [
    "On the rising side, different ages give different weights; same on the falling side.",
    "Equal weights at different ages are only possible with one brother before 50 and the other after.",
    "So a₁ < 50 < a₂."
   ]
  },
  {
   "pdf": "G9.21.1",
   "source": "GATE DA 2025 · GA Q 3",
   "level": "easy",
   "q": "A 4 × 4 image has pixel intensities\n0 1 0 2\n4 7 3 3\n5 5 4 4\n6 7 3 2\nThe number of pixels with U ≤ 4 is",
   "options": [
    "3",
    "8",
    "11",
    "9"
   ],
   "answer": 2,
   "steps": [
    "Row 1: all 4. Row 2: 4, 3, 3 → 3. Row 3: 4, 4 → 2. Row 4: 3, 2 → 2.",
    "Total = 4 + 3 + 2 + 2 = 11."
   ]
  },
  {
   "pdf": "G9.27.1",
   "source": "GATE CSE 2014 · Set 2 · GA Q 9",
   "level": "medium",
   "q": "The line graph shows the male-to-female ratio in a college: 2008 = 2.5, 2009 = 3, 2010 = 2, 2011 = 1, 2012 = 1.5. If female students doubled in 2009, by what percent did male students increase in 2009?",
   "options": null,
   "answerText": "140",
   "accept": [
    "140"
   ],
   "steps": [
    "Let females in 2008 = F → males = 2.5F.",
    "In 2009 females = 2F → males = 3 × 2F = 6F.",
    "Increase = (6F − 2.5F)/2.5F = 3.5/2.5 = 140%."
   ],
   "figures": [
    "gq-9.27.1.jpg"
   ]
  },
  {
   "pdf": "G9.27.2",
   "source": "GATE CSE 2014 · Set 3 · GA Q 9",
   "level": "easy",
   "q": "Using the same male-to-female ratio graph (2011 = 1, 2012 = 1.5): if the number of female students in 2011 and 2012 is equal, what is the ratio of male students in 2012 to 2011?",
   "options": [
    "1:1",
    "2:1",
    "1.5:1",
    "2.5:1"
   ],
   "answer": 2,
   "steps": [
    "Same F both years: males 2011 = 1 × F, males 2012 = 1.5 × F.",
    "Ratio 1.5 : 1."
   ],
   "figures": [
    "gq-9.27.2.jpg"
   ]
  },
  {
   "pdf": "G9.27.3",
   "source": "GATE CSE 2016 · Set 2 · GA Q 10",
   "level": "easy",
   "q": "The graph of f(x) rises with slope 1 to a peak of 2 at x = 1, then falls with slope −1 (crossing zero at x = −1 and x = 3). Which equation fits?",
   "options": [
    "f(x) = 1 − |x − 1|",
    "f(x) = 1 + |x − 1|",
    "f(x) = 2 − |x − 1|",
    "f(x) = 2 + |x − 1|"
   ],
   "answer": 2,
   "steps": [
    "An upside-down V with peak at (1, 2) is 2 − |x − 1|.",
    "Check: x = 3 → 2 − 2 = 0 ✓; x = −1 → 0 ✓."
   ],
   "figures": [
    "gq-9.27.3.jpg"
   ]
  },
  {
   "pdf": "G9.27.4",
   "source": "GATE2011 AG: GA-9",
   "level": "medium",
   "q": "The graph gives fuel efficiency (km per litre) vs speed: about 30 at 10 km/h, 60 at 15 km/h, 90 at 45 km/h and 75 at 75 km/h. Laps: P 15 km at 15 km/h, Q 75 km at 45 km/h, R 40 km at 75 km/h, S 10 km at 10 km/h. Fuel consumed per kilometre was least during lap",
   "options": [
    "P",
    "Q",
    "R",
    "S"
   ],
   "answer": 1,
   "steps": [
    "Fuel per km is least where km per litre is highest.",
    "Distance doesn't matter — only the speed of the lap.",
    "Highest efficiency (90 km/l) at 45 km/h → lap Q."
   ],
   "figures": [
    "gq-9.27.4.jpg"
   ]
  },
  {
   "pdf": "G9.27.5",
   "source": "GATE2014 AE: GA-10",
   "level": "medium",
   "q": "The chart shows the average, 5th percentile and 95th percentile of monthly rainfall in Agra over 50 years. Which are true?\n(i) On average, it rains more in July than in December.\n(ii) Every year, August rainfall is more than January rainfall.\n(iii) July rainfall can be estimated with better confidence than February rainfall.\n(iv) In August, there is at least 500 mm of rainfall.",
   "options": [
    "(i) and (ii)",
    "(i) and (iii)",
    "(ii) and (iii)",
    "(iii) and (iv)"
   ],
   "answer": 1,
   "steps": [
    "(i) July average ≈ 640 mm vs December ≈ 80 mm → true.",
    "(ii) and (iv) say \"every year\"/\"at least\" — but 5% of years fall below the 5th-percentile line, so we cannot be sure → not supported.",
    "(iii) July's 5–95 band is narrow (≈ 620–660) relative to its size, while February's is wide (≈ 20–100) → July is more predictable → true."
   ],
   "figures": [
    "gq-9.27.5.jpg"
   ]
  },
  {
   "pdf": "G9.40.1",
   "source": "GATE CSE 2015 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "Pie chart of students by department: Computer Science 40%, Civil 30%, Electrical 20%, Mechanical 10%. In every department male : female = 5 : 4. There are 40 males in Electrical. What is the difference between the number of female students in Civil and in Mechanical?",
   "options": null,
   "answerText": "32",
   "accept": [
    "32"
   ],
   "steps": [
    "Electrical: 40 males = 5 parts → 1 part = 8 → 72 students. That is 20%, so total = 360.",
    "Civil = 30% = 108 → females = 4/9 × 108 = 48. Mechanical = 10% = 36 → females = 16.",
    "Difference = 48 − 16 = 32."
   ],
   "figures": [
    "gq-9.40.1.jpg"
   ]
  },
  {
   "pdf": "G9.40.2",
   "source": "GATE CSE 2024 · Set 1 · GA Q 8",
   "level": "easy",
   "q": "In a 2,000 kcal diet, energy shares are carbohydrates 35%, proteins 20%, unsaturated fat 20%, saturated fat 20%, trans fat 5%. Carbs and proteins give 4 kcal/g; all fats give 9 kcal/g. Total fat consumed (grams) is",
   "options": [
    "44.4",
    "77.8",
    "100",
    "3,600"
   ],
   "answer": 2,
   "steps": [
    "Fat share = 20 + 20 + 5 = 45% → 0.45 × 2000 = 900 kcal.",
    "Grams = 900 / 9 = 100 g."
   ],
   "figures": [
    "gq-9.40.2.jpg"
   ]
  },
  {
   "pdf": "G9.40.3",
   "source": "GATE CSE 2024 · Set 2 · GA Q 8",
   "level": "medium",
   "q": "Shares of electricity generation — 2007: Coal 35%, Gas 25%, Hydro 30%, Solar 5%, Wind 5%; 2023: Coal 20%, Gas 15%, Hydro 35%, Solar 20%, Wind 10%. Renewables are Hydro, Solar and Wind. With the same total generation, the percentage increase in the renewable share is",
   "options": [
    "25%",
    "50%",
    "77.5%",
    "62.5%"
   ],
   "answer": 3,
   "steps": [
    "Renewables 2007: 30 + 5 + 5 = 40%. 2023: 35 + 20 + 10 = 65%.",
    "Increase = (65 − 40)/40 = 25/40 = 62.5%."
   ],
   "figures": [
    "gq-9.40.3.jpg"
   ]
  },
  {
   "pdf": "G9.40.4",
   "source": "GATE DS&AI 2024 · GA Q 5",
   "level": "easy",
   "q": "Valid-vote shares: A 40%, B 25%, C 20%, D 15%. Total votes cast 1,15,000, of which 5,000 were invalid. Total valid votes received by B and C is",
   "options": [
    "45,000",
    "49,500",
    "51,750",
    "54,000"
   ],
   "answer": 1,
   "steps": [
    "Valid votes = 1,15,000 − 5,000 = 1,10,000.",
    "B + C = 45% × 1,10,000 = 49,500."
   ],
   "figures": [
    "gq-9.40.4.jpg"
   ]
  },
  {
   "pdf": "G9.40.5",
   "source": "GATE2014 AG: GA-8",
   "level": "medium",
   "q": "Export quantity shares: Item 1 11%, Item 4 22% (total 5 lakh tonnes). Revenue shares: Item 1 12%, Item 4 6% (total Rs. 250 crore). Ratio of revenue per kg of Item 1 to Item 4?",
   "options": [
    "1:2",
    "2:1",
    "1:4",
    "4:1"
   ],
   "answer": 3,
   "steps": [
    "Revenue per kg ∝ revenue share ÷ quantity share (the totals cancel).",
    "Item 1: 12/11. Item 4: 6/22 = 3/11.",
    "Ratio = 12 : 3 = 4 : 1."
   ],
   "figures": [
    "gq-9.40.5.jpg"
   ]
  },
  {
   "pdf": "G9.47.1",
   "source": "GATE2011 GG: GA-9",
   "level": "hard",
   "q": "A radar diagram shows six service factors with scores (0–10) and coefficients: Outcome (0.8), Tangibles (0.4), Reliability (0.7), Responsiveness (0.6), Empathy (0.6), Assurance (0.5). Contribution ∝ score × coefficient. The lowest contribution as a share of overall service quality is",
   "options": [
    "10%",
    "20%",
    "24%",
    "40%"
   ],
   "answer": 0,
   "steps": [
    "Read the dots: Outcome 6, Tangibles 6, Reliability 8, Responsiveness 6, Empathy 4, Assurance 8.",
    "Contributions: 4.8, 2.4, 5.6, 3.6, 2.4, 4.0 → total 22.8.",
    "Lowest = 2.4 → 2.4/22.8 ≈ 10.5% ≈ 10%."
   ],
   "figures": [
    "gq-9.47.1.jpg"
   ]
  },
  {
   "pdf": "G9.54.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 8",
   "level": "medium",
   "q": "Table: i = 0, 1, 2, 3; input I = 20, −4, 10, 15; output X = 20, 16, 26, 41; output Y = 20, −80, −800, −12000. Which rules fit (for i > 0)?",
   "options": [
    "X(i) = X(i−1) + I(i); Y(i) = Y(i−1)·I(i)",
    "X(i) = X(i−1)·I(i); Y(i) = Y(i−1) + I(i)",
    "X(i) = X(i−1)·I(i); Y(i) = Y(i−1)·I(i)",
    "X(i) = X(i−1) + I(i); Y(i) = Y(i−1)·I(i−1)"
   ],
   "answer": 0,
   "steps": [
    "X: 20 − 4 = 16, 16 + 10 = 26, 26 + 15 = 41 → adding.",
    "Y: 20 × (−4) = −80, × 10 = −800, × 15 = −12000 → multiplying by I(i)."
   ],
   "figures": [
    "gq-9.54.1.jpg"
   ]
  },
  {
   "pdf": "G9.55.1",
   "source": "GATE CSE 2014 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "300 people were surveyed. Car: men 40, women 34. Scooter: 30, 20. Both: 60, 46. No vehicle: 20, 50. What percent do not own a scooter?",
   "options": null,
   "answerText": "48",
   "accept": [
    "48"
   ],
   "steps": [
    "Scooter owners = scooter only + both = 30 + 20 + 60 + 46 = 156.",
    "Not owning a scooter = 300 − 156 = 144 → 144/300 = 48%."
   ],
   "figures": [
    "gq-9.55.1.jpg"
   ]
  },
  {
   "pdf": "G9.55.2",
   "source": "GATE CSE 2014 · Set 3 · GA Q 5",
   "level": "medium",
   "q": "Question data (no negative marking), 44 students: Q1 (2 marks) 21 correct; Q2 (3 marks) 15 correct; Q3 (2 marks) 23 correct. The class average mark is",
   "options": [
    "1.34",
    "1.74",
    "3.02",
    "3.91"
   ],
   "answer": 2,
   "steps": [
    "Class size = 21 + 17 + 6 = 44.",
    "Total marks = 21 × 2 + 15 × 3 + 23 × 2 = 42 + 45 + 46 = 133.",
    "Average = 133/44 ≈ 3.02."
   ],
   "figures": [
    "gq-9.55.2.jpg"
   ]
  },
  {
   "pdf": "G9.55.3",
   "source": "GATE CSE 2015 · Set 1 · GA Q 6",
   "level": "medium",
   "q": "Question data (no negative marking), 44 students: Q1 (2) 21 correct, Q2 (3) 15, Q3 (1) 11, Q4 (2) 23, Q5 (5) 31. The class average mark is",
   "options": [
    "2.290",
    "2.970",
    "6.795",
    "8.795"
   ],
   "answer": 2,
   "steps": [
    "Class size = 21 + 17 + 6 = 44.",
    "Total = 42 + 45 + 11 + 46 + 155 = 299.",
    "Average = 299/44 ≈ 6.795."
   ],
   "figures": [
    "gq-9.55.3.jpg"
   ]
  },
  {
   "pdf": "G9.55.4",
   "source": "GATE CSE 2016 · Set 1 · GA Q 06",
   "level": "medium",
   "q": "Razors: Elegance Rs. 48, Smooth Rs. 63, Soft Rs. 78, Executive Rs. 173 each. Quarterly sales (Q1–Q4): Elegance 27300, 25222, 28976, 21012; Smooth 20009, 19392, 22429, 18229; Soft 17602, 18445, 19544, 16595; Executive 9999, 8942, 10234, 10109. Which product contributes the greatest fraction of the year's revenue?",
   "options": [
    "Elegance",
    "Executive",
    "Smooth",
    "Soft"
   ],
   "answer": 1,
   "steps": [
    "Yearly units: Elegance 102,510; Smooth 80,059; Soft 72,186; Executive 39,284.",
    "Revenue: Elegance ≈ 49.2 lakh, Smooth ≈ 50.4 lakh, Soft ≈ 56.3 lakh, Executive ≈ 68.0 lakh.",
    "Executive is highest."
   ],
   "trick": "Approximate: 39,000 × 173 ≈ 67 lakh beats 1,02,000 × 48 ≈ 49 lakh.",
   "figures": [
    "gq-9.55.4.jpg"
   ]
  },
  {
   "pdf": "G9.55.5",
   "source": "GATE2011 MN: GA-64",
   "level": "hard",
   "q": "Four archers P, Q, R, S shoot 7 rounds (bull's eye 10, inner circle 5, outer circle 1). Scores — P: 1, 5, 1, 10, 1, 10, 5; Q: 5, 10, 1, 10, 5, 5, 10; R: 1, 10, 1, 1, 5, 1, 1; S: 10, 1, 5, 1, 10, 1, 1. The most accurate and the most consistent players are respectively",
   "options": [
    "P and S",
    "Q and R",
    "Q and Q",
    "R and Q"
   ],
   "answer": 1,
   "steps": [
    "Most accurate = highest total: P 33, Q 46, R 20, S 29 → Q.",
    "Most consistent = smallest spread (standard deviation): P 3.73, Q 3.25, R 3.23, S 3.94 → R (just ahead of Q).",
    "Answer: Q and R."
   ],
   "figures": [
    "gq-9.55.5.jpg"
   ]
  },
  {
   "pdf": "G9.55.6",
   "source": "GATE2013 AE: GA-7",
   "level": "easy",
   "q": "Tourists to India in 2011: USA 2000, England 3500, Germany 1200, Italy 1100, Japan 2400, Australia 2300, France 1000. Which two countries contributed one third of the total?",
   "options": [
    "USA and Japan",
    "USA and Australia",
    "England and France",
    "Japan and Australia"
   ],
   "answer": 2,
   "steps": [
    "Total = 13,500 → one third = 4500.",
    "England + France = 3500 + 1000 = 4500 ✓ (others: 4400, 4300, 4700)."
   ],
   "figures": [
    "gq-9.55.6.jpg"
   ]
  },
  {
   "pdf": "G9.55.7",
   "source": "GATE2013 CE: GA-8",
   "level": "easy",
   "q": "Annual expenditure 2010 → 2011: Raw material 5200 → 6240, Power & fuel 7000 → 9450, Salary & wages 9000 → 12600, Plant & machinery 20000 → 25000, Advertising 15000 → 19500, R&D 22000 → 26400. Which two categories increased by the same percentage?",
   "options": [
    "Raw material and Salary & wages",
    "Salary & wages and Advertising",
    "Power & fuel and Advertising",
    "Raw material and Research & Development"
   ],
   "answer": 3,
   "steps": [
    "Increases: Raw material 20%, Power 35%, Salary 40%, Plant 25%, Advertising 30%, R&D 20%.",
    "Raw material and R&D both rose 20%."
   ],
   "figures": [
    "gq-9.55.7.jpg"
   ]
  }
 ]
});
