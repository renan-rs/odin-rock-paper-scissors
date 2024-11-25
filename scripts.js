function getComputerChoice(){
    const randNumber = Math.floor(Math.random() * 3);
    if(randNumber == 0){
        return 'rock';
    } else if(randNumber == 1){
        return 'paper';
    }

    return 'scissors';
}

let humanScore = 0;
let computerScore = 0;
const div = document.querySelector("#container");
const scoreDiv = document.querySelector("#score");
const roundStatus = scoreDiv.firstChild;
const humanSpan = document.querySelector('.playerScore');
const computerSpan = document.querySelector('.computerScore');
const winner = document.querySelector('.winner');

function toggleButtons(){
    for(const child of div.children){
        if(child.getAttribute('disabled') !== null){
            child.removeAttribute('disabled');
        } else {
            child.setAttribute('disabled', '');
        }
    }
}

function playRound(humanSelection, computerSelection){
    if(computerSelection === humanSelection){
        roundStatus.textContent = "It's a tie!";
    } else if(computerSelection === 'rock'){
        if(humanSelection === 'paper'){
            roundStatus.textContent = "You won! Paper beats Rock";
            humanScore += 1;
        } else if(humanSelection === 'scissors'){
            roundStatus.textContent = "You lose! Rock beats Scissors";
            computerScore += 1;
        }
    } else if(computerSelection === 'paper'){
        if(humanSelection === 'rock'){
            roundStatus.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
        } else if(humanSelection === 'scissors'){
            roundStatus.textContent = "You won! Scissors beats Paper";
            humanScore += 1;
        }
    } else if(computerSelection === 'scissors'){
        if(humanSelection === 'rock'){
            roundStatus.textContent = "You won! Rock beats Scissors";
            humanScore += 1;
        } else if(humanSelection === 'paper'){
            roundStatus.textContent = "You lose! Scissors beats Paper";
            computerScore += 1;
        }
    }

    humanSpan.textContent = humanScore;
    computerSpan.textContent = computerScore;

    if(humanScore == 5 || computerScore == 5){
        toggleButtons();
        winner.textContent = `Winner is ${humanScore == 5 ? 'HUMAN' : 'COMPUTER'}!!!`;
        humanScore = 0;
        humanSpan.textContent = '0';
        computerScore = 0;
        computerSpan.textContent = '0';

        setTimeout(() => {
            winner.textContent = '';
            roundStatus.textContent = '';
            toggleButtons();
        }, 3000);
    }
}

div.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.parentNode;
    const pcChoice = getComputerChoice();
    // console.log("Player choose: " + target.id);
    // console.log("PC choose: " + pcChoice);
    // console.log("------------------");
    switch(target.id){
        case 'rock':
            playRound(target.id, pcChoice);
            break;
        case 'paper':
            playRound(target.id, pcChoice);
            break;
        case 'scissors':
            playRound(target.id, pcChoice);
            break;
        default:
            roundStatus.textContent = 'Wrong Option';
    }
})