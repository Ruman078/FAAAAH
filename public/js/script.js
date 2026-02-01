const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");

const questionContainer = document.getElementById("question-container");
const finalMessage = document.getElementById("final-message");

const noTexts = [
  "NO 😢",
  "ARE YOU SURE? 🥺",
  "REALLY SURE?? 😳",
  "COME ON ☹️",
  "MAR JAO AP 💔",
  "OK OK… THINK AGAIN 😌"
];

let index = 0;

/* ---------- NO BUTTON (TEASING MODE 😈) ---------- */
noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("click", moveNoButton);

function moveNoButton() {
  banner.src = "./public/images/no.gif";
  refreshBanner();

  noButton.textContent = noTexts[index % noTexts.length];
  index++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;

  noButton.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 10 - 5}deg)`;
}

/* ---------- YES BUTTON (SUCCESS 💖) ---------- */
yesButton.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  // Smooth transition
  questionContainer.style.opacity = "0";

  setTimeout(() => {
    questionContainer.style.display = "none";
    finalMessage.style.display = "block";
    finalMessage.style.opacity = "1";
  }, 400);
});

/* ---------- BANNER RESET (FOR GIF REPLAY) ---------- */
function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
