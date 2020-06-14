!(function() {
  let nav = $(".nav-mobile");
  let toggle = $(".toggle");
  let subToggleLi = $(".nav-mobile__item")
  let subToggle = $(".toggle-sub-menu");
  let subMenu = $(".nav-mobile__sub-menu");

  toggle.click(function(event) {
    event.preventDefault();
    $(this).toggleClass("toggle-active");
    nav.slideToggle(600);
  });

  subToggleLi.click(function(event) {
    //event.preventDefault();
    $(this).children(".toggle-sub-menu").toggleClass("toggle-active");
    $(this).children(".toggle-sub-menu").next().slideToggle(600);
  });
})();
