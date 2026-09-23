(() => {
  const selector = [
    '.hero-copy > *', '.hero-photo', '.page-hero .wrap > *',
    '.section-title', '.split > *', '.value', '.hours',
    '.plan', '.quote', '.note', '.video-box', '.banner .wrap > *'
  ].join(',');

  const elements = Array.from(document.querySelectorAll(selector));
  elements.forEach((element) => element.classList.add('reveal'));
  document.documentElement.classList.add('has-reveal');

  let scheduled = false;
  function revealVisible() {
    scheduled = false;
    const triggerLine = window.innerHeight * 0.88;
    elements.forEach((element) => {
      if (element.classList.contains('revealed')) return;
      const bounds = element.getBoundingClientRect();
      if (bounds.top < triggerLine && bounds.bottom > 0) {
        element.classList.add('revealed');
      }
    });
  }
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(revealVisible);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  requestAnimationFrame(revealVisible);
})();
