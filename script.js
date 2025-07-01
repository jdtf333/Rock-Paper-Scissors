const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;
let round = 0;

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
        ++round;
    } else if (humanChoice === rock && computerChoice === paper) {
        console.log("Computer win\, PAPER beats ROCK");
        ++computerScore, ++round;
    } else if (humanChoice === paper && computerChoice === rock) {
        console.log("Human win\, PAPER beats ROCK");
        ++humanScore, ++round;
    } else if (humanChoice === rock && computerChoice === scissors) {
        console.log("Human win\, ROCK beats SCISSORS");
        ++humanScore, ++round;
    } else if (humanChoice === scissors && computerChoice === rock) {
        console.log("Computer win\, ROCK beats SCISSORS");
        ++computerScore, ++round;
    } else if (humanChoice === paper && computerChoice === scissors) {
        console.log("Computer win\, SCISSORS beat PAPER");
        ++computerScore, ++round;
    } else if (humanChoice === scissors && computerChoice === paper) {
        console.log("Human win\, SCISSORS beat PAPER");
        ++humanScore, ++round;
    } else {
        getHumanChoice(), getComputerChoice;
    }
    return round;
}

playRound(humanChoice, computerChoice);

console.log("Human score is\: ", + humanScore);
console.log("Computer score is\: ", + computerScore);
console.log("Round " + round + " over")

function playGame() {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score is\: ", + humanScore);
        console.log("Computer score is\: ", + computerScore);
        console.log("Round " + round + " over");
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score is\: ", + humanScore);
        console.log("Computer score is\: ", + computerScore);
        console.log("Round " + round + " over");
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score is\: ", + humanScore);
        console.log("Computer score is\: ", + computerScore);
        console.log("Round " + round + " over");
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score is\: ", + humanScore);
        console.log("Computer score is\: ", + computerScore);
        console.log("Round " + round + " over");
    if (humanScore > computerScore) {
        console.log("The winner is HUMAN");
    } else if (humanScore < computerScore) {
        console.log("The winner is COMPUTER");
    } else {
        console.log("Nice game");
    }
}

playGame();

/*     } else if (humanScore > computerScore) {
        console.log("The winner is HUMAN");
    } else if (humanScore > computerScore) {
        console.log("The winner is COMPUTER");
    } else {
        console.log("It\'s a tie");
    }
    return null; */