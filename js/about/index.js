!(function() {
  let home = document.getElementById("intro");

  if (home) {
    // i hate myself for this
    // I will make this more workable later
    $("#container").append(`<div id="trailer-01" class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="video-01" width="560" height="315" src="https://www.youtube.com/embed/ylLbqW8s7kI?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div></div><a id="close-01" class="close" href="#"></a></div>`)

    let click01 = $("#trailer-home");
    let trailer01 = $("#trailer-01");
    let close01 = $("#close-01");
    let iframe01 = $('#video-01');
    let video01 = document.getElementById("video-01").contentWindow;

    function ytClick(clickId, trailerId, closeId, video) {
      clickId.click(function(e) {
        e.preventDefault();
        trailerId.fadeIn(600);
      });

      closeId.click(function(e) {
        e.preventDefault();
        video.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        trailerId.fadeOut(600);
      });
    }

    ytClick(click01, trailer01, close01, video01);

  }
})();
