// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuToggle.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0.35
});


sections.forEach(section => {
    navObserver.observe(section);
});
