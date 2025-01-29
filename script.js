let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}!`)
  : (document.getElementById("greeting").innerText = `Hello!`);

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

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

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  document.getElementById("userResult").innerText = `User score ${userScore}`;
  document.getElementById("computerResult").innerText = `Computer Score ${computerScore}`;
  document.getElementById("resultChoice").innerText = result;
};

document.getElementById("userResult").innerText = `user${userScore}.`;
document.getElementById(
  "computerResult"
).innerText = `computer${computerScore}.`;
document.getElementById("resultChoice").innerText = `result${result}`;

if (result === "The user has won") {
  userScore++;
} else if (result === "The computer has won") {
  computerScore++;
}

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
