/* Renders the Articles browser: Parts, articles, schedules, search/filter/jump */
(function () {
  "use strict";

  var parts = window.CONSTITUTION_PARTS || [];
  var schedules = window.CONSTITUTION_SCHEDULES || [];

  var TAG_LABELS = {
    key: { label: "Key", cls: "key" },
    fr: { label: "Fundamental Right", cls: "fr" },
    dpsp: { label: "DPSP", cls: "dpsp" },
    duty: { label: "Fundamental Duty", cls: "duty" },
    repealed: { label: "Repealed", cls: "repealed" }
  };

  var preambleEl = document.getElementById("preamble-text");
  if (preambleEl && window.CONSTITUTION_PREAMBLE) {
    preambleEl.textContent = window.CONSTITUTION_PREAMBLE;
  }

  var navEl = document.getElementById("parts-nav");
  var mainEl = document.getElementById("parts-main");
  if (!navEl || !mainEl) { return; }

  function badgeHtml(tags) {
    if (!tags || !tags.length) { return ""; }
    return tags.map(function (t) {
      var b = TAG_LABELS[t];
      if (!b) { return ""; }
      return '<span class="badge ' + b.cls + '">' + b.label + "</span>";
    }).join(" ");
  }

  // Sidebar
  navEl.innerHTML = parts.map(function (p) {
    return '<a href="#' + p.id + '"><strong>' + p.name + "</strong>" + p.title + "</a>";
  }).join("");

  // Main
  var html = parts.map(function (p) {
    var rows = p.articles.map(function (a) {
      return (
        '<details class="article" id="a-' + a.n + '" data-n="' + a.n + '" data-tags="' +
        (a.tags || []).join(",") + '">' +
        '<summary><span class="art-no">' + a.n + '</span>' +
        '<span class="art-title">' + a.t + '</span>' +
        '<span class="badges">' + badgeHtml(a.tags) + "</span></summary>" +
        '<div class="art-body"><p>' + a.d + "</p></div>" +
        "</details>"
      );
    }).join("");

    return (
      '<section class="part-block" id="' + p.id + '">' +
      '<div class="part-head"><h2>' + p.name + " — " + p.title + "</h2>" +
      '<span class="range">' + p.range + "</span></div>" +
      (p.note ? '<div class="part-note">' + p.note + "</div>" : "") +
      rows +
      "</section>"
    );
  }).join("");

  html +=
    '<section class="part-block" id="schedules">' +
    '<div class="part-head"><h2>The Schedules</h2><span class="range">12 Schedules</span></div>' +
    '<div class="part-note">The Constitution originally had 8 Schedules; four more were added by amendments — the Ninth (1st Amendment, 1951), Tenth (52nd Amendment, 1985), Eleventh (73rd Amendment, 1992) and Twelfth (74th Amendment, 1992).</div>' +
    '<div class="grid cols-2">' +
    schedules.map(function (s) {
      return '<div class="card"><h3>' + s.t + '</h3><p>' + s.d + '</p><p style="margin-top:8px;font-size:.8rem;"><em>' + s.note + "</em></p></div>";
    }).join("") +
    "</div></section>";

  mainEl.innerHTML = html;

  // Search + filter
  var searchEl = document.getElementById("article-search");
  var filterEl = document.getElementById("article-filter");
  var countEl = document.getElementById("article-count");
  var allArticles = Array.prototype.slice.call(mainEl.querySelectorAll("details.article"));
  var total = allArticles.length;

  function applyFilters() {
    var q = (searchEl && searchEl.value || "").trim().toLowerCase();
    var tokens = q ? q.split(/\s+/) : [];
    var tag = filterEl ? filterEl.value : "all";
    var visible = 0;

    allArticles.forEach(function (el) {
      var hay = (el.getAttribute("data-n") + " " + el.querySelector(".art-title").textContent + " " +
        el.querySelector(".art-body").textContent).toLowerCase();
      var matchQ = tokens.every(function (t) { return hay.indexOf(t) !== -1; });
      var tags = (el.getAttribute("data-tags") || "").split(",");
      var matchTag = tag === "all" || tags.indexOf(tag) !== -1;

      if (matchQ && matchTag) {
        el.classList.remove("hidden");
        visible++;
      } else {
        el.classList.add("hidden");
      }
    });

    mainEl.querySelectorAll(".part-block").forEach(function (block) {
      var any = block.querySelector("details.article:not(.hidden)");
      block.classList.toggle("hidden", !any);
    });

    if (countEl) {
      countEl.textContent = "Showing " + visible + " of " + total + " entries";
    }
  }

  if (searchEl) { searchEl.addEventListener("input", applyFilters); }
  if (filterEl) { filterEl.addEventListener("change", applyFilters); }
  applyFilters();

  // Jump to article
  var jumpInput = document.getElementById("article-jump");
  var jumpBtn = document.getElementById("article-jump-btn");

  function jump() {
    if (!jumpInput) { return; }
    var val = jumpInput.value.trim().toLowerCase();
    if (!val) { return; }
    var found = null;
    allArticles.forEach(function (el) {
      if (el.getAttribute("data-n").toLowerCase() === val) { found = el; }
    });
    if (!found) { return; }
    if (searchEl) { searchEl.value = ""; }
    if (filterEl) { filterEl.value = "all"; }
    applyFilters();
    found.setAttribute("open", "");
    found.scrollIntoView({ behavior: "smooth", block: "center" });
    found.classList.remove("flash");
    void found.offsetWidth;
    found.classList.add("flash");
    history.replaceState(null, "", "#a-" + found.getAttribute("data-n"));
  }

  if (jumpBtn) { jumpBtn.addEventListener("click", jump); }
  if (jumpInput) {
    jumpInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); jump(); }
    });
  }

  // Deep link on load
  function openFromHash() {
    var h = decodeURIComponent(location.hash || "");
    if (!h || h.charAt(0) !== "#") { return; }
    var target = document.getElementById(h.slice(1));
    if (target && target.tagName === "DETAILS") {
      target.setAttribute("open", "");
      setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "center" }); }, 60);
    }
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
