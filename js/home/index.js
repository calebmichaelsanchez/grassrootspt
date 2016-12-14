!(function() {
  let intro = $(".intro");
  let videoContainer = $(".intro__video");

  videoContainer.click(function() {
    intro.addClass("active");
  });
})();
