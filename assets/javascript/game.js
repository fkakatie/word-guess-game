var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charactersList = ["MICHAEL", "DWIGHT", "JIM", "PAM"];

var computerChoice = charactersList[Math.floor(Math.random()*charactersList.length)];

console.log(computerChoice);

var wins = 0;
    losses = 0;

var underscores = [];

function generateUnderscores() {
    for (var i = 0; i < computerChoice.length; i++) {
        underscores.push("_");
    }
    return underscores;
}

console.log(generateUnderscores());