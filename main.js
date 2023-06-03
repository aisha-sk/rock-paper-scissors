// Javascript code

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {

    // variable i chooses an index value
    // it will be used to select a random value (array)
    // possible i values are {0,1,2}

    let i = Math.floor(Math.random() * 3)

    choices = ["rock","paper","scissors"]
    computerChoice = choices[i]
    
    return computerChoice

}

function playRound(playerSelection,computerSelection) {

    // used for each round played
    // returns the winner
    
    if (playerSelection === "paper" && computerSelection === "rock") {

        playerPoints += 1
        return "You Win! Paper beats Rock"

    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerPoints += 1
        return "You Win! Rock beats Scissors"
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper") {

        playerPoints += 1
        return "You Win! Scissors beats Paper"
    } 

    else if (playerSelection === "rock" && computerSelection === "rock" 
    || playerSelection === "paper" && computerSelection === "paper"
    || playerSelection === "scissors" && computerSelection === "scissors") {

        playerPoints += 1
        computerPoints += 1
        return "Oops, it's a draw. You both get a point!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {

        computerPoints += 1
        return "You Lost! Paper beats Rock"

    }
    
    else if (playerSelection === "scissors" && computerSelection === "rock") {

        computerPoints += 1
        return "You Lost! Rock beats Scissors"
    }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") {

        computerPoints += 1
        return "You Lost! Scissors beats Paper"
    } 

    else {
        return "Invalid choice, please try again - rock/paper/scissors"
    }
    
}

// console.log(playRound(playerSelection, computerSelection));

// console.log(playerPoints,computerPoints); playerScore == 5 || computerScore == 5

function game() {
    
    while (computerPoints < 5 && playerPoints < 5) {

        let playerSelection = prompt("Enter your choice: (rock/paper/scissors)")
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection,computerSelection)

        console.log(result)
        console.log("Your points: ", playerPoints)
        console.log("Computer's Points: ", computerPoints)

    }

    if (playerPoints > computerPoints) {

        console.log(`Final Result: You are the winner! :)\n
        Final Score - ${playerPoints}:${computerPoints}`)

    }

    else if (playerPoints < computerPoints) {

        console.log(`Final Result: Computer is the winner! :(\n
            Final Score - ${playerPoints}:${computerPoints}`)
    }

    else if (playerPoints === computerPoints) {

        console.log(`Oops. It's a draw. Nobody wins :(\n
            Final Score - ${playerPoints}:${computerPoints}`)
    }

}

// let playerSelection = prompt("Enter your choice: (rock/paper/scissors)")
// let computerSelection = getComputerChoice();


game()