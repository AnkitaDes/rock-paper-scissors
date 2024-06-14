console.log("Hello World");
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    return (computerChoice = "rock");
  } else if (num === 2) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissor");
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice?");
  return choice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "paper")
  ) {
    console.log("Its a tie");
    return;
  }

  if (
    (humanChoice === "scissor" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore += 1;
    console.log("You get a point");
  } else {
    computerScore += 1;
    console.log("Computer gets a point");
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("humanChoice, computerChoice:", humanChoice, computerChoice);

    playRound(humanChoice, computerChoice);
  }

  if (humanScore === 5) {
    console.log("You win the game!!!");
  } else if (computerScore === 5) {
    console.log("GAME OVER: Computer wins!!");
  }
}

playGame();
