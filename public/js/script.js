const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");

const firstButtons = document.getElementById("first-buttons");
const question = document.getElementById("question-heading");

const stepOne = document.getElementById("step-one");
const stepTwo = document.getElementById("step-two");
const finalStep = document.getElementById("final-step");

const reallyYes = document.getElementById("really-yes");
const reallyNo = document.getElementById("really-no");
const finalYes = document.getElementById("final-yes");

const noTexts = [
  "NO 😢",
  "ARE YOU SURE? 🥺",
  "REALLY SURE?? 😳",
  "COME ON ☹️",
  "DON’T BREAK MY HEART 💔",
  "OK OK… THINK AGAIN 😌"
];

let index = 0;
let size = 50;

/* NO BUTTON LOGIC */
noButton.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  refreshBanner();

  noButton.textContent = noTexts[index % noTexts.length];
  index++;

  size += 10;
  yesButton.style.transform = `scale(${size / 50})`;
});

/* FIRST YES */
yesButton.addEventListener("click", () => {
  banner.src = "./public/images/prank.gif";
  refreshBanner();

  question.style.display = "none";
  firstButtons.style.display = "none";

  stepOne.classList.remove("hidden");
});

/* CLICK IF YOU REALLY WANNA GO */
reallyYes.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  stepOne.classList.add("hidden");
  finalStep.classList.remove("hidden");
});

/* NO I WON'T GO */
reallyNo.addEventListener("click", () => {
  banner.src = "./public/images/sorry.gif";
  refreshBanner();

  stepOne.classList.add("hidden");
  stepTwo.classList.remove("hidden");
});

/* FINAL YES AFTER APOLOGY */
finalYes.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  stepTwo.classList.add("hidden");
  finalStep.classList.remove("hidden");
});

function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
