let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(Element => {
        Element.disabled = true;
    });
}

// Adding if statement to determine winner of each round
// Increasing winners score by 

function playRound(playerSelection) {
    let result = '';
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        playerScore++
        result = `Player Wins! ${playerSelection} beats ${computerSelection}. Player Score: ${playerScore}, Computer Score: ${computerScore}`;

            if (playerScore === 5) {
            result += '<br><br>Player wins, refresh the page to play again'
            disableButtons()
            }

        } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
                
            computerScore++
            result = `Computer Wins! ${computerSelection} beats ${playerSelection}. Player Score: ${playerScore}, Computer Score: ${computerScore}`;

            if (computerScore === 5) {
                result += '<br><br>Computer wins, refresh the page to play again'
                disableButtons()
                }

        } else {
        result = `It\'s a tie. Player Score: ${playerScore}, Computer Score: ${computerScore}`
    }

    document.getElementById('result').innerHTML = result
    return
};

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
            playRound(button.value);
        })
})
