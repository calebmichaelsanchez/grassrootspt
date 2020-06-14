!(function() {
  let testimonials = document.querySelectorAll(".big-quote__item");
  testimonials = [...testimonials];

  let i = 0;

  const fader = (array) => {
    $(testimonials[i]).fadeOut(800, () => {
      i++
      if (i == array.length) { i = 0; }
      $(testimonials[i]).fadeIn(800);
    });
  }

  setInterval(() => {
    fader(testimonials)
  }, 15000);

})();
