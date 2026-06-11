// Prompt Pirates — theme switcher (persists across pages via localStorage)
(function () {
  var KEY = "pp-theme";
  function apply(theme) {
    if (theme && theme !== "violet") document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    document.querySelectorAll(".themes .swatch").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.theme === (theme || "violet")));
    });
  }
  // Apply saved choice ASAP
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved || "violet");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".themes .swatch");
    if (!btn) return;
    var t = btn.dataset.theme;
    apply(t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
  });
})();
