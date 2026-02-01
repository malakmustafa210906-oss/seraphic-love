const text =
"Shambhavi,\n\nI’m here to confess something from my heart...\n\nI’m deeply, genuinely, and endlessly in love with you 🕊️💗";

const typingText = document.getElementById("typingText");
const continueBtn = document.getElementById("continueBtn");
const messageScreen = document.getElementById("messageScreen");
const proposalScreen = document.getElementById("proposalScreen");
const yesScreen = document.getElementById("yesScreen");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bgMusic");

let index = 0;

// Typing animation
function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Continue
continueBtn.addEventListener("click", () => {
  music.play();
  messageScreen.classList.add("hidden");
  proposalScreen.classList.remove("hidden");
});

// No button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// Yes click
yesBtn.addEventListener("click", () => {
  proposalScreen.classList.add("hidden");
  yesScreen.classList.remove("hidden");
  startConfetti();
});

// 🎉 Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += Math.cos(c.d) + 2;
    if (c.y > canvas.height) confetti[i].y = 0;
  });
  requestAnimationFrame(animateConfetti);
}