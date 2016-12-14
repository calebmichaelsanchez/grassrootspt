!(function() {
  let nav = $(".nav-mobile");
  let toggle = $(".toggle");
  let subToggle = $(".toggle-sub-menu");
  let subMenu = $(".nav-mobile__sub-menu");

  toggle.click(function(event) {
    event.preventDefault();
    $(this).toggleClass("toggle-active");
    nav.slideToggle(600);
  });

  subToggle.click(function(event) {
    event.preventDefault();
    $(this).toggleClass("toggle-active");
    $(this).next().slideToggle(600);
    //this.children(".nav-mobile__sub-menu").slideToggle(800);
  })
})();
