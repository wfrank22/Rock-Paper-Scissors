//select rock, paper, or scissors randomly
function computerPlay(){
    let selector = Math.floor(Math.random() * 3) + 1;
    if (selector === 1){
        return 'Rock';
    }
    else if (selector === 2){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

//compare player selection with computer selection and announce winner or tie
function playRound(playerSelection, computerSelection){
    //convert to lower case so strings can be compared
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 'Tie! Play again.';
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'Scissors'){
            return 'You Win! Rock beats Scissors';
        }
        else {
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Rock';
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection === 'Rock'){
            return 'You Win! Paper beats Rock';
        }
        else {
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Paper';
        }
    }
    if (playerSelection === 'scissors'){
        if (computerSelection === 'Paper'){
            return 'You Win! Scissors beats Paper';
        }
        else {
            return 'You Lose! ' + capitalize(computerSelection) + ' beats Scissors';
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let roundWinner = playRound();
        console.log(roundWinner)
    }
    console.log()
}

//capitalize first letter in string
function capitalize(a){
    a = a.toLowerCase();
    let firstLetter = a.substring(0, 1);
    let firstLetterCap = firstLetter.toUpperCase();
    a = a.replace(firstLetter, firstLetterCap)
    return a;
}

let playerSelection = 'ROcK';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));