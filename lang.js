// UA/EN switch: shows .uk or .en elements, remembers the choice
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch (e) {}
}
document.querySelectorAll(".lang button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
setLang(savedLang === "uk" || savedLang === "en" ? savedLang : (navigator.language.startsWith("uk") ? "uk" : "en"));
