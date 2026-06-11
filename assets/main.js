// Prompt Pirates — copy-to-clipboard for the crew email
(function () {
  var btn = document.getElementById("copyEmail");
  if (!btn) return;
  var msg = document.getElementById("copyMsg");
  var email = btn.dataset.email;

  function flash(text) {
    if (!msg) return;
    msg.textContent = text;
    msg.classList.add("show");
    setTimeout(function () { msg.classList.remove("show"); }, 2200);
  }

  btn.addEventListener("click", function () {
    function ok() { flash(email + " copied"); }
    function fail() { flash("Couldn't copy — " + email); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(ok).catch(legacy);
    } else { legacy(); }

    function legacy() {
      try {
        var ta = document.createElement("textarea");
        ta.value = email; ta.setAttribute("readonly", "");
        ta.style.position = "absolute"; ta.style.left = "-9999px";
        document.body.appendChild(ta); ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        ok();
      } catch (e) { fail(); }
    }
  });
})();
