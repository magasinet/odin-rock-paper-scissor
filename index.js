/* ROCK PAPER SCISSOR 

User plays against the computer. 
There are three choices: rock, paper or scissor.
Rock > scissor. Scissor > paper. Paper > rock. If user and computer has same hand => draw.
The winner of 5 games. 


*/

/* 
Computer selects randomly rock, paper or scissor.
    GET VALUE RANDOM FROM ARRAY AND RETURN HAND IN COMPUTERHAND
User input select rock, paper or scissor.
    GET VALUE FROM USER INPUT AND STORE IN PLAYERHAND

Compare values. The winner gets 1 point. If draw => no points.
    COMPARE COMPUTERHAND WITH PLAYERHAND.
    IF COMPUTERHAND>PLAYERHAND => COMPUTERHAND 1point
    ELSE IF PLAYERHAND>COMPUTERHAND => PLAYERHAND 1point
    ELSE START OVER WITHOUT HANDING POINTS

Play 5 games.
    RUN ABOVE 5 TIMES
    COMPARE POINTS
    IF COMPUTER-POINTS > PLAYER-POINTS => "COMPUTER WINS"
    IF PLAYER-POINTS > COMPUTER-POINTS => "PLAYER WINS"
    ELSE "DRAW"

Restart
    BACK TO SQUARE 1

*/

// Computer Value
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random() * choices.length)];

}

// player variable to be added with points after each game.
let playerPoints = 0;
let computerPoints = 0;

//Compare Values
function playRound(playerSelection, computerSelection) {
   
    // make player input not case-sensitive
    let playerHand = playerSelection.toUpperCase();


    //compare hands and add 1 point to the winner
    if (playerHand === "ROCK" && computerSelection === "PAPER") {
        computerPoints += 1;
        console.log("You lose! Paper beats Rock");

    } else if (playerHand === "ROCK" && computerSelection === "SCISSOR") {
        playerPoints += 1;
        console.log("You win! Rock beats scissor");

    } else if (playerHand === "ROCK" && computerSelection === "ROCK") {
        console.log("Draw! Nobody wins");

    } else if (playerHand === "PAPER" && computerSelection === "ROCK") {
        playerPoints += 1;
        console.log("You win! Paper beats rock");

    } else if (playerHand === "PAPER" && computerSelection === "SCISSOR") {
        computerPoints += 1;
        console.log("You lose! Scissor beats paper");

    } else if (playerHand === "PAPER" && computerSelection === "PAPER") {
        console.log("Draw! Nobody wins");

    } else if (playerHand === "SCISSOR" && computerSelection === "PAPER") {
        playerPoints += 1;
        console.log("You win! Scissor beats paper");

    } else if (playerHand === "SCISSOR" && computerSelection === "ROCK") {
        computerPoints += 1;
        console.log("You lose! Rock beats scissor");

    } else if (playerHand === "SCISSOR" && computerSelection === "SCISSOR") {
        console.log("Draw! Nobody wins");
    }

}


//run playRound/game 5 times and check who has the most score

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissor?");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    //COMPARE POINTS AND CONSOLE FINAL RESULT
    if (playerPoints > computerPoints) {
        console.log(`Congratulations! You got ${playerPoints} point and the computer got ${computerPoints}`);
    } else if (computerPoints > playerPoints) {
        console.log(`Sorry mate! You got ${playerPoints} point and the computer got ${computerPoints}`)
    } else {
        console.log(`It's a draw! You got ${playerPoints} point and the computer got ${computerPoints}`);
    }

}

game();