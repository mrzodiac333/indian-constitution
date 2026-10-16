/* Renders the Landmark Cases list with search */
(function () {
  "use strict";

  var data = window.CONSTITUTION_CASES || [];
  var listEl = document.getElementById("cases-list");
  if (!listEl) { return; }

  var searchEl = document.getElementById("cases-search");
  var countEl = document.getElementById("cases-count");

  listEl.innerHTML = data.map(function (c) {
    var meta =
      "<span><b>Year</b> " + c.year + "</span>" +
      (c.citation ? "<span><b>Citation</b> " + c.citation + "</span>" : "") +
      (c.bench ? "<span><b>Bench</b> " + c.bench + "</span>" : "");
    var tags = (c.tags || []).map(function (t) {
      return '<span class="badge dpsp">' + t + "</span>";
    }).join(" ");

    return (
      '<article class="case" data-text="' +
      (c.name + " " + c.year + " " + (c.tags || []).join(" ") + " " + c.facts + " " + c.holding + " " + c.significance)
        .toLowerCase().replace(/"/g, "&quot;") + '">' +
      "<h3>" + c.name + " (" + c.year + ")</h3>" +
      (tags ? '<p style="margin:4px 0 0;">' + tags + "</p>" : "") +
      '<div class="meta">' + meta + "</div>" +
      '<div class="label">Facts</div><p>' + c.facts + "</p>" +
      '<div class="label">Held</div><p>' + c.holding + "</p>" +
      '<div class="label">Significance</div><p>' + c.significance + "</p>" +
      "</article>"
    );
  }).join("");

  var cards = Array.prototype.slice.call(listEl.querySelectorAll(".case"));
  var total = cards.length;

  function apply() {
    var q = (searchEl && searchEl.value || "").trim().toLowerCase();
    var tokens = q ? q.split(/\s+/) : [];
    var visible = 0;

    cards.forEach(function (card) {
      var hay = card.getAttribute("data-text");
      var match = tokens.every(function (t) { return hay.indexOf(t) !== -1; });
      card.classList.toggle("hidden", !match);
      if (match) { visible++; }
    });

    if (countEl) { countEl.textContent = "Showing " + visible + " of " + total + " cases"; }
  }

  if (searchEl) { searchEl.addEventListener("input", apply); }
  apply();
})();
