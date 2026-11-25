APT.addTopic({
  id: 'lr-syllogism',
  section: 'reasoning',
  title: 'Syllogism, Statements & Conclusions',
  tagline: 'Circles inside circles: what must be true?',
  pdfTopics: ['2.40', '2.36', '2.39', '2.37', '2.13', '2.11'],
  concepts: {
    story: [
      '"All cats are animals" means the cat circle sits fully inside the animal circle. "Some animals are pets" means two circles overlap a little.',
      'A conclusion follows only if it is true in <b>every</b> picture you can draw. If you can draw even one picture where it\'s false, it does not follow.',
    ],
    memory: 'Only what MUST be true follows. "Could be" is not enough.',
    extra: `<h2>The four statement types</h2>
      <table class="mini-table"><thead><tr><th>Statement</th><th>Picture</th><th>Reverse that is always true</th></tr></thead><tbody>
        <tr><td>All A are B</td><td>A inside B</td><td>Some B are A</td></tr>
        <tr><td>No A is B</td><td>A and B apart</td><td>No B is A</td></tr>
        <tr><td>Some A are B</td><td>A and B overlap</td><td>Some B are A</td></tr>
        <tr><td>Some A are not B</td><td>part of A outside B</td><td>(no safe reverse)</td></tr>
      </tbody></table>`,
    formulas: [
      'All + All = All (All A are B, All B are C → All A are C)',
      'All + No = No (All A are B, No B is C → No A is C)',
      'Some + All = Some (Some A are B, All B are C → Some A are C)',
      'All + Some, or Some + Some → no definite conclusion',
      '"All A are B" also means: whatever is not B is not A',
    ],
    tricks: [
      '<b>Draw the smallest possible overlap</b>. If the conclusion survives that, it follows.',
      'Two "All" statements about the same big group (all bottles are marbles, all glasses are marbles) tell you nothing about bottles vs glasses.',
      '<b>Courses of action</b>: an action follows if it is practical and directly helps solve the stated problem.',
      '<b>"If the first two are true, the third is …"</b>: answer true, false, or uncertain.',
    ],
    patterns: [
      ['Statements + conclusions', 'Draw circles, test every conclusion'],
      ['Pick the logically linked set of three', 'Find two premises whose conclusion is the third'],
      ['Course of action', 'Practical + addresses the problem'],
      ['True / false / uncertain chains', 'Write the order, check what is fixed'],
    ],
  },
  questions: [
    {
      pdf: '2.40.12', level: 'easy',
      q: 'I. All office spaces on the 8th floor have wall-to-wall carpeting. II. No wall-to-wall carpeting is maroon. III. None of the offices on the 8th floor has maroon wall-to-wall carpeting. If I and II are true, III is:',
      options: ['true', 'false', 'uncertain', 'none'], answer: 0,
      steps: ['All 8th-floor offices → carpeted. No carpeting → maroon.', 'All + No = No: no 8th-floor office has maroon carpeting. True.'],
      trick: 'All + No = No.',
    },
    {
      pdf: '2.40.13', level: 'medium',
      q: 'Fact 1: All chickens are birds. Fact 2: Some chickens are hens. Fact 3: Female birds lay eggs. Which must also be a fact? I. All birds lay eggs. II. Hens are birds. III. Some chickens are not hens.',
      options: ['II only', 'II and III only', 'I, II and III', 'None of the statements is a known fact'], answer: 3,
      steps: [
        'I: only female birds lay eggs, so not all birds. ✗',
        'II: we only know that SOME hens (the chicken ones) are birds. Other hens are not covered. ✗',
        'III: "some chickens are hens" doesn\'t tell us whether ALL chickens are hens. ✗',
        'None of them must be true.',
      ],
    },
    {
      pdf: '2.39.15', level: 'easy',
      q: 'Statements: All bottles are marbles. All glasses are marbles. Conclusions: 1. All glasses are bottles. 2. Some marbles are not glasses.',
      options: ['Only 1 follows', 'Only 2 follows', 'Either 1 or 2 follows', 'Neither 1 nor 2 follows'], answer: 3,
      steps: ['Bottles and glasses are both inside the marble circle, but they may or may not overlap.', '1 fails: the glasses circle can be away from the bottles circle.', '2 fails: the glasses circle could be exactly as big as the marbles circle.', 'Neither follows.'],
    },
    {
      pdf: '2.40.3', level: 'easy',
      q: 'Statements: 1. An ostrich lays eggs. 2. All birds lay eggs. 3. Some birds can fly. 4. An ostrich cannot fly. 5. An ostrich is a bird. 6. An ostrich cannot swim. Which set is logically related?',
      options: ['251', '125', '453', '532'], answer: 0,
      steps: ['2: all birds lay eggs. 5: an ostrich is a bird.', 'So 1 follows: an ostrich lays eggs. Premises first, conclusion last: 2-5-1.'],
    },
    {
      pdf: '2.36.4', level: 'easy',
      q: 'A. All falcons fly high. B. All falcons are blind. C. All falcons are birds. D. All birds are yellow. E. All birds are thirsty. F. All falcons are yellow. Which set is logically related?',
      options: ['ABC', 'CDF', 'DEF', 'BCA'], answer: 1,
      steps: ['C: falcons ⊂ birds. D: birds ⊂ yellow things.', 'All + All = All → F: all falcons are yellow. Set CDF.'],
    },
    {
      pdf: '2.36.5', level: 'medium',
      q: 'A. No wires are hooks. B. Some springs are hooks. C. All springs are wires. D. Some hooks are not wires. E. No hook is a spring. F. All wires are springs. Which set is logically related?',
      options: ['AEF', 'BCF', 'BEF', 'ACE'], answer: 3,
      steps: ['C: all springs are wires. A: no wire is a hook.', 'All + No = No → no spring is a hook = E (no hook is a spring). Set ACE.'],
    },
    {
      pdf: '2.37.9', level: 'easy',
      q: 'Statement: Many people in ward X are diagnosed with a fatal type of malaria. Actions: I. The municipality should carry out extensive fumigation in ward X. II. People in the area should be told how to avoid mosquito bites.',
      options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Both I and II follow'], answer: 3,
      steps: ['Malaria spreads through mosquitoes.', 'I kills mosquitoes and II prevents bites. Both are practical and tackle the cause.', 'Both follow.'],
    },
    {
      pdf: '2.37.10', level: 'medium',
      q: 'Statement: Severe drought has set in across several parts of the country. Actions: I. The government should immediately give financial help to those affected. II. Food, water and fodder should immediately be sent to these areas to save people and cattle.',
      options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither follows'], answer: 1,
      steps: ['In a drought the immediate danger is lack of food and water. II tackles that directly.', 'Money doesn\'t help if there\'s nothing to buy, so I is not the immediate step.', 'Only II follows (the PDF key agrees).'],
    },
  ],
});
