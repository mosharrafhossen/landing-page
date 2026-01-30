 
 export function initHeader() {
  // header, back-to-top, nav, mobile nav, scroll spy
}

 
 
 
 
 /* =========================================================
     1️⃣ BACK TO TOP BUTTON
  ========================================================= */
  const backToTopBtn = document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }



  /* =========================================================
     3️⃣ HEADER SCROLL EFFECT
  ========================================================= */
  const header = document.querySelector(".header");

  if (header) {
    const toggleHeader = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    toggleHeader();
    window.addEventListener("scroll", toggleHeader);
  }



  /* =========================================================
     4️⃣ SCROLL SPY
  ========================================================= */
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("section[id]");

  if (navLinks.length && sections.length) {
    const activateNavLink = () => {
      let currentSectionId = "";

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top - 120 &&
          window.scrollY < top + height - 120
        ) {
          currentSectionId = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    };

    activateNavLink();
    window.addEventListener("scroll", activateNavLink);
  }




/* =========================================================
     5️⃣ NAV CLICK SMOOTH SCROLL
  ========================================================= */
  if (navLinks.length && header) {
    const headerHeight = header.offsetHeight;

    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (!targetId.startsWith("#")) return;

        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        window.scrollTo({
          top: targetSection.offsetTop - headerHeight - 10,
          behavior: "smooth",
        });
      });
    });
  }



/* =========================================================
     8️⃣ HEADER LOGIN / SIGNUP
  ========================================================= */
  document.querySelector(".header .btn-primary")?.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true");
    alert("Logged in successfully!");
  });

  document.querySelector(".header .btn-outline")?.addEventListener("click", () => {
    alert("Sign up page coming soon 🚀");
  });



  /* =========================================================
     1️⃣7️⃣ MOBILE NAV
  ========================================================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });

