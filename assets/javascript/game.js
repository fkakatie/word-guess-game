// VARIABLES
var wordList = [
    {name: "ANDY", img: "assets/images/abernard.jpg"},
    {name: "ANGELA", img: "assets/images/amartin.jpg"},
    {name: "ASTRID", img: "assets/images/alevinson.jpg"},
    {name: "BOB", img: "assets/images/bvance.jpg"},
    {name: "CATHY", img: "assets/images/csimms.jpg"},
    {name: "CECE", img: "assets/images/chalpert.jpg"},
    {name: "CHARLES", img: "assets/images/cminer.jpg"},
    {name: "CHRISTIAN", img: "assets/images/cmeadows.jpg"},
    {name: "CLARK", img: "assets/images/cgreen.jpg"},
    {name: "CREED", img: "assets/images/cbratton.jpg"},
    {name: "DAKOTA", img: "assets/images/djohnson.jpg"},
    {name: "DANNY", img: "assets/images/dcordray.jpg"},
    {name: "DARRYL", img: "assets/images/dphilbin.jpg"},
    {name: "DAVID", img: "assets/images/dbrent.jpg"},
    {name: "DAVID", img: "assets/images/dwallace.jpg"},
    {name: "DEANGELO", img: "assets/images/dvickers.jpg"},
    {name: "DONNA", img: "assets/images/dnewton.jpg"},
    {name: "DWIGHT", img: "assets/images/dschrute.jpg"},
    {name: "ED", img: "assets/images/etruck.jpg"},
    {name: "ERIN", img: "assets/images/ehannon.jpg"},
    {name: "ESTHER", img: "assets/images/ekirkpatrick.jpg"},
    {name: "FANNIE", img: "assets/images/fschrute.jpg"},
    {name: "FRED", img: "assets/images/fhenry.jpg"},
    {name: "GABE", img: "assets/images/glewis.jpg"},
    {name: "HANK", img: "assets/images/htate.jpg"},
    {name: "HANNAH", img: "assets/images/hsmoterich.jpg"},
    {name: "HELENE", img: "assets/images/hbeesly.jpg"},
    {name: "HIDE", img: "assets/images/hhasagawa.jpg"},
    {name: "HOLLY", img: "assets/images/hflax.jpg"},
    {name: "ISABEL", img: "assets/images/iporeba.jpg"},
    {name: "JAN", img: "assets/images/jlevinson.jpg"},
    {name: "JIM", img: "assets/images/jhalpert.jpg"},
    {name: "JO", img: "assets/images/jbennett.jpg"},
    {name: "JORDAN", img: "assets/images/jgarfield.jpg"},
    {name: "KAREN", img: "assets/images/kfilippelli.jpg"},
    {name: "KATY", img: "assets/images/kmoore.jpg"},
    {name: "KELLY", img: "assets/images/kkapoor.jpg"},
    {name: "KEVIN", img: "assets/images/kmalone.jpg"},
    {name: "LUKE", img: "assets/images/lcooper.jpg"},
    {name: "MARTIN", img: "assets/images/mnash.jpg"},
    {name: "MEREDITH", img: "assets/images/mpalmer.jpg"},
    {name: "MERV", img: "assets/images/mbronte.jpg"},
    {name: "MICHAEL", img: "assets/images/mscott.jpg"},
    {name: "MOSE", img: "assets/images/mschrute.jpg"},
    {name: "NATE", img: "assets/images/nnickerson.jpg"},
    {name: "NICK", img: "assets/images/nfranklin.jpg"},
    {name: "NELLIE", img: "assets/images/nbertram.jpg"},
    {name: "OSCAR", img: "assets/images/omartinez.jpg"},
    {name: "PAM", img: "assets/images/pbeesly.jpg"},
    {name: "PENNY", img: "assets/images/pbeesly2.jpg"},
    {name: "PETE", img: "assets/images/pmiller.jpg"},
    {name: "PHYLLIS", img: "assets/images/pvance.jpg"},
    {name: "ROB", img: "assets/images/rblatt.jpg"},
    {name: "ROBERT", img: "assets/images/rcalifornia.jpg"},
    {name: "ROBERT", img: "assets/images/rlipton.jpg"},
    {name: "ROLF", img: "assets/images/rahl.jpg"},
    {name: "RONNI", img: "assets/images/rraoul.jpg"},
    {name: "ROY", img: "assets/images/randerson.jpg"},
    {name: "RYAN", img: "assets/images/rhoward.jpg"},
    {name: "SADIQ", img: "assets/images/svaidya.jpg"},
    {name: "STEVE", img: "assets/images/spark.jpg"},
    {name: "SUSAN", img: "assets/images/scalifornia.jpg"},
    {name: "SYLVIA", img: "assets/images/sbeesly.jpg"},
    {name: "STANLEY", img: "assets/images/shudson.jpg"},
    {name: "TOBY", img: "assets/images/tflenderson.jpg"},
    {name: "TONY", img: "assets/images/tgardner.jpg"},
    {name: "TODD", img: "assets/images/tpacker.jpg"},
    {name: "VAL", img: "assets/images/vjohnson.jpg"},
    {name: "WALTER", img: "assets/images/wbernard.jpg"}
]; // possible game choices

