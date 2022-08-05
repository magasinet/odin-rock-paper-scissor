// Computer Value
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random() * choices.length)];

}

// Player value from button
const btn = document.querySelectorAll("button");

btn.forEach((button) => {

    button.addEventListener("click", () => {
        
        let playerPick = button.value;
        
        const playerSelection = playerPick;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
       
    });
     
});




// player variable to be added with points after each game.
let playerPoints = 0;
let computerPoints = 0;

//Run one game and compare playerSelection(playerSelection) against computerSelection(computerhand)
function playRound(playerSelection, computerSelection) {
   
 const hands = document.getElementById("hands");

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

   

    const result = document.getElementById("result");
    result.textContent = `Your points: ${playerPoints}  Computer points: ${computerPoints}`;

    if (playerPoints === 5 || computerPoints === 5) {
        
        
        
        btn.forEach((button) => {
            button.disabled = true;
        });
        
        const winner = document.getElementById("winner");

       if (playerPoints > computerPoints) {
            winner.textContent=`Congratulations! You got ${playerPoints} point and the computer got ${computerPoints}`;
        } else  {
            winner.textContent=`Sorry mate! You got ${playerPoints} point and the computer got ${computerPoints}`;
        } 

/*         const board = document.querySelector(".board");
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart game";

        board.appendChild(restartButton); */


    }

}

/* 
THE WINNER WHO REACHES 5 POINTS WINS
SHOW THE WINNER
SHOW THE POINTS
RESTART THE GAME 

IF PLAYERPOINTS OR COMPUTERPOINTS = 5
ADD WINNER TO HTML
ADD POINTS TO HTML
MAKE BUTTONS NOT ACTIVE
DOM A NEW BUTTON TO RESTART THE GAME AND CLEAR TEXT(='') AND POINTS(=0)



*/


