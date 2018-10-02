let playerScore = 0;
let compScore = 0;
let playerChoice;
let compChoice;

function gameLogic(){
    if(playerChoice == 'rock'){
        if(compChoice == 'paper'){
            compScore++;
        } else if(compChoice == 'scissor'){
            playerScore++;
        } 
    } else if(playerChoice == 'paper'){
        if(compChoice == 'scissor'){
            compScore++;
        } else if(compChoice == 'rock'){
            playerScore++;
        }
    } else if(playerChoice == 'scissor'){
        if(compChoice == 'rock'){
            compScore++;
        } else if(compChoice == 'paper'){
            playerScore++;
        }
    }
}

function getCompChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    compChoice = choices[Math.floor(Math.random()*choices.length)]
}

function getPlayerChoice(choice){
    playerChoice = choice;
}

function displayScore(){
    document.getElementById('playerChoice').textContent = 'Player choose : ' + playerChoice;
    document.getElementById('compChoice').textContent = 'Computer choose : ' + compChoice;
    document.getElementById('playerScore').textContent = 'Player score : ' + playerScore;
    document.getElementById('compScore').textContent = 'Computer score : ' + compScore;
}

function game(){
    getCompChoice();
    gameLogic();
    displayScore();
}