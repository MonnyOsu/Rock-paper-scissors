let playerScore = 0;
let computerScore = 0;

let images = document.querySelectorAll('img');
let result = document.getElementById('result');
let score = document.getElementById('score');
let finalResult = document.getElementById('final-result')

// function to disable buttons after win
function disableImage() {
    images.forEach(image => {
        image.disabled = true;
    });
}

// add function to reset game scoreboard
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = '';
    finalResult.textContent = '';
}

// function to randomly select computers move
function computerPlay() {
    let moveList = ['rock', 'paper', 'scissors'];
    return moveList[Math.floor(Math.random() * moveList.length)]
}

// function to play a round. function takes playerSelection and compares to computerSelection
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++

        result.textContent = `Player plays ${playerSelection}, Computer plays ${computerSelection}, Player Wins!`

        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    }

    else if
        (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++

        result.textContent = `Player plays ${playerSelection}, Computer plays ${computerSelection}, Computer Wins!`;

        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    }

    else {
        result.textContent = `Player plays ${playerSelection}, Computer plays ${computerSelection}, it's a tie!`;
        score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    }

}




// Add event listener to buttons / add timeout before reseting scores

images.forEach(image => {
    image.addEventListener('click', () => {
        playRound(image.id);
        if (playerScore === 5) {
            finalResult.textContent = 'Player Wins!';
            setTimeout(resetGame, 3000);
        } else if (computerScore === 5) {
            finalResult.textContent = 'Computer Wins!';
            setTimeout(resetGame, 3000);
        }
    })
})


