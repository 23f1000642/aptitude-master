APT.addTopic({
  id: 'percentage',
  title: 'Percentage',
  tagline: 'Out of 100: squares of a chocolate bar.',
  pdfTopics: ['7.64'],
  concepts: {
    story: [
      '"Per cent" means "out of 100". Score 45 out of 100 and you scored 45%.',
      'Picture a chocolate bar with 100 small squares. 25% means you get 25 squares, which is a quarter of the bar. Every percentage question really asks: <b>how many squares out of 100?</b>',
    ],
    memory: 'Change percentages into multipliers: +20% means ×1.2, −25% means ×0.75.',
    extra: `<h2>Fraction ↔ percent (memorise this)</h2>
      <table class="mini-table"><tbody>
        <tr><th>1/2</th><td>50%</td><th>1/7</th><td>14.28%</td></tr>
        <tr><th>1/3</th><td>33.33%</td><th>1/8</th><td>12.5%</td></tr>
        <tr><th>1/4</th><td>25%</td><th>1/9</th><td>11.11%</td></tr>
        <tr><th>1/5</th><td>20%</td><th>1/10</th><td>10%</td></tr>
        <tr><th>1/6</th><td>16.66%</td><th>1/11</th><td>9.09%</td></tr>
      </tbody></table>`,
    formulas: [
      '% change = (new − old) / old × 100',
      'Increase by r% → × (1 + r/100). Decrease by r% → × (1 − r/100)',
      '<b>Two changes in a row</b> (a% then b%): net = a + b + ab/100 (use minus signs for decreases)',
      'Price up r%, to keep spending the same, cut use by r/(100 + r) × 100%',
      'Population after n years = P(1 + r/100)<sup>n</sup>',
    ],
    tricks: [
      '<b>Chain multipliers</b> instead of doing each step separately.',
      '<b>Same % up then down</b> (x% up, x% down) always gives a <b>loss of x²/100 %</b>.',
      '<b>Take 100</b> as the starting value when nothing is given.',
      '<b>"At least how many have all"</b> = 100 − (sum of each group\'s "don\'t have" %).',
      '<b>1000% inflation</b> means ×11, not ×10 (the original 100% plus 1000% more).',
    ],
    patterns: [
      ['Successive increase/decrease', 'a + b + ab/100, or chain the multipliers'],
      ['Elections, invalid votes, majority', 'Take total votes = 100 and work in %'],
      ['Marks in a ratio with a pass %', 'Turn the ratio into actual marks'],
      ['"At least … have all"', 'Trick 4'],
      ['Money split between items', 'Take the total money = LCM of the prices'],
    ],
  },
  questions: [
    {
      pdf: '7.64.3', level: 'easy',
      q: 'The rate of inflation was 1000%. What will be the cost of an article, which costs 6 units of currency now, two years from now?',
      options: ['666', '660', '720', '726'], answer: 3,
      steps: [
        '1000% inflation: the price grows by 10 times its value, so it becomes 11 times.',
        'After year 1: 6 × 11 = 66. After year 2: 66 × 11 = 726.',
      ],
      trick: 'Trick 5: 1000% means ×11.',
    },
    {
      pdf: '7.64.14', level: 'medium',
      q: '70% of employees have VCD players, 75% have microwave ovens, 80% have ACs and 85% have washing machines. At least what percentage of employees has all four?',
      options: ['15%', '5%', '10%', 'Cannot be determined'], answer: 2,
      steps: [
        'People missing each item: 30%, 25%, 20%, 15%. Total = 90%.',
        'In the worst case these are all different people, so 90% miss at least one item.',
        'At least 100 − 90 = 10% have everything.',
      ],
      trick: 'Trick 4.',
    },
    {
      pdf: '7.64.2', level: 'medium',
      q: 'Two-fifths of voters promise to vote for P and the rest for Q. On the last day, 15% of P\'s voters and 25% of Q\'s voters break their promise. P loses by 2 votes. How many voters are there?',
      options: ['100', '110', '90', '95'], answer: 0,
      steps: [
        'Let total = V. P was promised 0.4V and Q 0.6V.',
        'P gets 85% of 0.4V plus the 25% of 0.6V who left Q: 0.34V + 0.15V = 0.49V.',
        'Q gets the rest: 0.51V.',
        'The difference is 0.02V = 2, so V = 100.',
      ],
    },
    {
      pdf: '7.64.11', level: 'medium',
      q: 'A student gets 60% overall in five subjects, with marks in the ratio 10 : 9 : 8 : 7 : 6. The pass mark is 50% and every subject has the same maximum. In how many subjects did he pass?',
      options: ['2', '3', '4', '5'], answer: 2,
      steps: [
        'Let the maximum per subject be 100. Total marks scored = 60% of 500 = 300.',
        'The ratio parts add up to 40, so one part = 300/40 = 7.5.',
        'Marks: 75, 67.5, 60, 52.5, 45.',
        'Four subjects are at 50 or above.',
      ],
    },
    {
      pdf: '7.64.20', level: 'easy',
      q: 'A person can buy 50 oranges or 40 mangoes with his money. He keeps 10% for taxi fare, buys 20 mangoes, and spends the rest on oranges. How many oranges does he buy?',
      options: ['36', '40', '15', '20'], answer: 3,
      steps: [
        'Take money = 200 (LCM of 50 and 40). Then 1 orange = 4 and 1 mango = 5.',
        'Keep 10% for taxi: 200 − 20 = 180 left.',
        '20 mangoes cost 100, leaving 80.',
        '80 ÷ 4 = 20 oranges.',
      ],
      trick: 'Pick an easy total (LCM).',
    },
    {
      pdf: '7.71.3', level: 'easy',
      q: 'The price of a car rises by 30% while its sales fall by 20%. What is the percentage change in total revenue?',
      options: ['−4', '−2', '+4', '0'], answer: 2,
      steps: [
        'Revenue = price × quantity.',
        'Chain the multipliers: 1.30 × 0.80 = 1.04.',
        'So revenue goes up 4%. (Formula check: 30 − 20 − 600/100 = 4.)',
      ],
      trick: 'Successive change a + b + ab/100.',
    },
  ],
});
