let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}!`)
  : (document.getElementById("greeting").innerText = `Hello!`);

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const userResult = document.getElementById("user-result");
const computerResult = document.getElementById("computer-result");
const resultChoice = document.getElementById("result-choice");

let playerScore = 0;
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
  console.log(`You chose: ${userChoice}.`);
  console.log(`Computer chose: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};
