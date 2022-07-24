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
    //compare player & computer choice
    if(playerCount == 5 || computerCount == 5){
        return;
    }

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


//capitalize first letter in string
function capitalize(a){
    a = a.toLowerCase();
    let firstLetter = a.substring(0, 1);
    let firstLetterCap = firstLetter.toUpperCase();
    a = a.replace(firstLetter, firstLetterCap)
    return a;
}


let playerSelection;
let computerSelection = computerPlay();
let playerCount = 0;
let computerCount = 0;



document.addEventListener('click', function(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    if(playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper'){
        const announce = document.querySelector('#announce');
        announce.textContent = playRound(playerSelection, computerSelection);
        if(playerCount == 5){
            announce.textContent = 'You\'ve won the game! :)';
        }
        else if(computerCount == 5){
            announce.textContent = 'You\'ve lost the game. :(';
        }

        const counter = document.querySelector('#counter');
        counter.textContent = 'Player: ' + playerCount + ' Computer: ' + computerCount;
    }
})

if(playerCount == 5 || computerCount == 5){
    document.addEventListener('click', function(e){
        console.log(e.target);
    })
}


// function game(){
//     let roundWinner = playRound(playerSelection, computerSelection)
//     console.log(roundWinner);
//     if(playerCount == 0 && computerCount == 0){
//         console.log('Best of 5 starts now!');
//     }
//     else if(playerCount == 3){
//         playerCount = 0;
//         computerCount = 0;
//         return 'You\'ve won the game! :)';
//     }
//     else if(computerCount == 3){
//         playerCount = 0;
//         computerCount = 0;
//         return 'You\'ve lost the game. :(';
//     }
// }

// console.log(game(selectPlayerChoice(), computerSelection));

//5 rounds and select winner
// function game(){
//     console.log('Best of 5 starts now!')
//     //while(playerCount < 3 && computerCount < 3){
//         roundWinner = playRound(playerSelection, computerSelection);
//         console.log(roundWinner)
//         computerSelection = computerPlay(); //new computer choice
//     //}
//     if (playerCount > computerCount){
//         return 'You\'ve won the game! :)';
//     }
//     else if(computerCount > playerCount){
//         return 'You\'ve lost the game. :(';
//     }
//     else{
//         return 'Tie game!';
//     }
// }
//console.log(game(playerSelection, computerSelection));