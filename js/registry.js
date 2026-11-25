/* Global registry that every data file adds itself to. */
window.APT = {
  sections: [
    { id: 'quant', title: 'Quantitative Aptitude', short: 'Quant' },
    { id: 'reasoning', title: 'Logical Reasoning', short: 'Reasoning' },
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
