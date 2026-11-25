APT.addTopic({
 "id": "gate-spatial",
 "section": "gate",
 "title": "GATE · Spatial Aptitude",
 "tagline": "Folding, rotating, dice and assembling shapes, every GATE spatial question.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "Spatial Aptitude is about seeing shapes in your head: turning them, flipping them, folding paper and unfolding it again.",
   "The secret is to <b>track one special mark</b> (a long arm of a star, a dot on a cube face, a cut on a folded sheet) and follow just that mark through every step."
  ],
  "memory": "Follow ONE distinctive mark through every move, and count layers when paper is folded.",
  "formulas": [
   "<b>Folding</b>: each fold doubles the layers, so one punch after k folds makes 2<sup>k</sup> holes, mirrored about each fold line",
   "<b>Cube nets</b>: in a straight strip of four faces, the 1st and 3rd (and the 2nd and 4th) are opposite; two flaps on opposite sides of the strip are opposite",
   "<b>Reflection</b> flips left–right (vertical mirror) or up–down (horizontal mirror); <b>rotation</b> keeps the shape's handedness",
   "<b>Tiling</b>: the total number of cells must be a multiple of the tile size",
   "<b>Convex polygon</b>: no inward notch; every segment between two points stays inside"
  ],
  "tricks": [
   "Rotate the page (or your head) for rotation questions instead of imagining it.",
   "For dice, first list each number's neighbours from the views. Whatever never appears next to a number is opposite it.",
   "For jigsaw pieces, compare the tooth heights one by one from the top.",
   "When a question says the long edge after each fold, re-check which edge is long after every fold."
  ],
  "patterns": [
   [
    "Paper folding and punching",
    "Count layers, mirror each hole about the folds"
   ],
   [
    "Dice / cube nets",
    "Find opposite faces first"
   ],
   [
    "Rotation and reflection",
    "Track one asymmetric arm"
   ],
   [
    "Assembling pieces",
    "Match bumps to gaps; count cells"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G10.1.1",
   "source": "GATE CSE 2026 · Set 1 · GA Q 7",
   "level": "medium",
   "q": "Panel I shows the front view and the top view of a structure. Which 3D structure in Panel II has these views? (See figure.)",
   "options": [
    "(i)",
    "(ii)",
    "(iii)",
    "(iv)"
   ],
   "answer": 3,
   "steps": [
    "Read the front view first: it fixes how many blocks are stacked in each column as seen from the front, including the single step.",
    "Then check the top view: it fixes which squares of the floor are covered and where the notch is.",
    "Test each structure against both views. Only (iv) gives the stepped front view AND the notched top view; the others have the step or the notch in the wrong place."
   ],
   "figures": [
    "gq-10.1.1.jpg"
   ]
  },
  {
   "pdf": "G10.2.1",
   "source": "GATE DA 2026 · GA Q 3",
   "level": "medium",
   "q": "Four puzzle pieces are shown. Which figure P, Q, R or S can be constructed using each of the four pieces exactly once without overlaps? (See figure.)",
   "options": [
    "P",
    "Q",
    "R",
    "S"
   ],
   "answer": 0,
   "steps": [
    "The white shape (bird head with a long beak) is the gap left between the black pieces placed inside a square.",
    "Match each piece: the curved bite gives the round head, the two-step piece gives the beak, the jagged pieces give the neck sides.",
    "Only P has a head, a beak and a body outline that all four pieces fill exactly; Q lacks the beak, R and S have extra notches no piece creates."
   ],
   "figures": [
    "gq-10.2.1.jpg"
   ]
  },
  {
   "pdf": "G10.3.1",
   "source": "GATE CSE 2021 · Set 2 · GA Q 7",
   "level": "medium",
   "q": "A jigsaw puzzle has 2 pieces. One piece is shown. Which option for the missing piece will form a rectangle when assembled? The piece can be moved, rotated or flipped. (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 0,
   "steps": [
    "Rotate the given piece so its notched side faces the missing piece. Each tooth must fit a gap of exactly the same width and depth.",
    "Read the teeth from top to bottom on the given piece and compare with the bumps on each option.",
    "Only option A has bumps whose heights and widths exactly match the gaps, giving straight outer edges (a rectangle)."
   ],
   "figures": [
    "gq-10.3.1.jpg"
   ]
  },
  {
   "pdf": "G10.4.1",
   "source": "GATE CSE 2022 · GA Q 5",
   "level": "medium",
   "q": "A player has plates with letters A and D. Using all five plates exactly once (plates can be rotated in their plane), which set of three extra plates allows a five-letter palindrome? (See figure.)",
   "options": [
    "D, ᗡ, J",
    "R, ∀, ꓤ",
    "Z, Ǝ, D",
    "I, Ⅎ, Y"
   ],
   "answer": 1,
   "steps": [
    "A five-letter palindrome using A and D: R-A-D-A-R needs two R's and one more A.",
    "Option B: \"∀\" rotated by 180° becomes A, and the upside-down R rotated by 180° becomes R.",
    "So the plates spell RADAR. No other option can make a palindrome with A and D."
   ],
   "figures": [
    "gq-10.4.1.jpg"
   ]
  },
  {
   "pdf": "G10.4.2",
   "source": "GATE CSE 2023 · GA Q 10",
   "level": "medium",
   "q": "Which option best describes the transformation of the 2D star P to Q, and then to R? (See figure.)",
   "options": [
    "Op 1: clockwise rotation by 90°; Op 2: reflection along a horizontal line",
    "Op 1: counter-clockwise rotation by 90°; Op 2: reflection along a horizontal line",
    "Op 1: clockwise rotation by 90°; Op 2: reflection along a vertical line",
    "Op 1: counter-clockwise rotation by 180°; Op 2: reflection along a vertical line"
   ],
   "answer": 0,
   "steps": [
    "Follow the long arm of the star. In P it points to the upper right; in Q it points to the lower right: a 90° clockwise turn.",
    "From Q to R the long arm flips from pointing down-right to pointing up-right, with left and right unchanged: a reflection in a horizontal line."
   ],
   "figures": [
    "gq-10.4.2.jpg"
   ]
  },
  {
   "pdf": "G10.4.3",
   "source": "GATE DS&AI 2024 · GA Q 9",
   "level": "medium",
   "q": "Three views of a die are shown: (top 5, faces 4 and 1), (top 4, faces 6 and 3), (top 2, faces 6 and 5). Which piece of paper can be folded to make this die? (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 0,
   "steps": [
    "Find opposite faces. 4 touches 5, 1, 6, 3 → 4 is opposite 2. 6 touches 4, 3, 2, 5 → 6 is opposite 1. That leaves 5 opposite 3.",
    "In a net, faces in a straight strip of four are opposite in pairs (1st–3rd, 2nd–4th), and the two flaps on opposite sides of the strip are opposite.",
    "Net A: strip 1, 4, 6, 2 gives 1–6 and 4–2 opposite ✓; flaps 5 and 3 are on opposite sides ✓. The other nets put an opposite pair next to each other."
   ],
   "trick": "Opposite faces in a net.",
   "figures": [
    "gq-10.4.3.jpg"
   ]
  },
  {
   "pdf": "G10.5.1",
   "source": "GATE CSE 2024 · Set 1 · GA Q 10",
   "level": "medium",
   "q": "What is the least number of squares to be added to the figure to make AB a line of symmetry? (See figure.)",
   "options": [
    "6",
    "4",
    "5",
    "7"
   ],
   "answer": 0,
   "steps": [
    "A line of symmetry means every square above AB must have a mirror square below it, and vice versa.",
    "Reflect each existing square across AB and count the reflected positions that are still empty.",
    "Six such positions are empty, so 6 squares must be added."
   ],
   "figures": [
    "gq-10.5.1.jpg"
   ]
  },
  {
   "pdf": "G10.6.1",
   "source": "GATE CSE 2021 · Set 1 · GA Q 4",
   "level": "medium",
   "q": "A circular sheet is folded along the lines in the directions shown, punched in the final folded state, and unfolded in reverse order. What does it look like? (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 0,
   "steps": [
    "The paper is folded into a quarter circle, so every cut appears 4 times, mirrored about the two fold lines.",
    "The cut at the corner (centre of the circle) becomes a full circle in the middle.",
    "The rectangular cut along one edge unfolds into two long slots on one axis and two short slots on the other: pattern A."
   ],
   "figures": [
    "gq-10.6.1.jpg"
   ]
  },
  {
   "pdf": "G10.6.2",
   "source": "GATE CSE 2021 · Set 2 · GA Q 2",
   "level": "medium",
   "q": "A transparent square sheet with a drawing is folded along the dotted line. What will the folded sheet look like? (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 1,
   "steps": [
    "Folding a transparent sheet flips the left half onto the right half as a mirror image, so you see both drawings overlapping.",
    "The left curve is mirrored and lands on top of the right curve, forming a closed leaf shape; the small tick marks are mirrored too.",
    "Option B shows the leaf with the marks in the mirrored positions."
   ],
   "figures": [
    "gq-10.6.2.jpg"
   ]
  },
  {
   "pdf": "G10.6.3",
   "source": "GATE CSE 2024 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "A rectangular paper of 20 cm × 8 cm is folded 3 times. Each fold is along the line of symmetry perpendicular to its (current) long edge. What is the perimeter of the final folded sheet in cm?",
   "options": [
    "18",
    "24",
    "20",
    "21"
   ],
   "answer": 0,
   "steps": [
    "Fold 1: long edge 20 → 10 × 8. Fold 2: long edge is now 10 → 5 × 8.",
    "Fold 3: the long edge is now 8 → 5 × 4.",
    "Perimeter = 2 × (5 + 4) = 18 cm."
   ],
   "trick": "The \"long edge\" changes after each fold."
  },
  {
   "pdf": "G10.6.4",
   "source": "GATE CSE 2025 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "A square paper is folded along the dotted lines (into a triangle, then a smaller triangle). A few cuts are made. Which pattern is obtained when the paper is unfolded? (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 0,
   "steps": [
    "Two diagonal folds give 4 layers, so each cut appears 4 times, reflected across both diagonals.",
    "The cut on the folded edge becomes a pair of small triangles pointing outwards at the middle of each side; the corner cut becomes L-shapes at two corners; the square cut becomes squares at the other two corners.",
    "That matches pattern A."
   ],
   "figures": [
    "gq-10.6.4.jpg"
   ]
  },
  {
   "pdf": "G10.6.5",
   "source": "GATE CSE 2025 · Set 2 · GA Q 4",
   "level": "medium",
   "q": "The net shown is folded to make a cube. Which option correctly represents the cube? (See figure.)",
   "options": [
    "A",
    "B",
    "C",
    "D"
   ],
   "answer": 0,
   "steps": [
    "In the middle row (blank, △, blank, ▲), △ and ▲ are two apart, so they are opposite faces. ● and ○ (above and below △) are also opposite.",
    "So ▲ can never be seen together with △: B and D are wrong.",
    "A shows △ in front with ● on top, which are neighbours in the net ✓."
   ],
   "figures": [
    "gq-10.6.5.jpg"
   ]
  },
  {
   "pdf": "G10.7.1",
   "source": "GATE CSE 2023 · GA Q 5",
   "level": "easy",
   "q": "Looking at the surface of a smooth 3-dimensional object from the outside, which is TRUE?",
   "options": [
    "The surface must be concave everywhere.",
    "The surface must be convex everywhere.",
    "The surface may be concave in some places and convex in other places.",
    "The object can have edges, but no corners."
   ],
   "answer": 2,
   "steps": [
    "Think of a smooth object like a peanut shell or a bowling pin: it bulges out in some places and dips in at others.",
    "So nothing forces it to be all concave or all convex. \"Smooth\" also means no edges."
   ]
  },
  {
   "pdf": "G10.7.2",
   "source": "GATE CSE 2024 · Set 2 · GA Q 9",
   "level": "easy",
   "q": "A cube is to be cut into 8 pieces of equal size and shape. Each cut is straight and goes right through the cube. What is the minimum number of cuts?",
   "options": [
    "3",
    "4",
    "7",
    "8"
   ],
   "answer": 0,
   "steps": [
    "One cut parallel to each pair of faces through the centre: 2 × 2 × 2 = 8 equal small cubes.",
    "With 2 cuts you get at most 4 pieces, so 3 is the minimum."
   ]
  },
  {
   "pdf": "G10.7.3",
   "source": "GATE DS&AI 2024 · GA Q 10",
   "level": "medium",
   "q": "Two identical right circular cones share a common circular base, one inverted over the other. If a cutting plane passes through the vertices (apexes) of both cones, what shape is the outer boundary of the cross-section?",
   "options": [
    "A rhombus",
    "A triangle",
    "An ellipse",
    "A hexagon"
   ],
   "answer": 0,
   "steps": [
    "A plane through the axis of a cone cuts it in a triangle (apex + a diameter of the base).",
    "Two such triangles share the base diameter: one points up, one points down.",
    "Together they form a four-sided figure with all sides equal (the slant heights): a rhombus."
   ]
  },
  {
   "pdf": "G10.8.1",
   "source": "GATE CSE 2021 · Set 1 · GA Q 2",
   "level": "easy",
   "q": "A polygon is convex if the segment joining any two of its points lies inside or on it. Which shape is NOT convex? (See figure.)",
   "options": [
    "A (arrow/chevron shape)",
    "B (triangle)",
    "C (square)",
    "D (trapezium)"
   ],
   "answer": 0,
   "steps": [
    "The chevron has a notch on its left side. Join the two tips on either side of the notch: the segment passes outside the shape.",
    "Triangle, square and trapezium have no inward notch, so they are convex."
   ],
   "figures": [
    "gq-10.8.1.jpg"
   ]
  },
  {
   "pdf": "G10.8.2",
   "source": "GATE CSE 2022 · GA Q 10",
   "level": "medium",
   "q": "A plot must be divided among four families into plots similar in shape (not necessarily equal in area). Poles are equally spaced dots; ropes R1 and R2 are fixed. What is the least number of additional straight ropes needed? (See figure.)",
   "options": [
    "2",
    "4",
    "5",
    "3"
   ],
   "answer": 3,
   "steps": [
    "The plot is a square with two cut corners, so each of the four similar plots must contain one cut corner region pattern; the fixed ropes R1 and R2 already start two of the boundaries.",
    "Extend the design symmetrically: one rope continues R1's line, one continues R2's line, and one more rope completes the fourth boundary, giving four plots of the same shape.",
    "Fewer than 3 extra ropes leaves at most three regions or regions of different shapes, so 3 is the least."
   ],
   "figures": [
    "gq-10.8.2.jpg"
   ]
  },
  {
   "pdf": "G10.8.3",
   "source": "GATE CSE 2026 · Set 1 · GA Q 2",
   "level": "medium",
   "q": "Two 4-tile patterns are given: a 2×2 square and a 1×4 straight bar. Using either or both any number of times, in any orientation, without overlaps, which rectangle CANNOT be constructed? (The PDF shows each option twice, small and large.)",
   "options": [
    "2 × 4 rectangle",
    "3 × 4 rectangle",
    "3 × 5 rectangle",
    "4 × 5 rectangle"
   ],
   "answer": 2,
   "steps": [
    "Every piece covers 4 cells, so the total number of cells must be a multiple of 4.",
    "2×4 = 8 ✓ (two 2×2 squares). 3×4 = 12 ✓ (three 1×4 bars). 4×5 = 20 ✓ (five vertical 1×4 bars).",
    "3×5 = 15 is not a multiple of 4, so it is impossible."
   ],
   "trick": "Count the cells first.",
   "figures": [
    "gq-10.8.3.jpg"
   ]
  },
  {
   "pdf": "G10.8.4",
   "source": "GATE CSE 2026 · Set 2 · GA Q 2",
   "level": "medium",
   "q": "A black square PQRS has been cut into two parts. One part is shown in Panel I. Which shape in Panel II is the other part? (See figure.)",
   "options": [
    "(i)",
    "(ii)",
    "(iii)",
    "(iv)"
   ],
   "answer": 2,
   "steps": [
    "The missing part must exactly fill the white region inside the square in Panel I.",
    "Trace the white region: it has a top arm, a step on the right and a vertical stem.",
    "Shape (iii) has exactly that outline (rotate/compare each arm length); the others have an arm that is too long or on the wrong side."
   ],
   "figures": [
    "gq-10.8.4.jpg"
   ]
  }
 ]
});
