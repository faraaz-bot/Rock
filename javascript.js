function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.33) {
        return "rock";
    } else if (random <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    var userInput = prompt("Enter your choice: rock, paper, or scissors");
    // Convert the user input to lowercase for case-insensitive comparison
    var choice = userInput.toLowerCase();
    // Validate the input
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        // If input is invalid, prompt again recursively
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Recursively call to prompt again
    }
}
function playRound(compChoice, humanChoice) {
    if (compChoice == "rock" && humanChoice == "scissor") {
        computerScore++;
        return "The Computer wins!";
    }
    if (compChoice == "scissor" && humanChoice == "paper") {
        computerScore++;
        return "The Computer wins!";
    }
    if (compChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return "The Computer wins!";
    }

    if (humanChoice == "rock" && compChoice == "scissor") {
        humanScore++;
        return "You win!";
    }
    if (humanChoice == "scissor" && compChoice == "paper") {
        humanScore++;
        return "You win!";
    }
    if (humanChoice == "paper" && compChoice == "rock") {
        humanScore++;
        return "You win!";
    }

    return "It's a tie!";
}



let humanScore = 0;
let computerScore = 0;

while(humanScore != 5 || computerScore != 5){
let compChoice = getComputerChoice();
console.log("Computer Choice: ",compChoice);
let humanChoice = getHumanChoice();
console.log("Human Choice: ", humanChoice);
console.log(playRound(compChoice, humanChoice));
console.log("Human Score: ", humanScore);
console.log("ComputerScore: ", computerScore);
}