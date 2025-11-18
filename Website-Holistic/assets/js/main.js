/* =====================================================
   MAIN.JS — Header Sliding & Shrinking
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Slide hide on scroll down, show on scroll up
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    // Shrink header when scrolled
    if (currentScroll > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
// Contact Form Success Message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        form.querySelector(".success-message").style.display = "block";
        form.reset();
      } else {
        form.querySelector(".error-message").style.display = "block";
      }
    });
  }
});
