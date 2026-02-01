const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");

const question = document.getElementById("question-heading");
const firstButtons = document.getElementById("first-buttons");

const stepOne = document.getElementById("step-one");
const stepTwo = document.getElementById("step-two");
const finalStep = document.getElementById("final-step");

const reallyYes = document.getElementById("really-yes");
const reallyNo = document.getElementById("really-no");
const finalYes = document.getElementById("final-yes");

/* ---------- NO BUTTON (NORMAL) ---------- */
noButton.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  refreshBanner();
});

/* ---------- FIRST YES ---------- */
yesButton.addEventListener("click", () => {
  banner.src = "./public/images/prank.png";
  refreshBanner();

  question.style.display = "none";
  firstButtons.style.display = "none";

  stepOne.classList.remove("hidden");
});

/* ---------- CLICK IF YOU REALLY WANNA GO ---------- */
reallyYes.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  stepOne.classList.add("hidden");
  finalStep.classList.remove("hidden");
});

/* ---------- NO I WON'T GO ---------- */
reallyNo.addEventListener("click", () => {
  banner.src = "./public/images/sorry.png";
  refreshBanner();

  stepOne.classList.add("hidden");
  stepTwo.classList.remove("hidden");
});

/* ---------- FINAL YES ---------- */
finalYes.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  stepTwo.classList.add("hidden");
  finalStep.classList.remove("hidden");
});

/* ---------- GIF RESET ---------- */
function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
