APT.addTopic({
 "id": "gate-analytical",
 "section": "gate",
 "title": "GATE · Analytical Aptitude",
 "tagline": "Ages, directions, codes, seating and logic puzzles from GATE papers.",
 "pdfTopics": [],
 "concepts": {
  "story": [
   "GATE's Analytical Aptitude questions are short detective cases: ages, directions, codes, seating, and \"what must be true\". Every case gives you a few clues, and your job is to arrange them so that nothing contradicts.",
   "The winning habit: <b>draw it</b>. A line for ages or heights, a compass for directions, a circle for round tables, and circles for \"all/some/none\" statements."
  ],
  "memory": "Draw first, then test each option against ALL the clues. The option that breaks no clue wins.",
  "formulas": [
   "<b>If P then Q</b>: the contrapositive (not Q → not P) is always true; the converse (Q → P) is NOT guaranteed",
   "<b>\"If it had been … would have\"</b> describes something that did NOT happen",
   "<b>All + All = All</b>, <b>Some + All = Some</b>, two \"All\" statements about the same big group give no link between the two smaller groups",
   "<b>Directions</b>: put the start at (0, 0); NE/SE/NW/SW moves of d km are (±d/√2, ±d/√2); finish with Pythagoras",
   "<b>Round table facing the centre</b>: left = clockwise, right = anticlockwise",
   "<b>Triangular numbers</b> n(n+1)/2 appear in \"one A, two B's, three C's …\" questions"
  ],
  "tricks": [
   "Eliminate options: one broken clue is enough to cross an option out.",
   "Work backwards when the end state is known (toys shared equally at the end, final positions).",
   "For \"minimum number\" queue questions, place the most constrained person first.",
   "Odd-one-out with letters: convert to numbers (A=1 … Z=26) and look at the gaps.",
   "A complementary pair of conclusions (\"some X are Y\" vs \"no X is Y\") → answer \"either I or II\"."
  ],
  "patterns": [
   [
    "Ages / heights / ranking",
    "Draw a line, place the fixed ones first"
   ],
   [
    "Direction and distance",
    "Coordinates + Pythagoras"
   ],
   [
    "Coding (ROAD → URDG)",
    "Letter shifts, reversal, or both"
   ],
   [
    "Statements and conclusions",
    "Venn circles, contrapositive vs converse"
   ],
   [
    "Puzzles with tiles or grids",
    "Count (dots, shaded cells) and look for a known pattern like a magic square"
   ]
  ]
 },
 "questions": [
  {
   "pdf": "G8.1.1",
   "source": "GATE CSE 2010 Q 62",
   "level": "medium",
   "q": "Hari (H), Gita (G), Irfan (I) and Saira (S) are siblings, all born on 1st January. The age difference between any two successive siblings is less than three years. (i) Hari's age + Gita's age > Irfan's age + Saira's age. (ii) The age difference between Gita and Saira is one year; Gita is not the oldest and Saira is not the youngest. (iii) There are no twins. In what order were they born (oldest first)?",
   "options": [
    "HSIG",
    "SGHI",
    "IGSH",
    "IHSG"
   ],
   "answer": 1,
   "steps": [
    "Gap between G and S is only 1 year, and no twins, so G and S must be next to each other in the order.",
    "HSIG: S and G are not next to each other ✗.",
    "IGSH and IHSG: I is the oldest and the other condition fails: I is older than H/G and S is older than the remaining one, so I + S > H + G ✗.",
    "SGHI: S oldest, G second (G not oldest ✓, S not youngest ✓). Example ages S=10, G=9, H=7, I=5 give H+G = 16 > I+S = 15 ✓."
   ]
  },
  {
   "pdf": "G8.1.2",
   "source": "GATE2013 CE: GA-10",
   "level": "easy",
   "q": "Abhishek is elder to Savar. Savar is younger to Anshul. Which conclusion is logically valid?",
   "options": [
    "Abhishek is elder to Anshul",
    "Anshul is elder to Abhishek",
    "Abhishek and Anshul are of the same age",
    "No conclusion follows"
   ],
   "answer": 3,
   "steps": [
    "Both Abhishek and Anshul are older than Savar.",
    "Nothing compares Abhishek with Anshul, so no conclusion follows."
   ]
  },
  {
   "pdf": "G8.2.1",
   "source": "GATE CSE 2026 · Set 2 · GA Q 6",
   "level": "easy",
   "q": "Water : P :: Food : Q. Choose the P and Q combination that forms a meaningful analogy.",
   "options": [
    "P = Thirst; Q = Hunger",
    "P = Drink; Q = Hunger",
    "P = Thirst; Q = Satiated",
    "P = Wet; Q = Critic"
   ],
   "answer": 0,
   "steps": [
    "Water satisfies thirst; food satisfies hunger.",
    "So P = Thirst, Q = Hunger."
   ]
  },
  {
   "pdf": "G8.3.1",
   "source": "GATE CSE 2015 · Set 3 · GA Q 1",
   "level": "easy",
   "q": "If ROAD is written as URDG, then SWAN should be written as:",
   "options": [
    "VXDQ",
    "VZDQ",
    "VZDP",
    "UXDQ"
   ],
   "answer": 1,
   "steps": [
    "R→U, O→R, A→D, D→G: every letter moves +3.",
    "SWAN +3 → V Z D Q."
   ],
   "trick": "Letter shift."
  },
  {
   "pdf": "G8.3.2",
   "source": "GATE CSE 2016 · Set 1 · GA Q 04",
   "level": "medium",
   "q": "If 'relftaga' means carefree, 'otaga' means careful and 'fertaga' means careless, which could mean 'aftercare'?",
   "options": [
    "zentaga",
    "tagafer",
    "tagazen",
    "relffer"
   ],
   "answer": 2,
   "steps": [
    "\"taga\" is common to all three, so taga = care. relf = free, o = ful, fer = less.",
    "The code puts the \"care\" part LAST for care+free, i.e. the order is reversed from English (relf-taga = free-care).",
    "aftercare = after + care → reversed: care + after = taga + (new word for after) → tagazen."
   ]
  },
  {
   "pdf": "G8.4.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 7",
   "level": "medium",
   "q": "If IMAGE and FIELD are coded as FHBNJ and EMFJG respectively, which is the most appropriate code for BEACH?",
   "options": [
    "CEADP",
    "IDBFC",
    "JGIBC",
    "IBCEC"
   ],
   "answer": 1,
   "steps": [
    "IMAGE reversed is EGAMI; each letter +1 → FHBNJ ✓ (FIELD → DLEIF → EMFJG ✓).",
    "BEACH reversed = HCAEB; +1 → IDBFC."
   ],
   "trick": "Reverse, then shift."
  },
  {
   "pdf": "G8.5.1",
   "source": "GATE CSE 2015 · Set 2 · GA Q 7",
   "level": "medium",
   "q": "Four branches of a company are located at M, N, O and P. M is north of N at a distance of 4 km; P is south of O at a distance of 2 km; N is southeast of O by 1 km. What is the distance between M and P in km?",
   "options": [
    "5.34",
    "6.74",
    "28.5",
    "45.49"
   ],
   "answer": 0,
   "steps": [
    "Put O at (0, 0). N is 1 km south-east: N = (0.707, −0.707).",
    "M is 4 km north of N: M = (0.707, 3.293). P is 2 km south of O: P = (0, −2).",
    "MP = √(0.707² + 5.293²) = √(0.5 + 28.02) ≈ √28.52 ≈ 5.34 km."
   ]
  },
  {
   "pdf": "G8.5.2",
   "source": "GATE CSE 2017 · Set 2 · GA Q 3",
   "level": "easy",
   "q": "Five buildings V, W, X, Y and Z are in a row. V is to the West of W. Z is to the East of X and to the West of V. W is to the West of Y. Which building is in the middle?",
   "options": [
    "V",
    "W",
    "X",
    "Y"
   ],
   "answer": 0,
   "steps": [
    "From the clues: X before Z, Z before V, V before W, W before Y (West to East).",
    "Row: X Z V W Y. The middle one is V."
   ]
  },
  {
   "pdf": "G8.5.3",
   "source": "GATE CSE 2019 · GA Q 10",
   "level": "medium",
   "q": "Three of five students allocated to a hostel make requests. X: wants to avoid a wing next to the garden (pollen allergy). Y: wants to live as far from the washrooms as possible. Z: believes in Vaastu and wants the South-West wing. Shaded rooms are occupied; WR = washroom. Which allocation plan (see figure) accommodates all requests?",
   "options": [
    "Plan A",
    "Plan B",
    "Plan C",
    "Plan D"
   ],
   "answer": 3,
   "steps": [
    "The compass is drawn diagonally: N is at the top-left corner, so the bottom side of the plan is the South-West wing and the right side (with the garden) is the East side.",
    "Z must be on the bottom side. Plans A and B put Z on the left side (North-West) and plan C at the top-right. Only D has Z on the bottom row ✓.",
    "In D, X is at the bottom-left, away from the garden side ✓, and Y is on the right near the entrance, far from both washrooms (top-left and bottom-left) ✓."
   ],
   "figures": [
    "gq-8.5.3.jpg"
   ]
  },
  {
   "pdf": "G8.5.4",
   "source": "GATE CSE 2025 · Set 1 · GA Q 5",
   "level": "easy",
   "q": "According to the map in the figure, which statement is correct?",
   "options": [
    "The library is located to the northwest of the canteen.",
    "The hospital is located to the east of the chemistry lab.",
    "The chemistry lab is to the southeast of physics lab.",
    "The classrooms and canteen are next to each other."
   ],
   "answer": 2,
   "steps": [
    "Library and canteen are in the same row, so the library is west (not north-west) of the canteen ✗.",
    "The hospital is directly north of the chemistry lab, not east ✗.",
    "The physics lab is top-left; the chemistry lab is bottom-right, i.e. south-east of it ✓.",
    "Classrooms (bottom-left) and canteen (top-right) are far apart ✗."
   ],
   "figures": [
    "gq-8.5.4.jpg"
   ]
  },
  {
   "pdf": "G8.5.5",
   "source": "GATE2014 AG: GA-9",
   "level": "medium",
   "q": "X is 1 km northeast of Y. Y is 1 km southeast of Z. W is 1 km west of Z. P is 1 km south of W. Q is 1 km east of P. What is the distance between X and Q in km?",
   "options": [
    "1",
    "√2",
    "√3",
    "2"
   ],
   "answer": 2,
   "steps": [
    "Put Z at (0, 0). Y = (0.707, −0.707). X = Y + (0.707, 0.707) = (1.414, 0).",
    "W = (−1, 0), P = (−1, −1), Q = (0, −1).",
    "XQ = √(1.414² + 1²) = √(2 + 1) = √3."
   ]
  },
  {
   "pdf": "G8.6.1",
   "source": "GATE CSE 2025 · Set 1 · GA Q 4",
   "level": "easy",
   "q": "P is the brother of Q. S is the daughter of Q. T is the sister of S. R is the mother of Q. Statements: (1) R is the grandmother of S. (2) P is the uncle of S and T. (3) R has only one son. (4) Q has only one daughter. Which option is correct?",
   "options": [
    "Both (1) and (2) are true.",
    "Both (1) and (3) are true.",
    "Only (3) is true.",
    "Only (4) is true."
   ],
   "answer": 0,
   "steps": [
    "R is Q's mother and S is Q's daughter → R is S's grandmother ✓ (1).",
    "P is Q's brother, and S, T are Q's daughters → P is their uncle ✓ (2).",
    "(3): P is a son of R, but Q's gender is unknown, so \"only one son\" can't be confirmed. (4): Q has two daughters, S and T ✗."
   ]
  },
  {
   "pdf": "G8.7.1",
   "source": "GATE CSE 2025 · Set 2 · GA Q 6",
   "level": "medium",
   "q": "\"Even if I had known that you were in the hospital, I would not have gone there to see you\", Ramya told Josephine. Which is the logically correct inference?",
   "options": [
    "Ramya knew that Josephine was in the hospital.",
    "Ramya did not know that Josephine was in the hospital.",
    "Ramya and Josephine were once close friends; but now, they are not.",
    "Josephine was in the hospital due to an injury to her leg."
   ],
   "answer": 1,
   "steps": [
    "\"Even if I had known\" describes a situation that did not happen.",
    "So Ramya did not know Josephine was in hospital. The other options add facts not in the sentence."
   ]
  },
  {
   "pdf": "G8.8.1",
   "source": "GATE CSE 2010 Q 61",
   "level": "medium",
   "q": "If 137 + 276 = 435, how much is 731 + 672?",
   "options": [
    "534",
    "1403",
    "1623",
    "1513"
   ],
   "answer": 2,
   "steps": [
    "In base 10, 137 + 276 = 413, not 435. Try base 8: 7+6 = 13 = 15₈ (write 5, carry 1); 3+7+1 = 11 = 13₈ (write 3, carry 1); 1+2+1 = 4 → 435 ✓.",
    "So the numbers are octal. 1+2 = 3; 3+7 = 10 = 12₈ (write 2, carry 1); 7+6+1 = 14 = 16₈ → 1623."
   ],
   "trick": "Spot a different number base."
  },
  {
   "pdf": "G8.8.2",
   "source": "GATE CSE 2015 · Set 3 · GA Q 7",
   "level": "medium",
   "q": "Five of six members P, Q, R, S, T, U get portfolios Home, Power, Defense, Telecom, Finance. U does not want any portfolio if S gets one. R wants either Home or Finance or none. Q says if S gets Power or Telecom, she must get the other one. T insists on a portfolio if P gets one. Which is a valid distribution?",
   "options": [
    "P-Home, Q-Power, R-Defense, S-Telecom, T-Finance",
    "R-Home, S-Power, P-Defense, Q-Telecom, T-Finance",
    "P-Home, Q-Power, T-Defense, S-Telecom, U-Finance",
    "Q-Home, U-Power, T-Defense, R-Telecom, P-Finance"
   ],
   "answer": 1,
   "steps": [
    "A: R gets Defense ✗. C: S and U both get portfolios ✗. D: R gets Telecom ✗.",
    "B: R-Home ✓, S-Power with Q-Telecom ✓, U left out ✓, P and T both in ✓."
   ]
  },
  {
   "pdf": "G8.8.3",
   "source": "GATE CSE 2017 · Set 2 · GA Q 7",
   "level": "easy",
   "q": "Three boxes: one has apples, one oranges, one both. All three are labelled incorrectly. If you may open one box and inspect one fruit, which box should you open to determine all contents?",
   "options": [
    "The box labeled 'Apples'",
    "The box labeled 'Apples and Oranges'",
    "The box labeled 'Oranges'",
    "Cannot be determined"
   ],
   "answer": 1,
   "steps": [
    "The box labelled \"Apples and Oranges\" is wrong, so it has only one kind of fruit. One fruit from it tells you which.",
    "Say it is an apple. Then the box labelled \"Oranges\" can't be oranges or apples → it is the mixed box, and the last box is oranges."
   ]
  },
  {
   "pdf": "G8.8.4",
   "source": "GATE CSE 2021 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "Six students P, Q, R, S, T, U have distinct heights. S is taller than R. Q is the shortest. U is taller than only one student. T is taller than S but is not the tallest. The number of students taller than R equals the number of students shorter than ___.",
   "options": [
    "T",
    "R",
    "S",
    "P"
   ],
   "answer": 2,
   "steps": [
    "Q is shortest and U second shortest. T > S > R, and T is not tallest, so P is tallest.",
    "Order (tallest first): P, T, S, R, U, Q.",
    "Taller than R: P, T, S = 3. Shorter than S: R, U, Q = 3 → S."
   ]
  },
  {
   "pdf": "G8.8.5",
   "source": "GATE CSE 2023 · GA Q 4",
   "level": "easy",
   "q": "90% of pregnant women received medical care at least once before giving birth. Of these, 60% received care from doctors and 40% from other healthcare providers. Which statement can be inferred with certainty?",
   "options": [
    "More than half of the pregnant women received medical care at least once from a doctor.",
    "Less than half of the pregnant women received medical care at least once from a doctor.",
    "More than half of the pregnant women received medical care at most once from a doctor.",
    "Less than half of the pregnant women received medical care at most once from a doctor."
   ],
   "answer": 0,
   "steps": [
    "From doctors: 60% of 90% = 54% of all pregnant women.",
    "54% is more than half → A."
   ]
  },
  {
   "pdf": "G8.8.6",
   "source": "GATE CSE 2026 · Set 1 · GA Q 5",
   "level": "medium",
   "q": "\"When the teacher is in the room, all students stand silently.\" If this is true, which statement is NOT necessarily true?",
   "options": [
    "If any student is not standing silently, then the teacher is not in the room.",
    "When the teacher is in the room, all students are silent.",
    "If all students are standing, then the teacher is in the room.",
    "When the teacher is in the room, all students are standing."
   ],
   "answer": 2,
   "steps": [
    "The statement is \"teacher in room → students stand silently\". A is its contrapositive (true); B and D are parts of it (true).",
    "C reverses it (converse). Students might stand for other reasons, so it's not necessarily true."
   ],
   "trick": "Converse is not guaranteed."
  },
  {
   "pdf": "G8.8.7",
   "source": "GATE CSE 2026 · Set 1 · GA Q 6",
   "level": "medium",
   "q": "Passage: combinatorics deals with counting; \"this kind of counting is sometimes used in the modeling of several physical phenomena. Often, in such models, combinatorial possibilities are assigned probabilities\", enabling computation of average values. P: Combinatorics is always invoked in modeling physical phenomena. Q: Modeling some physical phenomena involves assigning probabilities to combinatorial possibilities to compute averages. What can be inferred?",
   "options": [
    "P is False and Q is False",
    "P is False and Q is True",
    "P is True and Q is False",
    "P is True and Q is True"
   ],
   "answer": 1,
   "steps": [
    "The passage says \"sometimes used\", so \"always\" in P is false.",
    "It says such models often assign probabilities to compute averages, so Q is true."
   ]
  },
  {
   "pdf": "G8.8.8",
   "source": "GATE CSE 2026 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "2020 Olympics javelin final: gold Neeraj Chopra, silver Jakub Vadlejch, bronze Vitezlav Vesely; six rounds, best throw counts. (i) Rounds 1–2: only Neeraj had medal-winning throws. (ii) Last-round throws of Jakub and Vesely were fouls. (iii) After four rounds Vesely was second and could not improve later. (iv) In round 4, Jakub's throw was the best of that round. In which round did Vesely have his best throw?",
   "options": [
    "Third",
    "Fourth",
    "Fifth",
    "Sixth"
   ],
   "answer": 0,
   "steps": [
    "Rounds 1–2 had no medal throws from Vesely, round 6 was a foul, and he didn't improve after round 4 → best throw in round 3 or 4.",
    "If it were round 4, Jakub's round-4 throw (best of the round) would beat it and Jakub would be ahead of Vesely after 4 rounds, contradicting (iii).",
    "So Vesely's best throw was in round 3."
   ]
  },
  {
   "pdf": "G8.8.9",
   "source": "GATE CSE 2026 · Set 2 · GA Q 5",
   "level": "easy",
   "q": "\"When it is raining, peacocks dance.\" Based only on this sentence, which is necessarily true?",
   "options": [
    "Peacocks dance only when it is raining.",
    "When peacocks dance, it is raining.",
    "When peacocks are not dancing, it is not raining.",
    "When it is not raining, peacocks do not dance."
   ],
   "answer": 2,
   "steps": [
    "Rain → peacocks dance. The only statement that must follow is the contrapositive: no dancing → no rain.",
    "A, B and D reverse or negate the statement, and those don't follow."
   ],
   "trick": "Contrapositive."
  },
  {
   "pdf": "G8.8.10",
   "source": "GATE CSE 2026 · Set 2 · GA Q 7",
   "level": "medium",
   "q": "Two tiles are missing in Panel I (see figure). Which option in Panel II is the appropriate choice for the missing tiles?",
   "options": [
    "(i)",
    "(ii)",
    "(iii)",
    "(iv)"
   ],
   "answer": 0,
   "steps": [
    "Count the black dots in each tile. Row 1: 8, 1, 6. Row 2: 3, 5, ?. Row 3: 4, 9, ?.",
    "This is the famous 3×3 magic square 8-1-6 / 3-5-7 / 4-9-2 (every row and column adds to 15).",
    "So the missing tiles need 7 black dots (top) and 2 black dots (bottom). Only option (i) has 7 and 2."
   ],
   "figures": [
    "gq-8.8.10.jpg"
   ]
  },
  {
   "pdf": "G8.8.11",
   "source": "GATE CSE 2026 · Set 2 · GA Q 9",
   "level": "medium",
   "q": "A 4×4 grid: the numbers on top (2, 2, 2, 2) and on the left (3, 1, 2, 2) give how many cells must be shaded in each column and row. Which option in Panel II is shaded correctly?",
   "options": [
    "(i)",
    "(ii)",
    "(iii)",
    "(iv)"
   ],
   "answer": 1,
   "steps": [
    "Check each option row by row (3, 1, 2, 2), then column by column (2 each).",
    "Option (ii): rows have 3, 1, 2, 2 shaded ✓ and every column has exactly 2 ✓.",
    "Option (i) already fails in row 2 (2 shaded instead of 1); (iii) and (iv) break a column count."
   ],
   "figures": [
    "gq-8.8.11.jpg"
   ]
  },
  {
   "pdf": "G8.8.12",
   "source": "GATE DA 2026 · GA Q 5",
   "level": "easy",
   "q": "\"If his latest movie had been a commercial success, the actor would have made enough money to sponsor his next movie.\" Based only on this sentence, which is true?",
   "options": [
    "The actor will certainly sponsor his next movie.",
    "His latest movie was a commercial success.",
    "The actor made enough money from his latest movie.",
    "His latest movie was not commercially successful."
   ],
   "answer": 3,
   "steps": [
    "\"If it had been … would have\" describes something that did not happen.",
    "So the latest movie was NOT a commercial success."
   ]
  },
  {
   "pdf": "G8.8.13",
   "source": "GATE DA 2026 · GA Q 8",
   "level": "medium",
   "q": "Rishi (boy) and Swathi (girl) are in Class 5; Pavan (boy) and Tanvi (girl) are in Class 4. They played three chess games one after another; a loser plays no more games. (I) Only the first game was between two students of the same class. (II) Class 5 won more games than Class 4. (III) Boys won two games and girls one. Who did not lose any game?",
   "options": [
    "Pavan",
    "Rishi",
    "Swathi",
    "Tanvi"
   ],
   "answer": 3,
   "steps": [
    "If game 1 were Pavan vs Tanvi, its winner (Class 4) must then lose game 2 to a Class-5 player, leaving the two Class-5 students to play each other, which isn't allowed. So game 1 was Rishi vs Swathi.",
    "Class 5 needs at least 2 wins, but one person can't win all 3 (that would be 3 wins for one gender). So the game-1 winner wins game 2 and loses game 3 to a Class-4 player.",
    "That winner has 2 wins, so must be a boy: Rishi. The only girl win is then game 3, by Tanvi, who never loses."
   ]
  },
  {
   "pdf": "G8.8.14",
   "source": "GATE2011 GG: GA-8",
   "level": "medium",
   "q": "Three sisters R, S, T received 24 toys. R gave some toys to S, doubling S's share. Then S gave some to T, doubling T's share. Then T gave some to R, doubling R's current number. In the end all three had equal toys. How many toys did R have originally?",
   "options": [
    "8",
    "9",
    "11",
    "12"
   ],
   "answer": 2,
   "steps": [
    "Work backwards from 8, 8, 8 (R, S, T).",
    "Before T doubled R: R = 4, T = 8 + 4 = 12, S = 8.",
    "Before S doubled T: T = 6, S = 8 + 6 = 14, R = 4.",
    "Before R doubled S: S = 7, R = 4 + 7 = 11, T = 6. So R started with 11."
   ],
   "trick": "Work backwards."
  },
  {
   "pdf": "G8.8.15",
   "source": "GATE2011 MN: GA-63",
   "level": "medium",
   "q": "L, M and N are in a queue. There are 5 children between L and M, and 8 between M and N. There are 3 children ahead of N and 21 behind L. What is the minimum number of children in the queue?",
   "options": [
    "28",
    "27",
    "41",
    "40"
   ],
   "answer": 0,
   "steps": [
    "N has 3 ahead, so N is 4th. M has 8 children between it and N, so M is 13th (there's no room ahead of N).",
    "L has 5 between it and M: L is 7th or 19th. Total = L's position + 21.",
    "Minimum: L = 7th → 7 + 21 = 28."
   ]
  },
  {
   "pdf": "G8.8.16",
   "source": "GATE2012 AR: GA-8",
   "level": "easy",
   "q": "Ravi is taller than Arun but shorter than Iqbal. Sam is shorter than Ravi. Mohan is shorter than Arun. Balu is taller than Mohan and Sam. The tallest person can be:",
   "options": [
    "Mohan",
    "Ravi",
    "Balu",
    "Arun"
   ],
   "answer": 2,
   "steps": [
    "Iqbal > Ravi > Arun > Mohan and Ravi > Sam, so Ravi, Arun, Mohan and Sam can't be tallest.",
    "Balu is only known to be taller than Mohan and Sam, so he could be the tallest (Iqbal could too, but he isn't an option)."
   ]
  },
  {
   "pdf": "G8.8.17",
   "source": "GATE2012 CY: GA-9",
   "level": "medium",
   "q": "Eight bags of rice look alike; seven weigh the same and one is slightly heavier. Using a balance of unlimited capacity, what is the minimum number of weighings needed to identify the heavier bag?",
   "options": [
    "2",
    "3",
    "4",
    "8"
   ],
   "answer": 0,
   "steps": [
    "Split into 3, 3, 2. Weigh 3 against 3.",
    "If they balance, the heavy bag is among the 2: weigh them against each other (2nd weighing).",
    "If not, take the heavier 3: weigh 1 against 1. If equal, it's the third bag (2nd weighing).",
    "So 2 weighings always suffice."
   ],
   "trick": "Split into three groups."
  },
  {
   "pdf": "G8.8.18",
   "source": "GATE2014 AE: GA-7",
   "level": "medium",
   "q": "Anuj, Bhola, Chandan, Dilip, Eswar and Faisal live on different floors (1 to 6) of a building. Anuj lives on an even floor; Bhola does not live on an odd floor. Chandan does not live below Faisal. Dilip is not on floor 2. Eswar is not immediately above or below Bhola. Faisal lives three floors above Dilip. Which floor combination is correct? (Order: Anuj, Bhola, Chandan, Dilip, Eswar, Faisal)",
   "options": [
    "6, 2, 5, 1, 3, 4",
    "2, 6, 5, 1, 3, 4",
    "4, 2, 6, 3, 1, 5",
    "2, 4, 6, 1, 3, 5"
   ],
   "answer": 1,
   "steps": [
    "A: Eswar (3) is right above Bhola (2) ✗.",
    "C: Eswar (1) is right below Bhola (2) ✗, and 3 + 3 ≠ 5 for Faisal ✗.",
    "D: Faisal should be Dilip + 3 = 4, not 5 ✗.",
    "B: Anuj 2 (even) ✓, Bhola 6 (even) ✓, Chandan 5 above Faisal 4 ✓, Dilip 1 ✓, Eswar 3 not next to 6 ✓, Faisal = 1 + 3 ✓."
   ]
  },
  {
   "pdf": "G8.9.1",
   "source": "GATE CSE 2024 · Set 2 · GA Q 10",
   "level": "medium",
   "q": "In a 4×4 array, each cell of the first three rows has a cross (X) or a number. Row 1: 1, X, 4, 3. Row 2: X, 5, 5, 4. Row 3: 3, X, 6, X. Each number is the count of immediate neighbouring cells (including diagonals) NOT having a cross. The last row has no crosses. What is the sum of the four numbers in the last row?",
   "options": [
    "11",
    "10",
    "12",
    "9"
   ],
   "answer": 0,
   "steps": [
    "Row 3 is 3, X, 6, X and row 4 has no crosses.",
    "Cell (4,1): neighbours (3,1), (3,2)=X, (4,2) → 2 without X.",
    "Cell (4,2): (3,1), (3,2)=X, (3,3), (4,1), (4,3) → 4.",
    "Cell (4,3): (3,2)=X, (3,3), (3,4)=X, (4,2), (4,4) → 3. Cell (4,4): (3,3), (3,4)=X, (4,3) → 2.",
    "Sum = 2 + 4 + 3 + 2 = 11."
   ]
  },
  {
   "pdf": "G8.10.1",
   "source": "GATE CSE 2016 · Set 2 · GA Q 04",
   "level": "easy",
   "q": "Pick the odd one: CADBE, JHKIL, XVYWZ, ONPMQ",
   "options": [
    "CADBE",
    "JHKIL",
    "XVYWZ",
    "ONPMQ"
   ],
   "answer": 3,
   "steps": [
    "CADBE = 3, 1, 4, 2, 5: steps −2, +3, −2, +3. JHKIL and XVYWZ follow the same steps.",
    "ONPMQ = 15, 14, 16, 13, 17: steps −1, +2, −3, +4. Odd one."
   ]
  },
  {
   "pdf": "G8.10.2",
   "source": "GATE2014 AE: GA-6",
   "level": "medium",
   "q": "Find the odd one: ALRVX, EPVZB, ITZDF, OYEIK",
   "options": [
    "ALRVX",
    "EPVZB",
    "ITZDF",
    "OYEIK"
   ],
   "answer": 3,
   "steps": [
    "ALRVX: gaps +11, +6, +4, +2. EPVZB and ITZDF have the same gaps (wrapping past Z).",
    "OYEIK: O→Y is +10. Odd one."
   ]
  },
  {
   "pdf": "G8.11.1",
   "source": "GATE CSE 2022 · GA Q 7",
   "level": "easy",
   "q": "In an entrance test, boys were 65% of those who appeared; girls were the rest and accounted for 60% of the qualified candidates. Which is the correct inference?",
   "options": [
    "Equal number of boys and girls qualified",
    "Equal number of boys and girls appeared for the test",
    "The number of boys who appeared is less than the number of girls who appeared",
    "The number of boys who qualified is less than the number of girls who qualified"
   ],
   "answer": 3,
   "steps": [
    "Qualified: girls 60%, boys 40%. So fewer boys qualified than girls → D.",
    "Appeared: boys 65% > girls 35%, so B and C are false."
   ]
  },
  {
   "pdf": "G8.11.2",
   "source": "GATE CSE 2023 · GA Q 6",
   "level": "easy",
   "q": "Over 75% of Zombieland's working population has serious health issues; experts found lack of exercise to be a leading cause. The government decided to give monetary incentives to those who ride bicycles to work. What can be inferred with certainty?",
   "options": [
    "All the working population will henceforth ride bicycles to work.",
    "Riding bicycles will ensure that all of the working population is free of health issues.",
    "The health experts suggested making cycling mandatory.",
    "The Government believes that riding bicycles is a form of physical exercise."
   ],
   "answer": 3,
   "steps": [
    "The incentive is a response to lack of exercise, so the government must see cycling as exercise.",
    "A, B and C claim things the passage never says."
   ]
  },
  {
   "pdf": "G8.12.1",
   "source": "GATE CSE 2017 · Set 1 · GA Q 7",
   "level": "medium",
   "q": "Six people sit around a circular table: at least two men and two women; at least three right-handed persons. Every woman has a left-handed person to her immediate right. None of the women is right-handed. The number of women is:",
   "options": [
    "2",
    "3",
    "4",
    "Cannot be determined"
   ],
   "answer": 0,
   "steps": [
    "At least 3 right-handed → at most 3 left-handed. All women are left-handed, so women ≤ 3.",
    "If there were 3 women, they'd be the only left-handers, so each woman's right neighbour would be a woman. Going round, everyone would be a woman: impossible with 2 men.",
    "So there are exactly 2 women."
   ]
  },
  {
   "pdf": "G8.13.1",
   "source": "GATE CSE 2017 · Set 1 · GA Q 3",
   "level": "medium",
   "q": "Rahul, Murali, Srinivas and Arul sit around a square table (facing the centre). Rahul is to the left of Murali. Srinivas is to the right of Arul. Which pair sits opposite each other?",
   "options": [
    "Rahul and Murali",
    "Srinivas and Arul",
    "Srinivas and Murali",
    "Srinivas and Rahul"
   ],
   "answer": 2,
   "steps": [
    "Facing the centre, left is clockwise. Put Murali at seat 1; Rahul is at seat 2 (clockwise from Murali).",
    "Seats 3 and 4 remain. Srinivas is to Arul's right (anticlockwise), so Arul = 4, Srinivas = 3.",
    "Opposite pairs: 1–3 (Murali–Srinivas) and 2–4 (Rahul–Arul)."
   ]
  },
  {
   "pdf": "G8.14.1",
   "source": "GATE CSE 2020 · GA Q 7",
   "level": "easy",
   "q": "If P = 3, R = 27, T = 243, then Q + S = ?",
   "options": [
    "40",
    "80",
    "90",
    "110"
   ],
   "answer": 2,
   "steps": [
    "P, R, T are 3¹, 3³, 3⁵: each letter is 3 to the power of its position (P=1st, Q=2nd, …).",
    "Q = 3² = 9, S = 3⁴ = 81. Q + S = 90."
   ]
  },
  {
   "pdf": "G8.14.2",
   "source": "GATE CSE 2024 · Set 2 · GA Q 5",
   "level": "easy",
   "q": "In the sequence 6, 9, 14, x, 30, 41, a possible value of x is:",
   "options": [
    "25",
    "21",
    "18",
    "20"
   ],
   "answer": 1,
   "steps": [
    "Differences: 3, 5, then 7, 9, 11 (odd numbers).",
    "x = 14 + 7 = 21; check 21 + 9 = 30 ✓, 30 + 11 = 41 ✓."
   ]
  },
  {
   "pdf": "G8.14.3",
   "source": "GATE2010 MN: GA-7",
   "level": "medium",
   "q": "Given the sequence A, B, B, C, C, C, D, D, D, D, … (one A, two B's, three C's, and so on), the 240th letter will be:",
   "options": [
    "V",
    "U",
    "T",
    "W"
   ],
   "answer": 0,
   "steps": [
    "The last copy of the n-th letter is at position 1 + 2 + … + n = n(n+1)/2.",
    "n = 21 → 231; n = 22 → 253. Position 240 lies between, so it is the 22nd letter.",
    "The 22nd letter is V."
   ],
   "trick": "Triangular numbers."
  },
  {
   "pdf": "G8.15.1",
   "source": "GATE CSE 2016 · Set 1 · GA Q 08",
   "level": "medium",
   "q": "Poker players P, Q, R, S: (I) P always beats Q. (II) R always beats S. (III) S loses to P only sometimes. (IV) R always loses to Q. Which can be inferred? (i) P is likely to beat all three other players. (ii) S is the absolute worst player in the set.",
   "options": [
    "(i) only",
    "(ii) only",
    "(i) and (ii) only",
    "neither (i) nor (ii)"
   ],
   "answer": 3,
   "steps": [
    "(i): S beats P sometimes, so P is not sure to beat everyone. Chains (P > Q > R) don't guarantee results in poker.",
    "(ii): S sometimes beats P, so S isn't the absolute worst.",
    "Neither follows."
   ]
  },
  {
   "pdf": "G8.15.2",
   "source": "GATE CSE 2016 · Set 2 · GA Q 08",
   "level": "easy",
   "q": "All hill-stations have a lake. Ooty has two lakes. Which can be inferred? (i) Ooty is not a hill-station. (ii) No hill-station can have more than one lake.",
   "options": [
    "(i) only",
    "(ii) only",
    "Both (i) and (ii)",
    "Neither (i) nor (ii)"
   ],
   "answer": 3,
   "steps": [
    "\"Have a lake\" means at least one lake. Two lakes doesn't break the rule.",
    "So Ooty may well be a hill-station, and hill-stations can have more lakes. Neither follows."
   ]
  },
  {
   "pdf": "G8.15.3",
   "source": "GATE CSE 2021 · Set 1 · GA Q 9",
   "level": "medium",
   "q": "Statement 1: All bacteria are microorganisms. Statement 2: All pathogens are microorganisms. Conclusion I: Some pathogens are bacteria. Conclusion II: All pathogens are not bacteria. Which is logically correct?",
   "options": [
    "Only conclusion I is correct",
    "Only conclusion II is correct",
    "Either conclusion I or II is correct",
    "Neither conclusion I nor II is correct"
   ],
   "answer": 2,
   "steps": [
    "Bacteria and pathogens are both inside \"microorganisms\", but we don't know whether they overlap, so neither conclusion is certain on its own.",
    "But I (\"some pathogens are bacteria\") and II (\"no pathogen is a bacterium\") are exact opposites. One of them must be true → \"either I or II\"."
   ],
   "trick": "Complementary pair → either/or."
  },
  {
   "pdf": "G8.15.4",
   "source": "GATE CSE 2022 · GA Q 4",
   "level": "easy",
   "q": "Statement 1: All students are inquisitive. Statement 2: Some students are inquisitive. Statement 3: No student is inquisitive. Statement 4: Some students are not inquisitive. Which two CANNOT be true simultaneously (assuming at least one student)?",
   "options": [
    "Statement 1 and Statement 3",
    "Statement 1 and Statement 2",
    "Statement 2 and Statement 4",
    "Statement 3 and Statement 4"
   ],
   "answer": 0,
   "steps": [
    "\"All are\" and \"none is\" can't both hold when there is at least one student.",
    "1 & 2 fit together, 2 & 4 can both be true, 3 & 4 can both be true."
   ]
  },
  {
   "pdf": "G8.15.5",
   "source": "GATE DS&AI 2024 · GA Q 6",
   "level": "easy",
   "q": "Thousands of years ago some people began dairy farming. This coincided with mutations in a gene that let these people digest dairy milk. Which can be inferred?",
   "options": [
    "All human beings can digest dairy milk.",
    "No human being can digest dairy milk.",
    "Digestion of dairy milk is essential for human beings.",
    "In human beings, digestion of dairy milk resulted from a mutated gene."
   ],
   "answer": 3,
   "steps": [
    "The passage links the ability to digest milk to the gene mutation → D.",
    "A, B and C are not supported."
   ]
  },
  {
   "pdf": "G8.15.6",
   "source": "GATE2013 AE: GA-9",
   "level": "easy",
   "q": "All professors are researchers. Some scientists are professors. Which conclusion is valid?",
   "options": [
    "All scientists are researchers",
    "All professors are scientists",
    "Some researchers are scientists",
    "No conclusion follows"
   ],
   "answer": 2,
   "steps": [
    "Some scientists are professors, and all professors are researchers → some scientists are researchers.",
    "Turned around: some researchers are scientists → C."
   ],
   "trick": "Some + All = Some."
  },
  {
   "pdf": "G8.15.7",
   "source": "GATE2014 AG: GA-6",
   "level": "medium",
   "q": "Four children: Som is younger than Riaz. Shiv is elder to Ansu. Ansu is the youngest. Which statement(s) are needed to find the eldest? 1. Shiv is younger than Riaz. 2. Shiv is elder to Som.",
   "options": [
    "Statement 1 by itself determines the eldest child.",
    "Statement 2 by itself determines the eldest child.",
    "Statements 1 and 2 are both required.",
    "Statements 1 and 2 are not sufficient."
   ],
   "answer": 0,
   "steps": [
    "With 1: Riaz is older than Som and Shiv, and Ansu is youngest → Riaz is eldest ✓.",
    "With 2 only: Shiv > Som, but Shiv vs Riaz is unknown ✗."
   ]
  }
 ]
});
