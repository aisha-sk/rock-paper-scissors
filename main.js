// Javascript code
function getComputerChoice() {

    // variable i chooses an index value
    // it will be used to select a random value (array)
    // possible i values are {0,1,2}

    let i = Math.floor(Math.random() * 3)

    choices = ["rock","paper","scissors"]

    return choices[i]

}
