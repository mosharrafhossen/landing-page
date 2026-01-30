 
 export function initAnimations() {
  // preview reveal
  // store buttons
  // brands
  // features
  // word-by-word text
}

 
 
 
 
 
 
 
 /* =========================================================
     9️⃣ PREVIEW IMAGE REVEAL
  ========================================================= */
  const previewImg = document.querySelector(".preview img");

  if (previewImg) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          previewImg.classList.add("is-visible");
          setTimeout(() => {
            previewImg.classList.add("is-floating");
          }, 1200);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(previewImg);
  }


   /* =========================================================
     🔟 STORE BUTTON ANIMATION
  ========================================================= */
  const storeLinks = document.querySelectorAll(".store-link");
  storeLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("is-visible");
    }, 600 + index * 150);
  });



   /* =========================================================
     1️⃣1️⃣ BRANDS REVEAL
  ========================================================= */
  const brandSection = document.querySelector("#brands");
  const brandRows = document.querySelectorAll(".brand-row");

  if (brandSection && brandRows.length) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        brandRows.forEach((row, rowIndex) => {
          row.querySelectorAll("img").forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add("is-visible");
            }, index * 140 + rowIndex * 300);
          });
        });
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(brandSection);
  }


  /* =========================================================
     1️⃣2️⃣ FEATURES REVEAL
  ========================================================= */
  const featureSection = document.querySelector("#features");
  const featureCards = document.querySelectorAll(".feature-card");

  if (featureSection && featureCards.length) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        featureCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("is-visible");
          }, index * 220);
        });
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(featureSection);
  }


  /* =========================================================
     1️⃣3️⃣ WORD BY WORD TEXT
  ========================================================= */
  const animatedTexts = document.querySelectorAll('[data-animate="words"]');

  animatedTexts.forEach(el => {
    const words = el.innerText.split(" ");
    el.innerHTML = words.map(w => `<span class="word">${w}&nbsp;</span>`).join("");
  });

  const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".word").forEach((word, i) => {
          setTimeout(() => word.classList.add("is-visible"), i * 80);
        });
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  animatedTexts.forEach(el => textObserver.observe(el));
