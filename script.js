//select rock, paper, or scissors randomly for computer
function computerPlay(){
    let selector = Math.floor(Math.random() * 3) + 1;
    if (selector === 1){
        return 'rock';
    }
    else if (selector === 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//compare player selection with computer selection and announce winner or tie
function playRound(playerSelection, computerSelection){
    playerSelection = prompt('Pick Rock, Paper, or Scissors')
    //convert to lower case so strings can be compared
    playerSelection = playerSelection.toLowerCase();

    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
        console.log('Incorrect entry. Try again.')
        console.log(playerSelection, computerSelection);
        playerSelection = prompt('Pick Rock, Paper, or Scissors')
        playerSelection = playerSelection.toLowerCase();
    }

    //convert to lower case so strings can be compared
    //computerSelection = computerSelection.toLowerCase();

    //compare player & computer choice
    if (playerSelection === computerSelection){
        return 'Tie! Play again.';
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            playerCount++;
            return 'You Win! Rock beats Scissors';
        }
        else {
            computerCount++;
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Rock';
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            playerCount++;
            return 'You Win! Paper beats Rock';
        }
        else {
            computerCount++;
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Paper';
        }
    }
    if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            playerCount++;
            return 'You Win! Scissors beats Paper';
        }
        else {
            computerCount++;
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Scissors';
        }
    }
}

let playerSelection;
let computerSelection = computerPlay();
let playerCount = 0;
let computerCount = 0;

//capitalize first letter in string
function capitalize(a){
    a = a.toLowerCase();
    let firstLetter = a.substring(0, 1);
    let firstLetterCap = firstLetter.toUpperCase();
    a = a.replace(firstLetter, firstLetterCap)
    return a;
}

//5 rounds and select winner
function game(){
    for (let i = 0; i < 5; i++){
        let roundWinner = playRound(playerSelection, computerSelection);
        console.log(roundWinner)
        computerSelection = computerPlay(); //new computer choice
        //console.log(playerCount, computerCount);
    }
    if (playerCount > computerCount){
        return 'You\'ve won the game! :)';
    }
    else if(computerCount > playerCount){
        return 'You\'ve lost the game. :(';
    }
    else{
        return 'Tie game!';
    }
}

console.log(game(playerSelection, computerSelection));