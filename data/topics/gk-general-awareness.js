APT.addTopic({
  id: 'gk-general-awareness',
  section: 'general',
  title: 'General Awareness (Static GK)',
  tagline: 'Facts that don\'t change: history, geography, science, the Constitution.',
  pdfTopics: ['6.11', '6.12', '6.0', '6.1', '6.2', '6.3', '6.4', '6.5', '6.7', '6.8', '6.9', '6.10', '6.13', '6.14', '6.15', '6.16', '6.17', '6.18', '6.19', '6.20', '6.21', '6.22', '6.23', '6.24', '3.1'],
  concepts: {
    story: [
      'General awareness has two kinds of facts. <b>Static GK</b> never changes: who was Viceroy in 1942, which river flows past Badrinath. <b>Current affairs</b> change every month: summits, awards, appointments.',
      'Static GK pays off most because the same facts come up again and again. For current affairs, read a monthly digest in the 6 months before your exam.',
    ],
    memory: 'Group facts into small boxes (rivers, firsts, awards, amendments) and revise one box a day.',
    extra: `<h2>High-frequency static facts</h2>
      <table class="mini-table"><tbody>
        <tr><th>National flag</th><td>Width : length = 2 : 3</td></tr>
        <tr><th>Land neighbours of India</th><td>7: Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, Myanmar</td></tr>
        <tr><th>42nd Amendment (1976)</th><td>Added "Socialist", "Secular", "Integrity" to the Preamble</td></tr>
        <tr><th>Quit India (1942)</th><td>Viceroy: Lord Linlithgow</td></tr>
        <tr><th>Alexander's invasion</th><td>Nanda dynasty ruled Magadha</td></tr>
        <tr><th>First metro in India</th><td>Kolkata, 1984</td></tr>
        <tr><th>Dronacharya Award</th><td>For sports coaches (Arjuna = sportspersons)</td></tr>
        <tr><th>Polo</th><td>Originated in Manipur</td></tr>
        <tr><th>Most / least electronegative</th><td>Fluorine / Caesium</td></tr>
      </tbody></table>`,
    formulas: [
      'Science: plant cells have cell walls, animal cells don\'t · study of fossils = palaeontology',
      'Economics: substitutes (tea/coffee) vs complements (printer/ink)',
      'UN: 6 principal organs (General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ, Secretariat). ILO is a specialised agency, not an organ',
      'UN official languages: Arabic, Chinese, English, French, Russian, Spanish',
    ],
    tricks: [
      'Eliminate options that belong to another category (e.g. a novel by a different author).',
      'For "first" and "only" questions, keep a single list of Indian and world firsts.',
      'Old current-affairs questions in the PDF (2015–2019) test facts from that time. Check today\'s situation before using them in an exam.',
    ],
    patterns: [
      ['History (who / when)', 'Link events to rulers and Viceroys'],
      ['Geography (where)', 'Rivers, passes, temples, states'],
      ['Science basics', 'Cell, elements, everyday chemistry (Teflon, fluorine)'],
      ['Polity / economy', 'Amendments, UN, types of goods'],
    ],
  },
  questions: [
    { pdf: '6.12.1', level: 'easy', q: 'Who was the Viceroy of India when the Quit India Resolution was passed in 1942?', options: ['Lord Linlithgow', 'Lord Wavell', 'Lord Willingdon', 'Lord Mountbatten'], answer: 0,
      steps: ['Lord Linlithgow was Viceroy from 1936 to 1943, covering 1942.', 'Wavell followed him (1943–47), then Mountbatten.'] },
    { pdf: '6.12.4', level: 'easy', q: 'Which dynasty ruled north India when Alexander the Great invaded (326 BCE)?', options: ['Gupta', 'Maurya', 'Sakya', 'Nanda'], answer: 3,
      steps: ['The Nanda dynasty ruled Magadha then. Chandragupta Maurya overthrew it a few years later.'] },
    { pdf: '6.0.34', level: 'medium', q: '"Socialist", "Secular" and "Unity and Integrity of the Nation" were added to the Preamble by which amendment?', options: ['38th Amendment, 1975', '42nd Amendment, 1976', '31st Amendment, 1973', '44th Amendment, 1978'], answer: 1,
      steps: ['The 42nd Amendment (1976, during the Emergency) is called the "mini-Constitution". It made these additions.'] },
    { pdf: '6.11.34', level: 'easy', q: 'The ratio of the width of our National Flag to its length is:', options: ['3 : 5', '2 : 3', '2 : 4', '3 : 4'], answer: 1,
      steps: ['The Flag Code fixes it at 2 : 3.'] },
    { pdf: '6.0.29', level: 'easy', q: 'India shares land borders with how many countries?', options: ['Six', 'Seven', 'Eight', 'Nine'], answer: 1,
      steps: ['Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, Myanmar = 7.'] },
    { pdf: '6.11.38', level: 'easy', q: 'Badrinath is situated on the bank of which river?', options: ['Ganga', 'Yamuna', 'Alaknanda', 'Saraswati'], answer: 2,
      steps: ['Badrinath (Uttarakhand) lies on the Alaknanda, which later joins the Bhagirathi to form the Ganga.'] },
    { pdf: '6.11.22', level: 'easy', q: 'In which Indian state did the game of Polo originate?', options: ['Meghalaya', 'Rajasthan', 'Manipur', 'West Bengal'], answer: 2,
      steps: ['Modern polo developed from "Sagol Kangjei", played in Manipur.'] },
    { pdf: '6.0.37', level: 'easy', q: 'The first underground railway (metro) in India opened in 1984 in:', options: ['Mumbai', 'Chennai', 'Kolkata', 'Bangalore'], answer: 2,
      steps: ['The Kolkata Metro started in October 1984.'] },
    { pdf: '6.11.40', level: 'medium', q: 'Which of the following is NOT a principal organ of the United Nations?', options: ['International Labour Organization', 'Security Council', 'International Court of Justice', 'General Assembly'], answer: 0,
      steps: ['The ILO is a specialised agency, not one of the six principal organs.'] },
    { pdf: '6.0.11', level: 'medium', q: 'Which are the most and the least electronegative elements in the periodic table?', options: ['Fluorine and Caesium', 'Hydrogen and Helium', 'Carbon and Oxygen', 'Chlorine and Fluorine'], answer: 0,
      steps: ['Electronegativity increases towards the top right of the table: fluorine is highest.', 'It is lowest at the bottom left: caesium (among stable elements).'] },
    { pdf: '6.0.14', level: 'easy', q: 'Which is NOT present in animal cells?', options: ['Cell walls', 'Mitochondria', 'Ribosomes', 'Cytoplasm'], answer: 0,
      steps: ['Cell walls are found in plant (and fungal, bacterial) cells. Animal cells have only a membrane.'] },
    { pdf: '6.0.20', level: 'easy', q: 'Which is NOT an example of complementary goods?', options: ['Printers and ink cartridges', 'Tea and sugar', 'Mobile phones and SIM cards', 'Tea and coffee'], answer: 3,
      steps: ['Complements are used together. Tea and coffee replace each other, so they are substitutes.'] },
    { pdf: '6.11.51', level: 'easy', q: 'Which of the following was NOT written by Munshi Premchand?', options: ['Gaban', 'Godan', 'Guide', 'Mansarovar'], answer: 2,
      steps: ['"Guide" (1958) is by R. K. Narayan. The others are Premchand\'s.'] },
    { pdf: '6.11.27', level: 'easy', q: 'The Dronacharya Award is given to:', options: ['Sportsmen', 'Coaches', 'Umpires', 'Sports editors'], answer: 1,
      steps: ['Named after the guru Dronacharya, it honours coaches. Arjuna Awards go to sportspersons.'] },
  ],
});
