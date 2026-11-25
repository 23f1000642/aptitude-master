APT.addTopic({
  id: 'geometry',
  title: 'Geometry & Mensuration',
  tagline: 'Fences, grass, wrapping paper and water in a box.',
  pdfTopics: ['7.42', '7.57', '7.99', '7.6', '7.18', '7.17', '7.44', '7.100', '7.87', '7.25', '7.77', '7.16'],
  concepts: {
    story: [
      '<b>Perimeter</b> is the fence around your garden (a length). <b>Area</b> is the grass inside that you\'d mow (square units).',
      '<b>Volume</b> is how much water fills a box (cubic units). <b>Surface area</b> is the wrapping paper needed to cover it.',
    ],
    memory: 'Lengths ×k → area ×k², volume ×k³. Melting keeps the volume the same.',
    extra: `<h2>2D shapes</h2>
      <table class="mini-table"><thead><tr><th>Shape</th><th>Perimeter</th><th>Area</th></tr></thead><tbody>
        <tr><td>Square (side a)</td><td>4a</td><td>a²</td></tr>
        <tr><td>Rectangle (l, b)</td><td>2(l + b)</td><td>l × b</td></tr>
        <tr><td>Triangle</td><td>a + b + c</td><td>½ × base × height, or √[s(s−a)(s−b)(s−c)]</td></tr>
        <tr><td>Equilateral (a)</td><td>3a</td><td>(√3/4)a²</td></tr>
        <tr><td>Circle (r)</td><td>2πr</td><td>πr²</td></tr>
        <tr><td>Sector (angle θ)</td><td>arc = 2πr·θ/360</td><td>πr²·θ/360</td></tr>
      </tbody></table>
      <h2>3D solids</h2>
      <table class="mini-table"><thead><tr><th>Solid</th><th>Volume</th><th>Total surface area</th></tr></thead><tbody>
        <tr><td>Cube (a)</td><td>a³</td><td>6a²</td></tr>
        <tr><td>Cuboid (l, b, h)</td><td>lbh</td><td>2(lb + bh + hl)</td></tr>
        <tr><td>Cylinder (r, h)</td><td>πr²h</td><td>2πr(r + h)</td></tr>
        <tr><td>Cone (r, h, slant l)</td><td>⅓πr²h</td><td>πr(r + l)</td></tr>
        <tr><td>Sphere (r)</td><td>(4/3)πr³</td><td>4πr²</td></tr>
      </tbody></table>
      <p>Four walls of a room = 2h(l + b).</p>`,
    formulas: [
      'Angles of a triangle add to 180°. Any two sides together are longer than the third',
      'Pythagoras: a² + b² = c². Triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25, 10-24-26',
      '<b>Acute triangle</b>: (longest side)² &lt; sum of squares of the other two',
      'Right triangle: (a + b)² = a² + b² + 2ab, so 2 × area = (a + b)² − c²',
    ],
    tricks: [
      '<b>Melting and recasting</b>: old volume = new volume.',
      '<b>% change in area or volume</b>: use k² or k³ instead of recalculating everything.',
      '<b>Spot a Pythagoras triple</b> first. 5-12-13 means a right triangle, so area = ½ × 5 × 12.',
    ],
    patterns: [
      ['Melt one shape into another', 'Equal volumes'],
      ['Surface area x% more → volume?', 'Area → k², then volume → k³'],
      ['Angle ratio of a right triangle', 'One angle must be 90°'],
      ['Range of the third side', 'Triangle inequality (+ the acute/obtuse condition)'],
    ],
  },
  questions: [
    {
      pdf: '7.99.3', level: 'easy',
      q: 'A triangle has sides 5, 12 and 13 units. A rectangle with the same area has width 10 units. What is its perimeter?',
      options: ['30', '26', '13', 'None of these'], answer: 1,
      steps: ['5-12-13 is a right triangle, so area = ½ × 5 × 12 = 30.', 'Rectangle: 10 × length = 30 → length = 3.', 'Perimeter = 2(10 + 3) = 26.'],
      trick: 'Spot the triple.',
    },
    {
      pdf: '7.99.4', level: 'easy',
      q: 'Which of these cannot be the ratio of angles in a right-angled triangle?',
      options: ['1 : 2 : 3', '1 : 1 : 2', '1 : 3 : 6', 'None of these'], answer: 2,
      steps: ['1 : 2 : 3 → 30, 60, 90 ✓. 1 : 1 : 2 → 45, 45, 90 ✓.', '1 : 3 : 6 → 18, 54, 108. None is 90°, so it\'s not a right triangle.'],
    },
    {
      pdf: '7.0.19', level: 'medium',
      q: 'A right-angled triangle has perimeter 60 cm and hypotenuse 26 cm. What is its area?',
      options: ['120 cm²', '240 cm²', '130 cm²', '156 cm²'], answer: 0,
      steps: ['The other two sides: a + b = 60 − 26 = 34 and a² + b² = 26² = 676.', '2ab = 34² − 676 = 1156 − 676 = 480.', 'Area = ab/2 = 120 cm². (The sides are 10, 24, 26.)'],
    },
    {
      pdf: '7.99.8', level: 'medium',
      q: '10, 12 and x are the sides of an acute-angled triangle. How many integer values can x take?',
      options: ['7', '12', '9', '13'], answer: 2,
      steps: [
        'If 12 is the longest side: 12² &lt; 10² + x² → x² &gt; 44 → x ≥ 7.',
        'If x is the longest side: x² &lt; 10² + 12² = 244 → x ≤ 15.',
        'x = 7, 8, …, 15 → 9 values.',
      ],
    },
    {
      pdf: '7.57.2', level: 'medium',
      q: 'The surface area of sphere B is 300% higher than that of sphere A. The volume of A is k% lower than the volume of B. What is k?',
      options: ['85.5', '92.5', '90.5', '87.5'], answer: 3,
      steps: ['300% higher means B\'s area = 4 × A\'s. Area ∝ r², so B\'s radius = 2 × A\'s.', 'Volume ∝ r³, so B = 8 × A.', 'A is 1/8 of B, which is 87.5% lower.'],
      trick: 'k² and k³ scaling.',
    },
    {
      pdf: '7.57.8', level: 'medium',
      q: 'A room\'s length, breadth and height are in the ratio 3 : 2 : 1. The breadth and height are halved and the length doubled. What happens to the total area of the four walls?',
      options: ['Remains the same', 'Decreases by 13.64%', 'Decreases by 15%', 'Decreases by 18.75%', 'Decreases by 30%'], answer: 4,
      steps: ['Four walls = 2h(l + b).', 'Before: l = 3, b = 2, h = 1 → 2 × 1 × 5 = 10.', 'After: l = 6, b = 1, h = 0.5 → 2 × 0.5 × 7 = 7.', 'From 10 to 7: a 30% decrease.'],
    },
    {
      pdf: '7.57.13', level: 'easy',
      q: 'A lead cuboid 8 in long, 11 in wide and 2 in thick is melted into a rod 8 in in diameter. The rod\'s length is nearest to:',
      options: ['3', '3.5', '4', '4.5'], answer: 1,
      steps: ['Cuboid volume = 8 × 11 × 2 = 176.', 'Rod: π × 4² × L = 176 → (22/7) × 16 × L = 176.', 'L = 176 × 7 / 352 = 3.5 inches.'],
      trick: 'Melting keeps the volume.',
    },
  ],
});
