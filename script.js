const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Simple typing effect
const typingText = document.getElementById("typingText");
const roles = ["Full-Stack Developer", "React Developer", "Problem Solver"];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const role = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typingText.textContent = role.substring(0, charIndex);

    if (charIndex === role.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;
    typingText.textContent = role.substring(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();

// Contact form validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formStatus = document.getElementById("formStatus");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";

  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (name.length < 2) {
    nameError.textContent = "Please enter at least 2 characters.";
    valid = false;
  }

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Message must contain at least 10 characters.";
    valid = false;
  }

  if (valid) {
    formStatus.textContent =
      "Validation successful! This demo does not send emails yet.";
    contactForm.reset();
  }
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();
