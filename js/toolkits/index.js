!(function() {
  let trailer = document.querySelector("#trailer");

  if (trailer) {
    let data = $("#trailer").data("trailer");
    $("#container").append(`<div class="trailer"><div class="trailer__inner"><div class="trailer__magic"><iframe width="560" height="315" src="https://www.youtube.com/embed/${data}" frameborder="0" allowfullscreen></iframe></div></div><a class="close" href="#"></a></div>`);

    let container = $(".trailer");
    let close = $(".close");

    $("#trailer").click(function(e) {
      e.preventDefault();
      container.fadeIn(600);
    });

    close.click(function() {
      container.fadeOut(600);
    });
  }

})();
