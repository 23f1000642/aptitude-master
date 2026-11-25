APT.addTopic({
  id: 'en-vocabulary',
  section: 'english',
  title: 'Vocabulary: Synonyms, Antonyms, One-word & Idioms',
  tagline: 'Know the word, or break it into pieces and guess smart.',
  pdfTopics: ['5.1', '5.14', '5.24', '5.5', '5.9', '5.13', '5.17'],
  concepts: {
    story: [
      'Words are built like LEGO. "In-" means not, "-ible" means can be, "correct" is the middle brick. Put them together and "incorrigible" means "cannot be corrected".',
      'When you don\'t know a word, break it into bricks, think of a word you DO know with the same brick, and use the sentence around it as a clue.',
    ],
    memory: 'Prefix + root + suffix. Then check the "feel": positive or negative?',
    extra: `<h2>Bricks worth knowing</h2>
      <table class="mini-table"><tbody>
        <tr><th>in-, im-, un-, a-</th><td>not (inimical, atypical)</td></tr>
        <tr><th>mal-, mis-</th><td>bad, wrong (malign, mistrust)</td></tr>
        <tr><th>bene-</th><td>good (benefit, benevolent)</td></tr>
        <tr><th>-cide</th><td>killing (pesticide)</td></tr>
        <tr><th>-logy, -ologist</th><td>study of / one who studies (archaeology)</td></tr>
        <tr><th>chron-</th><td>time (chronic, chronology)</td></tr>
        <tr><th>-phobia / -phile</th><td>fear of / lover of</td></tr>
      </tbody></table>`,
    formulas: [
      '<b>Synonym</b> = same meaning (yearn = crave). <b>Antonym</b> = opposite (hasten ↔ dawdle)',
      '<b>One-word substitution</b>: a single word for a phrase (one in charge of a museum = curator)',
      '<b>Idiom</b>: a phrase whose meaning is not the sum of its words (spick and span = neat and clean)',
      '<b>"Most inappropriate in context"</b>: pick the word that doesn\'t fit the given sentence',
    ],
    tricks: [
      '<b>Feel test</b>: decide whether the word sounds positive or negative, then remove the options with the wrong feel.',
      'For antonyms, first think of a synonym in your own words, then find its opposite.',
      'Watch for look-alike traps: collusion (secret agreement) vs collision (crash) vs coalition (alliance).',
      'For idioms, picture the scene literally. "Drawing a very long bow" = stretching the truth.',
      'Make a 10-word list every day and revise it on day 3 and day 7.',
    ],
    patterns: [
      ['Closest in meaning', 'Synonym; check the feel and the root'],
      ['Opposite in meaning', 'Find a synonym first, then its opposite'],
      ['One word for a phrase', 'Look for roots (-ologist, -cide, in-)'],
      ['Idioms and phrases', 'Picture it literally, then the figurative meaning'],
    ],
  },
  questions: [
    { pdf: '5.1.73', level: 'easy', q: 'Choose the word that best expresses the meaning of: <b>Yearn</b>', options: ['Deny', 'Accept', 'Confront', 'Crave'], answer: 3,
      steps: ['To yearn = to want something very strongly.', 'Crave means the same: a strong desire.'] },
    { pdf: '5.1.71', level: 'easy', q: 'Choose the word that best expresses the meaning of: <b>Camouflage</b>', options: ['Disguise', 'Cover', 'Demonstrate', 'Fabric'], answer: 0,
      steps: ['Camouflage = hiding something by making it look like its surroundings (soldiers\' uniforms).', 'Disguise is closest. "Cover" is too general.'] },
    { pdf: '5.14.2', level: 'easy', q: 'Choose the word opposite in meaning to: <b>Hasten</b>', options: ['Dash', 'Dawdle', 'Hurry', 'Scurry'], answer: 1,
      steps: ['Hasten = hurry. Dash, hurry and scurry all mean moving fast.', 'Dawdle = move slowly, waste time. That\'s the opposite.'], trick: 'Synonyms among the options are traps.' },
    { pdf: '5.14.3', level: 'medium', q: 'Choose the word opposite in meaning to: <b>Lackadaisical</b>', options: ['Enthusiastic', 'Slow', 'Fast', 'Nervous'], answer: 0,
      steps: ['Lackadaisical = lacking energy or interest, lazy and careless.', 'Its opposite is enthusiastic: full of energy and interest.'] },
    { pdf: '5.14.4', level: 'easy', q: 'Choose the word opposite in meaning to: <b>Sporadic</b>', options: ['Irregular', 'Uneven', 'Frequent', 'Regularity'], answer: 2,
      steps: ['Sporadic = happening only now and then.', 'Opposite: frequent. ("Regularity" is a noun, but sporadic is an adjective.)'], trick: 'Match the part of speech.' },
    { pdf: '5.14.6', level: 'medium', q: 'Choose the exact opposite of: <b>inimical</b>', options: ['Emotional', 'Neutral', 'Cheerful', 'Friendly'], answer: 3,
      steps: ['In- (not) + amicus (friend) → inimical = unfriendly, harmful.', 'Opposite: friendly.'], trick: 'Break the word into bricks.' },
    { pdf: '5.9.21', level: 'easy', q: 'One word for: <b>One who cannot be corrected</b>', options: ['Incurable', 'Incorrigible', 'Hardened', 'Invulnerable'], answer: 1,
      steps: ['In- (not) + corrig (correct) + -ible (can be) = cannot be corrected.', 'Incurable is for diseases. Invulnerable means cannot be hurt.'] },
    { pdf: '5.9.25', level: 'easy', q: 'One word for: <b>One who is in charge of a museum</b>', options: ['Curator', 'Supervisor', 'Caretaker', 'Warden'], answer: 0,
      steps: ['A curator looks after a museum or gallery collection.'] },
    { pdf: '5.9.23', level: 'easy', q: 'One word for: <b>The study of ancient societies</b>', options: ['Anthropology', 'Archaeology', 'History', 'Ethnology'], answer: 1,
      steps: ['Archae- = ancient, -ology = study of.', 'Anthropology studies humans in general; ethnology compares cultures.'] },
    { pdf: '5.9.27', level: 'easy', q: 'Nearest in meaning: <b>Mayhem</b>', options: ['Jubilation', 'Havoc', 'Excitement', 'Defeat'], answer: 1,
      steps: ['Mayhem = violent disorder, chaos.', 'Havoc = widespread destruction or chaos. Same feel (negative).'] },
    { pdf: '5.9.9', level: 'medium', q: 'OBVIATE: "The new mass transit system may obviate the need for personal cars." Which word is <b>most inappropriate</b> in this context?', options: ['Prevent', 'Forestall', 'Preclude', 'Bolster'], answer: 3,
      steps: ['Obviate = remove the need for, prevent.', 'Prevent, forestall and preclude all fit.', 'Bolster = support or strengthen, which is the opposite idea.'] },
    { pdf: '5.5.1', level: 'medium', q: 'Idiom: <b>To draw the long bow</b>', options: ['To put up high demands', 'To make an exaggerated statement', 'To demand a very high price', 'To overestimate oneself'], answer: 1,
      steps: ['Archers told tall tales about the long bow\'s range.', 'So "to draw the long bow" = to exaggerate.'] },
    { pdf: '5.5.2', level: 'easy', q: 'Idiom: <b>Spick and span</b>', options: ['A ready-made something', 'Outspoken', 'Garrulous', 'Neat and clean'], answer: 3,
      steps: ['"Spick and span" describes a room or thing that is very neat and clean.'] },
    { pdf: '5.9.32', level: 'easy', q: '"I cannot <b>put up with</b> that nasty fellow." The phrase means:', options: ['Praise', 'Forgive', 'Endure', 'Control'], answer: 2,
      steps: ['"Put up with" = tolerate, endure something unpleasant.'] },
  ],
});
