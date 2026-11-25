APT.addTopic({
  id: 'gk-computers',
  section: 'general',
  title: 'Computer Knowledge',
  tagline: 'Hardware you can touch, software you can\'t, and the words in between.',
  pdfTopics: ['4.3', '4.1', '4.2', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10', '4.11', '4.0', '6.6'],
  concepts: {
    story: [
      'A computer is a kitchen. <b>Input devices</b> (keyboard, scanner, mic) bring in ingredients. The <b>CPU</b> is the chef. <b>RAM</b> is the counter top: fast, but it\'s wiped clean when the power goes. The <b>hard disk</b> is the fridge: slower, but it keeps things. <b>Output devices</b> (monitor, printer) serve the dish.',
      '<b>Hardware</b> is anything you can touch. <b>Software</b> is the recipe: instructions you can\'t touch.',
    ],
    memory: 'Input → Process (CPU) → Output, with Storage on the side. RAM forgets, ROM remembers.',
    extra: `<h2>Must-know facts</h2>
      <table class="mini-table"><tbody>
        <tr><th>Units</th><td>4 bits = nibble · 8 bits = byte · 1024 KB = 1 MB · 1024 MB = 1 GB</td></tr>
        <tr><th>Memory</th><td>RAM = volatile (temporary) · ROM = non-volatile, built-in hardware</td></tr>
        <tr><th>Translators</th><td>Assembler: assembly → machine · Compiler: whole program at once · Interpreter: line by line</td></tr>
        <tr><th>Language</th><td>Machine language (binary) is the only one the computer understands without translation</td></tr>
        <tr><th>Booting</th><td>Cold boot = switching on from off · Warm boot = restarting a computer that is on</td></tr>
        <tr><th>Excel</th><td>Data in rows and columns · a cell is identified by its address (B4) · contents show in the formula bar</td></tr>
        <tr><th>People</th><td>Turing Award = "Nobel of computing" · Tim Berners-Lee = WWW and the semantic web · Asimov = three laws of robotics</td></tr>
      </tbody></table>`,
    formulas: [
      'ALU = Arithmetic Logic Unit (does arithmetic and comparisons) · CU = Control Unit',
      'Modem = MOdulator–DEModulator',
      'Download = receive from a server · Upload = send to a server',
      'File compression = store many files in less space (ZIP)',
    ],
    tricks: [
      '"Which is NOT …" questions: find the odd one by asking "can I touch it?" or "does it store / input / output?"',
      'Abbreviations come up a lot. Learn RAM, ROM, CPU, ALU, URL, HTML, HTTP, IP, LAN/WAN.',
      'Keyboard shortcuts: Ctrl+C copy, Ctrl+X cut, Ctrl+V paste, Ctrl+Z undo, Ctrl+click selects several sheets in Excel.',
    ],
    patterns: [
      ['Input or output device?', 'Brings data in = input; shows/prints = output'],
      ['Which is software / hardware?', 'Can you touch it?'],
      ['Units and number systems', 'Powers of 2, binary uses only 0 and 1'],
      ['MS Office basics', 'Word = documents, Excel = spreadsheets, PowerPoint = slides'],
    ],
  },
  questions: [
    { pdf: '4.3.1', level: 'easy', q: 'A ____ is an example of an input device.', options: ['printer', 'monitor', 'scanner', 'central processing unit', 'none of these'], answer: 2,
      steps: ['A scanner brings an image INTO the computer. Printer and monitor are output devices.'] },
    { pdf: '4.3.44', level: 'easy', q: '____ consists of volatile chips that temporarily store data or instructions.', options: ['CPU', 'ROM', 'RMA', 'RAM', 'None of these'], answer: 3,
      steps: ['Volatile = loses its contents when the power goes off. That is RAM.', 'ROM is non-volatile.'] },
    { pdf: '4.3.45', level: 'easy', q: 'In a computer, how many bits does a nibble signify?', options: ['4', '8', '16', '32', '64'], answer: 0,
      steps: ['A byte is 8 bits, and a nibble is half a byte = 4 bits.'] },
    { pdf: '4.3.14', level: 'easy', q: 'How many kilobytes make a megabyte?', options: ['128', '1024', '256', '512', '64'], answer: 1,
      steps: ['Computer memory counts in powers of 2: 2¹⁰ = 1024 KB = 1 MB.'] },
    { pdf: '4.3.5', level: 'easy', q: 'A translator program used for assembly language is called:', options: ['Compiler', 'Assembler', 'Interpreter', 'Translator', 'Operating System'], answer: 1,
      steps: ['Assembly language → machine code is done by an assembler.', 'Compilers and interpreters translate high-level languages.'] },
    { pdf: '4.3.40', level: 'easy', q: 'Which language is directly understood by the computer without a translation program?', options: ['BASIC', 'Assembly language', 'High-level language', 'C language', 'Machine language'], answer: 4,
      steps: ['Only machine language (binary 0s and 1s) runs directly. Everything else needs translating.'] },
    { pdf: '4.3.41', level: 'medium', q: 'Which of the following is NOT true about a compiler?', options: ['Translates high-level language into machine language', 'Translates the entire source program into a machine-language program', 'It is involved in the program\'s execution', 'Is a translating program', 'Is useful to run a program'], answer: 2,
      steps: ['A compiler translates the whole program BEFORE it runs, then its job is done.', 'It does not take part in execution (an interpreter does, line by line).'] },
    { pdf: '4.3.33', level: 'easy', q: 'Restarting a computer that is already on is called:', options: ['Logging off', 'Cold booting', 'Shut down', 'Warm booting', 'Shutting off'], answer: 3,
      steps: ['Warm boot = restart while on. Cold boot = start from fully off.'] },
    { pdf: '4.3.12', level: 'easy', q: 'Which of the following is an example of a binary number?', options: ['6AH1', '100101', '005', 'ABCD', '23456'], answer: 1,
      steps: ['Binary uses only the digits 0 and 1. Only 100101 qualifies.'] },
    { pdf: '4.5.4', level: 'easy', q: 'In Excel, the contents of the active cell are displayed in the:', options: ['footer bar', 'tool bar', 'task bar', 'menu bar', 'formula bar'], answer: 4,
      steps: ['The formula bar above the grid shows what is in the selected cell (including its formula).'] },
    { pdf: '4.5.6', level: 'easy', q: 'Combining two cells into a single cell in Excel is called:', options: ['Join cells', 'Merge cells', 'Merge table', 'Join table', 'None of these'], answer: 1,
      steps: ['Home → Merge & Center: "merge cells".'] },
    { pdf: '4.7.2', level: 'easy', q: 'Which can be used to store a large number of files in a small amount of storage space?', options: ['File adjustment', 'File copying', 'File reading', 'File compatibility', 'File compression'], answer: 4,
      steps: ['Compression (e.g. ZIP) shrinks files so they take less space.'] },
    { pdf: '4.3.20', level: 'easy', q: 'In computing, the "Nobel Prize" is generally known as the:', options: ['Von Neumann award', 'Turing award', 'Pascal award', 'Napier award'], answer: 1,
      steps: ['The ACM A.M. Turing Award, named after Alan Turing, is called the Nobel Prize of computing.'] },
    { pdf: '4.3.26', level: 'easy', q: 'Who gave the (so-called) Three Laws of Robotics?', options: ['von Neumann', 'Isaac Asimov', 'Alan Turing', 'Sabeer Bhatia'], answer: 1,
      steps: ['Science-fiction writer Isaac Asimov introduced them in his 1942 story "Runaround".'] },
  ],
});
