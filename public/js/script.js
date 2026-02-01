document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");

  const question = document.getElementById("question-heading");
  const firstButtons = document.getElementById("first-buttons");

  const stepOne = document.getElementById("step-one");
  const stepTwo = document.getElementById("step-two");
  const finalStep = document.getElementById("final-step");

  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const reallyYes = document.getElementById("really-yes");
  const reallyNo = document.getElementById("really-no");
  const finalYes = document.getElementById("final-yes");

  const noTexts = [
    "NO 😿",
    "ARE YOU SURE? 🥺",
    "NAH 😏",
    "TRY AGAIN 😌",
    "NOT TODAY 👀",
    "COME ON 😭"
  ];

  let noIndex = 0;

  /* 😈 NO BUTTON — JUMP + TEXT CHANGE */
  function messWithNoButton() {
    banner.src = "./public/images/no.gif";
    resetGif();

    noButton.textContent = noTexts[noIndex % noTexts.length];
    noIndex++;

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    const rotate = Math.random() * 20 - 10;

    noButton.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  }

  noButton.addEventListener("mouseenter", messWithNoButton);
  noButton.addEventListener("click", messWithNoButton);

  /* 💖 YES — GOES TO PRANK STEP */
  yesButton.onclick = () => {
    banner.src = "./public/images/prank.png";
    resetGif();

    question.style.display = "none";
    firstButtons.style.display = "none";
    stepOne.classList.remove("hidden");
  };

  /* ☕ CLICK IF YOU REALLY WANNA GO */
  reallyYes.onclick = () => {
    banner.src = "./public/images/yes.gif";
    resetGif();

    stepOne.classList.add("hidden");
    finalStep.classList.remove("hidden");
  };

  /* 😭 NO I WON'T GO */
  reallyNo.onclick = () => {
    banner.src = "./public/images/sorry.png";
    resetGif();

    stepOne.classList.add("hidden");
    stepTwo.classList.remove("hidden");
  };

  /* 💕 OK I CAN GO */
  finalYes.onclick = () => {
    banner.src = "./public/images/yes.gif";
    resetGif();

    stepTwo.classList.add("hidden");
    finalStep.classList.remove("hidden");
  };

  function resetGif() {
    const src = banner.src;
    banner.src = "";
    banner.src = src;
  }
});
