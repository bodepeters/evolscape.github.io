(function () {
  var year = String(new Date().getFullYear());
  var yearNodes = document.querySelectorAll('.js-footer-year');

  for (var i = 0; i < yearNodes.length; i += 1) {
    yearNodes[i].textContent = year;
  }
})();
