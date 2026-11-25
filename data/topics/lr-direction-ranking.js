APT.addTopic({
  id: 'lr-direction-ranking',
  section: 'reasoning',
  title: 'Direction Sense, Order & Ranking',
  tagline: 'Walk the map, line up the queue.',
  pdfTopics: ['2.12', '2.26', '2.28'],
  concepts: {
    story: [
      '<b>Directions</b>: stand facing North. Your right hand points East, your left hand West, your back South. Every "turn right" question is just you turning on this map.',
      '<b>Ranking</b>: kids standing in a line. If you\'re 7th from the front and 9th from the back, the line has 7 + 9 − 1 = 15 kids (you were counted twice).',
    ],
    memory: 'Total = left rank + right rank − 1. Right turn from North = East.',
    extra: `<pre class="diagram">            N
       NW   |   NE
    W ------+------ E
       SW   |   SE
            S

  Facing N: right = E, left = W
  Facing E: right = S, left = N</pre>`,
    formulas: [
      '<b>Total in a row</b> = rank from left + rank from right − 1',
      'Position from the other end = total − rank + 1',
      'Persons between two people = (difference in their ranks) − 1',
      'Straight-line distance: Pythagoras, √(east–west² + north–south²)',
      'Shadows: in the morning the sun is in the East, so shadows fall to the West (evening: East)',
    ],
    tricks: [
      '<b>Draw every move</b> as an arrow on paper. Mark the start with a dot.',
      'Add up all North moves minus South moves, and all East minus West. Then use Pythagoras once.',
      'In a <b>swap</b> question, the new position of one person = the old position of the other.',
      'For "A is taller than B" chains, write them as a line: T > Q > … and see what is fixed.',
    ],
    patterns: [
      ['Walks with turns', 'Draw arrows, add up N–S and E–W'],
      ['Positions in a row or queue', 'Left + right − 1'],
      ['Two people swap places', 'New rank = the other person\'s old rank'],
      ['Taller / heavier / richer chains', 'Arrange in one line, check what is certain'],
    ],
  },
  questions: [
    {
      pdf: '2.32.14', level: 'medium',
      q: 'In a row of girls, Seeta is 7th from the left and Leena is 9th from the right. When they swap seats, Seeta becomes 11th from the left. How many girls are in the row?',
      options: ['16', '20', '22', 'None of these'], answer: 3,
      steps: ['After the swap Seeta sits in Leena\'s old seat, so Leena\'s seat is 11th from the left.', 'That same seat is 9th from the right.', 'Total = 11 + 9 − 1 = 19, which is not an option.'],
      trick: 'Swap: new rank = the other person\'s old rank.',
    },
    {
      pdf: '2.26.1', level: 'medium',
      q: 'In a queue of 50 people, Amanda is 10th from the front and Murthy is 25th from the back. Marta is exactly in the middle of the two. What is Marta\'s position from the front?',
      options: ['16', '18', '15', '17'], answer: 1,
      steps: ['Murthy from the front = 50 − 25 + 1 = 26.', 'The middle of positions 10 and 26 = (10 + 26)/2 = 18.'],
    },
    {
      pdf: '2.26.2', level: 'medium',
      q: 'Five janitors have different heights. Qureshi is shorter only than Timber. Sant is shorter than Pali and Qureshi. Who is the shortest?',
      options: ['Rohan', 'Sant', 'Pali', 'Data inadequate'], answer: 3,
      steps: ['Timber is tallest, Qureshi second.', 'Sant is shorter than Pali, but nothing compares Sant with Rohan.', 'The shortest could be Sant or Rohan: data inadequate.'],
    },
    {
      pdf: '2.37.12', level: 'easy',
      q: '1. The hotel is two blocks east of the drugstore. 2. The market is one block west of the hotel. 3. The drugstore is west of the market. If 1 and 2 are true, statement 3 is:',
      options: ['True', 'False', 'Uncertain', 'Insufficient data'], answer: 0,
      steps: ['Put the drugstore at 0. The hotel is at +2 (east).', 'The market is one block west of the hotel: +1.', 'The drugstore (0) is west of the market (+1): true.'],
    },
    {
      pdf: '2.37.11', level: 'easy',
      q: 'I. Last year Jim saw more movies than Sam. II. Sam saw fewer movies than Dan. III. Dan saw more movies than Jim. If I and II are true, III is:',
      options: ['True', 'False', 'Uncertain', 'None'], answer: 2,
      steps: ['We know Jim > Sam and Dan > Sam.', 'Both are above Sam, but nothing compares Jim with Dan.', 'So III is uncertain.'],
    },
    {
      pdf: '2.35.31', level: 'medium',
      q: 'The consonants of "DROVE" are arranged alphabetically and the vowels placed, in alphabetical order, between the pairs of consonants. What is fourth from the right?',
      options: ['D', 'E', 'R', 'O'], answer: 1,
      steps: ['Consonants D, R, V in order: D _ R _ V. Vowels E, O in order go in the gaps.', 'New word: D E R O V.', 'From the right: V(1), O(2), R(3), E(4) → E.'],
    },
  ],
});
