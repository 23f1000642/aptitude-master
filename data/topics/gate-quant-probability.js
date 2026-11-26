APT.addTopic({
 "id": "gate-quant-probability",
 "section": "gate",
 "title": "GATE · Quant: Probability, Counting & Statistics",
 "tagline": "Probability, permutations, combinations, Venn diagrams and statistics from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Probability is about counting fairly: how many ways can something happen, out of all the ways things could happen?",
   "Counting (permutations and combinations) is the engine, and Venn diagrams keep overlapping groups from being counted twice."
  ],
  "memory": "Probability = favourable ÷ total. \"At least one\" → 1 − none. Order matters? → permutation.",
  "formulas": [
   "<b>nPr</b> = n!/(n − r)! (order matters); <b>nCr</b> = n!/(r!(n − r)!) (order doesn't)",
   "<b>Repetition allowed</b>, order doesn't matter: C(n + r − 1, r) (\"stars and bars\")",
   "<b>Rectangles in an m × n grid</b> = C(m+1, 2) × C(n+1, 2)",
   "<b>Binomial</b>: P(k successes in n) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ",
   "<b>Bayes</b>: P(A | B) = P(A and B)/P(B) — the part you want ÷ everything that showed B",
   "<b>Venn (3 sets)</b>: |A∪B∪C| = |A| + |B| + |C| − |A∩B| − |B∩C| − |A∩C| + |A∩B∩C|",
   "<b>Median</b>: middle value after sorting (average of the two middle ones for even counts); adding k shifts the mean by k but not the SD",
   "<b>Average wait</b> for an event with yearly probability p = 1/p years"
  ],
  "tricks": [
   "List small cases when the numbers are tiny (two dice = 36 outcomes).",
   "Inclusion–exclusion for \"dislikes\" problems: total − bad₁ − bad₂ + both.",
   "Meeting-time problems: draw a square of arrival times; meet = 1 − (1 − w/T)².",
   "Knock-out tournaments: games = players − 1."
  ],
  "patterns": [
   [
    "Dice, coins, cards",
    "Count outcomes directly"
   ],
   [
    "Conditional probability / Bayes",
    "Tree of branches, then divide"
   ],
   [
    "Arrangements and selections",
    "nPr vs nCr, restrictions first"
   ],
   [
    "Venn diagrams",
    "Fill the centre first, then work outwards"
   ],
   [
    "Statistics",
    "Mean, median, mode, SD rules"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G9.9.1",
   "source": "GATE CSE 2012 Q 63",
   "level": "medium",
   "q": "X supplies 60% and Y supplies 40% of shock absorbers. 96% of X's and 72% of Y's pass the quality test (reliable). The probability that a randomly chosen reliable shock absorber was made by Y is",
   "options": [
    "0.288",
    "0.334",
    "0.667",
    "0.720"
   ],
   "answer": 1,
   "steps": [
    "Reliable from X: 0.6 × 0.96 = 0.576. Reliable from Y: 0.4 × 0.72 = 0.288.",
    "Total reliable = 0.864.",
    "P(Y | reliable) = 0.288 / 0.864 = 1/3 ≈ 0.334."
   ],
   "trick": "Bayes: the part you want ÷ the whole that happened."
  },
  {
   "pdf": "G9.13.1",
   "source": "GATE CSE 2010 Q 65",
   "level": "hard",
   "q": "Given digits 2, 2, 3, 3, 3, 4, 4, 4, 4, how many distinct 4-digit numbers greater than 3000 can be formed?",
   "options": [
    "50",
    "51",
    "52",
    "54"
   ],
   "answer": 2,
   "steps": [
    "The first digit must be 3 or 4.",
    "First digit 3: the other three digits come from {2 ×2, 3 ×2, 4 ×4}. Any of 3 digits in each place: 3³ = 27, minus 222 (only two 2s) = 26.",
    "First digit 4: others from {2 ×2, 3 ×3, 4 ×3}: 27 minus 222 = 26.",
    "Total = 26 + 26 = 52."
   ],
   "keyNote": "The book key says B (51), but direct counting gives 52 (4444 and 3444 are both valid because there are four 4s). We keep 52."
  },
  {
   "pdf": "G9.13.2",
   "source": "GATE CSE 2016 · Set 2 · GA Q 09",
   "level": "medium",
   "q": "In a 2 × 4 grid of rectangular cells, how many rectangles can be observed?",
   "options": [
    "21",
    "27",
    "30",
    "36"
   ],
   "answer": 2,
   "steps": [
    "A rectangle is chosen by 2 of the 3 horizontal lines and 2 of the 5 vertical lines.",
    "C(3,2) × C(5,2) = 3 × 10 = 30."
   ],
   "trick": "m × n grid → C(m+1,2) × C(n+1,2).",
   "figures": [
    "gq-9.13.2.jpg"
   ]
  },
  {
   "pdf": "G9.13.3",
   "source": "GATE CSE 2017 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "Arun, Gulab, Neel and Shweta each choose one shirt from four shirts coloured red, pink, blue and white. Arun dislikes red and Shweta dislikes white; Gulab and Neel like all colours. In how many ways can they choose so that no one gets a colour they dislike?",
   "options": [
    "21",
    "18",
    "16",
    "14"
   ],
   "answer": 3,
   "steps": [
    "All arrangements: 4! = 24.",
    "Arun gets red: 3! = 6. Shweta gets white: 6. Both happen: 2! = 2.",
    "Bad = 6 + 6 − 2 = 10. Good = 24 − 10 = 14."
   ],
   "trick": "Subtract the bad cases; add back the overlap (inclusion–exclusion)."
  },
  {
   "pdf": "G9.13.4",
   "source": "GATE2011 MN: GA-59",
   "level": "easy",
   "q": "In how many ways can 3 scholarships be awarded to 4 applicants, when each applicant can receive any number of scholarships?",
   "options": [
    "4",
    "12",
    "64",
    "81"
   ],
   "answer": 2,
   "steps": [
    "Each scholarship can go to any of 4 applicants.",
    "4 × 4 × 4 = 64."
   ],
   "trick": "Each item picks a person: (people)^(items)."
  },
  {
   "pdf": "G9.13.5",
   "source": "GATE2012 AR: GA-5",
   "level": "easy",
   "q": "Ten teams participate in a tournament. Every team plays each of the other teams twice. The total number of matches is",
   "options": [
    "20",
    "45",
    "60",
    "90"
   ],
   "answer": 3,
   "steps": [
    "Pairs of teams: C(10,2) = 45.",
    "Each pair plays twice: 90."
   ]
  },
  {
   "pdf": "G9.15.1",
   "source": "GATE2013 AE: GA-10",
   "level": "easy",
   "q": "Machines M1 and M2 make 60% and 40% of the components. 2% of M1's and 3% of M2's output is defective. A randomly drawn component is defective. What is the probability it was made by M2?",
   "options": [
    "0.35",
    "0.45",
    "0.5",
    "0.4"
   ],
   "answer": 2,
   "steps": [
    "Defective from M1: 0.6 × 0.02 = 0.012. From M2: 0.4 × 0.03 = 0.012.",
    "P(M2 | defective) = 0.012 / 0.024 = 0.5."
   ]
  },
  {
   "pdf": "G9.15.2",
   "source": "GATE2014 AG: GA-10",
   "level": "medium",
   "q": "10% of the population of a town is HIV⁺. A kit correctly identifies HIV⁺ people 95% of the time and HIV⁻ people 89% of the time. A patient tests positive. The probability that the patient is actually positive is ____ (to 4 decimals).",
   "options": null,
   "answerText": "0.4897",
   "accept": [
    "0.4897",
    "0.4896",
    "0.4895",
    "0.49"
   ],
   "steps": [
    "True positives: 0.1 × 0.95 = 0.095.",
    "False positives: 0.9 × 0.11 = 0.099.",
    "P(HIV⁺ | test +) = 0.095 / (0.095 + 0.099) = 0.095/0.194 ≈ 0.4897."
   ],
   "trick": "When the disease is rare, even a good test gives many false alarms."
  },
  {
   "pdf": "G9.39.1",
   "source": "GATE CSE 2024 · Set 2 · GA Q 2",
   "level": "easy",
   "q": "Two wizards each try all possible orders of the four elements water, air, fire and earth, working independently. How many attempts does each make?",
   "options": [
    "24",
    "48",
    "16",
    "12"
   ],
   "answer": 0,
   "steps": [
    "Orders of 4 different things = 4! = 24 (each wizard separately)."
   ]
  },
  {
   "pdf": "G9.39.2",
   "source": "GATE CSE 2025 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "A shop has 4 flavours. You can buy any number of scoops of any flavour, and order doesn't matter. In how many ways can you buy 3 scoops?",
   "options": [
    "4",
    "20",
    "24",
    "48"
   ],
   "answer": 1,
   "steps": [
    "Choosing with repetition: C(n + r − 1, r) = C(6, 3) = 20.",
    "Check: all same 4, two-and-one 4 × 3 = 12, all different C(4,3) = 4 → 20."
   ],
   "trick": "Stars and bars: r items into n types → C(n+r−1, r)."
  },
  {
   "pdf": "G9.39.3",
   "source": "GATE DA 2026 · GA Q 7",
   "level": "hard",
   "q": "Five integers from 0 to 20 (repeats allowed) have mean 12, median 18 and a single mode 20. Ignoring order, how many ways are there to pick them?",
   "options": [
    "0",
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "steps": [
    "Sorted a ≤ b ≤ 18 ≤ d ≤ e. Mode 20 needs 20 at least twice → d = e = 20.",
    "Sum = 60 → a + b = 60 − 18 − 40 = 2.",
    "Options (0, 2) or (1, 1). (1, 1) would make 1 a second mode ✗.",
    "Only {0, 2, 18, 20, 20} → 1 way."
   ]
  },
  {
   "pdf": "G9.39.4",
   "source": "GATE DS&AI 2024 · GA Q 3",
   "level": "medium",
   "q": "How many 4-digit numbers divisible by 3 can be formed from the digits {1, 3, 4, 6, 7} with no digit repeated?",
   "options": [
    "24",
    "48",
    "72",
    "12"
   ],
   "answer": 1,
   "steps": [
    "All five digits sum to 21. Dropping one digit must leave a multiple of 3 → drop 3 or 6.",
    "Two digit sets, each arranged in 4! = 24 ways → 48."
   ],
   "trick": "Divisible by 3 ⇔ digit sum divisible by 3."
  },
  {
   "pdf": "G9.44.1",
   "source": "GATE CSE 2015 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "A student passes maths, physics, chemistry with probabilities m, p, c. P(passing at least one) = 75%, at least two = 50%, exactly two = 40%. Which relations hold?\nI. p + m + c = 27/20\nII. p + m + c = 13/20\nIII. p × m × c = 1/10",
   "options": [
    "Only I",
    "Only II",
    "II and III",
    "I and III"
   ],
   "answer": 3,
   "steps": [
    "Exactly three = 0.5 − 0.4 = 0.1. Exactly one = 0.75 − 0.5 = 0.25.",
    "p + m + c counts each pass: 1 × 0.25 + 2 × 0.4 + 3 × 0.1 = 1.35 = 27/20 → I true, II false.",
    "P(all three) = 0.1; treating the subjects as independent, pmc = 1/10 → III true."
   ]
  },
  {
   "pdf": "G9.44.2",
   "source": "GATE CSE 2015 · Set 1 · GA Q 3",
   "level": "easy",
   "q": "A = {2, 3, 4, 5}, B = {11, 12, 13, 14, 15}. One number is picked from each. Probability the sum is 16?",
   "options": [
    "0.20",
    "0.25",
    "0.30",
    "0.33"
   ],
   "answer": 0,
   "steps": [
    "Total pairs = 4 × 5 = 20.",
    "Sum 16: (2,14), (3,13), (4,12), (5,11) → 4.",
    "Probability = 4/20 = 0.2."
   ]
  },
  {
   "pdf": "G9.44.3",
   "source": "GATE CSE 2017 · Set 1 · GA Q 5",
   "level": "easy",
   "q": "The probability that a k-digit number does NOT contain the digits 0, 5 or 9 is",
   "options": [
    "0.3ᵏ",
    "0.6ᵏ",
    "0.7ᵏ",
    "0.9ᵏ"
   ],
   "answer": 2,
   "steps": [
    "Each digit has 10 choices; 7 of them avoid 0, 5, 9.",
    "Every place independently: (7/10)ᵏ = 0.7ᵏ."
   ]
  },
  {
   "pdf": "G9.44.4",
   "source": "GATE CSE 2017 · Set 2 · GA Q 5",
   "level": "easy",
   "q": "There are 3 red, 4 green and 3 blue socks. You choose 2. The probability they are the same colour is",
   "options": [
    "1/5",
    "7/30",
    "1/4",
    "4/15"
   ],
   "answer": 3,
   "steps": [
    "Total pairs: C(10,2) = 45.",
    "Same colour: C(3,2) + C(4,2) + C(3,2) = 3 + 6 + 3 = 12.",
    "Probability = 12/45 = 4/15."
   ]
  },
  {
   "pdf": "G9.44.5",
   "source": "GATE CSE 2018 · GA Q 10",
   "level": "medium",
   "q": "A die with four green and two red faces is rolled seven times. Which outcome is most likely?",
   "options": [
    "3 green and 4 red",
    "4 green and 3 red",
    "5 green and 2 red",
    "6 green and 1 red"
   ],
   "answer": 2,
   "steps": [
    "P(green) = 2/3. P(k greens) = C(7,k)(2/3)ᵏ(1/3)⁷⁻ᵏ ∝ C(7,k)·2ᵏ.",
    "k = 3: 35 × 8 = 280. k = 4: 35 × 16 = 560. k = 5: 21 × 32 = 672. k = 6: 7 × 64 = 448.",
    "Largest at 5 green, 2 red."
   ],
   "trick": "Most likely count ≈ n × p = 7 × 2/3 ≈ 4.7 → check 4 and 5."
  },
  {
   "pdf": "G9.44.6",
   "source": "GATE CSE 2021 · Set 1 · GA Q 8",
   "level": "medium",
   "q": "Five bags each contain the same set of ten distinct chocolates. One chocolate is picked from each bag. The probability that at least two are identical is",
   "options": [
    "0.3024",
    "0.4235",
    "0.6976",
    "0.8125"
   ],
   "answer": 2,
   "steps": [
    "All different: 10 × 9 × 8 × 7 × 6 / 10⁵ = 30240/100000 = 0.3024.",
    "At least two the same = 1 − 0.3024 = 0.6976."
   ],
   "trick": "\"At least\" → 1 − none (like the birthday problem)."
  },
  {
   "pdf": "G9.44.7",
   "source": "GATE CSE 2022 · GA Q 8",
   "level": "medium",
   "q": "A box has 3 green and 2 orange balls. A drawn green ball is not replaced; a drawn orange ball is replaced by another orange ball. After the first draw, what is the probability the next draw is orange?",
   "options": [
    "1/2",
    "8/25",
    "19/50",
    "23/50"
   ],
   "answer": 3,
   "steps": [
    "First green (3/5): box has 2 green, 2 orange → orange next 2/4.",
    "First orange (2/5): box unchanged (3 green, 2 orange) → orange next 2/5.",
    "Total = 3/5 × 1/2 + 2/5 × 2/5 = 3/10 + 4/25 = 15/50 + 8/50 = 23/50."
   ]
  },
  {
   "pdf": "G9.44.8",
   "source": "GATE CSE 2025 · Set 1 · GA Q 8",
   "level": "easy",
   "q": "A fair die is rolled thrice. What is the probability of rolling 6 exactly once?",
   "options": [
    "75/216",
    "1/6",
    "1/18",
    "25/216"
   ],
   "answer": 0,
   "steps": [
    "Choose which roll is 6: 3 ways.",
    "Each way: (1/6)(5/6)(5/6) = 25/216.",
    "Total = 75/216."
   ]
  },
  {
   "pdf": "G9.44.9",
   "source": "GATE CSE 2026 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "A die is rolled twice. The probability that the second number is an integer multiple of the first is",
   "options": [
    "1/6",
    "5/18",
    "7/18",
    "5/6"
   ],
   "answer": 2,
   "steps": [
    "First 1 → 6 multiples; 2 → 2, 4, 6 (3); 3 → 3, 6 (2); 4, 5, 6 → only itself (1 each).",
    "Favourable = 6 + 3 + 2 + 1 + 1 + 1 = 14 out of 36.",
    "14/36 = 7/18."
   ]
  },
  {
   "pdf": "G9.44.10",
   "source": "GATE CSE 2026 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "A die is rolled twice. The probability that the sum is prime is",
   "options": [
    "3/36",
    "13/36",
    "15/36",
    "19/36"
   ],
   "answer": 2,
   "steps": [
    "Prime sums: 2 (1 way), 3 (2), 5 (4), 7 (6), 11 (2).",
    "Total = 15 → 15/36."
   ]
  },
  {
   "pdf": "G9.44.11",
   "source": "GATE CSE 2026 · Set 2 · GA Q 3",
   "level": "easy",
   "q": "Each day is independently cloudy with probability 0.5 (else sunny). Probability that in four days there are three cloudy and one sunny?",
   "options": [
    "1/4",
    "3/4",
    "2/3",
    "3/8"
   ],
   "answer": 0,
   "steps": [
    "Which day is sunny: C(4,1) = 4 ways, each with (1/2)⁴ = 1/16.",
    "Probability = 4/16 = 1/4."
   ]
  },
  {
   "pdf": "G9.44.12",
   "source": "GATE DS&AI 2024 · GA Q 7",
   "level": "easy",
   "q": "A boy or girl is equally likely. For a family with three children, the probability of two girls and one boy is",
   "options": [
    "3/8",
    "1/8",
    "1/4",
    "1/2"
   ],
   "answer": 0,
   "steps": [
    "GGB, GBG, BGG → 3 of the 8 equally likely orders.",
    "Probability = 3/8."
   ]
  },
  {
   "pdf": "G9.44.13",
   "source": "GATE2012 AE: GA-6",
   "level": "medium",
   "q": "Policemen A and B fire once each. P(A hits) is three times P(B hits). If P(convict not injured) = 0.5, then P(B hits) is",
   "options": [
    "0.14",
    "0.22",
    "0.33",
    "0.40"
   ],
   "answer": 0,
   "steps": [
    "Let P(B) = p, P(A) = 3p. Not injured = (1 − 3p)(1 − p) = 0.5.",
    "3p² − 4p + 0.5 = 0 → p = (4 − √10)/6 ≈ 0.14 (the other root makes 3p > 1)."
   ]
  },
  {
   "pdf": "G9.44.14",
   "source": "GATE2012 AR: GA-9",
   "level": "medium",
   "q": "A smuggler has 10 capsules, 5 with drugs. Officials pick 2 at random and test them. Probability the smuggler is caught?",
   "options": [
    "0.50",
    "0.67",
    "0.78",
    "0.82"
   ],
   "answer": 2,
   "steps": [
    "Not caught only if both picked are clean: C(5,2)/C(10,2) = 10/45 = 2/9.",
    "Caught = 1 − 2/9 = 7/9 ≈ 0.78."
   ]
  },
  {
   "pdf": "G9.44.15",
   "source": "GATE2012 CY: GA-7",
   "level": "medium",
   "q": "A and B arrive at random between 1:00 and 2:00 pm; whoever comes first waits at most 15 minutes. The probability they meet is",
   "options": [
    "1/4",
    "1/16",
    "7/16",
    "9/16"
   ],
   "answer": 2,
   "steps": [
    "Draw a 60 × 60 square of arrival times. They miss if the times differ by more than 15.",
    "The two \"miss\" triangles have legs 45 → total area 45² = 2025 of 3600 = 9/16.",
    "Meet = 1 − 9/16 = 7/16."
   ],
   "trick": "Meeting probability = 1 − (1 − w/T)², here 1 − (3/4)²."
  },
  {
   "pdf": "G9.44.16",
   "source": "GATE2013 EE: GA-6",
   "level": "easy",
   "q": "What is the chance that a leap year selected at random will contain 53 Saturdays?",
   "options": [
    "2/7",
    "3/7",
    "1/7",
    "5/7"
   ],
   "answer": 0,
   "steps": [
    "366 days = 52 weeks + 2 extra days.",
    "The 2 extra consecutive days have 7 equally likely pairs; Saturday is in Fri–Sat and Sat–Sun.",
    "Probability = 2/7."
   ]
  },
  {
   "pdf": "G9.44.17",
   "source": "GATE2014 AG: GA-4",
   "level": "easy",
   "q": "The yearly probability of an earthquake above magnitude 6 in the Garhwal Himalayas is 0.04. The average time between successive such earthquakes is ____ years.",
   "options": null,
   "answerText": "25",
   "accept": [
    "25"
   ],
   "steps": [
    "Average waiting time = 1/probability per year.",
    "1/0.04 = 25 years."
   ]
  },
  {
   "pdf": "G9.52.1",
   "source": "GATE CSE 2012 Q 64",
   "level": "easy",
   "q": "Which assertions are correct?\nP: Adding 7 to each entry adds 7 to the mean.\nQ: Adding 7 to each entry adds 7 to the standard deviation.\nR: Doubling each entry doubles the mean.\nS: Doubling each entry leaves the standard deviation unchanged.",
   "options": [
    "P, Q",
    "Q, R",
    "P, R",
    "R, S"
   ],
   "answer": 2,
   "steps": [
    "Shifting all values moves the mean but not the spread → P true, Q false.",
    "Scaling by 2 doubles both mean and SD → R true, S false."
   ]
  },
  {
   "pdf": "G9.52.2",
   "source": "GATE CSE 2024 · Set 1 · GA Q 3",
   "level": "easy",
   "q": "The median of 9, 18, 11, 14, 15, 17, 10, 69, 11, 13 is",
   "options": [
    "13.5",
    "14",
    "11",
    "18.7"
   ],
   "answer": 0,
   "steps": [
    "Sort: 9, 10, 11, 11, 13, 14, 15, 17, 18, 69.",
    "10 values → median = average of 5th and 6th = (13 + 14)/2 = 13.5."
   ]
  },
  {
   "pdf": "G9.52.3",
   "source": "GATE2012 AE: GA-5",
   "level": "easy",
   "q": "The mean of five different natural numbers is 12. The largest possible value among them is",
   "options": [
    "12",
    "40",
    "50",
    "60"
   ],
   "answer": 2,
   "steps": [
    "Sum = 60. Make the other four as small as possible: 1 + 2 + 3 + 4 = 10.",
    "Largest = 60 − 10 = 50."
   ]
  },
  {
   "pdf": "G9.57.1",
   "source": "GATE CSE 2010 Q 59",
   "level": "easy",
   "q": "25 persons: 15 play hockey, 17 football and 10 both. How many play neither?",
   "options": [
    "2",
    "17",
    "13",
    "3"
   ],
   "answer": 3,
   "steps": [
    "Hockey or football = 15 + 17 − 10 = 22.",
    "Neither = 25 − 22 = 3."
   ]
  },
  {
   "pdf": "G9.57.2",
   "source": "GATE CSE 2016 · Set 2 · GA Q 06",
   "level": "easy",
   "q": "Of 150 faculty, 55 use Facebook, 85 use WhatsApp, and 30 use neither. How many are connected only through Facebook?",
   "options": [
    "35",
    "45",
    "65",
    "90"
   ],
   "answer": 0,
   "steps": [
    "At least one = 150 − 30 = 120.",
    "Both = 55 + 85 − 120 = 20.",
    "Only Facebook = 55 − 20 = 35."
   ]
  },
  {
   "pdf": "G9.57.3",
   "source": "GATE CSE 2019 · GA Q 7",
   "level": "medium",
   "q": "In the diagram, teachers are the triangle, researchers the circle and administrators the rectangle. Regions: teachers only 70, teachers & administrators 10, administrators only 20, administrators & researchers 20, researchers only 40. The percentage of administrators among all people is in the range",
   "options": [
    "0 to 15",
    "16 to 30",
    "31 to 45",
    "46 to 60"
   ],
   "answer": 2,
   "steps": [
    "Total people = 70 + 10 + 20 + 20 + 40 = 160.",
    "Administrators = 10 + 20 + 20 = 50.",
    "50/160 = 31.25% → 31 to 45."
   ],
   "figures": [
    "gq-9.57.3.jpg"
   ]
  },
  {
   "pdf": "G9.57.4",
   "source": "GATE CSE 2019 · GA Q 9",
   "level": "medium",
   "q": "Clubs: 60 only Drama, 80 only Dance, 30 only Maths; 40 in Drama & Dance, 12 in Dance & Maths, 7 in Drama & Maths, 2 in all three. If 75% of students are in no club, the total number of students is",
   "options": [
    "1000",
    "975",
    "900",
    "225"
   ],
   "answer": 2,
   "steps": [
    "The pair counts include the 2 who are in all three. Pairs only: 38, 10, 5.",
    "In some club = 60 + 80 + 30 + 38 + 10 + 5 + 2 = 225.",
    "225 is 25% of the college → total = 900."
   ]
  },
  {
   "pdf": "G9.57.5",
   "source": "GATE CSE 2024 · Set 2 · GA Q 3",
   "level": "medium",
   "q": "Of 10,000 students, 1,500 like neither their core nor other branches. Those liking their core branch are 1/4 of those liking other branches; 500 like both. How many like their core branch?",
   "options": [
    "1,800",
    "3,500",
    "1,600",
    "1,500"
   ],
   "answer": 0,
   "steps": [
    "Like at least one = 10,000 − 1,500 = 8,500 = C + O − 500 → C + O = 9,000.",
    "O = 4C → 5C = 9,000 → C = 1,800."
   ]
  },
  {
   "pdf": "G9.57.6",
   "source": "GATE2010 TF: GA-8",
   "level": "medium",
   "q": "50 linguists: 4 know Kannada, Telugu and Tamil; 7 know only Telugu and Tamil; 5 only Kannada and Tamil; 6 only Telugu and Kannada. 24 know Tamil and 24 know Kannada. How many know only Telugu?",
   "options": [
    "9",
    "10",
    "11",
    "8"
   ],
   "answer": 2,
   "steps": [
    "Only Tamil = 24 − (7 + 5 + 4) = 8. Only Kannada = 24 − (5 + 6 + 4) = 9.",
    "Everyone else = 8 + 9 + 7 + 5 + 6 + 4 = 39.",
    "Only Telugu = 50 − 39 = 11."
   ]
  },
  {
   "pdf": "G9.57.7",
   "source": "GATE2011 GG: GA-7",
   "level": "hard",
   "q": "300 students each take at least one of M600, C600, E600. 100 took M600, 200 took C600 and 60 took E600. The maximum possible number taking all three is",
   "options": [
    "20",
    "30",
    "40",
    "50"
   ],
   "answer": 1,
   "steps": [
    "Total registrations = 360, but there are only 300 students → 60 extra registrations.",
    "Each student taking all three uses 2 extra → at most 60/2 = 30.",
    "Possible: 30 take all three; only-M 70, only-C 170, only-E 30 (total 300 ✓)."
   ]
  }
 ]
});
