const menu = document.getElementById("menu");
const button = document.getElementById("menu-btn");

button.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle("hidden");
  animateMenu();
}

function animateMenu() {
  gsap.from(menu, {
    duration: 0.5,
    translateY: -100,
    opacity: 0,
  });

  gsap.to(menu, {
    duration: 0.5,
    translateY: 0,
    opacity: 1,
  });
}

function animateArticle(selector, translateXValue, delay = 0) {
  gsap.from(selector, {
    duration: 1.5,
    translateX: translateXValue,
    scaleY: 0.9,
    delay: delay,
    scrollTrigger: {
      trigger: selector.parentElement,
    },
  });
}

animateArticle("#article-1", -600);
animateArticle("#article-2", 600, 0.5);

function animateTestimonials() {
  gsap.from("#testimonials", {
    opacity: 0,
    duration: 2,
    scale: 0,
    scrollTrigger: {
      trigger: "#testimonials-section",
    },
  });

  gsap.to("#testimonials", {
    opacity: 1,
    duration: 2,
    scale: 1,
    scrollTrigger: {
      trigger: "#testimonials-section",
    },
  });
}

animateTestimonials();
