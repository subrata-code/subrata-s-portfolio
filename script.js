// Typed.js Animation
var typed = new Typed("#typed-text", {
    strings: ["Web Devoloper", "Python devoloper", "Tech Enthusiast"],
    typeSpeed: 100,  // Speed of typing
    backSpeed: 50,   // Speed of deleting text
    loop: true,      // Infinite loop
    showCursor: true,
    cursorChar: "|",
});
document.addEventListener("DOMContentLoaded", function () {
    const techSkillLink = document.querySelector('nav ul li a[href="#secondsection"]');
    const homeLink = document.querySelector('nav ul li a[href="#hero"]');
    const skillSection = document.getElementById("secondsection");
    const homeSection = document.getElementById("hero");
    const skillBars = document.querySelectorAll(".skill-fill");

    // Smooth Scroll to Home
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        homeSection.scrollIntoView({ behavior: "smooth" });
    });

    // Smooth Scroll and Sliding Effect for Tech Skills
    techSkillLink.addEventListener("click", function (event) {
        event.preventDefault();
        skillSection.scrollIntoView({ behavior: "smooth" });

        // Killer Sliding Animation for Skills
        skillBars.forEach((bar, index) => {
            bar.style.width = "0%"; // Reset width before animation
            setTimeout(() => {
                bar.style.transition = "width 1s ease-out";
                bar.style.width = bar.getAttribute("data-width"); // Read width from data attribute
            }, index * 200); // Staggered animation
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const skillSection = document.querySelector(".secondsection");

    function checkScroll() {
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            skillSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
  

