/* Renders the Amendments browser (all 106) with search and landmark filter */
(function () {
  "use strict";

  var data = window.CONSTITUTION_AMENDMENTS || [];
  var gridEl = document.getElementById("amend-grid");
  if (!gridEl) { return; }

  var searchEl = document.getElementById("amend-search");
  var landmarkEl = document.getElementById("amend-landmark");
  var countEl = document.getElementById("amend-count");

  gridEl.innerHTML = data.map(function (a) {
    return (
      '<article class="amend" data-text="' +
      (a.n + " " + a.y + " " + a.name + " " + a.d).toLowerCase().replace(/"/g, "&quot;") + '">' +
      '<span class="no">Amendment ' + a.n + " &middot; " + a.y + "</span> " +
      (a.landmark ? '<span class="badge landmark">Landmark</span>' : "") +
      "<h3>" + a.name + "</h3>" +
      "<p>" + a.d + "</p>" +
      "</article>"
    );
  }).join("");

  var cards = Array.prototype.slice.call(gridEl.querySelectorAll(".amend"));
  var total = cards.length;

  function apply() {
    var q = (searchEl && searchEl.value || "").trim().toLowerCase();
    var tokens = q ? q.split(/\s+/) : [];
    var onlyLandmark = landmarkEl && landmarkEl.checked;
    var visible = 0;

    cards.forEach(function (card) {
      var hay = card.getAttribute("data-text");
      var matchQ = tokens.every(function (t) { return hay.indexOf(t) !== -1; });
      var matchL = !onlyLandmark || card.querySelector(".badge.landmark");
      if (matchQ && matchL) {
        card.classList.remove("hidden");
        visible++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (countEl) { countEl.textContent = "Showing " + visible + " of " + total + " amendments"; }
  }

  if (searchEl) { searchEl.addEventListener("input", apply); }
  if (landmarkEl) { landmarkEl.addEventListener("change", apply); }
  apply();
})();
