APT.addTopic({
  id: 'di-bar-pie',
  section: 'di',
  title: 'Bar Graphs & Pie Charts',
  tagline: 'Compare heights, compare slices, and watch out for percentages of different totals.',
  pdfTopics: ['1.1', '1.5', '1.3'],
  concepts: {
    story: [
      'A <b>bar graph</b> is a line of children by height: taller bar, bigger value. Two bars side by side (1997 vs 1998) show change.',
      'A <b>pie chart</b> is one pizza cut into slices. Each slice is a share of the whole. Two pizzas can be different sizes, so 10% of a big pizza can be more than 20% of a small one.',
    ],
    memory: 'A percentage alone is not an amount. Always ask: "percent of WHAT?"',
    formulas: [
      'Pie slice value = slice % × total',
      'Slice angle = slice % × 360° (and back: % = angle ÷ 3.6)',
      'Cost per unit from two pies = (cost % × total cost) ÷ (volume % × total volume)',
      'If X = A/B (like FEI = inflow/GDP), then A = X × B. A change in A needs both X and B',
    ],
    tricks: [
      '<b>Compare ratios of percentages</b> when both pies share fixed totals: cost%/volume% ranks the cost per ton without full calculation.',
      '<b>"Largest change relative to"</b> means percentage change, not absolute change.',
      '<b>Ratio data (per GDP, per person)</b> can\'t tell you absolute amounts unless the base is also given.',
      'Read the labels on the bars directly rather than estimating from the axis.',
    ],
    patterns: [
      ['Two years of bars per item', 'Change and % change per item'],
      ['Ratio-based bars (FEI, per capita)', 'Amount = ratio × base. Need the base!'],
      ['Two pies (volume and cost)', 'Per-unit = cost% ÷ volume% × (total cost ÷ total volume)'],
      ['"Cheapest / costliest per unit"', 'Rank cost% ÷ volume%'],
    ],
  },
  questions: [
    {
      pdf: '1.1.1', level: 'easy', figures: ['4434.jpg'],
      q: 'FEI = foreign equity inflow as a % of GDP. The chart shows FEIs for 1997 and 1998. Which country had the largest change in FEI in 1998 relative to its 1997 FEI?',
      options: ['India', 'China', 'Malaysia', 'Thailand'], answer: 0,
      steps: [
        '"Relative to 1997" means percentage change.',
        'India: 1.71 → 0.72, a fall of 0.99 = 58%. China: 5.96 → 4.8, −19%.',
        'Malaysia: 10.67 → 9.92, −7%. Thailand: 5.09 → 5.82, +14%.',
        'Largest relative change: India.',
      ],
      trick: '"Relative" means % change.',
    },
    {
      pdf: '1.1.2', level: 'medium', figures: ['4434.jpg'],
      q: 'Based on the FEI data alone, which can be concluded?',
      options: [
        'Absolute foreign equity inflows were higher in 1998 than 1997 for both Thailand and South Korea',
        'Absolute inflows were higher in 1998 for Thailand and lower for China',
        'Absolute inflows were lower in 1998 for both India and China',
        'None of the above can be inferred',
      ], answer: 3,
      steps: [
        'FEI = inflow ÷ GDP. A higher FEI could just mean a smaller GDP.',
        'Without GDP figures, no absolute inflow can be compared.',
        'So nothing about absolute values can be concluded.',
      ],
      trick: 'A ratio alone is not an amount.',
    },
    {
      pdf: '1.1.3', level: 'hard', figures: ['4434.jpg'],
      q: 'China\'s GDP grew 7% from 1997 to 1998, India\'s grew 2%, and South Korea\'s fell 5%. Which are true? I. China\'s inflows rose. II. China\'s inflows fell. III. India\'s inflows rose. IV. South Korea\'s inflows fell. V. South Korea\'s inflows rose.',
      options: ['I, III and IV', 'II, III and IV', 'I, III and V', 'II and V'], answer: 3,
      steps: [
        'Inflow = FEI × GDP, so new/old inflow = (FEI ratio) × (GDP ratio).',
        'China: (4.8/5.96) × 1.07 ≈ 0.81 × 1.07 ≈ 0.86 → fell (II).',
        'India: (0.72/1.71) × 1.02 ≈ 0.43 → fell (III false).',
        'South Korea: (2.5/2.16) × 0.95 ≈ 1.16 × 0.95 ≈ 1.10 → rose (V).',
        'True: II and V.',
      ],
    },
    {
      pdf: '1.1.4', level: 'medium', figures: ['4434.jpg'],
      q: 'China\'s foreign equity inflows in 1998 were 10 times India\'s. What can be concluded?',
      options: ['China\'s GDP was 40% higher than India\'s', 'China\'s GDP was 70% higher', 'China\'s GDP was 50% higher', 'No inference about relative GDPs'], answer: 2,
      steps: [
        'GDP = inflow ÷ FEI.',
        'China/India GDP = (10 ÷ 4.8) ÷ (1 ÷ 0.72) = 10 × 0.72 ÷ 4.8 = 1.5.',
        'China\'s GDP was 50% higher.',
      ],
    },
    {
      pdf: '1.5.1', level: 'medium', figures: ['5823.jpg'],
      q: '12 million tons of crude oil were transported (Chart 1: volume share by mode). The total cost was Rs 30 million (Chart 2: cost share). The cost per ton of oil moved by rail and road together is roughly:',
      options: ['Rs 3', 'Rs 1.5', 'Rs 4.5', 'Rs 8'], answer: 1,
      steps: [
        'Rail + road volume = 9% + 22% = 31% of 12 million ≈ 3.72 million tons.',
        'Rail + road cost = 12% + 6% = 18% of 30 million = 5.4 million rupees.',
        '5.4 ÷ 3.72 ≈ Rs 1.45 per ton ≈ 1.5.',
      ],
    },
    {
      pdf: '1.5.2', level: 'easy', figures: ['5823.jpg'],
      q: 'From the charts, the cheapest mode of transport (per ton) is:',
      options: ['Road', 'Rail', 'Pipeline', 'Ship'], answer: 0,
      steps: [
        'Per-ton cost ∝ cost% ÷ volume%.',
        'Road 6/22 ≈ 0.27. Rail 12/9 ≈ 1.33. Pipeline 65/49 ≈ 1.33. Ship 10/9 ≈ 1.11. Air 7/11 ≈ 0.64.',
        'Smallest: road.',
      ],
      trick: 'Rank cost% ÷ volume%.',
    },
    {
      pdf: '1.5.3', level: 'easy', figures: ['5823.jpg'],
      q: 'If the per-ton costs by ship, air and road are P, Q and R, which is true?',
      options: ['R > Q > P', 'P > R > Q', 'P > Q > R', 'R > P > Q'], answer: 2,
      steps: ['Ship P ∝ 10/9 ≈ 1.11. Air Q ∝ 7/11 ≈ 0.64. Road R ∝ 6/22 ≈ 0.27.', 'P > Q > R.'],
    },
  ],
});
