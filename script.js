const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getHumanChoice() {
    let humanChoice = prompt("Enter weapon");
    if (humanChoice === null) {
        console.log("Let's play next time");
    } else if (humanChoice.toLowerCase() === "") {
        console.log("Please enter weapon");
    } else if (humanChoice.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = "scissors";
    } else {
        console.log("Invalid weapon");
    } 
    return console.log("Human selected, " + humanChoice);
}


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else if (computerChoice === 3) {
        computerChoice = "scissors";
    } 
    return console.log("Computer selected, " + computerChoice);
}

/* console.log(getComputerChoice()); */

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It\'s a tie");
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("Computer win\, paper beats rock");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("Human win\, paper beats rock");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("Human win\, rock beats scissors");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer win\, rock beats scissors");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer win\, scissors beat paper");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("Human win\, scissors beat paper");
    }
    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let humanScore = 0;
let computerScore = 0;