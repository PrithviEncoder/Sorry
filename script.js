/* Typewriter Effect */
const text =
  "I know I made a mistake... 😔\n" +
  "I never wanted to hurt you.\n" +
  "Please forgive me 💗";

let index = 0;
const speed = 50;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

/* Surprise */
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

/* Floating Hearts Generator */
const heartsContainer = document.querySelector(".hearts");
const emojis = ["💖", "💗", "💞", "💕", "🌸"];

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 7000);
}, 400);
