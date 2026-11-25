// Iskra site: adds a hairline under the sticky header once the page is scrolled.
(function () {
  var h = document.querySelector('.site-header');
  if (!h) return;
  var on = function () { h.classList.toggle('scrolled', window.scrollY > 8); };
  on();
  window.addEventListener('scroll', on, { passive: true });
})();

// Respect reduced motion: don't autoplay the looping feature video.
(function () {
  if (!window.matchMedia) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var apply = function () {
    if (!mq.matches) return;
    var vids = document.querySelectorAll('video[autoplay]');
    for (var i = 0; i < vids.length; i++) {
      vids[i].removeAttribute('autoplay');
      vids[i].pause();
    }
  };
  apply();
  if (mq.addEventListener) mq.addEventListener('change', apply);
})();
