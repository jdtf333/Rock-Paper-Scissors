/* Player and Computer choose Rock, Paper or Scissors */
/* Rock wins over Scissor, Paper wins over Rock and Scissor wins over Paper */
/* The winner gets 1 score, Tie doesn't add score to both, Loser never adds score */
/* Make a Player wins, Computer wins and It's a tie message pops up */
function getComputerChoice() {
    let computerWeapon = ["Rock", "Paper", "Scissors"];
    let random = computerWeapon[Math.floor(Math.random() * computerWeapon.length)];
    return random;
}

console.log(getComputerChoice());