
let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerText = `Hello, ${userName}!`)
  : (document.getElementById("greeting").innerText = `Hello!`);

const choices = ["rock", "paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
function playGame(playerChoice){
  roundNumber++;

  if (roundNumber > 5) {
    alert('Game Over. Thanks for playing');
      }

  const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";
if(playerChoice === computerChoice){
  result = "Tie Game";
} else{
  switch(playerChoice){
    case "rock":
   result = (computerChoice === "scissors") ? "You Win" : "Computer Win";
   break;
   case "paper":
   result = (computerChoice === "rock") ? "You Win" : "Computer Win";
   break;
   case "scissors":
   result = (computerChoice === "paper") ? "You Win" : "Computer Win";
   break;
  }
}
switch(result){
  case "You Win":
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    break;
    case "Computer Win":
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    break;
}
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;
}

