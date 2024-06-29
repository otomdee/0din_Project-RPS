
computerScore = 0;
userScore = 0;

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

function getUserChoice() {
    let choice = prompt("Play: ");
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        return(choice)
    }
    else {
        return ("10");
    }
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getUserChoice();

    if (computerChoice == "Rock") {
        if humanChoice == "Rock" {
            return ("draw")
        }
        else if (humanChoice == "Paper") {
            return("loss")
        }
        else {
            return ("win")
        }
    }

    if (computerChoice == "Paper") {
        if humanChoice == "Rock" {
            return ("win")
        }
        else if (humanChoice == "Paper") {
            return("draw")
        }
        else {
            return ("loss")
        }
    }

    if (computerChoice == "Scissors") {
        if humanChoice == "Rock" {
            return ("loss")
        }
        else if (humanChoice == "Paper") {
            return("win")
        }
        else {
            return ("draw")
        }
    }

}