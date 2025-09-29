const toggleBtn = document.getElementById("nav-toggle");
const menu = document.getElementById("primary-menu");

if (toggleBtn && menu) {
  toggleBtn.onclick = () => {
    const isOpen = menu.classList.toggle("open");
    toggleBtn.classList.toggle("is-open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };
}
