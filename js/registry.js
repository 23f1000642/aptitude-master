/* Global registry that every data file adds itself to. */
window.APT = {
  topics: [],
  bankIndex: [],
  bank: {},
  addTopic(topic) {
    this.topics.push(topic);
  },
  setBankIndex(list) {
    this.bankIndex = list;
  },
  addBank(id, questions) {
    this.bank[id] = questions;
  },
};
