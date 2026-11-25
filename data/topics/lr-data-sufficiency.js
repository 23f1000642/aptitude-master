APT.addTopic({
  id: 'lr-data-sufficiency',
  section: 'reasoning',
  title: 'Data Sufficiency',
  tagline: 'Don\'t solve it, just decide whether you COULD.',
  pdfTopics: ['2.38', '2.10'],
  concepts: {
    story: [
      'Your friend asks, "How old is my brother?" and gives two hints. You don\'t need to find the age. You only need to say which hints are enough to find it.',
      'It\'s like checking whether you have all the ingredients before cooking, without actually cooking.',
    ],
    memory: 'Test statement I alone, then II alone, then both together. Stop as soon as you know.',
    extra: `<h2>The usual answer choices</h2>
      <table class="mini-table"><tbody>
        <tr><th>1 / A</th><td>Only ONE statement alone is enough (the question tells you which)</td></tr>
        <tr><th>2 / D</th><td>EITHER statement alone is enough</td></tr>
        <tr><th>3 / C</th><td>Both TOGETHER are needed</td></tr>
        <tr><th>4 / E</th><td>Even both together are NOT enough</td></tr>
      </tbody></table>
      <p class="muted">Each question uses its own lettering, so read the choices carefully.</p>`,
    formulas: [
      '"Enough" means it gives exactly ONE answer, not two possible values',
      'A yes/no question is answered if the data always gives the same yes, or always the same no',
      'Two unknowns usually need two separate facts',
      'A ratio alone never gives an actual number',
    ],
    tricks: [
      '<b>Don\'t calculate the final number.</b> Only check whether it\'s possible.',
      'Watch for <b>two solutions</b> (x² = 16 gives x = 4 or −4). That makes a statement not enough.',
      'Information that doesn\'t mention what is asked (the dealer\'s total stock) usually doesn\'t help.',
      'Test with numbers: pick values that obey the statement and see if the answer changes.',
    ],
    patterns: [
      ['Is n even / odd / positive?', 'Test examples that fit the statement'],
      ['Find a value', 'Does it give exactly one value?'],
      ['Ratio given, total asked', 'Need one actual quantity too'],
      ['Geometry (area, sides)', 'One measurement usually fixes the shape'],
    ],
  },
  questions: [
    {
      pdf: '2.38.20', level: 'easy',
      q: 'If n is an integer, is n even? (1) 2n is an even integer. (2) n − 1 is an odd integer.',
      options: ['(1) alone is sufficient, (2) alone is not', '(2) alone is sufficient, (1) alone is not', 'Both together are sufficient, neither alone', 'Each alone is sufficient'], answer: 1,
      steps: ['(1): 2n is even for every integer n (2×3 = 6, 2×4 = 8). It tells us nothing. ✗', '(2): n − 1 odd means n is even. ✓', 'Answer: (2) alone.'],
    },
    {
      pdf: '2.38.16', level: 'easy',
      q: 'A square is inscribed in a circle. What is the difference between the circle\'s area and the square\'s? I. The circle\'s diameter is 25√2 cm. II. The square\'s side is 25 cm. (1 = one alone, 2 = either alone, 3 = both needed, 4 = not enough)',
      options: ['1', '2', '3', '4'], answer: 1,
      steps: ['For an inscribed square, the diagonal = the diameter.', 'I: diameter → circle area, and diagonal → side → square area. ✓', 'II: side → diagonal → diameter → circle area. ✓', 'Either alone is enough → 2.'],
    },
    {
      pdf: '2.38.13', level: 'medium',
      q: 'What is the value of X? I. X and Y are unequal even integers less than 10, and X/Y is an odd integer. II. X and Y are even integers less than 10, and XY = 12. (1 = one alone, 2 = either alone, 3 = both needed, 4 = not enough)',
      options: ['1', '2', '3', '4'], answer: 0,
      steps: [
        'I: evens below 10 are 2, 4, 6, 8. X/Y must be odd and more than 1 (unequal): only 6/2 = 3. So X = 6. ✓',
        'II: even pairs with product 12: (2, 6) or (6, 2), so X could be 2 or 6. ✗',
        'Only statement I works → 1.',
      ],
    },
    {
      pdf: '2.38.17', level: 'easy',
      q: 'Ram and Gopal bought apples from a wholesaler. How many apples did they buy? I. Ram bought half as many as Gopal. II. The dealer had a stock of 500 apples. (1 = one alone, 2 = either alone, 3 = both needed, 4 = not enough)',
      options: ['1', '2', '3', '4'], answer: 3,
      steps: ['I gives only a ratio (1 : 2), not a number.', 'II gives the dealer\'s stock, not what they bought.', 'Even together, the total can\'t be found → 4.'],
      trick: 'A ratio alone never gives a number.',
    },
    {
      pdf: '2.38.14', level: 'medium',
      q: 'A boat ferried 1500 passengers across a river in twelve hours. How many round trips did it make? I. The boat can carry 200 passengers at a time. II. Each way takes 40 minutes, with 20 minutes of waiting at each end. (1 = one alone, 2 = either alone, 3 = both needed, 4 = not enough)',
      options: ['1', '2', '3', '4'], answer: 0,
      steps: [
        'II: one round trip = 40 + 20 + 40 + 20 = 120 minutes. In 12 hours that\'s 6 round trips. ✓',
        'I: capacity 200 doesn\'t say how full each trip was, so the trips can\'t be counted. ✗',
        'Only II works → 1.',
      ],
    },
    {
      pdf: '2.38.21', level: 'medium',
      q: 'What is the value of x? (1) x² − 5x + 4 = 0. (2) x is not prime.',
      options: ['(1) alone is sufficient', '(2) alone is sufficient', 'Both together are sufficient, neither alone', 'Both together are NOT sufficient'], answer: 3,
      steps: ['(1): (x − 1)(x − 4) = 0, so x = 1 or 4. Two values. ✗', '(2): lots of numbers aren\'t prime. ✗', 'Together: 1 and 4 are both not prime, so x is still 1 or 4. ✗', 'Not sufficient even together.'],
      trick: 'Watch for two solutions.',
    },
  ],
});
