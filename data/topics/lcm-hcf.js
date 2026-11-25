APT.addTopic({
  id: 'lcm-hcf',
  title: 'LCM & HCF',
  tagline: 'Bells ringing together and cutting things into equal pieces.',
  pdfTopics: ['7.50'],
  concepts: {
    story: [
      'Two bells ring, one every 4 minutes and one every 6 minutes. When do they ring together again? At 12 minutes. That is the <b>LCM</b> (Least Common Multiple): the first time both meet.',
      'You have 12 apples and 18 bananas and want equal bags with nothing left over. The biggest bag size is 6. That is the <b>HCF</b> (Highest Common Factor): the biggest equal cut.',
    ],
    memory: '"Meet again" = LCM. "Biggest equal pieces" = HCF.',
    formulas: [
      'HCF × LCM = product of the two numbers (only for two numbers)',
      'LCM of fractions = LCM of numerators / HCF of denominators',
      'HCF of fractions = HCF of numerators / LCM of denominators',
      'If HCF = H, write the numbers as H·x and H·y with x, y co-prime. Then LCM = H·x·y',
    ],
    tricks: [
      '<b>HCF always divides LCM.</b> If it doesn\'t, no such pair exists.',
      '<b>Pairs with a given HCF and LCM</b>: work out LCM ÷ HCF, then count the ways to split it into two co-prime parts.',
      '<b>Same remainder r</b> from divisors a, b, c: the number = k × LCM(a, b, c) + r.',
      '<b>Flashing lights</b>: change "times per minute" into "one flash every ___ seconds" first.',
    ],
    patterns: [
      ['Bells, lights or runners meeting again', 'LCM of the intervals'],
      ['Largest tile, biggest container, equal groups', 'HCF'],
      ['HCF + LCM + one number given, find the other', 'Other = HCF × LCM ÷ given number'],
      ['"How many pairs have HCF h and LCM l"', 'Trick 2'],
    ],
  },
  questions: [
    {
      pdf: '7.50.1', level: 'easy',
      q: 'Three bells chime every 18, 24 and 32 minutes. They start together. After how long will they chime together again?',
      options: ['2 hours 24 minutes', '4 hours 48 minutes', '1 hour 36 minutes', '5 hours'], answer: 1,
      steps: [
        'Prime factors: 18 = 2 × 3², 24 = 2³ × 3, 32 = 2⁵.',
        'LCM takes the highest power of each prime: 2⁵ × 3² = 288 minutes.',
        '288 minutes = 4 hours 48 minutes.',
      ],
    },
    {
      pdf: '7.50.2', level: 'easy',
      q: 'A red light flashes 3 times per minute and a green light flashes 5 times in two minutes. If they start together, how many times do they flash together in an hour?',
      options: ['30', '24', '20', '60'], answer: 0,
      steps: [
        'Red: 3 flashes a minute means one flash every 20 seconds.',
        'Green: 5 flashes in 120 seconds means one flash every 24 seconds.',
        'LCM(20, 24) = 120 seconds, so they flash together every 2 minutes.',
        'In 60 minutes: 60 ÷ 2 = 30 times.',
      ],
      trick: 'Convert rates into intervals first (trick 4).',
    },
    {
      pdf: '7.50.8', level: 'medium',
      q: 'The LCM of two numbers is 45 times their HCF. The sum of the LCM and HCF is 1150, and one number is 125. What is the other number?',
      options: ['256', '225', '250', '255'], answer: 1,
      steps: [
        'Let HCF = H. Then LCM = 45H, so H + 45H = 1150 and H = 25.',
        'LCM = 45 × 25 = 1125.',
        'Other number = HCF × LCM ÷ 125 = 25 × 1125 ÷ 125 = 225.',
      ],
    },
    {
      pdf: '7.50.9', level: 'easy',
      q: 'About the number of pairs that have 16 as their HCF and 136 as their LCM, we can definitely say:',
      options: ['Only one such pair exists', 'Only two such pairs exist', 'Many such pairs exist', 'No such pair exists'], answer: 3,
      steps: [
        'The HCF must divide the LCM.',
        '136 ÷ 16 = 8.5, which is not a whole number.',
        'So no such pair exists.',
      ],
      trick: 'HCF always divides LCM (trick 1).',
    },
    {
      pdf: '7.50.5', level: 'medium',
      q: 'How many pairs of numbers have LCM 800 and HCF 20?',
      options: null, answerText: '2', accept: ['2', 'two', '2 pairs'],
      steps: [
        'Write the numbers as 20x and 20y with x, y co-prime. Then 20xy = 800, so xy = 40.',
        'Co-prime splits of 40: (1, 40) and (5, 8). (2 × 20 and 4 × 10 share factors.)',
        'Pairs: (20, 800) and (100, 160). Answer: 2 pairs.',
      ],
    },
    {
      pdf: '7.50.6', level: 'hard',
      q: 'What is the largest 4-digit number that can be added to 7249 so that the result is divisible by each of 12, 14, 21, 33 and 54?',
      options: ['9123', '9383', '8727', 'None of these'], answer: 1,
      steps: [
        'LCM(12, 14, 21, 33, 54) = 2² × 3³ × 7 × 11 = 8316.',
        'We need 7249 + x to be a multiple of 8316, with x at most 9999. So 7249 + x ≤ 17248.',
        'The biggest multiple of 8316 in range is 2 × 8316 = 16632.',
        'x = 16632 − 7249 = 9383, which is a 4-digit number. ✓',
      ],
    },
  ],
});
