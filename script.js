function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9);
    let randChoice = choice % 3;
    if (randChoice == 0) {
        return("Rock")
    }
    else if (randChoice == 1) {
        return("Paper")
    }
    else {
        return("Scissors")
    }
}

