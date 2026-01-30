
 export function initFAQ() {
  // FAQ accordion
  // download CTA scroll
}

 
 
 
 
 
 
 /* =========================================================
     2️⃣ FAQ ACCORDION
  ========================================================= */
  const faqItems = document.querySelectorAll(".faq details");

  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.removeAttribute("open");
        });
      }
    });
  });


  /* =========================================================
     1️⃣6️⃣ DOWNLOAD CTA
  ========================================================= */
  const downloadSection = document.querySelector(".download");

  downloadSection?.querySelector(".btn-outline")?.addEventListener("click", () => {
    const faq = document.querySelector("#faq");
    const h = header?.offsetHeight || 0;
    if (faq) {
      window.scrollTo({
        top: faq.offsetTop - h - 10,
        behavior: "smooth",
      });
    }
  });

  downloadSection?.querySelector(".btn-primary")?.addEventListener("click", () => {
    alert("🚀 Getting started soon! App download is coming.");
  });
