let container = document.querySelector(".container");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

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

let choice;
    //use event delegation on container
    container.addEventListener("click", (event) => {
        let target = event.target;
        if (target == rock) {
            choice = "Rock";
        }
        else if (target == paper) {
            choice = "Paper";
        }
        else if (target == scissors) {
            choice = "Scissors";
        }

        let compChoice = getComputerChoice();
        let outcome;
            if (compChoice == "Rock") {
                if (choice == "Rock") {
                    outcome = "draw";
                }
                else if (choice == "Paper") {
                    outcome = "Win";
                }
                else {
                    outcome = "lose";
                }
            }
            else if (compChoice == "Paper") {
                if (choice == "Rock") {
                    outcome = "lose";
                }
                else if (choice == "Paper") {
                    outcome = "draw";
                }
                else {
                    outcome = "Win";
                }
            }
            else if (compChoice == "Scissors") {
                if (choice == "Rock") {
                    outcome = "Win";
                }
                else if (choice == "Paper") {
                    outcome = "lose";
                }
                else {
                    outcome = "draw";
                }
            }

            results.innerHTML = `Computer played ${compChoice}. You ${outcome}.`;
    })