const btn = document.querySelectorAll("button");
const board = document.querySelector(".board");
const hands = document.getElementById("hands");
const result = document.getElementById("result");
const winner = document.getElementById("winner");
const restartButton = document.createElement('button');

let playerPoints = 0;
let computerPoints = 0;



// Get value from computer
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random() * choices.length)];

}

// Get value from player
btn.forEach((button) => {                        // Go through all buttons

    button.addEventListener("click", () => {

        let playerPick = button.value;           // See which button was pressed and get value      

        const playerSelection = playerPick;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);


    });

});


//Run game
function playRound(playerSelection, computerSelection) {

    //compare hands and add 1 point to the winner. If draw, no points added.
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerPoints += 1;
        hands.textContent = "You lose! Paper beats Rock";

    } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerPoints += 1;
        hands.textContent = "You win! Rock beats scissor";

    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        hands.textContent = "Draw! Nobody wins";

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerPoints += 1;
        hands.textContent = "You win! Paper beats rock";

    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        computerPoints += 1;
        hands.textContent = "You lose! Scissor beats paper";

    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        hands.textContent = "Draw! Nobody wins";

    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerPoints += 1;
        hands.textContent = "You win! Scissor beats paper";

    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        computerPoints += 1;
        hands.textContent = "You lose! Rock beats scissor";

    } else if (playerSelection === "SCISSOR" && computerSelection === "SCISSOR") {
        hands.textContent = "Draw! Nobody wins";
    }


    //show points during game
    result.textContent = `Your points: ${playerPoints}  Computer points: ${computerPoints}`;


    // stop game when player reaches 5 points
    if (playerPoints === 5 || computerPoints === 5) {

        btn.forEach((button) => {   //disable buttons when game over
            button.disabled = true;
        });


        // show winner
        if (playerPoints > computerPoints) {
            winner.textContent = `Congratulations! You got ${playerPoints} point and the computer got ${computerPoints}`;
        } else {
            winner.textContent = `Sorry mate! You got ${playerPoints} point and the computer got ${computerPoints}`;
        }


        // add restart button
        restartButton.textContent = "Restart game";
        board.appendChild(restartButton);
        restartButton.addEventListener("click", restartGame);


    }

}

// restarts game by clearing points, hands, result etc. 
function restartGame() {
    playerPoints = 0;
    computerPoints = 0;

    hands.textContent = "";
    result.textContent = "";
    winner.textContent = "";

    board.removeChild(restartButton);



    btn.forEach((button) => {
        button.disabled = false;
    });

}


