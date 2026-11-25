/* Aptitude Master – single page app (no build step, no framework). */
(function () {
  const { esc, el, progressBar, normalise, LETTERS } = window.R;
  const app = document.getElementById('app');
  const sidebar = document.getElementById('sidebar');
  const topicById = {};
  const sectionTopics = (sec) => APT.topics.filter((t) => t.section === sec);
  APT.sections.forEach((sec) => sectionTopics(sec.id).forEach((t, i) => { t.index = i + 1; }));
  APT.topics.forEach((t) => {
    t.questions.forEach((q, j) => { q.qid = `${t.id}#${j + 1}`; q.no = j + 1; });
    topicById[t.id] = t;
  });

  // PDF question id -> solved question (to link the practice bank to full solutions)
  const solvedByPdf = {};
  APT.topics.forEach((t) => t.questions.forEach((q) => { if (q.pdf) solvedByPdf[q.pdf] = { topic: t, q }; }));

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme || 'light';
    document.getElementById('themeBtn').innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
  }
  applyTheme(Store.theme());
  document.getElementById('themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    Store.theme(next);
    applyTheme(next);
  });

  /* ---------- sidebar ---------- */
  function qids(t) { return t.questions.map((q) => q.qid); }

  function renderSidebar(active) {
    const topics = APT.sections.map((sec) => `<div class="nav-head">${esc(sec.title)}</div>` +
      sectionTopics(sec.id).map((t) => {
        const s = Store.topicStats(qids(t));
        const doneMark = s.total && s.done === s.total ? ' done' : '';
        return `<a class="nav-item${active === t.id ? ' active' : ''}${doneMark}" href="#/topic/${t.id}">
          <span class="nav-num">${t.index}</span><span class="nav-title">${esc(t.title)}</span>
          <span class="nav-count">${s.done}/${s.total}</span></a>`;
      }).join('')).join('');
    const bankCount = APT.bankIndex.reduce((n, b) => n + b.count, 0);
    sidebar.innerHTML = `
      <a class="nav-item home${active === 'home' ? ' active' : ''}" href="#/">Home</a>
      ${topics}
      <div class="nav-head">Practice more</div>
      <a class="nav-item${active === 'bank' ? ' active' : ''}" href="#/bank">PDF question bank <span class="nav-count">${bankCount}</span></a>
      <a class="nav-item${active === 'bookmarks' ? ' active' : ''}" href="#/bookmarks">Bookmarked <span class="nav-count">${Store.bookmarks().length}</span></a>`;
  }

  document.getElementById('menuBtn').addEventListener('click', () => document.body.classList.toggle('nav-open'));
  sidebar.addEventListener('click', (e) => { if (e.target.closest('a')) document.body.classList.remove('nav-open'); });

  /* ---------- pages ---------- */
  function home() {
    renderSidebar('home');
    const totalQ = APT.topics.reduce((n, t) => n + t.questions.length, 0);
    const all = APT.topics.flatMap(qids);
    const s = Store.topicStats(all);
    const card = (t) => {
      const st = Store.topicStats(qids(t));
      return `<a class="topic-card" href="#/topic/${t.id}">
        <div class="topic-num">${t.index}</div>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.tagline)}</p>
        ${progressBar(st)}
      </a>`;
    };
    const sectionsHtml = APT.sections.map((sec) => {
      const list = sectionTopics(sec.id);
      if (!list.length) return '';
      const st = Store.topicStats(list.flatMap(qids));
      return `<section class="section-block" id="sec-${sec.id}">
        <div class="section-head"><h2 class="section-title">${esc(sec.title)}</h2>
        <span class="muted">${list.length} topics · ${st.total} questions · ${st.done} attempted</span></div>
        <div class="topic-grid">${list.map(card).join('')}</div></section>`;
    }).join('');
    app.innerHTML = `
      <section class="hero">
        <h1>Aptitude, made easy</h1>
        <p>Learn each idea like a story, try the question yourself, then open the step-by-step solution.</p>
        <p class="exams">Questions from <b>CAT 1994–2021</b>, <b>NIELIT 2016–2019</b> and <b>GATE</b>, as collected in the GATE Overflow aptitude book.</p>
        <div class="hero-stats">
          <div><b>${APT.sections.length}</b><span>sections</span></div>
          <div><b>${APT.topics.length}</b><span>topics</span></div>
          <div><b>${totalQ}</b><span>solved questions</span></div>
          <div><b>${APT.bankIndex.reduce((n, b) => n + b.count, 0)}</b><span>PDF practice questions</span></div>
          <div><b>${s.done}</b><span>attempted by you</span></div>
        </div>
      </section>
      <section class="how">
        <div class="how-step"><b>1. Concepts</b><span>Read the story, formulas and tricks.</span></div>
        <div class="how-step"><b>2. Attempt</b><span>Pick an option. You'll see right or wrong.</span></div>
        <div class="how-step"><b>3. Solution</b><span>Click "Show solution" for the steps.</span></div>
        <div class="how-step"><b>4. Revise</b><span>Come back after 3 days and 7 days.</span></div>
      </section>
      ${sectionsHtml}`;
  }

  function topicPage(id, tab) {
    const t = topicById[id];
    if (!t) return notFound();
    renderSidebar(id);
    tab = tab || 'concepts';
    const st = Store.topicStats(qids(t));
    const sibs = sectionTopics(t.section);
    const prev = sibs[t.index - 2];
    const next = sibs[t.index];
    const secTitle = (APT.sections.find((x) => x.id === t.section) || {}).title || '';
    app.innerHTML = `
      <div class="topic-head">
        <div class="crumb"><a href="#/">Home</a> / ${esc(secTitle)} / Topic ${t.index}</div>
        <h1>${esc(t.title)}</h1>
        <p class="tagline">${esc(t.tagline)}</p>
        <div class="topic-progress">${progressBar(st)}</div>
        <div class="tabs" role="tablist">
          <a role="tab" class="tab${tab === 'concepts' ? ' active' : ''}" href="#/topic/${id}/concepts">Concepts</a>
          <a role="tab" class="tab${tab === 'questions' ? ' active' : ''}" href="#/topic/${id}/questions">Questions <span class="pill">${t.questions.length}</span></a>
          <a role="tab" class="tab${tab === 'practice' ? ' active' : ''}" href="#/topic/${id}/practice">More from PDF</a>
        </div>
      </div>
      <div id="tabBody"></div>
      <div class="pager">
        ${prev ? `<a href="#/topic/${prev.id}">&larr; ${esc(prev.title)}</a>` : '<span></span>'}
        ${next ? `<a href="#/topic/${next.id}">${esc(next.title)} &rarr;</a>` : '<span></span>'}
      </div>`;
    const body = document.getElementById('tabBody');
    if (tab === 'concepts') renderConcepts(t, body);
    else if (tab === 'questions') renderQuestions(t, body);
    else renderTopicPractice(t, body);
  }

  function renderConcepts(t, body) {
    const c = t.concepts;
    const list = (arr, ordered) => `<${ordered ? 'ol' : 'ul'}>${arr.map((x) => `<li>${x}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
    body.innerHTML = `
      <section class="card story"><h2>The story</h2>${c.story.map((p) => `<p>${p}</p>`).join('')}
        ${c.memory ? `<div class="memory"><b>Remember:</b> ${c.memory}</div>` : ''}</section>
      ${c.extra ? `<section class="card">${c.extra}</section>` : ''}
      <section class="card"><h2>Formulas</h2>${list(c.formulas)}</section>
      <section class="card"><h2>Short tricks</h2>${list(c.tricks, true)}</section>
      <section class="card"><h2>Question patterns</h2>
        <table class="patterns"><thead><tr><th>When you see…</th><th>Do this</th></tr></thead>
        <tbody>${c.patterns.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table>
      </section>
      <a class="btn primary big" href="#/topic/${t.id}/questions">Start the ${t.questions.length} questions &rarr;</a>`;
  }

  /* ---------- question cards ---------- */
  function figuresHtml(list) {
    if (!list || !list.length) return '';
    return `<div class="q-figs">${list.map((f) => `<a href="data/figures/${esc(f)}" target="_blank" rel="noopener"><img src="data/figures/${esc(f)}" alt="Chart or table for this question" loading="lazy"></a>`).join('')}</div>`;
  }

  function questionCard(q, t) {
    const att = Store.getAttempt(q.qid);
    const revealed = Store.isRevealed(q.qid);
    const star = Store.isBookmarked(q.qid);
    let answerArea;
    if (q.options) {
      const longOpts = q.options.some((o) => o.replace(/<[^>]+>/g, '').length > 38);
      answerArea = `<div class="options${longOpts ? ' long' : ''}">${q.options.map((o, i) => {
        let cls = '';
        if (att) {
          if (i === q.answer) cls = ' correct';
          else if (i === att.choice) cls = ' wrong';
        }
        return `<button class="option${cls}" data-i="${i}" ${att ? 'disabled' : ''}>
          <span class="letter">${LETTERS[i]}</span><span>${o}</span></button>`;
      }).join('')}</div>`;
    } else {
      answerArea = `<form class="free-answer">
        <input type="text" placeholder="Type your answer" value="${att ? esc(att.choice) : ''}" ${att ? 'disabled' : ''} />
        <button class="btn" type="submit" ${att ? 'disabled' : ''}>Check</button></form>`;
    }
    const feedback = att
      ? (att.correct ? '<div class="feedback ok">Correct! Well done.</div>'
        : `<div class="feedback bad">Not quite. The answer is <b>${q.options ? LETTERS[q.answer] + ') ' + q.options[q.answer] : q.answerText}</b>.</div>`)
      : '';
    return `<article class="q-card" id="q-${q.no}" data-qid="${q.qid}">
      <div class="q-top">
        <span class="q-no">Q${q.no}</span>
        ${q.pdf ? `<span class="q-ref">PDF ${esc(q.pdf)}</span>` : ''}
        ${q.level ? `<span class="q-level ${q.level}">${q.level}</span>` : ''}
        <span class="spacer"></span>
        <button class="icon-btn star${star ? ' on' : ''}" title="Bookmark">&#9733;</button>
        <button class="btn sol-btn${revealed ? ' open' : ''}">${revealed ? 'Hide solution' : 'Show solution'}</button>
      </div>
      ${q.data ? `<div class="q-data">${q.data}</div>` : ''}
      ${figuresHtml(q.figures)}
      <div class="q-text">${q.q}</div>
      ${answerArea}
      <div class="feedback-slot">${feedback}</div>
      <div class="solution${revealed ? ' show' : ''}">
        <h4>Solution</h4>
        <ol class="steps">${q.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
        <div class="final">Answer: <b>${q.options ? LETTERS[q.answer] + ') ' + q.options[q.answer] : q.answerText}</b></div>
        ${q.trick ? `<div class="trick-note"><b>Trick used:</b> ${q.trick}</div>` : ''}
        ${q.keyNote ? `<div class="key-note"><b>Note:</b> ${q.keyNote}</div>` : ''}
      </div>
    </article>`;
  }

  function wireCard(card, q, t) {
    card.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      const i = Number(b.dataset.i);
      Store.attempt(q.qid, i, i === q.answer);
      refresh(card, q, t);
    }));
    const form = card.querySelector('.free-answer');
    if (form) form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = form.querySelector('input').value.trim();
      if (!v) return;
      const ok = (q.accept || [q.answerText]).some((a) => normalise(a) === normalise(v));
      Store.attempt(q.qid, v, ok);
      refresh(card, q, t);
    });
    card.querySelector('.sol-btn').addEventListener('click', () => {
      const sol = card.querySelector('.solution');
      const open = !sol.classList.contains('show');
      sol.classList.toggle('show', open);
      if (open) Store.reveal(q.qid);
      card.querySelector('.sol-btn').textContent = open ? 'Hide solution' : 'Show solution';
    });
    card.querySelector('.star').addEventListener('click', (e) => {
      const on = Store.toggleBookmark(q.qid);
      e.currentTarget.classList.toggle('on', on);
      renderSidebar(currentActive);
    });
  }

  function refresh(card, q, t) {
    const fresh = el(questionCard(q, t));
    card.replaceWith(fresh);
    wireCard(fresh, q, t);
    renderSidebar(currentActive);
    const p = document.querySelector('.topic-progress');
    if (p && t) p.innerHTML = progressBar(Store.topicStats(qids(t)));
  }

  function renderQuestions(t, body) {
    body.innerHTML = `<div class="q-toolbar">
        <span>Try each question first. Then open the solution.</span>
        <button class="btn ghost" id="resetBtn">Reset this topic</button></div>
      <div class="q-list">${t.questions.map((q) => questionCard(q, t)).join('')}</div>`;
    body.querySelectorAll('.q-card').forEach((card, i) => wireCard(card, t.questions[i], t));
    document.getElementById('resetBtn').addEventListener('click', () => {
      Store.resetTopic(qids(t));
      topicPage(t.id, 'questions');
    });
  }

  /* ---------- practice bank (raw PDF questions) ---------- */
  function loadBank(id) {
    return new Promise((resolve, reject) => {
      if (APT.bank[id]) return resolve(APT.bank[id]);
      const s = document.createElement('script');
      s.src = `data/bank/${id.replace('.', '-')}.js`;
      s.onload = () => resolve(APT.bank[id] || []);
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  function bankCard(b) {
    const solved = solvedByPdf[b.id];
    const key = b.key
      ? `PDF answer key: <b>${esc(b.key)}</b>`
      : 'No answer key in the PDF for this one.';
    const link = solved
      ? `<a class="btn small" href="#/topic/${solved.topic.id}/questions" data-jump="${solved.q.no}">Full step-by-step solution &rarr;</a>`
      : '';
    return `<article class="q-card bank">
      <div class="q-top"><span class="q-ref">PDF ${esc(b.id)}</span>
        ${b.source ? `<span class="q-src">${esc(b.source)}</span>` : ''}
        ${b.figure ? '<span class="q-level hard">needs figure/table</span>' : ''}
        <span class="spacer"></span>
        ${solved ? '<span class="has-sol">solved in app</span>' : ''}
        <button class="btn sol-btn">Show answer</button></div>
      <div class="q-text pre">${esc(b.text)}</div>
      ${figuresHtml(b.images)}
      <div class="solution"><div class="final">${key}</div>${link}</div>
    </article>`;
  }

  function wireBank(container) {
    container.querySelectorAll('.q-card.bank .sol-btn').forEach((btn) => btn.addEventListener('click', () => {
      const sol = btn.closest('.q-card').querySelector('.solution');
      const open = !sol.classList.contains('show');
      sol.classList.toggle('show', open);
      btn.textContent = open ? 'Hide answer' : 'Show answer';
    }));
    container.querySelectorAll('[data-jump]').forEach((a) => a.addEventListener('click', () => {
      pendingJump = Number(a.dataset.jump);
    }));
  }

  function renderTopicPractice(t, body) {
    const subs = APT.bankIndex.filter((b) => t.pdfTopics.includes(b.id));
    if (!subs.length) { body.innerHTML = '<p class="muted">No extra PDF questions mapped to this topic.</p>'; return; }
    body.innerHTML = `<p class="muted">These are the original questions from your PDF on this topic. Try them, then check the answer key.</p>
      <div class="bank-list">${subs.map((b) => `<a class="bank-chip" href="#/bank/${b.id}">${esc(b.title)} <span>${b.count}</span></a>`).join('')}</div>`;
  }

  function bankHome() {
    renderSidebar('bank');
    app.innerHTML = `<div class="topic-head"><div class="crumb"><a href="#/">Home</a> / Question bank</div>
      <h1>PDF question bank</h1>
      <p class="tagline">Every question from your PDF, grouped by the PDF's own sub-topics. ${APT.bankIndex.reduce((n, b) => n + b.count, 0)} questions in total.</p></div>
      ${APT.sections.map((sec) => {
        const list = APT.bankIndex.filter((b) => (b.section || 'quant') === sec.id);
        if (!list.length) return '';
        return `<h2 class="section-title">${esc(sec.title)} <span class="muted small">${list.reduce((n, b) => n + b.count, 0)} questions</span></h2>
          <div class="bank-list">${list.map((b) => `<a class="bank-chip" href="#/bank/${b.id}">${esc(b.title)} <span>${b.count}</span></a>`).join('')}</div>`;
      }).join('')}`;
  }

  async function bankPage(id) {
    renderSidebar('bank');
    const meta = APT.bankIndex.find((b) => b.id === id);
    if (!meta) return notFound();
    app.innerHTML = `<div class="topic-head"><div class="crumb"><a href="#/">Home</a> / <a href="#/bank">Question bank</a></div>
      <h1>${esc(meta.title)}</h1><p class="tagline">${meta.count} questions · ${meta.keyed} with an answer key in the PDF</p></div>
      <div id="bankBody" class="q-list"><p class="muted">Loading…</p></div>`;
    try {
      const qs = await loadBank(id);
      const box = document.getElementById('bankBody');
      box.innerHTML = qs.map(bankCard).join('');
      wireBank(box);
    } catch (e) {
      document.getElementById('bankBody').innerHTML = '<p class="muted">Could not load this set.</p>';
    }
  }

  function bookmarksPage() {
    renderSidebar('bookmarks');
    const ids = new Set(Store.bookmarks());
    const items = [];
    APT.topics.forEach((t) => t.questions.forEach((q) => { if (ids.has(q.qid)) items.push({ q, t }); }));
    app.innerHTML = `<div class="topic-head"><h1>Bookmarked questions</h1>
      <p class="tagline">Tap the star on any question to save it here for revision.</p></div>
      <div class="q-list" id="bmList">${items.length ? '' : '<p class="muted">Nothing bookmarked yet.</p>'}</div>`;
    const list = document.getElementById('bmList');
    items.forEach(({ q, t }) => {
      const wrap = el(`<div><div class="from">From <a href="#/topic/${t.id}/questions">${esc(t.title)}</a></div></div>`);
      const card = el(questionCard(q, t));
      wrap.appendChild(card);
      list.appendChild(wrap);
      wireCard(card, q, t);
    });
  }

  function searchPage(term) {
    renderSidebar('');
    const needle = term.toLowerCase();
    const strip = (h) => h.replace(/<[^>]+>/g, '');
    const hits = [];
    APT.topics.forEach((t) => t.questions.forEach((q) => {
      if (strip(q.q + ' ' + (q.pdf || '') + ' ' + t.title).toLowerCase().includes(needle)) hits.push({ q, t });
    }));
    app.innerHTML = `<div class="topic-head"><h1>Search: “${esc(term)}”</h1><p class="tagline">${hits.length} solved question(s) found</p></div>
      <div class="q-list" id="sList"></div>`;
    const list = document.getElementById('sList');
    hits.slice(0, 60).forEach(({ q, t }) => {
      const wrap = el(`<div><div class="from">From <a href="#/topic/${t.id}/questions">${esc(t.title)}</a></div></div>`);
      const card = el(questionCard(q, t));
      wrap.appendChild(card);
      list.appendChild(wrap);
      wireCard(card, q, t);
    });
  }

  function notFound() {
    app.innerHTML = '<div class="topic-head"><h1>Page not found</h1><p><a href="#/">Go home</a></p></div>';
  }

  /* ---------- search box ---------- */
  let searchTimer;
  document.getElementById('search').addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const v = e.target.value.trim();
    searchTimer = setTimeout(() => { location.hash = v ? `#/search/${encodeURIComponent(v)}` : '#/'; }, 300);
  });

  /* ---------- router ---------- */
  let currentActive = 'home';
  let pendingJump = null;
  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const [page, a, b] = parts;
    if (!page) { currentActive = 'home'; home(); }
    else if (page === 'topic') { currentActive = a; topicPage(a, b); }
    else if (page === 'bank' && a) { currentActive = 'bank'; bankPage(a); }
    else if (page === 'bank') { currentActive = 'bank'; bankHome(); }
    else if (page === 'bookmarks') { currentActive = 'bookmarks'; bookmarksPage(); }
    else if (page === 'search') { currentActive = ''; searchPage(decodeURIComponent(parts.slice(1).join('/'))); }
    else notFound();
    if (pendingJump) {
      const target = document.getElementById(`q-${pendingJump}`);
      pendingJump = null;
      if (target) { target.scrollIntoView({ block: 'start' }); target.classList.add('flash'); return; }
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
