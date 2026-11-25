APT.addTopic({
  id: 'number-system',
  title: 'Number System & Remainders',
  tagline: 'Leftover toffees: remainders, divisibility and big powers.',
  pdfTopics: ['7.62', '7.32', '7.35', '7.79', '7.37', '7.2'],
  concepts: {
    story: [
      'You have <b>17 toffees</b> and <b>5 friends</b>. Each friend gets 3, and <b>2 are left over</b>. That leftover is the <b>remainder</b>.',
      'Almost every number-system question is secretly asking about leftovers. Once you think "what is left over?", big scary numbers become small friendly ones.',
    ],
    memory: 'You never need the big number itself, only its remainder.',
    extra: `<h2>Number families</h2>
      <ul>
        <li><b>Natural</b>: 1, 2, 3 … · <b>Whole</b>: 0, 1, 2 … · <b>Integers</b>: … −2, −1, 0, 1, 2 …</li>
        <li><b>Prime</b>: exactly 2 factors (2, 3, 5, 7, 11 …). 2 is the only even prime. There are 25 primes below 100.</li>
        <li><b>Composite</b>: more than 2 factors (4, 6, 8, 9 …). 1 is neither prime nor composite.</li>
      </ul>
      <h2>Divisibility rules</h2>
      <table class="mini-table"><tbody>
        <tr><th>2</th><td>last digit even</td></tr>
        <tr><th>3 / 9</th><td>sum of digits divisible by 3 / 9</td></tr>
        <tr><th>4</th><td>last 2 digits divisible by 4</td></tr>
        <tr><th>5</th><td>last digit 0 or 5</td></tr>
        <tr><th>6</th><td>divisible by 2 and by 3</td></tr>
        <tr><th>8</th><td>last 3 digits divisible by 8</td></tr>
        <tr><th>11</th><td>(sum of odd-place digits) − (sum of even-place digits) is 0 or a multiple of 11</td></tr>
      </tbody></table>`,
    formulas: [
      'Dividend = Divisor × Quotient + Remainder',
      'Sum 1 to n = n(n+1)/2 · Sum of squares = n(n+1)(2n+1)/6 · Sum of cubes = [n(n+1)/2]²',
      'Multiples of k from a to b = ⌊b/k⌋ − ⌊(a−1)/k⌋',
      'Trailing zeros of n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …',
      'If N = p<sup>a</sup> × q<sup>b</sup>, number of factors = (a+1)(b+1)',
    ],
    tricks: [
      '<b>Remainder of a product</b>: replace each number by its remainder, multiply, and take the remainder again.',
      '<b>Negative remainder</b>: 16 mod 17 = −1, so 16<sup>100</sup> mod 17 = (−1)<sup>100</sup> = 1.',
      '<b>Power cycle</b>: find a power that leaves remainder 1 (2<sup>8</sup> mod 17 = 1), then cut the big power into blocks of that size.',
      '<b>a<sup>n</sup> + b<sup>n</sup></b> is divisible by (a + b) when n is odd. a<sup>n</sup> − b<sup>n</sup> is always divisible by (a − b).',
      '<b>Reversed 2-digit number</b>: (10b + a) − (10a + b) = 9(b − a), always a multiple of 9.',
      '<b>Same remainder</b> from two numbers means the divisor divides their difference.',
    ],
    patterns: [
      ['Remainder of a big product', 'Trick 1'],
      ['Remainder of a big power', 'Tricks 2 and 3'],
      ['(a<sup>n</sup> + b<sup>n</sup>) ÷ something', 'Check whether a + b is divisible (trick 4)'],
      ['"Digits reversed"', '9 × difference of the digits'],
      ['Count numbers divisible by X but not Y', 'Count multiples, then subtract the overlap (LCM)'],
      ['Remainders by several divisors', 'Test small numbers that fit the largest divisor first'],
    ],
  },
  questions: [
    {
      pdf: '7.62.5', level: 'easy',
      q: 'Let N = 1421 × 1423 × 1425. What is the remainder when N is divided by 12?',
      options: ['0', '9', '3', '6'], answer: 2,
      steps: [
        'Find each number\'s remainder by 12: 1421 → 5, 1423 → 7, 1425 → 9.',
        'Multiply the small ones: 5 × 7 = 35, and 35 mod 12 = 11.',
        '11 × 9 = 99, and 99 mod 12 = 3.',
      ],
      trick: 'Remainder of a product (trick 1).',
    },
    {
      pdf: '7.62.24', level: 'medium',
      q: 'The remainder when 2<sup>256</sup> is divided by 17 is:',
      options: ['7', '13', '11', '1'], answer: 3,
      steps: [
        '2<sup>4</sup> = 16, which is −1 when divided by 17.',
        '2<sup>256</sup> = (2<sup>4</sup>)<sup>64</sup> → (−1)<sup>64</sup> = 1.',
      ],
      trick: 'Negative remainder (trick 2).',
    },
    {
      pdf: '7.62.38', level: 'easy',
      q: 'What is the remainder when 4<sup>96</sup> is divided by 6?',
      options: ['0', '2', '3', '4'], answer: 3,
      steps: [
        '4 ÷ 6 leaves 4. 4² = 16 leaves 4. 4³ = 64 leaves 4.',
        'The pattern never changes, so 4<sup>96</sup> also leaves 4.',
      ],
    },
    {
      pdf: '7.62.46', level: 'medium',
      q: 'The remainder when (15<sup>23</sup> + 23<sup>23</sup>) is divided by 19 is:',
      options: ['4', '15', '0', '18'], answer: 2,
      steps: [
        'The power 23 is odd, so 15<sup>23</sup> + 23<sup>23</sup> is divisible by 15 + 23 = 38.',
        '38 = 2 × 19, so the sum is divisible by 19. Remainder = 0.',
      ],
      trick: 'a<sup>n</sup> + b<sup>n</sup> with odd n (trick 4).',
    },
    {
      pdf: '7.62.14', level: 'easy',
      q: 'All the page numbers of a book are added, starting at page 1. One page number was added twice by mistake and the total came to 1000. Which page was added twice?',
      options: ['44', '45', '10', '12'], answer: 2,
      steps: [
        'Find n with n(n+1)/2 just below 1000. n = 44 gives 44 × 45 / 2 = 990.',
        '(n = 45 gives 1035, which is too big.)',
        'Extra amount = 1000 − 990 = 10, so page 10 was added twice.',
      ],
    },
    {
      pdf: '7.62.39', level: 'easy',
      q: 'What is the sum of all two-digit numbers that leave a remainder of 3 when divided by 7?',
      options: ['666', '676', '683', '777'], answer: 1,
      steps: [
        'The numbers are 10, 17, 24, …, 94. This is an AP with difference 7.',
        'Count = (94 − 10)/7 + 1 = 13.',
        'Sum = count × (first + last)/2 = 13 × 104/2 = 676.',
      ],
    },
    {
      pdf: '7.62.30', level: 'medium',
      q: 'How many even integers n, where 100 ≤ n ≤ 200, are divisible neither by 7 nor by 9?',
      options: ['40', '37', '39', '38'], answer: 2,
      steps: [
        'Even numbers from 100 to 200: 51.',
        'Even and divisible by 7 means divisible by 14: 112, 126, …, 196 = 7 numbers.',
        'Even and divisible by 9 means divisible by 18: 108, 126, …, 198 = 6 numbers.',
        'Both (divisible by 126): just 126, which was counted twice.',
        'Answer = 51 − 7 − 6 + 1 = 39.',
      ],
    },
    {
      pdf: '7.62.18', level: 'medium',
      q: 'A number leaves remainders 2, 1 and 4 when divided by 3, 4 and 7. What is the remainder when it is divided by 84?',
      options: ['80', '76', '53', 'None of these'], answer: 2,
      steps: [
        'List numbers that leave 4 when divided by 7: 4, 11, 18, 25, 32, 39, 46, 53 …',
        'Check them: 53 ÷ 3 leaves 2 ✓ and 53 ÷ 4 leaves 1 ✓.',
        '84 = 3 × 4 × 7, so the remainder by 84 is 53.',
      ],
    },
    {
      pdf: '7.62.60', level: 'easy',
      q: 'Reversing the digits of 13 increases it by 18. How many <b>other</b> two-digit numbers increase by 18 when their digits are reversed?',
      options: ['5', '6', '7', '8'], answer: 1,
      steps: [
        'Reversal changes the number by 9(b − a). We need 9(b − a) = 18, so b − a = 2.',
        'The numbers are 13, 24, 35, 46, 57, 68, 79 (7 numbers).',
        'Leaving out 13 gives 6.',
      ],
      trick: 'Reversed digits differ by 9 × (difference of digits).',
    },
    {
      pdf: '7.62.11', level: 'easy',
      q: 'Anita had to multiply a number by 35 but used 53 instead. The product went up by 540. What is the new (wrong) product?',
      options: ['1050', '540', '1440', '1590'], answer: 3,
      steps: [
        'The difference in multipliers is 53 − 35 = 18, so 18 × number = 540 and the number = 30.',
        'New product = 30 × 53 = 1590.',
      ],
    },
    {
      pdf: '7.62.3', level: 'medium',
      q: 'S is the set of integers x with 100 < x < 200, x odd, and x divisible by 3 but not by 7. How many elements does S have?',
      options: ['16', '12', '11', '13'], answer: 3,
      steps: [
        'Odd multiples of 3 are numbers of the form 6k + 3: 105, 111, …, 195. Count = (195 − 105)/6 + 1 = 16.',
        'Remove those also divisible by 7 (odd multiples of 21): 105, 147, 189 = 3 numbers.',
        '16 − 3 = 13.',
      ],
    },
  ],
});
