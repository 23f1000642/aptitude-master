APT.addTopic({
  id: 'lr-puzzles',
  section: 'reasoning',
  title: 'Puzzles, Days & Arrangements',
  tagline: 'Count carefully, write everything down, never guess.',
  pdfTopics: ['2.18', '2.19', '2.5', '2.24', '2.0', '2.9', '8.1', '8.2', '8.3', '8.4'],
  concepts: {
    story: [
      'Puzzles look scary because they hide simple steps inside long sentences. Break a long sentence into small pieces, and do the piece at the very end (the "innermost" one) first.',
      'For letters, numbers and symbols in a row, write the row down with position numbers under each item. Then "5th to the right of the 19th from the right" becomes simple counting.',
    ],
    memory: 'Inner clue first. Write positions under the row. Count, never guess.',
    formulas: [
      'k-th from the right in a row of n = (n − k + 1)-th from the left',
      'm to the right of position p = position p + m (to the left = p − m)',
      'Days: add the days and take the remainder by 7 (Monday + 9 days = Monday + 2 = Wednesday)',
      '"Immediately preceded by X and followed by Y": check each item with its two neighbours',
    ],
    tricks: [
      '<b>Nested clues</b> ("three days after the day two days after …"): start from the last phrase and work outwards.',
      'For reversing part of a row, rewrite the new row fully before counting.',
      'Rearranging digits: write the old and new numbers one above the other and compare column by column.',
      'If an answer isn\'t among the options, re-check once. If it\'s still missing, "None of these" is the answer.',
    ],
    patterns: [
      ['Long chain of "the day after the day …"', 'Innermost phrase first'],
      ['Row of letters, digits and symbols', 'Number every position'],
      ['Rearrange digits or letters', 'Compare old vs new, column by column'],
      ['Grid / scheduling puzzles', 'Make a table and fill in the fixed clues first'],
    ],
  },
  questions: [
    {
      pdf: '2.5.1', level: 'medium',
      q: 'What day comes three days after the day which comes two days after the day which comes immediately after the day which comes two days after Monday?',
      options: ['Sunday', 'Tuesday', 'Thursday', 'Saturday'], answer: 1,
      steps: [
        'Innermost: two days after Monday = Wednesday.',
        'Immediately after that = Thursday.',
        'Two days after Thursday = Saturday.',
        'Three days after Saturday = Tuesday.',
      ],
      keyNote: 'The PDF key says C (Thursday), but counting day by day gives Tuesday. We think the key is a misprint.',
    },
    {
      pdf: '2.19.146', level: 'easy',
      q: 'How many digits of the number 837912 stay in the same position after the digits are rearranged in descending order (left to right)?',
      options: ['None', 'One', 'Two', 'Three', 'More than three'], answer: 1,
      steps: ['Descending order: 987321.', 'Compare: 8/9, 3/8, 7/7 ✓, 9/3, 1/2, 2/1.', 'Only the 7 stays → one digit.'],
      trick: 'Compare column by column.',
    },
    {
      pdf: '2.23.18', level: 'easy',
      q: 'After reversing the digits of each number, what is the middle digit of the middle number? 389 675 493 728 536',
      options: ['3', '2', '8', '9'], answer: 3,
      steps: ['Reversed: 983, 576, 394, 827, 635.', 'The middle (3rd) number is 394. Its middle digit is 9.'],
    },
    {
      pdf: '2.2.10', level: 'medium',
      q: 'The second half of the English alphabet (N to Z) is reversed. Which letter is sixth to the right of the eighteenth letter from the left?',
      options: ['X', 'P', 'O', 'N'], answer: 1,
      steps: [
        'New alphabet: A … M stays in positions 1–13; positions 14–26 become Z, Y, X, W, V, U, T, S, R, Q, P, O, N.',
        'Sixth to the right of position 18 = position 24.',
        'Position 24: 14 Z, 15 Y, 16 X, 17 W, 18 V, 19 U, 20 T, 21 S, 22 R, 23 Q, 24 P → P.',
      ],
    },
    {
      pdf: '2.35.41', level: 'medium',
      q: 'Arrangement: R @ 2 9 T V A Y 5 © # J 1 P 8 Q $ E 3 * H % 6 W 4 I δ U Z. Which element is fifth to the right of the nineteenth element from the right end?',
      options: ['P', 'V', 'W', '8', 'None of these'], answer: 4,
      steps: [
        'There are 29 elements. 19th from the right = (29 − 19 + 1) = 11th from the left = #.',
        'Fifth to its right = 16th from the left = Q.',
        'Q is not an option → None of these.',
      ],
    },
    {
      pdf: '2.35.45', level: 'medium',
      q: 'Same arrangement: R @ 2 9 T V A Y 5 © # J 1 P 8 Q $ E 3 * H % 6 W 4 I δ U Z. If the last eighteen elements are reversed, which will be seventeenth from the left?',
      options: ['E', 'P', 'W', '6', 'None of these'], answer: 2,
      steps: [
        'The first 11 elements (R … #) stay. The last 18 (J … Z) are reversed: Z U δ I 4 W 6 % H * 3 E $ Q 8 P 1 J.',
        '17th from the left = 6th of the reversed part = W.',
      ],
      trick: 'Rewrite the new row before counting.',
    },
    {
      level: 'easy',
      q: '(Extra practice) If the day before yesterday was Thursday, what day will it be the day after tomorrow?',
      options: ['Sunday', 'Monday', 'Tuesday', 'Saturday'], answer: 1,
      steps: ['Day before yesterday = Thursday, so yesterday = Friday and today = Saturday.', 'Tomorrow = Sunday, so the day after tomorrow = Monday.'],
    },
  ],
});
