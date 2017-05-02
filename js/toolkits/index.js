!(function() {
  let collection = document.querySelector("#product-collection");
  let productDetail = document.querySelector("#product-detail");

  if (collection || productDetail) {
    let data = $("#trailer").data("trailer");
    $("#container").append(`<div class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe id="youtube" width="560" height="315" src="https://www.youtube.com/embed/${data}?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div></div><a class="close" href="#"></a></div>`);

    let container = $(".trailer");
    let close = $(".close");
    let video = document.getElementById("youtube").contentWindow;
    $("#trailer").click(function(e) {
      e.preventDefault();
      container.fadeIn(600);
    });

    close.click(function(e) {
      e.preventDefault();
      video.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      container.fadeOut(600);
    });
  }

})();
