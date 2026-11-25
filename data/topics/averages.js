APT.addTopic({
  id: 'averages',
  title: 'Averages',
  tagline: 'Pour everything in one pile and share it fairly.',
  pdfTopics: ['7.10', '7.8', '7.55', '7.56', '7.90'],
  concepts: {
    story: [
      'Three friends have 2, 4 and 9 marbles. They pour them into one pile (15) and share equally: 5 each. That fair share is the <b>average</b>.',
      'It\'s like levelling water in glasses: the tall glass pours into the short ones until they\'re all equal.',
    ],
    memory: 'Sum = Average × Count. Most average questions are really about the sum.',
    formulas: [
      'Average = Sum / Count → <b>Sum = Average × Count</b>',
      'Consecutive numbers (any AP): average = (first + last)/2 = the middle term',
      'Two groups combined: (n1·a1 + n2·a2)/(n1 + n2)',
      'Average speed over equal distances at x and y = 2xy/(x + y)',
    ],
    tricks: [
      '<b>Guess and adjust</b>: pick a guess, add the differences from it, divide by the count, and correct the guess.',
      '<b>Someone joins or leaves</b>: their value = old average ± (change in average × new count).',
      '<b>Digits swapped</b> in one number: the sum changes by 9 × (difference of the digits).',
      '<b>Two groups with averages a and b</b> and combined average c: sizes are in the ratio (b − c) : (c − a).',
    ],
    patterns: [
      ['Average of consecutive numbers', 'Middle term'],
      ['A wrong number was used', 'Fix the sum, then divide'],
      ['Class averages combined', 'Trick 4 for the size ratio'],
      ['A person is added or replaced', 'Sum = average × count, before and after'],
    ],
  },
  questions: [
    {
      pdf: '7.10.2', level: 'easy',
      q: 'In a sequence of seven consecutive integers, the average of the first five is n. What is the average of all seven?',
      options: ['n', 'n + 1', 'k × n, where k depends on n', 'n + 7'], answer: 1,
      steps: ['Call the numbers a, a+1, …, a+6.', 'The first five average to their middle, a + 2 = n.', 'All seven average to a + 3 = n + 1.'],
    },
    {
      pdf: '7.10.4', level: 'medium',
      q: 'Class averages: X = 83, Y = 76, Z = 85. X and Y together average 79; Y and Z together average 81. What is the average of all three classes?',
      options: ['81', '81.5', '82', '85.5'], answer: 1,
      steps: [
        'X and Y: 83x + 76y = 79(x + y) → 4x = 3y.',
        'Y and Z: 76y + 85z = 81(y + z) → 4z = 5y.',
        'Take y = 12. Then x = 9 and z = 15.',
        'Total = 83×9 + 76×12 + 85×15 = 747 + 912 + 1275 = 2934. Students = 36.',
        'Average = 2934 ÷ 36 = 81.5.',
      ],
    },
    {
      pdf: '7.10.10', level: 'easy',
      q: 'Amol averaged 10 two-digit numbers but swapped the digits a and b of one of them. His average came out 1.8 too high. Find b − a.',
      options: null, answerText: '2', accept: ['2'],
      steps: ['The sum rose by 1.8 × 10 = 18.', 'Swapping digits changes a number by 9(b − a), so 9(b − a) = 18.', 'b − a = 2.'],
      trick: 'Swapped digits change the sum by 9 × difference.',
    },
    {
      pdf: '7.10.3', level: 'medium',
      q: 'A college has raised 75% of the money it needs, with an average donation of Rs 600 from the people asked so far. They are 60% of all the people it will ask. What average donation is needed from the rest?',
      options: ['Rs 300', 'Rs 250', 'Rs 400', 'Rs 500'], answer: 0,
      steps: [
        'Take 100 people in total. 60 have given 600 each = 36000.',
        '36000 is 75% of the need, so the need = 48000.',
        'Still needed: 12000 from 40 people = 300 each.',
      ],
    },
    {
      pdf: '7.3.6', level: 'easy',
      q: 'A husband and wife averaged 23 years of age when they married. Five years later they have a one-year-old child. What is the family\'s average age now?',
      options: ['29.3 years', '28.5 years', '23 years', '19 years'], answer: 3,
      steps: ['Couple\'s total then = 46. Five years later = 46 + 10 = 56.', 'Add the child: 57.', 'Average = 57 ÷ 3 = 19.'],
    },
    {
      pdf: '7.10.7', level: 'easy',
      q: 'A boy averages 10 two-digit numbers but writes one number "ab" as "ba". The average becomes 1.8 less than it should be. What is the difference between a and b?',
      options: ['4', '2', '6', '8'], answer: 1,
      steps: ['The sum fell by 1.8 × 10 = 18 = 9(a − b).', 'a − b = 2.'],
    },
  ],
});
