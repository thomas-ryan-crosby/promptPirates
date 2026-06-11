// Prompt Pirates — theme switcher (persists across pages via localStorage)
(function () {
  var KEY = "pp-theme";
  var DEFAULT = "kraken";
  function apply(theme) {
    if (theme && theme !== DEFAULT) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    document.querySelectorAll(".themes .swatch").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.theme === (theme || DEFAULT)));
    });
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved || DEFAULT);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".themes .swatch");
    if (!btn) return;
    apply(btn.dataset.theme);
    try { localStorage.setItem(KEY, btn.dataset.theme); } catch (e) {}
  });
})();
