!(function() {
  let home = document.getElementById("intro");

  if (home) {
    // i hate myself for this
    // I will make this more workable later
    $("#container").append(`<div id="trailer-01" class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="video-01" src="https://player.vimeo.com/video/210134747" width="640" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe></div></div><a id="close-01" class="close" href="#"></a></div>`);
    $("#container").append(`<div id="trailer-02" class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="video-02" width="560" height="315" src="https://www.youtube.com/embed/-WCQaz2O6Uo?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div></div><a id="close-02" class="close" href="#"></a></div>`)
    $("#container").append(`<div id="trailer-03" class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="video-03" width="560" height="315" src="https://www.youtube.com/embed/lDs1esuqUDs?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div></div><a id="close-03" class="close" href="#"></a></div>`)
    $("#container").append(`<div id="trailer-04" class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="video-04" width="560" height="315" src="https://www.youtube.com/embed/ApVh_0Qjmck?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div></div><a id="close-04" class="close" href="#"></a></div>`)

    let click01 = $("#trailer-home");
    let click02 = $("#trailer-elbow");
    let click03 = $("#trailer-neck");
    let click04 = $("#trailer-back");
    let trailer01 = $("#trailer-01");
    let trailer02 = $("#trailer-02");
    let trailer03 = $("#trailer-03");
    let trailer04 = $("#trailer-04");
    let close01 = $("#close-01");
    let close02 = $("#close-02");
    let close03 = $("#close-03");
    let close04 = $("#close-04");
    let iframe01 = $('#video-01');
    let iframe02 = $('#video-02');
    let iframe03 = $('#video-03');
    let iframe04 = $('#video-04');
    let video01 = new Vimeo.Player(iframe01);
    let video02 = document.getElementById("video-02").contentWindow;
    let video03 = document.getElementById("video-03").contentWindow;
    let video04 = document.getElementById("video-04").contentWindow;

    function vimeoClick(clickId, trailerId, closeId, video) {
      clickId.click(function(e) {
        e.preventDefault();
        trailerId.fadeIn(600);
        video.play();
      });

      closeId.click(function(e) {
        e.preventDefault();
        video.pause();
        trailerId.fadeOut(600);
      });
    }

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

    vimeoClick(click01, trailer01, close01, video01);
    ytClick(click02, trailer02, close02, video02);
    ytClick(click03, trailer03, close03, video03);
    ytClick(click04, trailer04, close04, video04);

  }
})();
