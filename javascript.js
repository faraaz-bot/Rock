let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let winner;

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");

btn1.addEventListener("click", () => {
  humanChoice = "rock";
  const existingImage = document.getElementById("imageId");
  existingImage.remove();
  const newImage = document.createElement("img");
  newImage.src = "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg";
  newImage.id = "rock";
  const parentElement = document.getElementById("three1");
  parentElement.appendChild(newImage);
  computerChoice = getComputerChoice();
  init();
});

btn2.addEventListener("click", () => {
  humanChoice = "paper";
  const existingImage = document.getElementById("imageId");
  existingImage.remove();
  const newImage = document.createElement("img");
  newImage.src = "https://img.freepik.com/premium-photo/pieces-torn-paper-texture-background-with-copy-space-text_34155-717.jpg";
  newImage.id = "rock";
  const parentElement = document.getElementById("three1");
  parentElement.appendChild(newImage);
  computerChoice = getComputerChoice();
  init();
});

btn3.addEventListener("click", () => {
  humanChoice = "scissor";
  const existingImage = document.getElementById("imageId");
  existingImage.remove();
  const newImage = document.createElement("img");
  newImage.src = "https://img.freepik.com/premium-vector/yellow-scissor_473272-240.jpg";
  newImage.id = "rock";
  const parentElement = document.getElementById("three1");
  parentElement.appendChild(newImage);
  computerChoice=getComputerChoice();
  init();
});

function init() {
  const existingElement = document.getElementById("five1");
  existingElement.remove();
  const newElement = document.createElement("div");
  newElement.classList.add("five");
  const roundWinner = determineWinner(humanChoice, computerChoice);
  newElement.textContent = humanChoice + " vs " + computerChoice + " , " + roundWinner + " wins!";
  five.appendChild(newElement);
  
  const score1 = document.querySelector('seven');
  score1.remove();
  const newScore1 = document.createElement("div");
  newScore1.classList.add("seven11");
  newScore1.textContent = "Score: " + humanScore + " - " + computerScore;
  seven.appendChild(newScore1);

  }

function getComputerChoice() {
let computerChoice1;
  let random = Math.random();

  if (random <= 0.33) {
    computerChoice1 = "rock";


  } else if (random <= 0.66 && random >= 0.33) {
    computerChoice1 = "paper";

  } else {
    computerChoice1 = "scissor";
  }
  return computerChoice1;
}


function determineWinner(humanChoice, computerChoice) {
  let roundWinner;

  if (
    (computerChoice === "rock" && humanChoice === "scissor") ||
    (computerChoice === "scissor" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    roundWinner = "Computer";
  } else if (computerChoice === humanChoice) {
    roundWinner = "Tie";
  } else {
    humanScore++;
    roundWinner = "Human";
  }

  return roundWinner;
}







