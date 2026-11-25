APT.addTopic({
  id: 'lr-seating',
  section: 'reasoning',
  title: 'Seating Arrangement',
  tagline: 'Round tables and rows: place the sure people first.',
  pdfTopics: ['2.32', '2.31', '2.6'],
  concepts: {
    story: [
      'Imagine a birthday party round a table. Every clue is a small rule: "Amar sits between Rakesh and Sarv". Place the people you are sure about first, then squeeze the others into the empty chairs.',
      'The tricky part is left and right. If everyone faces the centre, your left is clockwise. If they face outward, it flips.',
    ],
    memory: 'Facing the centre: LEFT = clockwise, RIGHT = anticlockwise.',
    extra: `<pre class="diagram">  Six people facing the centre (seats numbered clockwise)

            1
       6         2        Person at 1: left neighbour = 2
                          right neighbour = 6
       5         3        opposite = 4
            4</pre>`,
    formulas: [
      'In a circle of n, "k-th to the left" = k seats clockwise (when facing the centre)',
      'Opposite seat in a circle of n (n even) = n/2 seats away',
      'In a row facing North: your left is the West end, your right is the East end',
      'Square table, 2 per side: the opposite seat is 4 seats away',
    ],
    tricks: [
      'Start with the clue that <b>fixes</b> someone (opposite, immediate right) rather than a vague one.',
      'Pin the first person anywhere in a circle; only relative positions matter.',
      'When two cases are possible, draw both and cross out the one a later clue breaks.',
      'Write the final order once, clockwise, then answer every sub-question from it.',
    ],
    patterns: [
      ['Circle, everyone facing the centre', 'Left = clockwise'],
      ['"Second to the left of …"', 'Move 2 seats clockwise'],
      ['"Between A and B"', 'A and B on either side'],
      ['Several questions on one puzzle', 'Solve once, write the order, answer all'],
    ],
  },
  questions: [
    {
      pdf: '2.31.4', level: 'easy',
      q: 'A, B, C, D, E, F sit around a table facing the centre. A is opposite B. D is immediately to the right of A and to the left of C. E is not next to A. F is the sixth person. Who is sitting to the left of A?',
      options: ['E', 'F', 'D', 'B'], answer: 1,
      steps: [
        'Number the seats 0–5 clockwise and put A at 0. Opposite means B is at 3.',
        'D is to A\'s right (anticlockwise) → seat 5. D is to C\'s left, so C is to D\'s right → seat 4.',
        'Seats 1 and 2 are free. E can\'t be next to A (seat 1), so E is at 2 and F at 1.',
        'A\'s left is clockwise → seat 1 → F.',
      ],
    },
    {
      pdf: '2.32.12', level: 'medium',
      q: 'Six people sit in a circle facing the centre. Vijay is to the left of Sudhir. Amar is between Rakesh and Sarv. Neerav is second to the left of Amar. Who is second to the right of Vijay?',
      options: ['Neerav', 'Rakesh', 'Sarv', 'Cannot be determined'], answer: 0,
      steps: [
        'Put Amar at seat 0 (seats clockwise). Rakesh and Sarv take seats 1 and 5.',
        'Neerav is second to Amar\'s left (2 clockwise) → seat 2.',
        'Seats 3 and 4 are left for Vijay and Sudhir. Vijay is immediately left (clockwise) of Sudhir → Sudhir 3, Vijay 4.',
        'Second to Vijay\'s right = 2 seats anticlockwise from 4 → seat 2 → Neerav.',
      ],
    },
    {
      pdf: '2.31.6', level: 'hard',
      q: 'A, B, C, D, E, F, G, H sit around a circular table facing the centre. F is fourth to the left of A and second to the right of C. B is second to the left of A, and A is to the immediate right of G. E, who is not an immediate neighbour of B, is fourth to the left of D. Who is to the immediate right of F?',
      options: ['D', 'H', 'B', 'C', 'None of these'], answer: 0,
      steps: [
        'Seats 0–7 clockwise; A at 0. F is 4th to A\'s left → seat 4.',
        'A is immediately right of G, so G is to A\'s left → seat 1. B is 2nd to A\'s left → seat 2.',
        'F is 2nd to C\'s right, so C = F + 2 clockwise → seat 6.',
        'Seats 3, 5, 7 are left for D, E, H. E = D + 4 clockwise, so D and E are 3 and 7. E isn\'t next to B (seat 2) → E = 7, D = 3. H = 5.',
        'Order clockwise: A, G, B, D, F, H, C, E. F\'s right (anticlockwise) is seat 3 → D.',
      ],
    },
    {
      level: 'medium',
      q: '(Extra practice) Five friends P, Q, R, S, T sit in a row facing North. R is in the middle. P is at the left end. T is to the immediate right of R. Q is not next to P. Who is second from the right end?',
      options: ['Q', 'S', 'T', 'R'], answer: 2,
      steps: ['Seats 1–5 from left to right: P = 1, R = 3, T = 4.', 'Q and S share seats 2 and 5. Q is not next to P, so Q = 5 and S = 2.', 'Row: P S R T Q. Second from the right = T.'],
    },
  ],
});
