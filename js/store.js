/* Progress tracking kept in the browser (localStorage), with a safe fallback. */
(function () {
  const KEY = 'aptitude-master:v1';
  let memory = { attempts: {}, revealed: {}, bookmarks: {}, theme: null };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) memory = Object.assign(memory, JSON.parse(raw));
    } catch (e) { /* storage unavailable: keep in memory */ }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* ignore */ }
  }

  load();

  window.Store = {
    attempt(qid, choice, correct) {
      memory.attempts[qid] = { choice, correct, at: Date.now() };
      save();
    },
    getAttempt(qid) { return memory.attempts[qid] || null; },
    reveal(qid) { memory.revealed[qid] = true; save(); },
    isRevealed(qid) { return !!memory.revealed[qid]; },
    toggleBookmark(qid) {
      if (memory.bookmarks[qid]) delete memory.bookmarks[qid];
      else memory.bookmarks[qid] = true;
      save();
      return !!memory.bookmarks[qid];
    },
    isBookmarked(qid) { return !!memory.bookmarks[qid]; },
    bookmarks() { return Object.keys(memory.bookmarks); },
    topicStats(questionIds) {
      let done = 0, right = 0;
      questionIds.forEach((id) => {
        const a = memory.attempts[id];
        if (a) { done++; if (a.correct) right++; }
      });
      return { done, right, total: questionIds.length };
    },
    resetTopic(questionIds) {
      questionIds.forEach((id) => { delete memory.attempts[id]; delete memory.revealed[id]; });
      save();
    },
    theme(value) {
      if (value !== undefined) { memory.theme = value; save(); }
      return memory.theme;
    },
  };
})();
