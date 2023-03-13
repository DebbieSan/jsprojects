console.log(
    "hello there! Welcome to the Human versus Machine rock, paper, scissors game!"
);
console.log("");

// function to get input from user that is not case-sensitive.

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("invalid input");
    }
};

// function to determine computer choice of rock or paper or scissors.

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;

        case 1:
            return "scissors";
            break;

        case 2:
            return "paper";
            break;

        default:
            console.log("invalid");
    }
};

// function to determine if human user or computer machine won the game.

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
        return "User has found the secret key! User wins!";
    }
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Machine wins!";
        } else {
            return "Human wins!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "Human wins!";
        } else {
            return "Machine wins!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Machine wins!";
        } else {
            return "Human wins!";
        }
    }
};

// the statement below displays the winner of the game.
console.log(determineWinner("bomb", "rock"));
