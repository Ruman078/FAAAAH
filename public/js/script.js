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

  noButton.onclick = () => {
    banner.src = "./public/images/no.gif";
    resetGif();
  };

  yesButton.onclick = () => {
    banner.src = "./public/images/prank.png";
    resetGif();

    question.style.display = "none";
    firstButtons.style.display = "none";
    stepOne.classList.remove("hidden");
  };

  reallyYes.onclick = () => {
    banner.src = "./public/images/yes.gif";
    resetGif();

    stepOne.classList.add("hidden");
    finalStep.classList.remove("hidden");
  };

  reallyNo.onclick = () => {
    banner.src = "./public/images/sorry.png";
    resetGif();

    stepOne.classList.add("hidden");
    stepTwo.classList.remove("hidden");
  };

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
