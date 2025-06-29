const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

function getHumanChoice() {
    let humanChoice = prompt("Enter weapon");
    if (humanChoice === null) {
        console.log("Let's play next time");
    } else if (humanChoice.toLowerCase() === "") {
        console.log("Please enter weapon");
    } else if (humanChoice.toLowerCase() === "rock") {
        humanChoice = rock;
    } else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = paper;
    } else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = scissors;
    } else {
        console.log("Invalid weapon");
    }

    console.log("Human selected " + humanChoice)

    return humanChoice;
    
}



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = rock;
    } else if (computerChoice === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    } 

    console.log("Computer selected " + computerChoice)

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It\'s a tie");
    } else if (humanChoice === rock && computerChoice === paper) {
        console.log("Computer win\, PAPER beats ROCK");
    } else if (humanChoice === paper && computerChoice === rock) {
        console.log("Human win\, PAPER beats ROCK");
    } else if (humanChoice === rock && computerChoice === scissors) {
        console.log("Human win\, ROCK beats SCISSORS");
    } else if (humanChoice === scissors && computerChoice === rock) {
        console.log("Computer win\, ROCK beats SCISSORS");
    } else if (humanChoice === paper && computerChoice === scissors) {
        console.log("Computer win\, SCISSORS beat PAPER");
    } else if (humanChoice === scissors && computerChoice === paper) {
        console.log("Human win\, SCISSORS beat PAPER");
    }
    return;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

let humanScore = 0;
let computerScore = 0;