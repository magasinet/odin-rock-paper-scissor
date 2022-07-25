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

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random()*choices.length)];

}