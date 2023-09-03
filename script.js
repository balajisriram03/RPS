const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS ="SCISSORS";

function getRandomNumber(maxLimit) {
    return Math.floor(Math.random() * maxLimit);
}

function guess() {
    let randomNumber = getRandomNumber(3);
    if (randomNumber === 0) {
        return ROCK;
    }
    if (randomNumber === 1) {
        return PAPER;
    }
    if (randomNumber === 2) {
        return SCISSORS;
    }
}

function displayWinningMessage(userGuess,computerGuess,winner){
    let winningMessage=`User guessed : ${userGuess} \nComputer guessed : ${computerGuess} \n${winner}`;
    console.log(winningMessage);
  }
  function findTheWinner(user,computer){
    if(!user || !computer){
      return;
    }
    if(user === ROCK && computer === PAPER){
      return `Paper beats rock,Computer wins the game`
    }
    if(user === PAPER && computer === SCISSORS){
      return `Scissors beats paper,Computer wins the game`
    }
    if(user === SCISSORS && computer === ROCK){
      return `Rock beats scissors,Computer wins the game`
    }
    if(user === PAPER && computer === ROCK){
      return `Paper beats rock,User wins the game`
    }
    if(user === SCISSORS && computer === PAPER){
      return `Scissors beats paper,User wins the game`
    }
    if(user === ROCK && computer === SCISSORS){
      return `Rock beats scissors,User wins the game`
    }
    if(user==computer){
      return `Match draw`
    }
  }
  function startGame(){
    let userGuess=guess();
    let computerGuess=guess();
    let winner=findTheWinner(userGuess,computerGuess);
    displayWinningMessage(userGuess,computerGuess,winner);
  }
  startGame();
  

