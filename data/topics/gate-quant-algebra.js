APT.addTopic({
 "id": "gate-quant-algebra",
 "section": "gate",
 "title": "GATE · Quant: Algebra & Numbers",
 "tagline": "Series, logs, quadratics, functions and number puzzles from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Algebra and number questions are puzzles about hidden numbers: a number whose square is something, a series that keeps going, a log that hides a power.",
   "The big tricks are <b>spotting the pattern</b> (what changes from one term to the next?) and <b>rewriting</b> (logs into powers, fractions into differences that cancel)."
  ],
  "memory": "Find the pattern, rewrite into something simpler, and test small numbers.",
  "formulas": [
   "<b>AP sum</b> = n/2 × (first + last); <b>GP sum</b> = a(rⁿ − 1)/(r − 1); infinite GP = a/(1 − r) for |r| < 1",
   "<b>Logs</b>: log ab = log a + log b; log aⁿ = n log a; a^(log b) = b^(log a)",
   "<b>Quadratic</b> ax² + bx + c: sum of roots = −b/a, product = c/a; roots of opposite sign ⇔ c/a < 0",
   "<b>|x|</b> = x if x ≥ 0, −x if x < 0; (x + y − |x − y|)/2 = min(x, y)",
   "<b>LCM trick</b>: same remainder r for divisors a, b, c → LCM(a, b, c) + r",
   "<b>Inclusion–exclusion</b>: |A ∪ B| = |A| + |B| − |A ∩ B|",
   "<b>Number of digits</b> of N = ⌊log₁₀ N⌋ + 1",
   "<b>Telescoping</b>: 1/(√k + √(k+1)) = √(k+1) − √k",
   "<b>AM ≥ GM</b>, with equality only when the numbers are equal"
  ],
  "tricks": [
   "Test x = 1 or n = 1 in formula options — the wrong ones usually fail at once.",
   "For an infinite nested root √(a + √(a + …)), set it equal to x and solve x² = a + x.",
   "Exponentials beat powers for large n; compare exponentials by their n-th root (the base).",
   "For \"for all x\" statements, try a couple of special values to force the constants."
  ],
  "patterns": [
   [
    "Series and sequences",
    "Differences, ratios, n² ± 1, Fibonacci"
   ],
   [
    "Logarithms and powers",
    "Turn everything into one base"
   ],
   [
    "Quadratics and polynomials",
    "Sum/product of roots, factor theorem"
   ],
   [
    "Number system",
    "Bases, divisibility, LCM/HCF, digits"
   ],
   [
    "Functions and max/min",
    "Derivative = 0, or the vertex of a parabola"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G9.2.1",
   "source": "GATE CSE 2014 · Set 2 · GA Q 8",
   "level": "medium",
   "q": "If x is real and |x² − 2x + 3| = 11, then possible values of |−x³ + x² − x| include:",
   "options": [
    "2, 4",
    "2, 14",
    "4, 52",
    "14, 52"
   ],
   "answer": 3,
   "steps": [
    "x² − 2x + 3 = (x − 1)² + 2 is always positive, so x² − 2x + 3 = 11 → x² − 2x − 8 = 0 → x = 4 or −2.",
    "x = 4: |−64 + 16 − 4| = 52. x = −2: |8 + 4 + 2| = 14."
   ]
  },
  {
   "pdf": "G9.2.2",
   "source": "GATE CSE 2017 · Set 1 · GA Q 8",
   "level": "easy",
   "q": "The expression [(x + y) − |x − y|] / 2 is equal to:",
   "options": [
    "The maximum of x and y",
    "The minimum of x and y",
    "1",
    "None of the above"
   ],
   "answer": 1,
   "steps": [
    "If x ≥ y: (x + y − (x − y))/2 = y. If x < y: (x + y − (y − x))/2 = x.",
    "Either way it gives the smaller number."
   ],
   "trick": "Try numbers: x=5, y=2 → (7 − 3)/2 = 2."
  },
  {
   "pdf": "G9.2.3",
   "source": "GATE2011 AG: GA-7",
   "level": "easy",
   "q": "Given f(y) = |y| / y, and q is a non-zero real number, the value of |f(q) − f(−q)| is:",
   "options": [
    "0",
    "−1",
    "1",
    "2"
   ],
   "answer": 3,
   "steps": [
    "f(y) is +1 for positive y and −1 for negative y.",
    "f(q) and f(−q) are always opposite: 1 − (−1) = 2 or −1 − 1 = −2. Absolute value = 2."
   ]
  },
  {
   "pdf": "G9.2.4",
   "source": "GATE2013 AE: GA-8",
   "level": "medium",
   "q": "If |−2X + 9| = 3, then the possible value of |−X| − X² would be:",
   "options": [
    "30",
    "−30",
    "−42",
    "42"
   ],
   "answer": 1,
   "steps": [
    "−2X + 9 = ±3 → X = 3 or X = 6.",
    "X = 3: 3 − 9 = −6. X = 6: 6 − 36 = −30. Only −30 is an option."
   ]
  },
  {
   "pdf": "G9.2.5",
   "source": "GATE2013 CE: GA-7",
   "level": "medium",
   "q": "If |4X − 7| = 5, then the values of 2|X| − |−X| are:",
   "options": [
    "2, 1/3",
    "1/2, 3",
    "3/2, 9",
    "2/3, 9"
   ],
   "answer": 1,
   "steps": [
    "4X − 7 = ±5 → X = 3 or X = 1/2.",
    "2|X| − |−X| = |X| → 3 or 1/2."
   ]
  },
  {
   "pdf": "G9.3.1",
   "source": "GATE2011 MN: GA-61",
   "level": "medium",
   "q": "If (2y + 1)/(y + 2) < 1, then which gives the correct range of y?",
   "options": [
    "−2 < y < 2",
    "−2 < y < 1",
    "−3 < y < 1",
    "−4 < y < 1"
   ],
   "answer": 1,
   "steps": [
    "Move 1 across: (2y + 1)/(y + 2) − 1 < 0 → (y − 1)/(y + 2) < 0.",
    "A fraction is negative when top and bottom have opposite signs: −2 < y < 1."
   ],
   "trick": "Never multiply an inequality by (y + 2) without knowing its sign."
  },
  {
   "pdf": "G9.6.1",
   "source": "GATE CSE 2013 Q 58",
   "level": "easy",
   "q": "What will be the maximum sum of 44, 42, 40, … ?",
   "options": [
    "502",
    "504",
    "506",
    "500"
   ],
   "answer": 2,
   "steps": [
    "The terms go down by 2. The sum keeps growing while terms are positive.",
    "Stop at 2 (adding 0 changes nothing; negatives reduce the sum).",
    "Sum = 2 + 4 + … + 44 = 2(1 + 2 + … + 22) = 2 × 253 = 506."
   ]
  },
  {
   "pdf": "G9.6.2",
   "source": "GATE CSE 2015 · Set 2 · GA Q 6",
   "level": "easy",
   "q": "If the list of letters P, R, S, T, U is an arithmetic sequence, which of the following are also arithmetic sequences?\nI. 2P, 2R, 2S, 2T, 2U\nII. P−3, R−3, S−3, T−3, U−3\nIII. P², R², S², T², U²",
   "options": [
    "I only",
    "I and II",
    "II and III",
    "I and III"
   ],
   "answer": 1,
   "steps": [
    "Multiplying every term by 2 doubles the common difference → still AP.",
    "Subtracting 3 from every term keeps the same difference → still AP.",
    "Squares: 1, 2, 3 → 1, 4, 9 has differences 3, 5 → not AP."
   ],
   "trick": "Test with 1, 2, 3, 4, 5."
  },
  {
   "pdf": "G9.6.3",
   "source": "GATE2011 AG: GA-6",
   "level": "medium",
   "q": "The sum of n terms of the series 4 + 44 + 444 + … is",
   "options": [
    "(4/81)[10ⁿ⁺¹ − 9n − 1]",
    "(4/81)[10ⁿ⁻¹ − 9n − 1]",
    "(4/81)[10ⁿ⁺¹ − 9n − 10]",
    "(4/81)[10ⁿ − 9n − 10]"
   ],
   "answer": 2,
   "steps": [
    "Write 44…4 (k fours) = (4/9)(10ᵏ − 1).",
    "Sum = (4/9)[(10 + 100 + … + 10ⁿ) − n] = (4/9)[10(10ⁿ − 1)/9 − n].",
    "= (4/81)[10ⁿ⁺¹ − 10 − 9n]."
   ],
   "trick": "Check n = 1: (4/81)(100 − 9 − 10) = 4 ✓."
  },
  {
   "pdf": "G9.22.1",
   "source": "GATE CSE 2013 Q 62",
   "level": "easy",
   "q": "A 2-digit number is selected at random. What is the probability that it is not divisible by 7?",
   "options": [
    "13/90",
    "12/90",
    "78/90",
    "77/90"
   ],
   "answer": 3,
   "steps": [
    "2-digit numbers: 10 to 99 → 90.",
    "Multiples of 7: 14, 21, …, 98 → 13.",
    "Not divisible: 90 − 13 = 77 → 77/90."
   ]
  },
  {
   "pdf": "G9.22.2",
   "source": "GATE CSE 2018 · GA Q 4",
   "level": "medium",
   "q": "What is the smallest natural number which when divided by 20, 42 or 76 leaves a remainder of 7 in each case?",
   "options": [
    "3047",
    "6047",
    "7987",
    "63847"
   ],
   "answer": 2,
   "steps": [
    "The number minus 7 must be divisible by all three: find LCM.",
    "20 = 2²·5, 42 = 2·3·7, 76 = 2²·19 → LCM = 4·3·5·7·19 = 7980.",
    "Answer 7980 + 7 = 7987."
   ],
   "trick": "Same remainder r → LCM + r."
  },
  {
   "pdf": "G9.22.3",
   "source": "GATE2010 MN: GA-8",
   "level": "medium",
   "q": "In {1, 2, …, 5000}, how many integers are divisible by neither 3 nor 4?",
   "options": [
    "1668",
    "2084",
    "2500",
    "2916"
   ],
   "answer": 2,
   "steps": [
    "Divisible by 3: 1666. By 4: 1250. By 12 (both): 416.",
    "By 3 or 4: 1666 + 1250 − 416 = 2500.",
    "Neither: 5000 − 2500 = 2500."
   ]
  },
  {
   "pdf": "G9.24.1",
   "source": "GATE CSE 2015 · Set 2 · GA Q 9",
   "level": "medium",
   "q": "p, q, r, s are distinct integers. f = max, g = min, and h(p,q,r,s) = remainder of (p×q)/(r×s) if p×q > r×s, otherwise remainder of (r×s)/(p×q). fg(…) = f × g. The same rules apply to the two-argument forms. What is fg(h(2,5,7,3), 4, 6, 8)?",
   "options": null,
   "answerText": "8",
   "accept": [
    "8"
   ],
   "steps": [
    "h(2,5,7,3): p×q = 10, r×s = 21. Since 21 > 10, take remainder of 21/10 = 1.",
    "fg(1, 4, 6, 8) = max × min = 8 × 1 = 8."
   ]
  },
  {
   "pdf": "G9.24.2",
   "source": "GATE CSE 2015 · Set 3 · GA Q 5",
   "level": "easy",
   "q": "A linear function f(x) has value 29 at x = −2 and 39 at x = 3. Find its value at x = 5.",
   "options": [
    "59",
    "45",
    "43",
    "35"
   ],
   "answer": 2,
   "steps": [
    "Slope = (39 − 29)/(3 − (−2)) = 10/5 = 2.",
    "f(5) = 39 + 2 × 2 = 43."
   ]
  },
  {
   "pdf": "G9.24.3",
   "source": "GATE CSE 2015 · Set 3 · GA Q 8",
   "level": "medium",
   "q": "Choose the equation of the thick line in the plot: it runs up the positive y-axis, and for negative y it goes through (0,0) and (2, −1).",
   "options": [
    "x = y − |y|",
    "x = −(y − |y|)",
    "x = y + |y|",
    "x = −(y + |y|)"
   ],
   "answer": 1,
   "steps": [
    "For y > 0 the line is the y-axis: x = 0.",
    "For y < 0 it passes (0,0) and (2,−1): x = −2y.",
    "Option B: y > 0 → −(y − y) = 0 ✓; y < 0 → −(y + y) = −2y ✓."
   ],
   "figures": [
    "gq-9.24.3.jpg"
   ]
  },
  {
   "pdf": "G9.24.4",
   "source": "GATE CSE 2023 · GA Q 7",
   "level": "medium",
   "q": "f(t) = 0.01t² and g(t) = 4t for 0 < t < ∞.\n(i) For some t > 0, g(t) > f(t).\n(ii) There exists a T such that f(t) > g(t) for all t > T.\nWhich is TRUE?",
   "options": [
    "only (i)",
    "only (ii)",
    "both (i) and (ii)",
    "neither"
   ],
   "answer": 2,
   "steps": [
    "f(t) = g(t) when 0.01t² = 4t → t = 400.",
    "For 0 < t < 400, 4t is bigger (e.g. t = 1: 4 > 0.01) → (i) true.",
    "For t > 400, the square wins → (ii) true with T = 400."
   ],
   "trick": "A square always overtakes a straight line eventually."
  },
  {
   "pdf": "G9.24.5",
   "source": "GATE CSE 2023 · GA Q 9",
   "level": "medium",
   "q": "f(x) and g(y) are functions of x and y respectively, and f(x) = g(y) for all values of x and y. Which is necessarily TRUE?",
   "options": [
    "f(x) = 0 and g(y) = 0",
    "f(x) = g(y) = constant",
    "f(x) ≠ constant and g(y) ≠ constant",
    "f(x) + g(y) = f(x) − g(y)"
   ],
   "answer": 1,
   "steps": [
    "Fix y. Then f(x) equals the same number g(y) for every x → f is constant.",
    "Similarly g is constant, and they are equal. (Not necessarily zero.)"
   ]
  },
  {
   "pdf": "G9.24.6",
   "source": "GATE2010 MN: GA-10",
   "level": "medium",
   "q": "Which of f₁(n) = n¹⁰⁰, f₂(n) = (1.2)ⁿ, f₃(n) = 2^(n/2), f₄(n) = 3^(n/3) is largest for very large n?",
   "options": [
    "f₄",
    "f₃",
    "f₂",
    "f₁"
   ],
   "answer": 0,
   "steps": [
    "Exponentials beat any power of n, so ignore f₁.",
    "Write each as (base)ⁿ: 1.2, 2^(1/2) ≈ 1.414, 3^(1/3) ≈ 1.442.",
    "The biggest base, f₄, wins."
   ]
  },
  {
   "pdf": "G9.24.7",
   "source": "GATE2012 AR: GA-7",
   "level": "easy",
   "q": "Let f(x) = x − [x] for x ≥ 0, where [x] is the greatest integer not larger than x. Then f(x) is a",
   "options": [
    "monotonically increasing function",
    "monotonically decreasing function",
    "linearly increasing function between two integers",
    "linearly decreasing function between two integers"
   ],
   "answer": 2,
   "steps": [
    "f(x) is the fractional part: 0 at each integer, rising like x up to almost 1, then dropping back to 0.",
    "So it increases linearly between two integers (a saw-tooth), not overall."
   ]
  },
  {
   "pdf": "G9.28.1",
   "source": "GATE CSE 2011 Q 57",
   "level": "medium",
   "q": "If log P = (1/2) log Q = (1/3) log R, which is TRUE?",
   "options": [
    "P² = Q³R²",
    "Q² = PR",
    "Q² = R³P",
    "R = P²Q²"
   ],
   "answer": 1,
   "steps": [
    "Let log P = k → log Q = 2k, log R = 3k.",
    "log Q² = 4k and log PR = k + 3k = 4k → Q² = PR."
   ],
   "trick": "Same as P = a, Q = a², R = a³."
  },
  {
   "pdf": "G9.28.2",
   "source": "GATE CSE 2018 · GA Q 7",
   "level": "medium",
   "q": "If pqr ≠ 0 and p^(−x) = 1/q, q^(−y) = 1/r, r^(−z) = 1/p, what is xyz?",
   "options": [
    "−1",
    "1/(pqr)",
    "1",
    "pqr"
   ],
   "answer": 2,
   "steps": [
    "So q = pˣ, r = qʸ, p = r^z.",
    "p = r^z = (qʸ)^z = (pˣ)^(yz) = p^(xyz).",
    "Hence xyz = 1."
   ]
  },
  {
   "pdf": "G9.28.3",
   "source": "GATE CSE 2024 · Set 1 · GA Q 5",
   "level": "medium",
   "q": "For positive p and q, if log(p² + q²) = log p + log q + 2 log 3, then (p⁴ + q⁴)/(p²q²) is",
   "options": [
    "79",
    "81",
    "9",
    "83"
   ],
   "answer": 0,
   "steps": [
    "p² + q² = 9pq.",
    "Square: p⁴ + 2p²q² + q⁴ = 81p²q² → p⁴ + q⁴ = 79p²q².",
    "Answer 79."
   ]
  },
  {
   "pdf": "G9.28.4",
   "source": "GATE CSE 2024 · Set 2 · GA Q 4",
   "level": "medium",
   "q": "For positive x and y, if ln((x + y)/2) = ½[ln x + ln y], then x/y + y/x is",
   "options": [
    "1",
    "1/2",
    "2",
    "4"
   ],
   "answer": 2,
   "steps": [
    "(x + y)/2 = √(xy): the AM equals the GM.",
    "AM = GM only when x = y.",
    "x/y + y/x = 1 + 1 = 2."
   ]
  },
  {
   "pdf": "G9.28.5",
   "source": "GATE DA 2026 · GA Q 4",
   "level": "medium",
   "q": "m > n > 0 are distinct. x = n^(log₁₀ m) and y = m^(log₁₀ n). The relation between x and y is",
   "options": [
    "x > y",
    "x < y",
    "x = y",
    "x = log₁₀ y"
   ],
   "answer": 2,
   "steps": [
    "log x = log m · log n.",
    "log y = log n · log m — the same.",
    "So x = y."
   ],
   "trick": "a^(log b) = b^(log a) always."
  },
  {
   "pdf": "G9.28.6",
   "source": "GATE2012 AR: GA-6",
   "level": "easy",
   "q": "A value of x satisfying log x + log(x − 7) = log(x + 11) + log 2 is",
   "options": [
    "1",
    "2",
    "7",
    "11"
   ],
   "answer": 3,
   "steps": [
    "x(x − 7) = 2(x + 11) → x² − 9x − 22 = 0 → (x − 11)(x + 2) = 0.",
    "x must make every log valid (x > 7) → x = 11."
   ]
  },
  {
   "pdf": "G9.30.1",
   "source": "GATE CSE 2012 Q 62",
   "level": "easy",
   "q": "The arch profile is y = 2x − 0.1x², where y is height in metres. The maximum height is",
   "options": [
    "8 m",
    "10 m",
    "12 m",
    "14 m"
   ],
   "answer": 1,
   "steps": [
    "dy/dx = 2 − 0.2x = 0 → x = 10.",
    "y = 20 − 10 = 10 m."
   ],
   "trick": "Peak of ax − bx² is a²/(4b) = 4/0.4 = 10."
  },
  {
   "pdf": "G9.30.2",
   "source": "GATE CSE 2017 · Set 2 · GA Q 9",
   "level": "medium",
   "q": "The number of roots of eˣ + 0.5x² − 2 = 0 in [−5, 5] is",
   "options": [
    "0",
    "1",
    "2",
    "3"
   ],
   "answer": 2,
   "steps": [
    "f(x) = eˣ + 0.5x² − 2. f(0) = −1 (below zero).",
    "f(−5) ≈ 0.007 + 12.5 − 2 > 0 and f(5) ≈ 148 + 12.5 − 2 > 0.",
    "f″(x) = eˣ + 1 > 0, so the curve is a single U shape: it crosses zero once on each side → 2 roots."
   ]
  },
  {
   "pdf": "G9.30.3",
   "source": "GATE2010 TF: GA-5",
   "level": "medium",
   "q": "For f(x) = max(7 − x, x + 3), in which range does f take its minimum value?",
   "options": [
    "−6 ≤ x < −2",
    "−2 ≤ x < 2",
    "2 ≤ x < 6",
    "6 ≤ x < 10"
   ],
   "answer": 2,
   "steps": [
    "7 − x falls and x + 3 rises; the max of the two is a V shape.",
    "They meet where 7 − x = x + 3 → x = 2 (value 5). That is the lowest point.",
    "x = 2 lies in 2 ≤ x < 6."
   ]
  },
  {
   "pdf": "G9.30.4",
   "source": "GATE2013 CE: GA-6",
   "level": "medium",
   "q": "X and Y are positive reals with 2X + Y ≤ 6 and X + 2Y ≤ 8. For which (X, Y) does f = 3X + 6Y give the maximum value?",
   "options": [
    "(4/3, 10/3)",
    "(8/3, 20/3)",
    "(8/3, 10/3)",
    "(4/3, 20/3)"
   ],
   "answer": 0,
   "steps": [
    "First check which options are allowed. B: X + 2Y = 16 > 8 ✗. C: 2X + Y = 26/3 > 6 ✗. D: X + 2Y = 44/3 > 8 ✗.",
    "A is the corner where 2X + Y = 6 meets X + 2Y = 8. f = 4 + 20 = 24.",
    "f = 3(X + 2Y) ≤ 3 × 8 = 24, so 24 is the maximum."
   ],
   "trick": "3X + 6Y = 3(X + 2Y), and X + 2Y can be at most 8."
  },
  {
   "pdf": "G9.32.1",
   "source": "GATE2012 CY: GA-1",
   "level": "easy",
   "q": "If (1.001)¹²⁵⁹ = 3.52 and (1.001)²⁰⁶² = 7.85, then (1.001)³³²¹ =",
   "options": [
    "2.23",
    "4.33",
    "11.37",
    "27.64"
   ],
   "answer": 3,
   "steps": [
    "3321 = 1259 + 2062.",
    "So the value = 3.52 × 7.85 ≈ 27.63."
   ],
   "trick": "Add powers → multiply values."
  },
  {
   "pdf": "G9.33.1",
   "source": "GATE DA 2026 · GA Q 2",
   "level": "easy",
   "q": "The product of the digits of a three-digit number is 70. The sum of its digits is",
   "options": [
    "12",
    "14",
    "16",
    "18"
   ],
   "answer": 1,
   "steps": [
    "70 = 2 × 5 × 7. With a digit 1 we would need 7 × 10 — not a digit.",
    "So the digits are 2, 5, 7 → sum 14."
   ]
  },
  {
   "pdf": "G9.34.1",
   "source": "GATE CSE 2013 Q 61",
   "level": "medium",
   "q": "Find the sum 1/(√1 + √2) + 1/(√2 + √3) + … + 1/(√80 + √81).",
   "options": [
    "7",
    "8",
    "9",
    "10"
   ],
   "answer": 1,
   "steps": [
    "Rationalise: 1/(√k + √(k+1)) = √(k+1) − √k.",
    "Adding, everything cancels except √81 − √1 = 9 − 1 = 8."
   ],
   "trick": "Telescoping sum."
  },
  {
   "pdf": "G9.34.2",
   "source": "GATE CSE 2014 · Set 2 · GA Q 5",
   "level": "easy",
   "q": "The value of √(12 + √(12 + √(12 + …))) is",
   "options": [
    "3.464",
    "3.932",
    "4.000",
    "4.444"
   ],
   "answer": 2,
   "steps": [
    "Call it x: x = √(12 + x) → x² − x − 12 = 0 → (x − 4)(x + 3) = 0.",
    "x is positive → 4."
   ]
  },
  {
   "pdf": "G9.34.3",
   "source": "GATE CSE 2014 · Set 3 · GA Q 4",
   "level": "easy",
   "q": "Which number does not belong in the series 2, 5, 10, 17, 26, 37, 50, 64?",
   "options": [
    "17",
    "37",
    "64",
    "26"
   ],
   "answer": 2,
   "steps": [
    "The terms are n² + 1: 2, 5, 10, 17, 26, 37, 50, 65.",
    "64 should be 65."
   ]
  },
  {
   "pdf": "G9.34.4",
   "source": "GATE2010 TF: GA-7",
   "level": "medium",
   "q": "The sum of the infinite series 1/2 + 1/3 − 1/4 + 1/8 + 1/9 − 1/16 + 1/32 + 1/27 − 1/64 + … is",
   "options": [
    "∞",
    "5/6",
    "1/2",
    "0"
   ],
   "answer": 1,
   "steps": [
    "Split into three geometric series.",
    "1/2 + 1/8 + 1/32 + … = (1/2)/(1 − 1/4) = 2/3.",
    "1/3 + 1/9 + 1/27 + … = 1/2.",
    "−(1/4 + 1/16 + 1/64 + …) = −1/3.",
    "Total = 2/3 + 1/2 − 1/3 = 5/6."
   ],
   "trick": "Infinite GP sum = a/(1 − r)."
  },
  {
   "pdf": "G9.34.5",
   "source": "GATE2013 EE: GA-10",
   "level": "medium",
   "q": "Find the sum to n terms of 10 + 84 + 734 + …",
   "options": [
    "9(9ⁿ + 1)/10 + 1",
    "9(9ⁿ − 1)/8 + 1",
    "9(9ⁿ − 1)/8 + n",
    "9(9ⁿ − 1)/8 + n²"
   ],
   "answer": 3,
   "steps": [
    "10 = 9 + 1, 84 = 81 + 3, 734 = 729 + 5 → term k = 9ᵏ + (2k − 1).",
    "Σ9ᵏ = 9(9ⁿ − 1)/8 and 1 + 3 + 5 + … (n terms) = n².",
    "Sum = 9(9ⁿ − 1)/8 + n²."
   ]
  },
  {
   "pdf": "G9.35.1",
   "source": "GATE CSE 2014 · Set 3 · GA Q 10",
   "level": "medium",
   "q": "(7526)₈ − (Y)₈ = (4364)₈, where (X)_N is X in base N. Find Y.",
   "options": [
    "1634",
    "1737",
    "3142",
    "3162"
   ],
   "answer": 2,
   "steps": [
    "Y = 7526 − 4364 in base 8.",
    "Units: 6 − 4 = 2. Eights: 2 − 6 → borrow 8: 10 − 6 = 4. 64s: 4 − 3 = 1. 512s: 7 − 4 = 3.",
    "Y = 3142 (base 8). Check: 4364 + 3142 = 7526 in base 8 ✓."
   ]
  },
  {
   "pdf": "G9.35.2",
   "source": "GATE CSE 2017 · Set 2 · GA Q 8",
   "level": "medium",
   "q": "X is a 30-digit number starting with 4 followed by 7. Then X³ has",
   "options": [
    "90 digits",
    "91 digits",
    "92 digits",
    "93 digits"
   ],
   "answer": 0,
   "steps": [
    "X ≈ 4.7 × 10²⁹.",
    "X³ ≈ 4.7³ × 10⁸⁷ ≈ 103.8 × 10⁸⁷ = 1.038 × 10⁸⁹.",
    "A number a × 10⁸⁹ (1 ≤ a < 10) has 90 digits."
   ]
  },
  {
   "pdf": "G9.35.3",
   "source": "GATE DA 2026 · GA Q 9",
   "level": "hard",
   "q": "P, Q, R, S, X, Y are distinct digits. PQ and RS are two-digit numbers that are consecutive, and (PQ)² + (RS)² = XYP, a three-digit number. The value of Y is",
   "options": [
    "4",
    "5",
    "6",
    "7"
   ],
   "answer": 2,
   "steps": [
    "Both numbers are ≤ 22 (since 22² + 21² is already 925; larger is four digits), and their four digits must all be different.",
    "Consecutive pairs with 4 different digits in that range: 19 and 20.",
    "19² + 20² = 361 + 400 = 761. Its units digit 1 = P, so PQ = 19, RS = 20, X = 7, Y = 6. All six digits are distinct ✓."
   ]
  },
  {
   "pdf": "G9.35.4",
   "source": "GATE2010 MN: GA-9",
   "level": "hard",
   "q": "A positive integer m has base-2 representation p and base-3 representation q. Reading p and q as decimal numbers, p − q = 990. Which is necessarily true?",
   "options": [
    "m ≥ 14",
    "9 ≤ m ≤ 13",
    "6 ≤ m ≤ 8",
    "m < 6"
   ],
   "answer": 1,
   "steps": [
    "p − q = 990 needs p to have 4 digits, so 8 ≤ m ≤ 15.",
    "m = 12: 1100 − 110 = 990 ✓. m = 13: 1101 − 111 = 990 ✓. Others: 9 → 901, 10 → 909, 11 → 909, 14 → 1110 − 112 = 998, 15 → 1111 − 120 = 991.",
    "So m is 12 or 13 → 9 ≤ m ≤ 13."
   ]
  },
  {
   "pdf": "G9.36.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 3",
   "level": "medium",
   "q": "If P eˣ = Q e⁻ˣ for all real x, which is true?",
   "options": [
    "P = Q = 0",
    "P = Q = 1",
    "P = 1; Q = −1",
    "P/Q = 0"
   ],
   "answer": 0,
   "steps": [
    "Multiply by eˣ: P e²ˣ = Q for every x.",
    "The left side changes with x unless P = 0; then Q = 0 too."
   ]
  },
  {
   "pdf": "G9.36.2",
   "source": "GATE2012 AE: GA-8",
   "level": "medium",
   "q": "If a prime number on division by 4 gives remainder 1, then that number can be expressed as",
   "options": [
    "sum of squares of two natural numbers",
    "sum of cubes of two natural numbers",
    "sum of square roots of two natural numbers",
    "sum of cube roots of two natural numbers"
   ],
   "answer": 0,
   "steps": [
    "Examples: 5 = 1² + 2², 13 = 2² + 3², 17 = 1² + 4², 29 = 2² + 5².",
    "Fermat's theorem: every prime of the form 4k + 1 is a sum of two squares."
   ],
   "keyNote": "The book marks this question \"X\" (marks given to all). The mathematically correct choice is A (Fermat's two-squares theorem)."
  },
  {
   "pdf": "G9.41.1",
   "source": "GATE CSE 2016 · Set 1 · GA Q 09",
   "level": "easy",
   "q": "If f(x) = 2x⁷ + 3x − 5, which is a factor of f(x)?",
   "options": [
    "x³ + 8",
    "x − 1",
    "2x − 5",
    "x + 1"
   ],
   "answer": 1,
   "steps": [
    "Factor theorem: (x − a) is a factor if f(a) = 0.",
    "f(1) = 2 + 3 − 5 = 0 → (x − 1) is a factor."
   ]
  },
  {
   "pdf": "G9.42.1",
   "source": "GATE DA 2025 · GA Q 9",
   "level": "medium",
   "q": "If 3^(x²) = 27 × 9ˣ, then 2^(x²) / (2ˣ)² is",
   "options": [
    "2⁻¹",
    "2⁰",
    "2³",
    "2¹⁵"
   ],
   "answer": 2,
   "steps": [
    "27 × 9ˣ = 3^(3 + 2x), so x² = 2x + 3.",
    "2^(x²)/(2ˣ)² = 2^(x² − 2x) = 2³."
   ],
   "trick": "No need to find x: x² − 2x = 3 directly."
  },
  {
   "pdf": "G9.43.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 5",
   "level": "easy",
   "q": "p₁ and p₂ are arbitrary primes. Which statement is correct for all values?",
   "options": [
    "p₁ + p₂ is not prime",
    "p₁p₂ is not prime",
    "p₁ + p₂ + 1 is prime",
    "p₁p₂ + 1 is prime"
   ],
   "answer": 1,
   "steps": [
    "A product of two primes has those primes as factors → never prime.",
    "Counter-examples: 2 + 3 = 5 (prime), 3 + 5 + 1 = 9, 3 × 5 + 1 = 16."
   ]
  },
  {
   "pdf": "G9.46.1",
   "source": "GATE CSE 2014 · Set 1 · GA Q 5",
   "level": "medium",
   "q": "The roots of ax² + bx + c = 0 are real and positive. Then ax² + b|x| + c = 0 has",
   "options": [
    "no roots",
    "2 real roots",
    "3 real roots",
    "4 real roots"
   ],
   "answer": 3,
   "steps": [
    "For x ≥ 0 it is the original equation → the two positive roots r₁, r₂.",
    "For x < 0 it is ax² − bx + c = 0, whose roots are −r₁, −r₂ (both negative ✓).",
    "Total 4 real roots."
   ]
  },
  {
   "pdf": "G9.46.2",
   "source": "GATE CSE 2016 · Set 2 · GA Q 05",
   "level": "medium",
   "q": "In a quadratic, the product of the roots α, β is 4. Find (αⁿ + βⁿ)/(α⁻ⁿ + β⁻ⁿ).",
   "options": [
    "n⁴",
    "4ⁿ",
    "2²ⁿ⁻¹",
    "4ⁿ⁻¹"
   ],
   "answer": 1,
   "steps": [
    "α⁻ⁿ + β⁻ⁿ = (βⁿ + αⁿ)/(αβ)ⁿ.",
    "So the ratio = (αβ)ⁿ = 4ⁿ."
   ]
  },
  {
   "pdf": "G9.46.3",
   "source": "GATE CSE 2021 · Set 2 · GA Q 4",
   "level": "easy",
   "q": "If (x − 1/2)² − (x − 3/2)² = x + 2, then x is",
   "options": [
    "2",
    "4",
    "6",
    "8"
   ],
   "answer": 1,
   "steps": [
    "Difference of squares: (a − b)(a + b) with a = x − 1/2, b = x − 3/2 → (1)(2x − 2).",
    "2x − 2 = x + 2 → x = 4."
   ]
  },
  {
   "pdf": "G9.46.4",
   "source": "GATE CSE 2022 · GA Q 3",
   "level": "medium",
   "q": "Let r be a root of x² + 2x + 6 = 0. Then (r + 2)(r + 3)(r + 4)(r + 5) is",
   "options": [
    "51",
    "−51",
    "126",
    "−126"
   ],
   "answer": 3,
   "steps": [
    "Use r² + 2r = −6. Pair (r + 2)(r + 4) = r² + 6r + 8 = 4r + 2 and (r + 3)(r + 5) = r² + 8r + 15 = 6r + 9.",
    "Product = (4r + 2)(6r + 9) = 24r² + 48r + 18 = 24(r² + 2r) + 18 = −144 + 18 = −126."
   ]
  },
  {
   "pdf": "G9.46.5",
   "source": "GATE2011 MN: GA-62",
   "level": "medium",
   "q": "Solving a quadratic, a student wrote the constant term wrongly and got roots (4, 3); next time he wrote the x-coefficient wrongly and got roots (3, 2). The correct roots are",
   "options": [
    "(−3, 4)",
    "(3, −4)",
    "(6, 1)",
    "(4, 2)"
   ],
   "answer": 2,
   "steps": [
    "First attempt had the right x-coefficient → sum of roots = 4 + 3 = 7.",
    "Second attempt had the right constant → product = 3 × 2 = 6.",
    "x² − 7x + 6 = 0 → roots 6 and 1."
   ]
  },
  {
   "pdf": "G9.46.6",
   "source": "GATE2013 EE: GA-8",
   "level": "medium",
   "q": "The set of values of p for which the roots of 3x² + 2x + p(p − 1) = 0 have opposite signs is",
   "options": [
    "(−∞, 0)",
    "(0, 1)",
    "(1, ∞)",
    "(0, ∞)"
   ],
   "answer": 1,
   "steps": [
    "Opposite signs ⇔ product of roots < 0: p(p − 1)/3 < 0.",
    "That happens for 0 < p < 1. (Then the discriminant is automatically positive.)"
   ]
  },
  {
   "pdf": "G9.49.1",
   "source": "GATE CSE 2012 Q 65",
   "level": "easy",
   "q": "Given AD, CG, FK, JP, the next term is",
   "options": [
    "OV",
    "OW",
    "PV",
    "PW"
   ],
   "answer": 0,
   "steps": [
    "First letters A, C, F, J jump +2, +3, +4 → next +5 → O.",
    "Gap inside each pair: +3, +4, +5, +6 → next +7: O → V.",
    "Answer OV."
   ]
  },
  {
   "pdf": "G9.49.2",
   "source": "GATE CSE 2018 · GA Q 5",
   "level": "easy",
   "q": "What is missing in 2, 12, 60, 240, 720, 1440, ___, 0?",
   "options": [
    "2880",
    "1440",
    "720",
    "0"
   ],
   "answer": 1,
   "steps": [
    "Multipliers: ×6, ×5, ×4, ×3, ×2, then ×1, then ×0.",
    "1440 × 1 = 1440 (and 1440 × 0 = 0 ✓)."
   ]
  },
  {
   "pdf": "G9.49.3",
   "source": "GATE CSE 2023 · GA Q 3",
   "level": "easy",
   "q": "Natural numbers satisfy Fₙ₊₁ = Fₙ + Fₙ₋₁. If F₆ = 37 and F₇ = 60, what is F₁?",
   "options": [
    "4",
    "5",
    "8",
    "9"
   ],
   "answer": 0,
   "steps": [
    "Go backwards with Fₙ₋₁ = Fₙ₊₁ − Fₙ.",
    "F₅ = 60 − 37 = 23, F₄ = 37 − 23 = 14, F₃ = 9, F₂ = 5, F₁ = 4."
   ]
  },
  {
   "pdf": "G9.49.4",
   "source": "GATE DS&AI 2024 · GA Q 4",
   "level": "medium",
   "q": "The sum of 2 + 1/2 + 1/3 + 1/4 + 1/8 + 1/9 + 1/16 + 1/27 + … is",
   "options": [
    "11/3",
    "7/2",
    "13/4",
    "9/2"
   ],
   "answer": 1,
   "steps": [
    "Split: 2 + (1/2 + 1/4 + 1/8 + …) + (1/3 + 1/9 + 1/27 + …).",
    "= 2 + 1 + 1/2 = 7/2."
   ]
  },
  {
   "pdf": "G9.53.1",
   "source": "GATE2011 GG: GA-6",
   "level": "easy",
   "q": "The number of solutions of X₁ ≥ 0, X₂ ≥ 0, X₁ + X₂ ≤ 10, 2X₁ + 2X₂ ≥ 22 is",
   "options": [
    "0",
    "infinite",
    "1",
    "2"
   ],
   "answer": 0,
   "steps": [
    "The last one means X₁ + X₂ ≥ 11.",
    "X₁ + X₂ cannot be both ≤ 10 and ≥ 11 → no solution."
   ]
  }
 ]
});
