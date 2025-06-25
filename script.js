/* Player and Computer choose Rock, Paper or Scissors */
/* Rock wins over Scissor, Paper wins over Rock and Scissor wins over Paper */
/* The winner gets 1 score, Tie doesn't add score to both, Loser never adds score */
/* Make a Player wins, Computer wins and It's a tie message pops up */
function getHumanChoice() {
    let humanWeapon = prompt("Enter weapon");
    if (humanWeapon === null) {
        console.log("Let's play next time");
    } else if (humanWeapon.toLowerCase() === "") {
        console.log("Please enter weapon");
    } else if (humanWeapon.toLowerCase() === "rock") {
        console.log("Rock");
    } else if (humanWeapon.toLowerCase() === "paper") {
        console.log("Paper");
    } else if (humanWeapon.toLowerCase() === "scissors") {
        console.log("Scissors");
    } else {
        console.log("Invalid weapon");
    } 
    return;
}

getHumanChoice();

function getComputerChoice() {
    let computerWeapon = ["Rock", "Paper", "Scissors"];
    let random = computerWeapon[Math.floor(Math.random() * computerWeapon.length)];
    return random;
}

console.log(getComputerChoice());