function getComputerChoice(){
    const randNumber = Math.floor(Math.random() * 3);
    if(randNumber == 0){
        return 'rock';
    } else if(randNumber == 1){
        return 'paper';
    }

    return 'scissors';
}

function getHumanChoice(){
    return prompt('Choose one: rock, paper, scissors.');
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection){
        if(computerSelection === humanSelection){
            console.log("It's a tie!");
        } else if(computerSelection === 'rock'){
            if(humanSelection === 'paper'){
                console.log('You won! Paper beats Rock');
                humanScore += 1;
            } else if(humanSelection === 'scissors'){
                console.log('You lose! Rock beats Scissors');
                computerScore += 1;
            }
        } else if(computerSelection === 'paper'){
            if(humanSelection === 'rock'){
                console.log('You lose! Paper beats Rock');
                computerScore += 1;
            } else if(humanSelection === 'scissors'){
                console.log('You won! Scissors beats Paper');
                humanScore += 1;
            }
        } else if(computerSelection === 'scissors'){
            if(humanSelection === 'rock'){
                console.log('You won! Rock beats Scissors');
                humanScore += 1;
            } else if(humanSelection === 'paper'){
                console.log('You lose! Scissors beats Paper');
                computerScore += 1;
            }
        }
    }

    playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    playRound(getHumanChoice().toLowerCase(), getComputerChoice());

    console.log('SCORE');
    console.log('Human: ' + humanScore);
    console.log('Computer: ' + computerScore);
}

playGame();