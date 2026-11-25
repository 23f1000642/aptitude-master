APT.addTopic({
  id: 'lr-blood-relations',
  section: 'reasoning',
  title: 'Blood Relations',
  tagline: 'Draw the family tree and the answer jumps out.',
  pdfTopics: ['2.4', '2.14', '2.30'],
  concepts: {
    story: [
      '"My mother\'s brother\'s son" sounds confusing in words, but on paper it is just three steps on a family tree: up to Mum, sideways to her brother, down to his son. That is your <b>cousin</b>.',
      'Never solve these in your head. Draw a small tree every time.',
    ],
    memory: 'Draw it: + for male, − for female, | for parent–child, = for married, — for brother/sister.',
    extra: `<h2>Relation words</h2>
      <table class="mini-table"><tbody>
        <tr><th>Father's or mother's brother</th><td>Uncle</td></tr>
        <tr><th>Father's or mother's sister</th><td>Aunt</td></tr>
        <tr><th>Brother's or sister's son / daughter</th><td>Nephew / Niece</td></tr>
        <tr><th>Husband's or wife's father</th><td>Father-in-law</td></tr>
        <tr><th>Son's wife</th><td>Daughter-in-law</td></tr>
        <tr><th>Grandfather's only son</th><td>Your father</td></tr>
        <tr><th>Mother's mother's only son</th><td>Maternal uncle</td></tr>
      </tbody></table>`,
    formulas: [
      'Start from the <b>end</b> of the sentence ("my grandfather") and work back to the person',
      '"My father\'s only son" with no brothers = me',
      'Symbol puzzles (A$B = A is father of B): decode one symbol at a time, left to right',
      'Gender: "brother", "son", "husband", "father" give male; their opposites give female; "child", "sibling" give nothing',
    ],
    tricks: [
      '<b>"Only son"</b> is the key word in most questions: it pins down exactly one person.',
      'Mark gender only when it\'s certain. If it can\'t be known, the answer may be "cannot be determined".',
      'For "who is not true" options, test each option against your tree.',
      'A person who has no brother or sister: "my father\'s son" = the speaker himself.',
    ],
    patterns: [
      ['"Pointing to a photo, X said …"', 'Untangle from the end of the sentence'],
      ['Symbols like $, #, @ for relations', 'Decode pair by pair, draw the tree'],
      ['Family of 6 with professions', 'Make a table: name, gender, job, spouse'],
      ['"How many males?"', 'Count only people whose gender is certain'],
    ],
  },
  questions: [
    {
      pdf: '2.4.2', level: 'easy',
      q: 'Introducing a man to her husband, a woman said, "His brother\'s father is the only son of my grandfather." How is the woman related to this man?',
      options: ['Mother', 'Aunt', 'Sister', 'Daughter'], answer: 2,
      steps: ['"Only son of my grandfather" = the woman\'s father.', '"His brother\'s father" = the man\'s father.', 'Same father, so the woman is the man\'s sister.'],
      trick: '"Only son" pins down one person.',
    },
    {
      pdf: '2.4.3', level: 'easy',
      q: 'Pointing to a photograph, a man said, "I have no brother or sister, but that man\'s father is my father\'s son." Whose photograph was it?',
      options: ['His own', 'His son', 'His father', 'His grandfather'], answer: 1,
      steps: ['"My father\'s son" with no brothers = the speaker himself.', 'So "that man\'s father" = the speaker.', 'The photo is of his son.'],
    },
    {
      pdf: '2.4.11', level: 'easy',
      q: 'A said to B that B\'s mother was the mother-in-law of A\'s mother. How is A\'s mother related to B\'s mother?',
      options: ['Daughter-in-law', 'Mother-in-law', 'Sister', 'Aunt'], answer: 0,
      steps: ['If X is the mother-in-law of Y, then Y is the daughter-in-law of X.', 'So A\'s mother is the daughter-in-law of B\'s mother.'],
    },
    {
      pdf: '2.4.12', level: 'easy',
      q: 'Introducing a man, a woman said, "He is the only son of my mother\'s mother." How is the woman related to the man?',
      options: ['Mother', 'Aunt', 'Niece', 'Sister'], answer: 2,
      steps: ['The only son of her mother\'s mother = her mother\'s brother = her maternal uncle.', 'She is his niece.'],
    },
    {
      pdf: '2.4.1', level: 'medium',
      q: 'A$B means A is the father of B; A#B means A is the sister of B; A∗B means A is the daughter of B; A@B means A is the brother of B. Which shows that M is the wife of Q?',
      options: ['Q$R#T@M', 'Q$R@T#M', 'Q$R∗T#M', 'Q$R@T∗M'], answer: 3,
      steps: [
        'Take option D: Q$R → Q is the father of R.',
        'R@T → R is the brother of T, so Q is T\'s father too.',
        'T∗M → T is the daughter of M, so M is T\'s parent. Q is the father, so M is the mother → M is Q\'s wife.',
        '(In the other options M ends up as a sibling, not a parent.)',
      ],
    },
    {
      pdf: '2.4.10', level: 'easy',
      q: 'A + B means A is the daughter of B; A ∗ B means A is the son of B; A − B means A is the wife of B. If P ∗ Q − S, which is true?',
      options: ['S is wife of Q', 'S is father of P', 'P is daughter of Q', 'Q is father of P'], answer: 1,
      steps: ['P ∗ Q → P is the son of Q.', 'Q − S → Q is the wife of S, so Q is P\'s mother.', 'S is Q\'s husband, so S is P\'s father.'],
    },
    {
      pdf: '2.4.8', level: 'medium',
      q: 'Same symbols (+ daughter, ∗ son, − wife). If T − S ∗ B − M, which is NOT true?',
      options: ['B is mother of S', 'M is husband of B', 'S is daughter of B', 'T is wife of S'], answer: 2,
      steps: ['T − S → T is the wife of S (so S is male).', 'S ∗ B → S is the son of B.', 'B − M → B is the wife of M, so B is S\'s mother.', 'S is a son, not a daughter → option C is false.'],
    },
    {
      pdf: '2.4.7', level: 'hard',
      q: 'A family of six: Pat, Qat, Rat, Sat, Tat, Uat. Jobs: Engineer, Doctor, Teacher, Salesman, Manager, Lawyer. There are two married couples. The Manager is the grandfather of Uat, who is an Engineer. Rat, the Salesman, is married to the lady Teacher. Qat is the mother of Uat and Tat. Sat, the Doctor, is married to the Manager. How is Pat related to Tat?',
      options: ['Father', 'Grandfather', 'Mother', 'Grandmother'], answer: 1,
      steps: [
        'Known jobs: Uat = Engineer, Rat = Salesman, Sat = Doctor.',
        'Qat is a mother, and Rat is married to "the lady Teacher" → Qat = Teacher, married to Rat.',
        'Left: Pat and Tat with Manager and Lawyer. Tat is Qat\'s child, so the grandfather (Manager) must be Pat. Tat = Lawyer.',
        'Pat is the grandfather of Uat and of Tat (Uat\'s sibling).',
      ],
    },
    {
      pdf: '2.4.4', level: 'hard',
      q: 'Same family. How many male members are there in the family?',
      options: ['Two', 'Three', 'Four', 'Data inadequate'], answer: 3,
      steps: ['Certain males: Pat (grandfather) and Rat (husband of the lady Teacher).', 'Uat and Tat are only called "children". Their gender is never given.', 'So the number of males cannot be fixed: data inadequate.'],
    },
  ],
});
