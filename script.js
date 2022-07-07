function computerPlay(){
    let selector = Math.floor(Math.random() * 3) + 1;
    if (selector === 1){
        return 'Rock';
    }
    else if (selector === 2){
        return 'Paper';
    }
    else if (selector === 3){
        return 'Scissors';
    }
    else{
        return 'Something has gone wrong.'
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Tie! Play again.';
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            return 'You Win! Rock beats Scissors';
        }
        else {
            return 'You Lose! ' + computerSelection + ' beats Rock';
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return 'You Win! Paper beats Rock';
        }
        else {
            return 'You Lose! ' + computerSelection + ' beats Paper';
        }
    }
    if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            return 'You Win! Scissors beats Paper';
        }
        else {
            return 'You Lose! ' + computerSelection + ' beats Scissors';
        }
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(computerPlay);
console.log(playRound(playerSelection, computerSelection));