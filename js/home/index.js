!(function() {
  let home = document.getElementById("intro");

  if (home) {
    let intro = $(".intro");
    let videoContainer = $(".intro__video");
    let iframe = document.querySelector('iframe');
    let player = new Vimeo.Player(iframe);

    videoContainer.click(function() {
      intro.addClass("active");
      player.play();
    });
  }
})();
