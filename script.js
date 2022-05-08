// document.documentElement.scrollHeight - window.innerHeight
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const showUpButton = () => {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    document.querySelector(".up").classList.contains("hidden") &&
      document.querySelector(".up").classList.remove("hidden");
  } else {
    document.querySelector(".up").classList.add("hidden");
  }
};

const closeNav = () => {
  if (document.querySelector(".mobile-nav").classList.contains("none")) {
    return;
  } else {
    document.querySelector(".mobile-nav").classList.add("none");
  }
};

window.addEventListener("scroll", () => {
  showUpButton();
  closeNav();
});

document.querySelector(".nav-toggler").addEventListener("click", () => {
  if (document.querySelector(".mobile-nav").classList.contains("none")) {
    document.querySelector(".mobile-nav").classList.remove("none");
  } else {
    document.querySelector(".mobile-nav").classList.add("none");
  }
});
