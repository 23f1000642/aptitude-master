/* Small rendering helpers. Data in data/topics is trusted (written by us, may contain <b>, <sup>).
   Text extracted from the PDF (practice bank) is always escaped. */
window.R = (function () {
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function progressBar(stats) {
    const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    return `<div class="progress" title="${stats.done} of ${stats.total} attempted">
      <div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label">${stats.done}/${stats.total} attempted · ${stats.right} correct</div>`;
  }

  function normalise(s) {
    return String(s).toLowerCase().replace(/rs\.?|₹|\s|,/g, '').replace(/[^0-9a-z./\-]/g, '');
  }

  return { esc, el, progressBar, normalise, LETTERS };
})();
