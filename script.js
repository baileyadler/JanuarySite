let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}!`)
  : (document.getElementById("greeting").innerText = `Hello!`);

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;
let resultChoice;
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer has won.";
    } else {
      return "The user has won.";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
};

const computerChoice = getComputerChoice();
const result = getResult(userChoice, computerChoice);



document.getElementById("userResult").textContent = `User score: ${userResult}`;
document.getElementById("computerResult").textContent = `Computer Score ${computerResult}`;
document.getElementById("resultChoice").textContent = result;
document.getElementById("userResult").textContent = `user: ${userResult}.`;
document.getElementById("computerResult").textContent = `computer: ${computerResult}.`;
document.getElementById("resultChoice").textContent = `result: ${resultChoice}.`;

if (result === "The user has won") {
  userScore++;
} else if (result === "The computer has won") {
  computerScore++;
}
roundNumber++;
if (roundNumber === 5) {
  if (userScore > computerScore) {
    console.log("User wins");
  } else if (userScore < computerScore) {
    console.log("Computer won");
  } else {
    console.log("Tie game");
  }
  console.log("Game Over");
  alert("Game is over. Thanks for playing.");
}

