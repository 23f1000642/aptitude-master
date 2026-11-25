APT.addTopic({
  id: 'mixtures',
  title: 'Mixtures & Alligation',
  tagline: 'Cheap juice + costly juice = the price you want.',
  pdfTopics: ['7.5', '7.59'],
  concepts: {
    story: [
      'You mix a cheap Rs 10 juice with a costly Rs 40 juice to get a Rs 20 juice. How much of each?',
      'The mix (20) is closer to the cheap juice, so you need <b>more</b> of the cheap one. Alligation is a seesaw: the side farther from the middle gets less.',
    ],
    memory: 'Cross-subtract: Cheap : Costly = (Costly − Mean) : (Mean − Cheap).',
    extra: `<h2>The alligation cross</h2>
<pre class="diagram">   Cheap (10)        Costly (40)
          \\          /
           Mean (20)
          /          \\
  40 − 20 = 20     20 − 10 = 10

  Cheap : Costly = 20 : 10 = 2 : 1</pre>`,
    formulas: [
      'Cheap : Costly = (Costly − Mean) : (Mean − Cheap)',
      '<b>Replacement</b>: take x out of V litres and refill with water, n times → pure left = V(1 − x/V)<sup>n</sup>',
      '<b>Drying</b> (fruit, grain): the dry part (pulp) never changes, only the water goes',
    ],
    tricks: [
      'Use <b>the same measure</b> on both sides: fraction of milk, price per kg, or % of A.',
      'Turn ratios like 5 : 1 into fractions of the whole (5/6), then use the cross.',
      '<b>Drying</b>: fresh 90% water = 10% pulp; dry 20% water = 80% pulp. Pulp weight stays fixed.',
      '<b>Mix sold at a profit</b>: first find the mix\'s cost price (SP ÷ (1 + profit)), then use the cross.',
    ],
    patterns: [
      ['Two mixtures, find the mixing ratio', 'Alligation cross with fractions'],
      ['Fresh vs dry fruit', 'Keep the pulp constant'],
      ['Remove some, refill with water', 'Replacement formula'],
      ['Mixture sold at a profit', 'Find the mix\'s CP, then cross'],
    ],
  },
  questions: [
    {
      pdf: '7.5.1', level: 'easy',
      q: 'Fresh grapes are 90% water by weight and dry grapes are 20% water. How much dry grape can you get from 20 kg of fresh grapes?',
      options: ['2 kg', '2.4 kg', '2.5 kg', 'None of these'], answer: 2,
      steps: ['Pulp in fresh grapes = 10% of 20 = 2 kg.', 'In dry grapes the pulp is 80% of the weight.', 'Dry weight = 2 ÷ 0.8 = 2.5 kg.'],
      trick: 'Pulp stays the same.',
    },
    {
      pdf: '7.5.2', level: 'easy',
      q: 'A milkman mixes 20 L of water with 80 L of milk. He sells one-fourth of the mixture and refills with water. What is the water : milk ratio now?',
      options: ['2 : 3', '1 : 2', '1 : 3', '3 : 4'], answer: 0,
      steps: ['Selling 1/4 leaves 15 L water and 60 L milk.', 'He adds 25 L of water: 40 L water, 60 L milk.', '40 : 60 = 2 : 3.'],
    },
    {
      pdf: '7.5.7', level: 'medium',
      q: 'Liquids A and B are in the ratio 5 : 1 in container 1 and 1 : 3 in container 2. In what ratio should the two be mixed to get A : B = 1 : 1?',
      options: ['2 : 3', '4 : 3', '3 : 2', '3 : 4'], answer: 3,
      steps: [
        'Fraction of A: container 1 = 5/6, container 2 = 1/4, target = 1/2.',
        'Container 1 : container 2 = (1/2 − 1/4) : (5/6 − 1/2) = 1/4 : 1/3.',
        'Multiply by 12: 3 : 4.',
      ],
      trick: 'Alligation cross with fractions.',
    },
    {
      pdf: '7.5.9', level: 'medium',
      q: 'Bottle 1 has milk : water = 7 : 2 and Bottle 2 has 9 : 4. In what ratio should they be combined to get milk : water = 3 : 1?',
      options: ['27 : 14', '27 : 13', '27 : 16', '27 : 18'], answer: 1,
      steps: [
        'Milk fractions: 7/9 and 9/13. Target 3/4.',
        'Bottle 1 : Bottle 2 = (3/4 − 9/13) : (7/9 − 3/4) = 3/52 : 1/36.',
        '= 108 : 52 = 27 : 13.',
      ],
    },
    {
      pdf: '7.5.11', level: 'hard',
      q: 'Teas A and B are mixed and sold at Rs 40 per kg. The profit is 10% if they are mixed 3 : 2, and 5% if mixed 2 : 3. What is the ratio of their cost prices?',
      options: ['18 : 25', '19 : 24', '21 : 25', '17 : 25'], answer: 1,
      steps: [
        '3 : 2 mix costs 40/1.1 = 400/11 per kg, so 3a + 2b = 5 × 400/11 = 2000/11.',
        '2 : 3 mix costs 40/1.05 = 800/21 per kg, so 2a + 3b = 4000/21.',
        'Adding: a + b = 17200/231. Subtracting: a − b = −2000/231.',
        'a = 15200/462 and b = 19200/462, so a : b = 152 : 192 = 19 : 24.',
      ],
    },
    {
      level: 'medium',
      q: '(Extra practice, based on PDF 7.5.7) Container 1 holds A and B in the ratio 5 : 1 and container 2 in the ratio 1 : 3. If they are mixed 3 : 4, what fraction of the final mix is A?',
      options: ['1/3', '1/2', '2/3', '3/5'], answer: 1,
      steps: [
        'A from container 1: 3 × 5/6 = 2.5. A from container 2: 4 × 1/4 = 1.',
        'Total A = 3.5 out of 7 = 1/2.',
        '(This is the reverse check of the previous question.)',
      ],
    },
  ],
});
