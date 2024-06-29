
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

let comp;
let usr; 

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getUserChoice();
    comp = computerChoice;
    usr = humanChoice;

    if (computerChoice == "Rock") {
        if (humanChoice == "Rock") {
            return ("draw")
        }
        else if (humanChoice == "Paper") {
            return("Win")
        }
        else {
            return ("lose")
        }
    }

    else if (computerChoice == "Paper") {
        if (humanChoice == "Rock") {
            return ("lose")
        }
        else if (humanChoice == "Paper") {
            return("draw")
        }
        else {
            return ("Win")
        }
    }

    else if (computerChoice == "Scissors") {
        if (humanChoice == "Rock") {
            return ("Win")
        }
        else if (humanChoice == "Paper") {
            return("lose")
        }
        else {
            return ("draw")
        }
    }

}


function consoleOutput() {
    let ans = playRound();
    if (ans == "Win") {
        ++userScore;
        return("You Win! " + usr + " beats " + comp)
    }
    else if (ans == "lose") {
        ++computerScore
        return("You lose! " + comp + " beats " + usr)   
    }
    else if (ans == "draw") {
        return("Draw. " + usr + " draws " + comp)
    }
}

console.log(consoleOutput() + "\n" + "Your score : " + userScore + "\n" + "computer score: " + computerScore);