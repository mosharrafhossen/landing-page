export function initProcrastinators() {
  // point click + image change
}








  /* =========================================================
     6️⃣ PROCRASTINATORS SECTION
  ========================================================= */
  const points = document.querySelectorAll(".procrastinators .point");
  const proImage = document.querySelector(".pro-right img");

  if (points.length && proImage) {
    const images = [
      "images/status/Frame.png",
      "images/status/Frame.png",
      "images/status/Frame.png",
    ];

    points.forEach((point, index) => {
      point.addEventListener("click", () => {
        points.forEach(p => p.classList.remove("active"));
        point.classList.add("active");

        proImage.classList.add("fade");

        setTimeout(() => {
          proImage.src = images[index] || images[0];
          proImage.classList.remove("fade");
        }, 200);
      });
    });
  }
