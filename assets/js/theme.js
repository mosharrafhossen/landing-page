
export function initTheme() {
  // dark / light mode
}



/* =========================================================
     7️⃣ DARK MODE TOGGLE
  ========================================================= */
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }

  themeToggleBtn?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "🌙";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "☀️";
    }
  });
