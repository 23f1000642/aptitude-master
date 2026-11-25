(function () {
  const IT = `<table><caption>Information Technology industry in India (million US$)</caption>
    <thead><tr><th></th><th>1994-95</th><th>1995-96</th><th>1996-97</th><th>1997-98</th><th>1998-99</th></tr></thead><tbody>
    <tr><td>Software – Domestic</td><td>350</td><td>490</td><td>670</td><td>950</td><td>1250</td></tr>
    <tr><td>Software – Exports</td><td>485</td><td>734</td><td>1083</td><td>1750</td><td>2650</td></tr>
    <tr><td>Hardware – Domestic</td><td>590</td><td>1037</td><td>1050</td><td>1205</td><td>1026</td></tr>
    <tr><td>Hardware – Exports</td><td>177</td><td>35</td><td>286</td><td>201</td><td>4</td></tr>
    <tr><td>Peripherals – Domestic</td><td>148</td><td>196</td><td>181</td><td>229</td><td>329</td></tr>
    <tr><td>Peripherals – Exports</td><td>6</td><td>6</td><td>14</td><td>19</td><td>18</td></tr>
    <tr><td>Training</td><td>107</td><td>143</td><td>185</td><td>263</td><td>302</td></tr>
    <tr><td>Maintenance</td><td>142</td><td>172</td><td>182</td><td>221</td><td>236</td></tr>
    <tr><td>Networking &amp; others</td><td>36</td><td>73</td><td>156</td><td>193</td><td>237</td></tr>
    <tr><th>Total</th><th>2041</th><th>2886</th><th>3807</th><th>5031</th><th>6052</th></tr>
    </tbody></table>`;

  const FACTORY = `<table><caption>Factory sector by type of ownership (% of each column's total)</caption>
    <thead><tr><th>Sector</th><th>Factories</th><th>Employment</th><th>Fixed capital</th><th>Gross output</th><th>Value added</th></tr></thead><tbody>
    <tr><td>Public</td><td>7</td><td>27.7</td><td>43.2</td><td>25.8</td><td>30.8</td></tr>
    <tr><td>&nbsp;&nbsp;Central Govt.</td><td>1</td><td>10.5</td><td>17.5</td><td>12.7</td><td>14.1</td></tr>
    <tr><td>&nbsp;&nbsp;State/local Govt.</td><td>5.2</td><td>16.2</td><td>24.3</td><td>11.6</td><td>14.9</td></tr>
    <tr><td>&nbsp;&nbsp;Central &amp; State/local</td><td>0.8</td><td>1</td><td>1.4</td><td>1.5</td><td>1.8</td></tr>
    <tr><td>Joint</td><td>1.8</td><td>5.1</td><td>6.8</td><td>8.4</td><td>8.1</td></tr>
    <tr><td>Wholly private</td><td>90.3</td><td>64.6</td><td>46.8</td><td>63.8</td><td>58.7</td></tr>
    <tr><td>Others</td><td>0.9</td><td>2.6</td><td>3.2</td><td>2</td><td>2.4</td></tr>
    <tr><th>Total</th><th>100</th><th>100</th><th>100</th><th>100</th><th>100</th></tr>
    </tbody></table>`;

  const FIRMS = `<table><caption>Four firms in an industry (Rs.). Profitability = profit as % of sales</caption>
    <thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>Total</th></tr></thead><tbody>
    <tr><td>Sales</td><td>25,568*</td><td>24,468</td><td>23,752</td><td>15,782</td><td>89,570</td></tr>
    <tr><td>Operating cost</td><td>17,198</td><td>19,101</td><td>16,151</td><td>10,258</td><td>62,708</td></tr>
    <tr><td>Profit</td><td>4,914</td><td>4,075</td><td>4,750</td><td>3,946</td><td>17,684</td></tr>
    </tbody></table><p class="muted small">* A's sales figure is cut off in the PDF; 25,568 is the total minus the other three.</p>`;

  const PRICE = `<table><caption>Price index over ten years (first year = 100)</caption>
    <thead><tr><th>Item</th><th>Y1</th><th>Y2</th><th>Y3</th><th>Y4</th><th>Y5</th><th>Y6</th><th>Y7</th><th>Y8</th><th>Y9</th><th>Y10</th></tr></thead><tbody>
    <tr><td>All items</td><td>100</td><td>102</td><td>102.5</td><td>104</td><td>103</td><td>105</td><td>106</td><td>108</td><td>107</td><td>106</td></tr>
    <tr><td>Cement</td><td>100</td><td>101</td><td>100.5</td><td>103</td><td>102.5</td><td>103.5</td><td>103.1</td><td>103.8</td><td>103.7</td><td>104</td></tr>
    <tr><td>Limestone</td><td>100</td><td>102</td><td>102.5</td><td>102.75</td><td>102.25</td><td>103</td><td>104</td><td>105</td><td>104.5</td><td>105</td></tr>
    <tr><td>Power</td><td>100</td><td>101.5</td><td>102.5</td><td>103</td><td>103.5</td><td>104</td><td>106</td><td>107</td><td>107.5</td><td>108</td></tr>
    <tr><td>Steel</td><td>100</td><td>101.5</td><td>101</td><td>103.5</td><td>104</td><td>104.25</td><td>105</td><td>105.5</td><td>106</td><td>105.5</td></tr>
    <tr><td>Timber</td><td>100</td><td>100.5</td><td>101.5</td><td>102</td><td>102.5</td><td>102</td><td>103</td><td>103.5</td><td>104</td><td>104.5</td></tr>
    <tr><td>Wages</td><td>100</td><td>101.5</td><td>103</td><td>103.5</td><td>104</td><td>104.25</td><td>104</td><td>104.75</td><td>104.9</td><td>105.3</td></tr>
    </tbody></table>`;

  APT.addTopic({
    id: 'di-tables',
    section: 'di',
    title: 'Tables & DI Calculation Tricks',
    tagline: 'Read the table once, calculate smart, approximate boldly.',
    pdfTopics: ['1.7', '1.2'],
    concepts: {
      story: [
        'A data table is a giant sweet-shop price list. The question never needs every number, just two or three of them. Your job is to <b>find the right row and column fast</b>, then do quick maths.',
        'DI is mostly percentages and ratios. The options are usually far apart, so <b>rounding is allowed and smart</b>.',
      ],
      memory: 'Read the units and the question first, then the table. Approximate when the options are far apart.',
      formulas: [
        'Growth % = (new − old)/old × 100',
        'Share % = part/total × 100',
        'Average per unit = total/count (e.g. employment per factory = employment share ÷ factory share × overall average)',
        'Ratio comparison: a/b vs c/d → compare a×d with b×c',
        'CAGR over n years ≈ (end/start)<sup>1/n</sup> − 1',
      ],
      tricks: [
        '<b>Round to 2 significant figures</b>: 2886 ≈ 2900, 2041 ≈ 2000. Growth ≈ 45%; the exact answer is 41%, which is close enough to pick the right option.',
        '<b>1% trick</b>: 1% of 5031 ≈ 50, so 1970 ≈ 39% of 5031.',
        '<b>Percent of percent</b>: if wholly-private factories are 90.3% and hold 64.6% of jobs, their average = 64.6/90.3 of the overall average.',
        '<b>Steady increase / only one decline</b>: scan left to right and mark each drop with a small tick.',
        '<b>Don\'t add whole columns</b> unless you have to. Compare differences instead.',
      ],
      patterns: [
        ['Highest growth year', 'Compare (new − old)/old, round the numbers'],
        ['Share between x% and y%', 'Find part ÷ total for each year'],
        ['Average per unit of a sub-group', 'Ratio of its two shares × overall average'],
        ['"Continuous rise" / "only one decline"', 'Scan each row and mark the drops'],
        ['Highest profitability / efficiency', 'Ratio per firm, compare with cross-multiplying'],
      ],
    },
    questions: [
      {
        pdf: '1.7.1', level: 'medium', data: IT,
        q: 'Total annual exports were between 35% and 40% of the total annual IT business in which years?',
        options: ['1997-98 and 1994-95', '1996-97 and 1997-98', '1996-97 and 1998-99', '1996-97 and 1994-95'], answer: 1,
        steps: [
          'Exports = software + hardware + peripheral exports.',
          '1994-95: 668/2041 ≈ 33%. 1995-96: 775/2886 ≈ 27%.',
          '1996-97: 1383/3807 ≈ 36% ✓. 1997-98: 1970/5031 ≈ 39% ✓. 1998-99: 2672/6052 ≈ 44%.',
          'So 1996-97 and 1997-98.',
        ],
      },
      {
        pdf: '1.7.2', level: 'easy', data: IT,
        q: 'The highest percentage growth in total IT business over the previous year was in:',
        options: ['1995-96', '1996-97', '1997-98', '1998-99'], answer: 0,
        steps: [
          '1995-96: (2886 − 2041)/2041 = 845/2041 ≈ 41%.',
          '1996-97: 921/2886 ≈ 32%. 1997-98: 1224/3807 ≈ 32%. 1998-99: 1021/5031 ≈ 20%.',
          'Highest: 1995-96.',
        ],
        trick: 'Round: 850/2000 is clearly the biggest.',
      },
      {
        pdf: '1.7.3', level: 'easy', data: IT,
        q: 'Which statement is correct?',
        options: [
          'Software exports rose steadily but hardware exports fell steadily during 1994-99',
          'Peripheral exports rose steadily during 1994-99',
          'Total training business in 1994-99 was higher than total maintenance business',
          'None of the above',
        ], answer: 2,
        steps: [
          'A: hardware exports go 177, 35, 286 … They don\'t fall steadily. ✗',
          'B: peripheral exports go 6, 6, … Not a steady rise (and 19 → 18 falls). ✗',
          'C: training = 107 + 143 + 185 + 263 + 302 = 1000. Maintenance = 142 + 172 + 182 + 221 + 236 = 953. ✓',
        ],
      },
      {
        pdf: '1.7.6', level: 'medium', data: FACTORY,
        q: 'If the average employment is 60 per factory, what is the average employment in "wholly private" factories?',
        options: ['43', '47', '50', '54'], answer: 0,
        steps: [
          'Wholly private factories are 90.3% of factories but have 64.6% of employment.',
          'Their average = 60 × (64.6 / 90.3) ≈ 60 × 0.715 ≈ 43.',
        ],
        trick: 'Average of a group = overall average × (its share of workers ÷ its share of factories).',
      },
      {
        pdf: '1.7.69', level: 'easy', data: FIRMS,
        q: 'Which firm has the highest profitability (profit as % of sales)?',
        options: ['A', 'B', 'C', 'D'], answer: 3,
        steps: [
          'A ≈ 4914/25568 ≈ 19%. B ≈ 4075/24468 ≈ 17%.',
          'C ≈ 4750/23752 ≈ 20%. D ≈ 3946/15782 ≈ 25%.',
          'D is clearly highest. It has the smallest sales but a profit close to the others\'.',
        ],
      },
      {
        pdf: '1.7.84', level: 'easy', data: PRICE,
        q: 'Which item had a continuous price rise during the ten-year period?',
        options: ['Power', 'Cement', 'Wages', 'Limestone'], answer: 0,
        steps: ['Scan each row for any drop.', 'Power: 100, 101.5, 102.5, 103, 103.5, 104, 106, 107, 107.5, 108. No drop at all.', 'Cement, wages and limestone each have at least one drop.'],
      },
      {
        pdf: '1.7.85', level: 'medium', data: PRICE,
        q: 'Which item(s) had only one decline in price during the ten years?',
        options: ['Steel and Limestone', 'Steel and Timber', 'Timber', 'Timber and Wages'], answer: 3,
        steps: [
          'Count the drops: Cement 4 (101→100.5, 103→102.5, 103.5→103.1, 103.8→103.7).',
          'Limestone 2 (102.75→102.25, 105→104.5). Steel 2 (101.5→101, 106→105.5).',
          'Timber 1 (102.5→102). Wages 1 (104.25→104).',
          'Answer: Timber and Wages.',
        ],
      },
    ],
  });
})();
