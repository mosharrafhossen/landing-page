import { initHeader } from "./header.js";
import { initTheme } from "./theme.js";
import { initAnimations } from "./animations.js";

import { initFAQ } from "./sections/faq.js";
import { initStats } from "./sections/stats.js";
import { initTestimonials } from "./sections/testimonials.js";
import { initProcrastinators } from "./sections/procrastinators.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initTheme();
  initAnimations();

  initFAQ();
  initStats();
  initTestimonials();
  initProcrastinators();
});
