/* Global registry that every data file adds itself to. */
window.APT = {
  sections: [
    { id: 'quant', title: 'Quantitative Aptitude', short: 'Quant' },
    { id: 'di', title: 'Data Interpretation', short: 'DI' },
    { id: 'reasoning', title: 'Logical Reasoning', short: 'Reasoning' },
    { id: 'english', title: 'English Language', short: 'English' },
    { id: 'general', title: 'Computer & General Awareness', short: 'GA' },
    { id: 'gate', title: 'GATE General Aptitude (PYQ)', short: 'GATE' },
  ],
  topics: [],
  bankIndex: [],
  bank: {},
  addTopic(topic) {
    if (!topic.section) topic.section = 'quant';
    this.topics.push(topic);
  },
  setBankIndex(list) {
    this.bankIndex = list;
  },
  addBank(id, questions) {
    this.bank[id] = questions;
  },
};
