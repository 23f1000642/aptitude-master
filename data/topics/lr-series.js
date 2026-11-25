APT.addTopic({
  id: 'lr-series',
  section: 'reasoning',
  title: 'Number & Letter Series',
  tagline: 'Spot the hidden rule, then the next term is easy.',
  pdfTopics: ['2.23', '2.2', '2.35', '2.21', '2.20'],
  concepts: {
    story: [
      'A series is a line of kids where each one follows a secret rule: "add 2", or "the next square number", or two lines of kids taking turns.',
      'Your job is detective work: find the rule from the kids you can see, then use it to find the missing one.',
    ],
    memory: 'First write the differences. If they make no sense, try alternate terms, then squares/cubes.',
    extra: `<h2>Letter positions (memorise: EJOTY)</h2>
      <table class="mini-table"><tbody>
        <tr><th>A 1</th><th>E 5</th><th>J 10</th><th>O 15</th><th>T 20</th><th>Y 25</th></tr>
        <tr><td colspan="6">Opposite letters add to 27: A↔Z, B↔Y, C↔X, … M↔N</td></tr>
      </tbody></table>`,
    formulas: [
      '<b>Differences</b>: write term₂ − term₁, term₃ − term₂ … and look at that new line',
      '<b>Second differences</b>: if the differences grow steadily (2, 4, 6 …), look at their differences too',
      'Squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 · Cubes: 1, 8, 27, 64, 125, 216, 343',
      'n² ± 1 and n³ ± 1 are very common: 2, 5, 10, 17 … and 0, 7, 26, 63 …',
      'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37',
    ],
    tricks: [
      '<b>Up-down series</b> (22, 21, 23, 22 …) usually means two rules taking turns, like −1 then +2.',
      '<b>Split odd and even positions</b> when a series jumps around: 8, 43, 11, 41, ?, 39 is really 8, 11, ? and 43, 41, 39.',
      '<b>Letter groups</b>: check the 1st letters, 2nd letters and 3rd letters as three separate series.',
      '<b>Wrapping around</b>: after Z comes A again (+7 from U is B).',
      '<b>Wrong-term questions</b>: find the rule from most terms, and the one that breaks it is wrong.',
    ],
    patterns: [
      ['Numbers going steadily up or down', 'Differences'],
      ['Numbers jumping up and down', 'Split into alternate terms'],
      ['Numbers growing fast', 'Squares, cubes, or ×2'],
      ['Groups of letters (FRP, HPQ …)', 'Treat each letter position as its own series'],
      ['"Find the wrong term"', 'Find the rule, see which term breaks it'],
    ],
  },
  questions: [
    {
      pdf: '2.23.4', level: 'easy',
      q: 'Complete the series: 22, 21, 23, 22, 24, 23, ?',
      options: ['22', '24', '25', '26'], answer: 2,
      steps: ['The changes are −1, +2, −1, +2, −1 …', 'Next change is +2: 23 + 2 = 25.'],
      trick: 'Two rules taking turns.',
    },
    {
      pdf: '2.23.5', level: 'easy',
      q: 'Complete the series: 8, 43, 11, 41, ?, 39, 17',
      options: ['8', '14', '43', '44'], answer: 1,
      steps: ['Odd positions: 8, 11, ?, 17 → +3 each time, so ? = 14.', 'Even positions: 43, 41, 39 → −2 each time (it fits).'],
      trick: 'Split odd and even positions.',
    },
    {
      pdf: '2.23.7', level: 'easy',
      q: 'Choose the missing term: 72, 76, 73, 77, 74, ___, 75',
      options: ['70', '71', '75', '78'], answer: 3,
      steps: ['Pattern: +4, −3, +4, −3, …', '74 + 4 = 78, then 78 − 3 = 75 ✓.'],
    },
    {
      pdf: '2.23.1', level: 'medium',
      q: 'Which pair of numbers comes next? 17 17 34 20 20 31 23 …',
      options: ['26 23', '23 33', '27 28', '23 28'], answer: 3,
      steps: [
        'Read it as repeating blocks of three: (17, 17, 34), (20, 20, 31), (23, ?, ?).',
        'The repeated number goes 17, 20, 23 → so the next number is 23 again.',
        'The third number goes 34, 31 → −3 → 28.',
        'Next pair: 23, 28.',
      ],
    },
    {
      pdf: '2.23.3', level: 'medium',
      q: 'Which pair comes next? 61 57 50 61 43 36 61 …',
      options: ['29 61', '27 20', '22 15', '29 22'], answer: 3,
      steps: ['61 is just a repeating "visitor" every third place. Remove it.', 'What is left: 57, 50, 43, 36 → −7 each time.', 'Next two: 29, 22.'],
    },
    {
      pdf: '2.35.10', level: 'easy',
      q: 'Fill in the blank: 50, 49, 46, 41, 34, ___',
      options: ['32', '25', '21', '19'], answer: 1,
      steps: ['Differences: −1, −3, −5, −7 (odd numbers).', 'Next difference −9: 34 − 9 = 25.'],
    },
    {
      pdf: '2.35.20', level: 'medium',
      q: 'Find the wrong number: 125, 127, 130, 135, 142, 153, 165',
      options: ['130', '142', '153', '165'], answer: 3,
      steps: ['Differences: 2, 3, 5, 7, 11, 12.', '2, 3, 5, 7, 11 are primes; the next prime is 13, not 12.', 'So the last term should be 153 + 13 = 166. 165 is wrong.'],
    },
    {
      pdf: '2.35.18', level: 'medium',
      q: 'Find the wrong term and the number that should replace it: 2, 9, 28, 65, 126, 216, 344',
      options: ['38', '217', '356', '66'], answer: 1,
      steps: ['2 = 1³+1, 9 = 2³+1, 28 = 3³+1, 65 = 4³+1, 126 = 5³+1.', 'Next should be 6³+1 = 217, not 216.', '(Check: 7³+1 = 344 ✓.)'],
      trick: 'n³ + 1.',
    },
    {
      pdf: '2.19.138', level: 'easy',
      q: 'Select the missing number: 0, 7, 26, 63, ?',
      options: ['124', '98', '148', '188'], answer: 0,
      steps: ['0 = 1³−1, 7 = 2³−1, 26 = 3³−1, 63 = 4³−1.', 'Next: 5³ − 1 = 124.'],
    },
    {
      pdf: '2.2.1', level: 'medium',
      q: 'Complete the series: FRP, HPQ, JNS, LLV, ?',
      options: ['PKZ', 'NJZ', 'OJZ', 'MKZ'], answer: 1,
      steps: [
        '1st letters: F, H, J, L → +2 → N.',
        '2nd letters: R, P, N, L → −2 → J.',
        '3rd letters: P, Q, S, V → +1, +2, +3 → +4 → Z.',
        'Answer: NJZ.',
      ],
      trick: 'Each letter position is its own series.',
    },
    {
      pdf: '2.2.2', level: 'easy',
      q: 'Complete the series: Z15A, W13C, ?, Q9G, N7I',
      options: ['T12F', 'R11F', 'T11E', 'R13D'], answer: 2,
      steps: ['First letter: Z, W, T, Q, N → −3.', 'Number: 15, 13, 11, 9, 7 → −2.', 'Last letter: A, C, E, G, I → +2.', 'Missing term: T11E.'],
    },
    {
      pdf: '2.2.9', level: 'medium',
      q: 'What comes next? CYD, FTH, IOL, LJP, ?',
      options: ['OFT', 'LET', 'OEK', 'OET'], answer: 3,
      steps: ['1st letters: C, F, I, L → +3 → O.', '2nd letters: Y, T, O, J → −5 → E.', '3rd letters: D, H, L, P → +4 → T.', 'Answer: OET.'],
    },
    {
      pdf: '2.35.24', level: 'medium',
      q: 'Find the missing term: C, F, J, O, ?, B',
      options: ['S', 'T', 'U', 'V'], answer: 2,
      steps: ['C(3) → F(6) → J(10) → O(15): jumps of +3, +4, +5.', 'Next jump +6: 15 + 6 = 21 = U.', 'Check: U + 7 = 28, which wraps to 2 = B ✓.'],
      trick: 'Wrap around after Z.',
    },
  ],
});
