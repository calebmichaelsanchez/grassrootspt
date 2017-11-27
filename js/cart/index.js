!(function() {
  let cart = document.querySelector("#cart");

  if (cart) {
    $('body').on('click', '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {
      if ($('#agree').is(':checked') && $('#agree-2').is(':checked')) {
        $(this).submit();
      }
      else {
        alert("You must agree with the terms and conditions of sales, privacy policy, and medical disclaimer to check out.");
        return false;
      }
    });
  }
})();
