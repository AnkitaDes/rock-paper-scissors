const container = document.querySelector(".container");
const resultsDiv = document.querySelector(".results");

const rock = document.createElement("button");
container.appendChild(rock);
rock.classList.add("rock");
rock.textContent = "Rock";
rock.style.cssText = "padding:10px; margin:15px;";

const paper = document.createElement("button");
container.appendChild(paper);
paper.classList.add("paper");
paper.textContent = "Paper";
paper.style.cssText = "padding:10px; margin:15px;";

const scissor = document.createElement("button");
container.appendChild(scissor);
scissor.classList.add("scissor");
scissor.textContent = "Scissor";
scissor.style.cssText = "padding:10px; margin:15px;";

// console.log("Hello World");
// let computerChoice;

// let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
    result = `Its a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    result = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `Computer wins this round! ${computerChoice} beats ${humanChoice}`;
  }
  resultsDiv.textContent = `${result} Score: You ${humanScore} - Computer ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      resultsDiv.textContent = `You win the Game!!!`;
    } else {
      resultsDiv.textContent = `GAME OVER: Computer wins!!`;
    }

    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
  }
}

rock.addEventListener("click", () => playRound("rock"));

paper.addEventListener("click", () => playRound("paper"));

scissor.addEventListener("click", () => playRound("scissor"));
// function getComputerChoice() {
//   let num = Math.floor(Math.random() * 3 + 1);

//   if (num === 1) {
//     return (computerChoice = "rock");
//   } else if (num === 2) {
//     return (computerChoice = "paper");
//   } else {
//     return (computerChoice = "scissor");
//   }
// }

// function getHumanChoice() {
//   let choice = prompt("What is your choice?");
//   return choice.toLocaleLowerCase();
// }

// function playRound(humanChoice, computerChoice) {
//   if (
//     (humanChoice === "rock" && computerChoice === "rock") ||
//     (humanChoice === "scissor" && computerChoice === "scissor") ||
//     (humanChoice === "paper" && computerChoice === "paper")
//   ) {
//     console.log("Its a tie");
//     return;
//   }

//   if (
//     (humanChoice === "scissor" && computerChoice === "rock") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissor" && computerChoice === "paper")
//   ) {
//     humanScore += 1;
//     console.log("You get a point");
//   } else {
//     computerScore += 1;
//     console.log("Computer gets a point");
//   }
// }

// function playGame() {
//   while (humanScore < 5 && computerScore < 5) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     console.log("humanChoice, computerChoice:", humanChoice, computerChoice);

//     playRound(humanChoice, computerChoice);
//   }

//   if (humanScore === 5) {
//     console.log("You win the game!!!");
//   } else if (computerScore === 5) {
//     console.log("GAME OVER: Computer wins!!");
//   }
// }

// playGame();
