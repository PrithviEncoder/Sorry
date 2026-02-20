/* Typewriter Effect */
const text = "Mujhe pata hai ki shayad ye message tujh tak kabhi nhi pouch payega. par phir bhi mai likh rha hu. Tu mujse pyaar nhi karti ye baat mujhe pata hai. Mai bhi tujhe pareshan nhi krna chahta. Mujhe pata hai ki tu padhai kar rhi hai. Aur ab mai insta ya kishi per bhi tuhje pareshan nhi karunga. Mai toh bas itna hi chahta ta ki tu hamesha khush rahe. Chahe kahi bhi rahe. Kisi ke sath bhi rahe.Aur mai vo bol du jo mere dil mai hai bas. Bas itna hi kehna chahta tha par tune mujhe shayad galat samjha. Tu jo bhi kar rahi h uske liye all the best. Mai tere reply ka hamesha wait karunga. Bye";

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
    // document.querySelector(".container").style.marginTop = "100px";
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
    // document.querySelector(".container").style.marginTop = "120px";
}
