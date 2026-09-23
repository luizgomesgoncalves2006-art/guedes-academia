(() => {
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = [
    '.hero-copy > *', '.hero-photo', '.page-hero .wrap > *',
    '.section-title', '.split > *', '.value', '.hours',
    '.plan', '.quote', '.note', '.video-box', '.banner .wrap > *'
  ].join(',');

  const elements = [...document.querySelectorAll(selector)];
  for (const element of elements) element.classList.add('reveal');
  document.documentElement.classList.add('has-reveal');

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

  for (const element of elements) observer.observe(element);
})();
