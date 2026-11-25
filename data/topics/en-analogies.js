APT.addTopic({
  id: 'en-analogies',
  section: 'english',
  title: 'Word Analogies & Word Pairs',
  tagline: 'Make a sentence that links the pair, then test it on the options.',
  pdfTopics: ['5.25', '5.23'],
  concepts: {
    story: [
      'CUP : LIP is like a secret handshake between two words. Say it as a sentence: "a cup has a lip (its edge)". Now try the same sentence on BIRD: "a bird has a … beak". That\'s the answer.',
    ],
    memory: 'Build a bridge sentence for the first pair. The answer pair fits the SAME sentence.',
    extra: `<h2>Common relationships</h2>
      <table class="mini-table"><tbody>
        <tr><th>Part : whole</th><td>Molecule : Atoms (made of) · Tissue : Cells</td></tr>
        <tr><th>Type : category</th><td>Cobra : Snake · Leopard : Cat</td></tr>
        <tr><th>Degree</th><td>Skirmish : War (small → big) · Disease : Epidemic</td></tr>
        <tr><th>Opposites</th><td>Abridge : Lengthen · Lend : Borrow</td></tr>
        <tr><th>Defective action</th><td>Limp : Walk · Stutter : Talk</td></tr>
        <tr><th>Container</th><td>Medicine : Capsule · Pearl : Shell</td></tr>
        <tr><th>Person : action</th><td>Quisling : Betray · Juggernaut : Crush</td></tr>
      </tbody></table>`,
    formulas: [
      'Bridge sentence: "A ___ is a kind of / part of / used for / opposite of ___"',
      'Keep the order: if A : B is small : big, the answer must also be small : big',
      'Make the sentence more specific if two options fit',
    ],
    tricks: [
      'Avoid answers that are only "related". They must have the SAME relationship.',
      'Check the direction: Paw : Cat means the paw belongs to the cat, so Hoof : Horse (not Horse : Hoof).',
      'For "which pair is NOT similar", three options share the bridge sentence and one breaks it.',
      'Two-blank questions: one word must fit BOTH sentences. Try each option in both.',
    ],
    patterns: [
      ['A : B :: C : ?', 'Bridge sentence on A : B, apply to C'],
      ['Pick the pair like A : B', 'Same bridge, same order'],
      ['Which pair is NOT similar', 'Three fit the bridge, find the one that doesn\'t'],
      ['One word for two blanks', 'Test each option in both sentences'],
    ],
  },
  questions: [
    { pdf: '5.25.29', level: 'easy', q: 'CUP : LIP :: BIRD : ?', options: ['Bush', 'Grass', 'Forest', 'Beak'], answer: 3,
      steps: ['Bridge: the lip is the edge/mouth part of a cup.', 'The mouth part of a bird is its beak.'] },
    { pdf: '5.25.31', level: 'easy', q: 'Paw : Cat :: Hoof : ?', options: ['Lamb', 'Elephant', 'Lion', 'Horse'], answer: 3,
      steps: ['A cat walks on paws.', 'Which animal walks on hooves? Horse.'] },
    { pdf: '5.25.28', level: 'easy', q: 'Cobra is related to Snake as Leopard is related to:', options: ['Tiger', 'Lion', 'Cat', 'Zebra'], answer: 2,
      steps: ['A cobra is a kind of snake.', 'A leopard is a kind of (big) cat.'] },
    { pdf: '5.25.38', level: 'medium', q: 'Skirmish : War :: Disease : ?', options: ['Medicine', 'Patient', 'Epidemic', 'Infection'], answer: 2,
      steps: ['A skirmish is a small fight; a war is the large version.', 'Disease in one person → epidemic, the large-scale version.'], trick: 'Degree: small → big.' },
    { pdf: '5.25.43', level: 'easy', q: 'Molecule : Atoms. Choose the most similar pair.', options: ['family : sisters', 'light : bulb', 'tissue : cells', 'body : limb'], answer: 2,
      steps: ['A molecule is made up of atoms (whole : its many basic units).', 'A tissue is made up of cells. Same relationship.'] },
    { pdf: '5.25.44', level: 'easy', q: 'Limp : Walk. Choose the most similar pair.', options: ['flap : fly', 'run : race', 'stutter : talk', 'chew : digest'], answer: 2,
      steps: ['To limp is to walk with difficulty (a faulty walk).', 'To stutter is to talk with difficulty.'] },
    { pdf: '5.25.36', level: 'easy', q: 'ABRIDGE : LENGTHEN. Choose the pair related in the same way.', options: ['root : trunk', 'stop : end', 'lend : borrow', 'prize : reserve'], answer: 2,
      steps: ['Abridge (shorten) is the opposite of lengthen.', 'Lend is the opposite of borrow.'] },
    { pdf: '5.25.40', level: 'medium', q: 'QUISLING : BETRAY. Choose the pair that best expresses the same relation.', options: ['taunt : provoke', 'inception : termination', 'juggernaut : crush', 'obstinate : preserve'], answer: 2,
      steps: ['A quisling is a traitor: someone who betrays.', 'A juggernaut is a huge force that crushes whatever is in its way.'] },
    { pdf: '5.25.18', level: 'hard', q: 'FELINE : CATS. Which pair does NOT express a similar relationship?', options: ['Equine : Horses', 'Wolverine : Wolves', 'Ovine : Sheep', 'Cervine : Deer'], answer: 1,
      steps: ['Feline = the adjective for cats. Equine (horses), ovine (sheep) and cervine (deer) are also adjectives.', 'A wolverine is a separate animal, not an adjective. The adjective for wolves is "lupine".'] },
    { pdf: '5.23.2', level: 'medium', q: 'One word for both blanks: I. This course teaches you not to ____ to temptations. II. We hope to increase our ____ of rice this year.', options: ['succumb', 'produce', 'yield', 'share', 'submit'], answer: 2,
      steps: ['I: "yield to temptation" = give in. ✓ (succumb also fits I, but not II).', 'II: "yield of rice" = amount produced. ✓', 'Only "yield" fits both.'] },
    { pdf: '5.23.3', level: 'easy', q: 'One word for both blanks: I. Boats take more time going against the ____ of the river. II. She keeps herself abreast of ____ events.', options: ['flow', 'latest', 'water', 'all', 'current'], answer: 4,
      steps: ['"Against the current" of a river ✓. "Current events" = recent news ✓.'] },
  ],
});
