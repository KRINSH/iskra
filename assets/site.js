// Iskra site: adds a hairline under the sticky header once the page is scrolled.
(function () {
  var h = document.querySelector('.site-header');
  if (!h) return;
  var on = function () { h.classList.toggle('scrolled', window.scrollY > 8); };
  on();
  window.addEventListener('scroll', on, { passive: true });
})();
