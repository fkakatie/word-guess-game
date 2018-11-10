// KEEPING SCORE
var wins = 0;
    losses = 0;

var guessesLeft = 3;

// GAME OPTIONS 
var charactersList = ["MICHAEL", "DWIGHT", "JIM", "PAM"];

// COMPUTER CHOICE
var computerChoice = charactersList[Math.floor(Math.random()*charactersList.length)];

console.log(computerChoice);

// GENERATE UNDERSCORES

var underscores = [];

function generateUnderscores() {
    for (var i = 0; i < computerChoice.length; i++) {
        underscores.push("_");
    }
    return underscores;
}

console.log(generateUnderscores());

// CAPTURE USER GUESS

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var correctGuesses = [];
    incorrectGuesses = [];
    userGuesses = [];

function allGuesses() {
    userGuesses = correctGuesses.concat(incorrectGuesses);
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toUpperCase();

    console.log(userGuess);

    if (alphabet.indexOf(userGuess) === -1) {
        console.log(userGuess);
    } 
    // ERROR IF USER GUESSES SAME LETTER MORE THAN ONCE
    else if (userGuesses.includes(userGuess)) {
        alert("You've already guessed " + userGuess + "! Guess again.") 
    }
    // RUNS OTHERWISE
    else {

        if (computerChoice.indexOf(userGuess) > -1) {
            correctGuesses.push(userGuess);
            allGuesses();
            console.log("CORRECT: " + correctGuesses);
        }
        else {
            incorrectGuesses.push(userGuess);
            allGuesses();
            console.log("INCORRECT: " + incorrectGuesses);
        }

    }
}