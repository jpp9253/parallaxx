window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(function(el, i) {
      el.style.backgroundPositionY = (offset - el.offsetTop) * 0.7 + 'px';
    });
  });