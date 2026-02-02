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
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".container").style.marginTop = "100px";
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


/* Music toggle */
const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸ Pause Song";
  } else {
    music.pause();
    musicBtn.innerText = "▶ Play Song";
  }
}

/* Show more emotional text */
function showMore() {
    document.getElementById("moreText").style.display = "block";
    document.querySelector(".container").style.marginTop = "120px";
}
