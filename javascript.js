function getComputerChoice() {
    const randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return 'Rock';
    } else if (randomNumber < 0.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    const playerSelects = playerSelection.toLowerCase();
    const computerSelects = computerSelection.toLowerCase();
    
    if (playerSelects === computerSelects) {
        return `It's a tie! You both chose ${playerSelects}`;
    } else if (playerSelects === 'rock' && computerSelects === 'paper') {
        return "You lose! Paper covers Rock";
    } else if (playerSelects === 'rock' && computerSelects === 'scissors') {
        return "You win! Rock breaks Scissors"; 
    } else if (playerSelects === 'paper' && computerSelects === 'rock') {
        return "You win! Paper covers Rock";
    } else if (playerSelects === 'paper' && computerSelects === 'scissors') {
        return "You lose! Scissors cuts Paper";
    } else if (playerSelects === 'scissors' && computerSelects === 'rock') {
        return "You lose! Rock breaks Scissors";
    } else if (playerSelects === 'scissors' && computerSelects=== 'paper') {
        return "You win! Scissors cuts Paper";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your move (Rock, Paper, Scissors):', '');
        const computerSelection = getComputerChoice();
        
        const result = playRound(playerSelection, computerSelection);
        
        console.log(result);
        console.log(round);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }

        round++;
    }
    
    
    if (playerScore > computerScore) {
        return 'YOU BEAT THE COMPUTER!'
    } else if (computerScore > playerScore) {
        return 'OH NO! COMPUTER WINS.'
    } else {
        return 'TIE TIE TIE!'
    }
}

console.log(game());