```javascript
// ==========================
// TYPING ANIMATION
// ==========================

const typingText = document.getElementById("typing-text");

const words = [
    "Developer",
    "Technology Enthusiast",
    "Creative Thinker",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 45 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1400;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// FLOATING PARTICLES
// ==========================

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particleContainer.appendChild(particle);
}


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ==========================
// MOBILE NAVIGATION
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});
```
