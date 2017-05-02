!(function() {
  let main = document.getElementById("main");
  let footer = document.getElementById("footer");
  let fHeight = footer.clientHeight;
  let ticking = false;

  let setPaddingBottom = function(element, padding) {
    if (element.style.paddingBottom != padding + "px") {
      element.style.paddingBottom = padding + "px";
    }
  }

  setPaddingBottom(main, fHeight);

  let onResize = function() {
    fHeight = footer.clientHeight;
    requestTick();
  }

  let requestTick = function() {
    if (!ticking) { window.requestAnimationFrame(update); }
    ticking = true;
  }

  let update = function() {
    ticking = false;
    setPaddingBottom(main, fHeight);
  }

  window.addEventListener("resize", onResize, false);

}());
