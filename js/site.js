/* Shared site behaviour: theme toggle, mobile nav, active link, back-to-top */
(function () {
  "use strict";

  var root = document.documentElement;

  try {
    var saved = localStorage.getItem("ic-theme");
    if (saved) {
      root.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    }
  } catch (e) { /* storage unavailable */ }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncThemeButtons() {
    var dark = currentTheme() === "dark";
    document.querySelectorAll(".theme-btn").forEach(function (btn) {
      btn.textContent = dark ? "\u2600\uFE0F" : "\uD83C\uDF19";
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest(".theme-btn") : null;
    if (t) {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ic-theme", next); } catch (e) { /* ignore */ }
      syncThemeButtons();
    }
  });

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
    nav.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") { nav.classList.remove("open"); }
    });
  }

  // Active nav link
  var here = location.pathname.split(/[\\/]/).pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var target = (a.getAttribute("href") || "").split("#")[0];
    if (target === here || (here === "" && target === "index.html")) {
      a.classList.add("active");
    }
  });

  // Back to top
  var topBtn = document.querySelector(".to-top");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      topBtn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  syncThemeButtons();
})();
