const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");

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

noButton.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  refreshBanner();

  noButton.textContent = noTexts[index % noTexts.length];
  index++;

  size += 10;
  yesButton.style.transform = `scale(${size / 50})`;
});

yesButton.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  refreshBanner();

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".message").style.display = "block";
});

function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
