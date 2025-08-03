// Countdown Timer
function updateCountdown() {
  const countdownDate = new Date("November 26, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

function setupScrollAnimations() {
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  const zoomElements = document.querySelectorAll(".zoom-on-scroll");
  const rotateElements = document.querySelectorAll(".rotate-on-scroll");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const zoomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoomed");
        zoomObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const rotateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("rotated");
        rotateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => observer.observe(el));
  zoomElements.forEach((el) => zoomObserver.observe(el));
  rotateElements.forEach((el) => rotateObserver.observe(el));
}


function setupForm() {
  const form = document.getElementById("inscricao");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (email && email.includes("@")) {
      alert(
        `Obrigado por se inscrever! Vamos te avisar sobre o lançamento no e-mail: ${email}`
      );
      form.reset();
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setupScrollAnimations();
  setupForm();
});
