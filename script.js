const swiper = new Swiper(".swiper", {
    direction: "horizontal", // горизонтально
    loop: true, // бесконечный цикл

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});

const hamburger = document.getElementById("hamburger-toggle");
const navLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
