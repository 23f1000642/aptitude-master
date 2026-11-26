APT.addTopic({
 "id": "gate-quant-geometry",
 "section": "gate",
 "title": "GATE · Quant: Geometry & Mensuration",
 "tagline": "Triangles, circles, solids, coordinates and networks from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Geometry questions are about shapes you can draw: triangles, circles, cubes, rolled-up paper tubes and maps of roads or rivers.",
   "Always <b>sketch it</b> and mark what you know. Most answers come from one of three tools: similar shapes, Pythagoras, or \"area = sum of the parts\"."
  ],
  "memory": "Draw it, mark it, then use similar shapes, Pythagoras, or split the area into pieces.",
  "formulas": [
   "<b>Similar figures</b>: lengths scale by k → areas by k², volumes by k³",
   "<b>Triangle area</b> = ½ ab sin C; a triangle and a parallelogram on the same base and between the same parallels → triangle = half",
   "<b>Circle</b>: area πr², circumference 2πr; an inscribed angle is half the central angle",
   "<b>Cylinder</b> volume πr²h (rolled sheet: circumference = the edge you wrap); <b>cube</b> surface 6a², volume a³",
   "<b>Cube diagonal</b> = a√3; angle with an edge has cos θ = 1/√3",
   "<b>Line</b>: slope = (y₂ − y₁)/(x₂ − x₁); perpendicular lines make acute angles with the x-axis that add up to 90°",
   "<b>Regular n-gon in a circle</b>: area = n × ½ r² sin(360°/n)",
   "<b>Connecting k regions</b> needs at least k − 1 links (bridges, roads)"
  ],
  "tricks": [
   "Removing a corner cube from a big cube does not change its surface area.",
   "Angle bisector length problems → split the triangle area into two parts.",
   "For cheapest-route questions, add edge costs and node tolls for every option and compare.",
   "Map colouring: regions that all touch each other force that many colours."
  ],
  "patterns": [
   [
    "Triangles and angles",
    "Exterior angle = sum of opposite interior angles"
   ],
   [
    "Circles and areas",
    "Split into sectors/triangles"
   ],
   [
    "Solids from sheets",
    "Which edge becomes the circumference?"
   ],
   [
    "Networks and maps",
    "Add costs; minimum links = regions − 1"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G9.5.1",
   "source": "GATE CSE 2025 · Set 1 · GA Q 7",
   "level": "medium",
   "q": "Lines QR and ST are parallel (S on PQ, T on PR). The distance between them is half the distance from P to line QR. What is the ratio of the area of triangle PST to the area of trapezium SQRT?",
   "options": [
    "1/3",
    "1/4",
    "2/5",
    "1/2"
   ],
   "answer": 0,
   "steps": [
    "P is twice as far from QR as ST is from QR, so ST is halfway: triangle PST is similar to PQR with scale 1/2.",
    "Area scales as the square: area PST = 1/4 of PQR. Trapezium = 3/4.",
    "Ratio = (1/4)/(3/4) = 1/3."
   ],
   "figures": [
    "gq-9.5.1.jpg"
   ]
  },
  {
   "pdf": "G9.10.1",
   "source": "GATE CSE 2020 · GA Q 9",
   "level": "easy",
   "q": "Two straight lines are drawn perpendicular to each other in the X–Y plane. If α and β are the acute angles the lines make with the X-axis, then α + β is",
   "options": [
    "60°",
    "90°",
    "120°",
    "180°"
   ],
   "answer": 1,
   "steps": [
    "The two lines and the X-axis form a triangle with a right angle where the lines meet.",
    "The other two angles of that triangle are α and β, so α + β = 180° − 90° = 90°."
   ]
  },
  {
   "pdf": "G9.10.2",
   "source": "GATE CSE 2022 · GA Q 2",
   "level": "easy",
   "q": "y(x) = 2 for 0 ≤ x < 1/3, 3 for 1/3 ≤ x < 3/4, 1 for 3/4 ≤ x ≤ 1. What is the area under the curve on [0, 1]?",
   "options": [
    "5/6",
    "6/5",
    "13/6",
    "6/13"
   ],
   "answer": 2,
   "steps": [
    "It is three rectangles: width × height.",
    "2 × 1/3 + 3 × (3/4 − 1/3) + 1 × 1/4 = 8/12 + 15/12 + 3/12 = 26/12 = 13/6."
   ]
  },
  {
   "pdf": "G9.10.3",
   "source": "GATE2012 AE: GA-9",
   "level": "easy",
   "q": "Two points (4, p) and (0, q) lie on a straight line with slope 3/4. The value of (p − q) is",
   "options": [
    "−3",
    "0",
    "3",
    "4"
   ],
   "answer": 2,
   "steps": [
    "Slope = (p − q)/(4 − 0) = 3/4.",
    "p − q = 3."
   ]
  },
  {
   "pdf": "G9.10.4",
   "source": "GATE2014 AE: GA-4",
   "level": "easy",
   "q": "If y = 5x² + 3, then the tangent at x = 0, y = 3",
   "options": [
    "passes through x = 0, y = 0",
    "has a slope of +1",
    "is parallel to the x-axis",
    "has a slope of −1"
   ],
   "answer": 2,
   "steps": [
    "Slope of tangent = dy/dx = 10x = 0 at x = 0.",
    "Slope 0 means the tangent is horizontal: y = 3, parallel to the x-axis."
   ]
  },
  {
   "pdf": "G9.11.1",
   "source": "GATE CSE 2018 · GA Q 3",
   "level": "easy",
   "q": "The area of a square is d. What is the area of the circle which has the diagonal of the square as its diameter?",
   "options": [
    "πd",
    "πd²",
    "(1/4)πd²",
    "(1/2)πd"
   ],
   "answer": 3,
   "steps": [
    "Side² = d, so diagonal² = 2·side² = 2d.",
    "Radius² = diagonal²/4 = d/2.",
    "Area = π·d/2."
   ]
  },
  {
   "pdf": "G9.11.2",
   "source": "GATE CSE 2020 · GA Q 8",
   "level": "medium",
   "q": "An annular ring has outer radius b and inner radius a. Blue circles are painted in the ring, each touching both the outer and inner boundaries. If at most n circles can be painted, the unpainted area of the ring is",
   "options": [
    "π[(b² − a²) − (n/4)(b − a)²]",
    "π[(b² − a²) − n(b − a)²]",
    "π[(b² − a²) + (n/4)(b − a)²]",
    "π[(b² − a²) + n(b − a)²]"
   ],
   "answer": 0,
   "steps": [
    "Ring area = π(b² − a²).",
    "Each circle fills the width of the ring: diameter = b − a, radius = (b − a)/2, area = π(b − a)²/4.",
    "Unpainted = π(b² − a²) − n·π(b − a)²/4."
   ],
   "figures": [
    "gq-9.11.2.jpg"
   ]
  },
  {
   "pdf": "G9.11.3",
   "source": "GATE DA 2026 · GA Q 10",
   "level": "hard",
   "q": "P, Q, R are on a circle of radius 10 cm with centre O, PQ = RQ and ∠PQR = 45°. The area of the shaded region PQRO is ____ cm².",
   "options": [
    "50",
    "25√2",
    "50√2",
    "100"
   ],
   "answer": 2,
   "steps": [
    "Split PQRO along OQ into triangles OPQ and OQR (equal, since PQ = RQ).",
    "In triangle OPQ, OP = OQ = 10 and ∠OQP = 45°/2 = 22.5° = ∠OPQ, so ∠POQ = 135°.",
    "Area OPQ = ½ · 10 · 10 · sin 135° = 50 · (√2/2) = 25√2.",
    "Shaded area = 2 × 25√2 = 50√2."
   ],
   "figures": [
    "gq-9.11.3.jpg"
   ]
  },
  {
   "pdf": "G9.18.1",
   "source": "GATE CSE 2016 · Set 1 · GA Q 05",
   "level": "medium",
   "q": "A cube is built from 64 unit cubes. One block is removed from every corner. The surface area of the resulting body is",
   "options": [
    "56",
    "64",
    "72",
    "96"
   ],
   "answer": 3,
   "steps": [
    "Original 4×4×4 cube: 6 × 16 = 96.",
    "Removing a corner block takes away 3 outer faces but uncovers 3 new inner faces of the same size.",
    "Surface area stays 96."
   ],
   "trick": "Corner removal never changes surface area."
  },
  {
   "pdf": "G9.18.2",
   "source": "GATE CSE 2021 · Set 2 · GA Q 3",
   "level": "medium",
   "q": "If θ is the angle between the longest diagonal of a cube and any one of its edges, then cos θ =",
   "options": [
    "1/2",
    "1/√3",
    "1/√2",
    "√3/2"
   ],
   "answer": 1,
   "steps": [
    "Unit cube: diagonal vector (1,1,1), edge (1,0,0).",
    "cos θ = (1·1 + 0 + 0)/(√3 · 1) = 1/√3."
   ]
  },
  {
   "pdf": "G9.25.1",
   "source": "GATE CSE 2014 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "When a point inside a tetrahedron is joined by straight lines to its corners, how many new internal planes are created?",
   "options": null,
   "answerText": "6",
   "accept": [
    "6"
   ],
   "steps": [
    "Each new plane is made by the inside point and one edge of the tetrahedron.",
    "A tetrahedron has C(4,2) = 6 edges → 6 planes."
   ]
  },
  {
   "pdf": "G9.25.2",
   "source": "GATE CSE 2024 · Set 1 · GA Q 7",
   "level": "medium",
   "q": "A 54 cm × 4 cm sheet has its two longer edges joined to make a cylindrical tube. A cube has surface area equal to the sheet's area. The ratio of the tube's volume to the cube's volume is",
   "options": [
    "1/π",
    "2/π",
    "3/π",
    "4/π"
   ],
   "answer": 0,
   "steps": [
    "Joining the 54 cm edges: height 54, circumference 4 → r = 2/π.",
    "Tube volume = πr²h = π × (4/π²) × 54 = 216/π.",
    "Sheet area 216 = 6a² → a = 6, cube volume = 216.",
    "Ratio = (216/π)/216 = 1/π."
   ]
  },
  {
   "pdf": "G9.25.3",
   "source": "GATE CSE 2025 · Set 2 · GA Q 9",
   "level": "medium",
   "q": "PQRS is a square of side 2 cm and PLMN is a rectangle. Corner L is on side QR, and side MN passes through corner S. What is the area of rectangle PLMN (cm²)?",
   "options": [
    "2√2",
    "2",
    "8",
    "4"
   ],
   "answer": 3,
   "steps": [
    "Triangle PLS has base PL and its apex S on the opposite side MN, so its area = ½ × rectangle area.",
    "The same triangle has base PS (side of the square) and apex L on the opposite side QR, so its area = ½ × square area = 2.",
    "Rectangle = 2 × 2 = 4 = the square's area."
   ],
   "trick": "Triangle on a base with apex on the opposite side = half the parallelogram.",
   "figures": [
    "gq-9.25.3.jpg"
   ]
  },
  {
   "pdf": "G9.25.4",
   "source": "GATE DA 2025 · GA Q 4",
   "level": "easy",
   "q": "In the figure, the rectangle, triangle and ellipse have numbers 1, 2 and 3; the region in rectangle and ellipse only is 4. Which is the right combination for P (all three), Q (triangle and ellipse) and R (rectangle and triangle)?",
   "options": [
    "P = 6; Q = 5; R = 3",
    "P = 5; Q = 6; R = 3",
    "P = 3; Q = 6; R = 6",
    "P = 5; Q = 3; R = 6"
   ],
   "answer": 0,
   "steps": [
    "A shared region gets the sum of its shapes' numbers: rectangle + ellipse = 1 + 3 = 4 ✓.",
    "P (all three) = 1 + 2 + 3 = 6. Q (triangle + ellipse) = 2 + 3 = 5. R (rectangle + triangle) = 1 + 2 = 3."
   ],
   "figures": [
    "gq-9.25.4.jpg"
   ]
  },
  {
   "pdf": "G9.25.5",
   "source": "GATE DA 2025 · GA Q 8",
   "level": "hard",
   "q": "A regular dodecagon of side d is inscribed in a circle of radius r. All 12 numbered triangles in the figure are used (each once) to form squares of side r. The number of squares formed and triangles per square are",
   "options": [
    "3; 4",
    "4; 3",
    "3; 3",
    "3; 2"
   ],
   "answer": 0,
   "steps": [
    "Area of the dodecagon = 12 × ½ r² sin 30° = 3r².",
    "Each square has area r², so the pieces make 3 squares.",
    "The 12 triangles each have area r²/4, so each square uses 4 triangles."
   ],
   "figures": [
    "gq-9.25.5.jpg"
   ]
  },
  {
   "pdf": "G9.26.1",
   "source": "GATE DS&AI 2024 · GA Q 2",
   "level": "easy",
   "q": "The 15 parts of the figure are to be painted so that no two parts sharing a boundary (corners excluded) have the same colour. The minimum number of colours is",
   "options": [
    "4",
    "3",
    "5",
    "6"
   ],
   "answer": 0,
   "steps": [
    "The three sectors of the small circle all touch each other → they need 3 different colours.",
    "The parts around the circle touch the sectors and each other in a closed ring; trying to finish with only those 3 colours always leads to a clash.",
    "A colouring with 4 colours works, so the minimum is 4."
   ],
   "figures": [
    "gq-9.26.1.jpg"
   ]
  },
  {
   "pdf": "G9.29.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "A river system of 7 segments P, Q, R, S, T, U, V splits land into 5 zones Z1–Z5. We need to connect all zones using the least number of bridges. Which option is correct?",
   "options": [
    "Bridges on P, Q and T",
    "Bridges on P, Q, S and T",
    "Bridges on Q, R, T and V",
    "Bridges on P, Q, S, U and V"
   ],
   "answer": 2,
   "steps": [
    "5 zones need at least 4 bridges (each bridge joins one more zone). So A (3) is too few and D (5) is not the least.",
    "From the map: Q joins Z1–Z3, R joins Z2–Z3, T joins Z3–Z5, V joins Z3–Z4.",
    "Option C links all five zones through Z3. Option B (P, Q, S, T) never reaches Z4."
   ],
   "figures": [
    "gq-9.29.1.jpg"
   ]
  },
  {
   "pdf": "G9.31.1",
   "source": "GATE DA 2025 · GA Q 5",
   "level": "easy",
   "q": "A rectangle has length L > width W. If W increases by 10%, which is correct for all L and W?",
   "options": [
    "Perimeter increases by 10%",
    "Diagonal increases by 10%",
    "Area increases by 10%",
    "The rectangle becomes a square"
   ],
   "answer": 2,
   "steps": [
    "Area = L × 1.1W = 1.1 LW → exactly +10%.",
    "Perimeter 2(L + 1.1W) and diagonal √(L² + 1.21W²) rise by less than 10% because L is unchanged."
   ]
  },
  {
   "pdf": "G9.50.1",
   "source": "GATE CSE 2020 · GA Q 5",
   "level": "medium",
   "q": "In the network from node 1 to node 2, edge costs are in rupees. Nodes a, b, c, d, e, f are toll booths: toll at a and e is Rs. 200, at the others Rs. 100. Which is the cheapest route from 1 to 2?",
   "options": [
    "1−a−c−2",
    "1−f−b−2",
    "1−b−2",
    "1−f−e−2"
   ],
   "answer": 1,
   "steps": [
    "Cost = edges + tolls of the booths passed.",
    "1−a−c−2: 200 + 100 + 100 + tolls (200 + 100) = 700.",
    "1−f−b−2: 100 + 0 + 200 + tolls (100 + 100) = 500.",
    "1−b−2: 300 + 200 + toll 100 = 600. 1−f−e−2: 100 + 100 + 200 + tolls (100 + 200) = 700.",
    "Cheapest: 1−f−b−2."
   ],
   "figures": [
    "gq-9.50.1.jpg"
   ]
  },
  {
   "pdf": "G9.56.1",
   "source": "GATE CSE 2015 · Set 2 · GA Q 8",
   "level": "hard",
   "q": "In triangle PQR, PS bisects ∠QPR and ∠QPS = 60° (so ∠QPR = 120°). With PQ = r and PR = q, the length of PS is",
   "options": [
    "(q + r)/(qr)",
    "qr/(q + r)",
    "√(q² + r²)",
    "(q + r)²/(qr)"
   ],
   "answer": 1,
   "steps": [
    "Area of PQR = area PQS + area PSR.",
    "½·q·r·sin 120° = ½·r·s·sin 60° + ½·q·s·sin 60°.",
    "sin 120° = sin 60°, so qr = s(q + r) → s = qr/(q + r)."
   ],
   "figures": [
    "gq-9.56.1.jpg"
   ]
  },
  {
   "pdf": "G9.56.2",
   "source": "GATE CSE 2018 · GA Q 9",
   "level": "hard",
   "q": "In the figure (E, D, A on one line; E, C, B on one line; D, C, F on one line; A, B, F on one line), ∠DEC + ∠BFC equals",
   "options": [
    "∠BCD − ∠BAD",
    "∠BAD + ∠BCF",
    "∠BAD + ∠BCD",
    "∠CBA + ∠ADC"
   ],
   "answer": 0,
   "steps": [
    "∠BCD = ∠ECF (vertically opposite).",
    "In triangle EDC, the exterior angle at C: ∠ECF = ∠DEC + ∠EDC.",
    "In triangle ADF, the exterior angle at D: ∠EDC = ∠DAF + ∠AFD = ∠BAD + ∠BFC.",
    "So ∠BCD = ∠DEC + ∠BAD + ∠BFC → ∠DEC + ∠BFC = ∠BCD − ∠BAD."
   ],
   "figures": [
    "gq-9.56.2.jpg"
   ]
  },
  {
   "pdf": "G9.56.3",
   "source": "GATE CSE 2022 · GA Q 9",
   "level": "hard",
   "q": "The 3 corners and 3 mid-points of a triangle's sides are labelled with distinct letters P, Q, R, S, T, U (order unknown).\n• PR is parallel to QS.\n• P is on the side opposite corner T.\n• S and U cannot be on the same side.\nWhich is correct?",
   "options": [
    "P cannot be placed at a corner",
    "S cannot be placed at a corner",
    "U cannot be placed at a mid-point",
    "R cannot be placed at a corner"
   ],
   "answer": 1,
   "steps": [
    "Any two corners share a side, so \"S and U not on the same side\" means: both are midpoints, or one is a corner and the other the midpoint of the opposite side.",
    "Suppose S is a corner. Then U is the midpoint of the side opposite S.",
    "QS starts at corner S, so it runs along a side; the only segment parallel to it is the mid-line joining the midpoints of the other two sides — one of which is the side opposite S, whose midpoint is U.",
    "So U would have to be P or R — impossible, since all letters are different. Hence S cannot be a corner."
   ]
  },
  {
   "pdf": "G9.58.1",
   "source": "GATE CSE 2021 · Set 1 · GA Q 6",
   "level": "medium",
   "q": "Sheets M and N are 6 cm × 1 cm. M is rolled into a cylinder by joining its short edges (ends closed). N is cut into equal squares to make the largest closed cube. Ratio of the cylinder's volume to the cube's volume?",
   "options": [
    "π/2",
    "3/π",
    "9/π",
    "3π"
   ],
   "answer": 2,
   "steps": [
    "Joining the 1 cm edges: circumference 6, height 1 → r = 3/π.",
    "Cylinder volume = π(3/π)² × 1 = 9/π.",
    "Cube: six 1 × 1 squares → side 1, volume 1.",
    "Ratio = 9/π."
   ]
  }
 ]
});
