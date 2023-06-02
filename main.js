// Javascript code
function getComputerChoice() {

    // variable i chooses an index value
    // it will be used to select a random value (array)
    // possible i values are {0,1,2}

    let i = Math.floor(Math.random() * 3)

    choices = ["rock","paper","scissors"]
    computerChoice = choices[i]
    
    return computerChoice

}

function playRound(playerSelection,computerChoice) {

    // used for each round played
    // returns the winner
    
    if (playerSelection === "paper" && computerSelection === "rock") {

        return "You Win! Paper beats Rock"

    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {

        return "You Win! Rock beats Scissors"
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper") {

        return "You Win! Scissors beats Paper"
    } 

    else if (playerSelection === "rock" && computerSelection === "rock" 
    || playerSelection === "paper" && computerSelection === "paper"
    || playerSelection === "scissors" && computerSelection === "scissors") {

        return "Oops, it's a draw. You both get a point!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {

        return "You Lost! Paper beats Rock"

    }
    
    else if (playerSelection === "scissors" && computerSelection === "rock") {

        return "You Lost! Rock beats Scissors"
    }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") {

        return "You Lost! Scissors beats Paper"
    } 
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

