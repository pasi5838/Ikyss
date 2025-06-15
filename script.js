const questions = [
  { question: "Hewan apa yang melolong?", answer: "serigala" },
  { question: "Hewan apa yang suka wortel?", answer: "kelinci" },
  { question: "Hewan yang hidup di laut dan punya tentakel?", answer: "gurita" },
  { question: "Hewan yang besar dan belalainya panjang?", answer: "gajah" },
  { question: "Hewan yang suka memakan keju?", answer: "tikus" },
  { question: "Hewan yang kulitnya belang hitam putih?", answer: "zebra" },
  { question: "Hewan yang punya leher panjang?", answer: "jerapah" },
  { question: "Hewan yang raja hutan?", answer: "singa" },
  { question: "Hewan yang berjalan lambat dan punya cangkang?", answer: "kura-kura" },
  { question: "Hewan yang bisa terbang dan bernyanyi?", answer: "burung" },
  // 40 soal tambahan
];
while (questions.length < 50) {
  questions.push({ question: `Soal ke-${questions.length+1}`, answer: `jawaban${questions.length+1}` });
}

let current = 0;
let lives = 3;
let score = 0;

const q = document.getElementById("question");
const a = document.getElementById("answer");
const m = document.getElementById("message");
const l = document.getElementById("lives");
const s = document.getElementById("score");

function loadQuestion() {
  if (current >= questions.length) {
    q.innerText = "Selamat! Kamu telah menyelesaikan semua soal!";
    return;
  }
  q.innerText = questions[current].question;
  a.value = "";
  m.innerText = "";
}

function checkAnswer() {
  if (a.value.toLowerCase() === questions[current].answer.toLowerCase()) {
    score++;
    s.innerText = "Skor: " + score;
    confettiEffect();
    current++;
    loadQuestion();
  } else {
    lives--;
    l.innerText = "❤️".repeat(lives);
    m.innerText = "Salah! Coba lagi.";
    if (lives <= 0) {
      q.innerText = "Game Over 😢";
      a.disabled = true;
    }
  }
}

function restartGame() {
  current = 0;
  lives = 3;
  score = 0;
  s.innerText = "Skor: 0";
  l.innerText = "❤️❤️❤️";
  a.disabled = false;
  loadQuestion();
}

function confettiEffect() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const confetti = confettiCanvas.create(document.getElementById('confetti'));
  const interval = setInterval(() => {
    if (Date.now() > animationEnd) {
      clearInterval(interval);
      confetti.clear();
    } else {
      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, 250);
}

loadQuestion();