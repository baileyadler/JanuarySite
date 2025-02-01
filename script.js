
let userGreet = alert("Please follow the directions");
let userName = prompt("Write your name");
userName
  ? (document.getElementById("greeting").innerHTML = `<strong> Hello, ${userName}!</strong>`)
  : (document.getElementById("greeting").innerHTML = `<strong>Hello!</strong>`);

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playGame(playerChoice){
if (roundNumber >= 5) {
  let winnerMessage = "";
  if (playerScore > computerScore) {
      winnerMessage = `${userName} Wins the game`;
    } else if (computerScore > playerScore) {
      winnerMessage = "Computer Wins the game";
    }else {
      winnerMessage = "Tie game";
    }
    alert(`${winnerMessage}! Final Score - Player: ${playerScore} and Computer: ${computerScore} Game Over. Thanks for playing`);
    return;
      }
      roundNumber++;

      function getComputerChoice(){
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) return "rock";
        if (randomNumber === 1) return "paper";
        if (randomNumber === 2) return "scissors";
      }
      const computerChoice = getComputerChoice();
let result = "";
if (playerChoice === computerChoice && playerScore === computerScore){
  result = "Tie Game";
} else{
  switch(playerChoice){
    case "rock":
   result = (computerChoice === "scissors" || computerChoice === "paper" ) ? "You Win" : "Computer Win";
   break;
   case "paper":
   result = (computerChoice === "rock" || computerChoice === "scissors") ? "You Win" : "Computer Win";
   break;
   case "scissors":
   result = (computerChoice === "paper" || computerChoice === "rock") ? "You Win" : "Computer Win";
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
const restartButton = document.getElementById("restart");
restartButton.addEventListener 
("click", function () {
playerScore = 0;
computerScore = 0;
roundNumber = 0;
playerScoreDisplay.textContent = "0";
computerScoreDisplay.textContent = "0";
resultDisplay.textContent = "";
playerDisplay.textContent = "PLAYER: ";
computerDisplay.textContent = "COMPUTER:";

});
