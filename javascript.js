let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const option1 = 'rock';
    const option2 = 'paper';
    const option3 = 'scissors';
    const randomNum = Math.floor(Math.random() * 3);

    let selection;

    if (randomNum === 0) {
        selection = option1;
    } else if (randomNum === 1) {
        selection = option2;
    } else if (randomNum === 2) {
        selection = option3;
    }
    
    return selection;
}

// Used this to test function - console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return `You lose! Paper covers rock`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return `You win! Rock crushes scissors`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You win! Paper covers rock`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return `You lose! Scissors cuts paper`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return `You lose! Rock crushes scissors`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! Scissors cuts paper`
    }
}


// Used to play one round with computer - console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Your turn to choose:').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return 'Congrats! You beat the computer'
    } else if (playerScore < computerScore) {
        return 'Too bad you lost to the computer!'
    } else {
        return `It's a tie! You can do better`
    }
}

alert(game());