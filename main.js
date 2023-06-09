let playerPoints = 0;
let computerPoints = 0;

const btn = document.querySelector('.btn')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const outcomeDiv = document.querySelector('.outcome')

const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const playAgain = document.querySelector('.play-again')
const choiceDisplay = document.querySelector('#choices')
const finalResult = document.querySelector('.final-result')

playAgain.addEventListener ('click', () => {
    window.location.reload();
})

rock.addEventListener('click', () => {
    if (playerPoints > 5 || computerPoints >5) {

        return false
    }
    else {

        let computerSelection = getComputerChoice()
        const playerSelection = "rock"
        playRound(playerSelection,computerSelection)

        if (playerPoints === 5 || computerPoints === 5){

            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
            checkWinner(playerPoints,computerPoints)

            playerPoints++
            computerPoints++
            
        }
        else {
            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
        }
    }   
})

paper.addEventListener("click", () => {
    if (playerPoints > 5 || computerPoints >5) {
        return false
    }
    else {

        let computerSelection = getComputerChoice()
        const playerSelection = "paper"
        playRound(playerSelection,computerSelection)

        if (playerPoints === 5 || computerPoints === 5){

            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
            checkWinner(playerPoints,computerPoints)

            playerPoints++
            computerPoints++
            
        }
        else {
            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
        }
    }
})

scissors.addEventListener("click", () => {
    if (playerPoints > 5 || computerPoints >5) {
        return false
    }
    else {

        let computerSelection = getComputerChoice()
        const playerSelection = "scissors"
        playRound(playerSelection,computerSelection)

        if (playerPoints === 5 || computerPoints === 5){

            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
            checkWinner(playerPoints,computerPoints)

            playerPoints++
            computerPoints++
            
        }
        else {
            
            playerScoreSpan.innerText = `Player: ${playerPoints}`
            computerScoreSpan.innerText = `Computer: ${computerPoints}`
        }
    }
})


const checkWinner = (playerPoints,computerPoints) => {
    
    if (playerPoints === 5) {

        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won! The final score is ${playerPoints}:${computerPoints}`
        finalResult.append(h2)

        const playAgainbtn = document.createElement('button')
        playAgainbtn.innerText = "Play Again"
        playAgain.append(playAgainbtn)
        
    }
    if (computerPoints === 5) {

        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `The computer has won! The final score is ${playerPoints}:${computerPoints}`
        finalResult.append(h2)

        const playAgainbtn = document.createElement('button')
        playAgainbtn.innerText = "Play Again"
        playAgain.append(playAgainbtn)
        
    }
    
} 

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3)

    choices = ["rock","paper","scissors"]
    computerChoice = choices[i]
    return computerChoice
}

function playRound(playerSelection,computerSelection) {


    if (playerPoints >= 5 || computerPoints >= 5 ){
        return false
    }
    
    if (playerSelection === "paper" && computerSelection === "rock") {

        playerPoints += 1
        
        outcomeDiv.innerText = "You Win! Paper beats Rock\n\n"
        

    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerPoints += 1
        
        outcomeDiv.innerText = "You Win! Rock beats Scissors\n\n"
        
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints += 1
        
        outcomeDiv.innerText = "You Win! Scissors beats Paper\n\n"
        
    } 

    else if (playerSelection === "rock" && computerSelection === "rock" 
    || playerSelection === "paper" && computerSelection === "paper"
    || playerSelection === "scissors" && computerSelection === "scissors") {

        playerPoints += 0
        computerPoints += 0
        
        outcomeDiv.innerText = "Oops, it's a draw. Nobody gets a point.\n\n"
        
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {

        computerPoints += 1
        const p = document.createElement('p')
        outcomeDiv.innerText = "You Lost! Paper beats Rock\n\n"
        
    }
    
    else if (playerSelection === "scissors" && computerSelection === "rock") {

        computerPoints += 1
        
        outcomeDiv.innerText = "You Lost! Rock beats Scissors\n\n"
        
    }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") {

        computerPoints += 1
        
        outcomeDiv.innerText = "You Lost! Scissors beats Paper\n\n"
        
    } 

    //const choiceAns = document.createElement('p')
    choiceDisplay.innerText = `Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}\n\n`
    // choiceDisplay.append(choiceAns)

}