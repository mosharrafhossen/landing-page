
export function initTestimonials() {
  // testimonials reveal + word animation
}







/* =========================================================
     1️⃣5️⃣ TESTIMONIALS
  ========================================================= */
  const testimonialSection = document.querySelector("#testimonials");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  if (testimonialSection && testimonialCards.length) {
    testimonialCards.forEach(card => {
      const textEl = card.querySelector('[data-animate="words"]');
      if (!textEl) return;

      const words = textEl.innerText.split(" ");
      textEl.innerHTML = words.map(w => `<span class="word">${w}&nbsp;</span>`).join("");
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        testimonialCards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("is-visible");
            card.querySelectorAll(".word").forEach((word, j) => {
              setTimeout(() => word.classList.add("is-visible"), j * 60);
            });
          }, i * 300);
        });
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(testimonialSection);
  }
