// Prompt Pirates — tiny client-side helpers (no backend needed)

// Join form -> opens a pre-filled email to the Quartermaster.
// Swap CAPTAIN_EMAIL for a Google Form / Formspree URL later if you want a real inbox.
const CAPTAIN_EMAIL = "thomas.ryan.crosby@gmail.com";

const form = document.getElementById("joinForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`🏴‍☠️ New crew request: ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name/alias: ${data.get("name")}\n` +
      `Contact: ${data.get("contact")}\n` +
      `Weapon of choice: ${data.get("tools")}\n\n` +
      `What they're building:\n${data.get("building")}\n\n` +
      `— sent from the Prompt Pirates deck`
    );
    window.location.href = `mailto:${CAPTAIN_EMAIL}?subject=${subject}&body=${body}`;
    const note = document.getElementById("formNote");
    if (note) note.textContent = "⚓ Opening your email client… if nothing happens, email the Quartermaster directly.";
  });
}

// Highlight active nav link by current page
document.querySelectorAll(".nav nav a").forEach((a) => {
  const here = location.pathname.split("/").pop() || "index.html";
  if (a.getAttribute("href") === here) a.classList.add("active");
});
