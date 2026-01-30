 
export function initStats() {
  // stats count up
}
 
 
 
 
 
 
 
 /* =========================================================
     1️⃣4️⃣ STATS COUNT UP
  ========================================================= */
  const statSection = document.querySelector("#achievements");
  const numbers = document.querySelectorAll(".stat-number");

  if (statSection && numbers.length) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        numbers.forEach(el => {
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || "";
          const format = el.dataset.format || "";
          const start = performance.now();

          const update = time => {
            const progress = Math.min((time - start) / 1800, 1);
            let value = Math.floor(progress * target);

            el.textContent =
              format === "million"
                ? (value / 1_000_000).toFixed(2) + "M"
                : value.toLocaleString() + suffix;

            if (progress < 1) requestAnimationFrame(update);
          };

          el.classList.add("is-visible");
          requestAnimationFrame(update);
        });
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(statSection);
  }