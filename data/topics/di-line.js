APT.addTopic({
  id: 'di-line',
  section: 'di',
  title: 'Line Graphs & Scatter Plots',
  tagline: 'Up means increase, down means decrease. Count the turns.',
  pdfTopics: ['1.4', '1.6'],
  concepts: {
    story: [
      'A line graph is a hill walk. Each point is where you stand in a year; going uphill means the value grew, downhill means it fell.',
      'A scatter plot is a map of dots. With a "break-even" line drawn across it, a dot far above the line is a big winner and a dot below it is a loser.',
    ],
    memory: 'Write the values from the graph in a small table first. Then answer from the table.',
    formulas: [
      'Net change over a period = last value − first value (ignore the ups and downs in between)',
      '"Decline for two or more consecutive years" = two drops in a row',
      'Stock = previous stock + added − removed (for "in operation" questions)',
      'On an Income vs Expenditure plot: savings = vertical distance of the dot above the Income = Expenditure line',
    ],
    tricks: [
      '<b>Make a mini table</b> from the graph before answering. It stops you misreading lines that cross.',
      'Mark each year with ↑ or ↓ per line. Patterns like "↓ then ↑" are easy to count after that.',
      'For stock questions, write one equation per year and solve year by year from the earliest.',
      'In scatter plots, compare <b>distance from the diagonal</b>, not height alone.',
    ],
    patterns: [
      ['Net increase/decrease over the period', 'Compare only the first and last points'],
      ['"Two or more consecutive declines"', 'Look for ↓↓ in the arrows'],
      ['"An increase right after a decline"', 'Count ↓↑ pairs'],
      ['Items in operation, bought, disposed', 'End stock = start + bought − disposed'],
    ],
  },
  questions: [
    {
      pdf: '1.4.14', level: 'easy', figures: ['5555.jpg'],
      q: 'During 1996–2002, how many commodities showed a net overall increase and how many a net overall decrease?',
      options: ['3 and 3', '2 and 4', '4 and 2', '5 and 1'], answer: 2,
      steps: [
        'Compare 1996 with 2002 only.',
        'Rice 12 → 13 ↑. Dal 33 → 31 ↓. Edible oil 68 → 60 ↓. Egg 23 → 26 ↑. Chillies 48 → 51 ↑. Onion 9 → 19 ↑.',
        'Increase: 4. Decrease: 2.',
      ],
      trick: 'Net change = last − first.',
    },
    {
      pdf: '1.4.15', level: 'medium', figures: ['5555.jpg'],
      q: 'How many commodities had a price decline for two or more consecutive years?',
      options: ['2', '3', '4', '5'], answer: 3,
      steps: [
        'Look for two drops in a row:',
        'Rice: 14 → 13 → 12 (1999–2001) ✓. Dal: 41 → 34 → 29 ✓. Egg: 29 → 28 → 26 ✓.',
        'Chillies: 69 → 50 → 41 ✓. Onion: 18 → 17 → 10 ✓.',
        'Edible oil: its drops (1997, 2000) are single drops ✗.',
        'Answer: 5.',
      ],
    },
    {
      pdf: '1.4.16', level: 'medium', figures: ['5555.jpg'],
      q: 'For which commodities did a price increase immediately follow a price decline only once in this period?',
      options: ['Rice, Edible oil and Dal', 'Egg and Dal', 'Onion only', 'Egg and Onion'], answer: 3,
      steps: [
        'Count "↓ then ↑" pairs.',
        'Rice 2 (1998, 2002). Dal 2 (1998, 2001). Edible oil 2 (1998, 2001). Chillies 2 (1998, 2001).',
        'Egg: 25 → 23 → 26 once only. Onion: 17 → 10 → 13 once only.',
        'Egg and Onion.',
      ],
    },
    {
      pdf: '1.4.33', level: 'medium', figures: ['5760.jpg'],
      q: 'Purana and Naya mixer-grinders (graph: number in operation at the end of 1995–2000, points 1–6). For both brands, 20% of those bought in a year are thrown away exactly two years later. Naya was introduced in 1997. How many Naya mixer-grinders were bought in 1999?',
      options: ['44', '50', '55', '64'], answer: 1,
      steps: [
        'Naya in operation: 1997 = 30, 1998 = 80, 1999 = 124.',
        '1997: bought 30. 1998: 80 = 30 + bought → 50 bought.',
        '1999: 20% of 1997\'s purchase (6) is thrown away. 124 = 80 + bought − 6 → bought = 50.',
      ],
      trick: 'End stock = start + bought − disposed.',
    },
    {
      pdf: '1.4.34', level: 'medium', figures: ['5760.jpg'],
      q: 'How many Naya mixer-grinders had been disposed of by the end of 2000?',
      options: ['10', '16', '22', 'Cannot be determined'], answer: 1,
      steps: [
        '1999: 20% of the 30 bought in 1997 = 6.',
        '2000: 20% of the 50 bought in 1998 = 10. (Check: 134 = 124 + 20 − 10, so 20 were bought in 2000.)',
        'Total disposed = 6 + 10 = 16.',
      ],
    },
    {
      pdf: '1.4.36', level: 'hard', figures: ['5785.jpg'],
      q: 'It is known that 10 Purana mixer-grinders were disposed of in 1997. How many Purana mixer-grinders were bought in 1999?',
      options: ['20', '23', '50', 'Cannot be determined'], answer: 0,
      steps: [
        'Purana in operation: 1996 = 162, 1997 = 182, 1998 = 222, 1999 = 236.',
        '1997: 182 = 162 + bought − 10 → 30 bought in 1997.',
        '1999: disposed = 20% of 1997\'s 30 = 6. So 236 = 222 + bought − 6 → bought = 20.',
      ],
    },
    {
      pdf: '1.4.32', level: 'easy', figures: ['5718.png'],
      q: 'Each dot is one family member\'s monthly income (up) and expenditure (across). Savings = Income − Expenditure. The highest savings belong to a member of which family?',
      options: ['Abhijeet', 'Baljeet', 'Camaljeet', 'Damanjeet'], answer: 0,
      steps: [
        'Savings = how far a dot sits above the dashed Income = Expenditure line.',
        'Abhijeet\'s dot near (550, 3250) has savings ≈ 2700. No other dot is nearly as far above the line.',
      ],
      trick: 'Distance from the diagonal, not height.',
    },
  ],
});