var randomNumber = Math.floor(Math.random() * wordList.length);

var computerChoice = wordList[randomNumber].name;

// collect user input
var userGuess = " "; // to be replaced by event.key
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // limiting valid user inputs

var correctGuesses = [];
    incorrectGuesses = [];
    userGuesses = [];

// establish game metrics
var wins = 0;
    losses = 0;

var guessesLeft = 3;

// replace computer choice with underscores on screen, to be updated by computerChoice.length
var underscores = [];

// FUNCTIONS

// print computerChoice to screen 
function printWord() {
    if (computerChoice.indexOf(userGuess) || computerChoice.indexOf(userGuess) === 0) {
        // Checking userGuess against every letter of computerChoice (capturing double-letters)
        for (var i = 0; i < computerChoice.length; i++) {
            var computerChoiceSplit = computerChoice.split(""); // splits computerChoice into array of letters
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

// displays character image
function displayImage() {
    var characterImage = document.querySelector("#characterImage");
    characterImage.src = wordList[randomNumber].img;
}

// pushes new scores to document
function updateScores() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#incorrectGuesses").innerHTML = incorrectGuesses;
}

// reset guess count for new games
function resetGuesses() {
    guessesLeft = 3;
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
    document.querySelector("#incorrectGuesses").innerHTML = incorrectGuesses;
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
    randomNumber = Math.floor(Math.random() * wordList.length);
    computerChoice = wordList[randomNumber].name // chooses new word
    generateUnderscores();
    console.log("Hey cheater, it's " + computerChoice + ".");
    userGuess = " "; // clears userGuess, to be replaced by event.key
    printWord();
    displayImage();
};

// evaluate if win or loss
function ifWinOrLoss() {
    // join underscores array into 'string', compare to computerChoice
    if (underscores.join("") == computerChoice) {
        document.querySelector("#messageToUser").innerHTML = "You win! It's " + computerChoice + ".";
        wins++;
        updateScores(); // start new game
        resetGuesses();
        newWord();
    }
    else if (guessesLeft < 1) {
        document.querySelector("#messageToUser").innerHTML = "You lost! It was " + computerChoice + ".";
        losses++;
        updateScores(); // start new game
        resetGuesses();
        newWord();
    }

}

// collect userGuess by keystroke
document.onkeyup = function (event) {
    userGuess = event.key.toUpperCase(); // convert to uppercase

    // for non-alphabet keystroke
    if (alphabet.indexOf(userGuess) === -1) {
        document.querySelector("#messageToUser").innerHTML = "Letters only!";
    }
    // for previously guessed keystrokes
    else if (userGuesses.includes(userGuess)) {
        document.querySelector("#messageToUser").innerHTML ="You've already guessed " + userGuess + "!";
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