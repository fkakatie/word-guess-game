// VARIABLES
var wordList = ["BETTA", "EPSSILON", "DEELTA"]; // possible game choices

var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];

// collect user input
var userGuess = " "; // to be replaced by event.key
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // limiting valid user inputs

var correctGuesses = [];
    incorrectGuesses = [];
    userGuesses = [];

// establish game metrics
var wins = 0;
    losses = 0;

var guessesLeft = 5;

// replace computer choice with underscores on screen, to be updated by computerChoice.length
var underscores = [];

// FUNCTIONS

// print computerChoice to screen 
function printWord() {
    if (computerChoice.indexOf(userGuess) || computerChoice.indexOf(userGuess) === 0) {
        // Checking userGuess against every letter of computerChoice (capturing double-letters)
        for (var i = 0; i < computerChoice.length; i++) {
            var computerChoiceSplit = computerChoice.split(""); // splits computerChoice into array of letters
            console.log(computerChoiceSplit);
            if (userGuess === computerChoiceSplit[i]) {
                underscores[i] = computerChoiceSplit[i];
            }
        }
        underscores[computerChoice.indexOf(userGuess)] = userGuess;
        document.getElementById("wordToGuess").innerHTML = underscores.join(" ");
    }
    else {
        var print = underscores.join(" ");
        document.getElementById("wordToGuess").innerHTML = print;
    }

}

// pushes new scores to document
function updateScores() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

// reset guess count for new games
function resetGuesses() {
    guessesLeft = 5;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

// combines correct and incorrect guesses into one arra of all user choices
function allGuesses() {
    userGuesses = correctGuesses.concat(incorrectGuesses);
}

// clears userGuess out of arrays to start game fresh
function clearGuesses() {
    correctGuesses = [];
    incorrectGuesses = [];
    allGuesses();
    underscores = [];
}

// generates underscores for each letter of computerChoice
function generateUnderscores() {
    for (var i = 0; i < computerChoice.length; i++) {
        underscores.push("_");
    }
    return underscores;
}

// restarts the game
function newWord() {
    clearGuesses();
    computerChoice = wordList[Math.floor(Math.random() * wordList.length)]; // chooses new word
    generateUnderscores();
    console.log(computerChoice);
    userGuess = " "; // clears userGuess, to be replaced by event.key
    printWord();
};

// evaluate if win or loss
function ifWinOrLoss() {
    // join underscores array into 'string', compare to computerChoice
    if (underscores.join("") == computerChoice) {
        console.log("You win!");
        wins++;
        updateScores(); // start new game
        resetGuesses();
        newWord();
    }
    else if (guessesLeft < 1) {
        console.log("You lose!")
        losses++;
        updateScores(); // start new game
        resetGuesses();
        newWord();
    }

}




// collect all user guesses
// must be alphabetical key
// must be unguessed key
// if correct guess, replace ALL underscores with correct guess
// if incorrect, count down tries and log wrong guesses
// if full word guessed, announce win, count up wins, and reset word
// if word not guessed, announce loss and missed word, and reset word




// collect userGuess by keystroke
document.onkeyup = function (event) {
    userGuess = event.key.toUpperCase(); // convert to uppercase
    console.log(userGuess);
    // for non-alphabet keystroke
    if (alphabet.indexOf(userGuess) === -1) {
        console.log("Letters only, please.");
    }
    // for previously guessed keystrokes
    else if (userGuesses.includes(userGuess)) {
        console.log("You've already guessed " + userGuess + "! Guess again.")
    }
    // for running the game otherwise
    else {
        // if the userGuess is in the computerChoice
        if (computerChoice.indexOf(userGuess) !== -1) {
            correctGuesses.push(userGuess); // adds userGuess to array
            allGuesses(); 
            printWord(); // update with userGuesses
        }
        // otherwise, incorrect guess
        else {
            incorrectGuesses.push(userGuess); // adds userGuess to array
            allGuesses(); 
            guessesLeft--;
            updateScores(); // counts down the remaining guesses
        }

        ifWinOrLoss(); // only runs in event of win or loss

    }

}

// PLAY THE GAME
    newWord();
    updateScores();