var totWin = 0;
var totLoss = 0;
var min = 0;
var guessNum = 12;

var words = ["cat", "dog", "robin", "cheeta", "mouse"]
var randNum = Math.floor(Math.random() * (words.length - +min));
var randWord = words[randNum]
var userText = document.getElementById("letters")

var blank = [];
var letterWrong = [];
var letterCorrect = [];

function incrementWin() {
    totWin += 1;
}
function incrementLoss() {
    totLoss += 1;
}

for (i = 0; i < randWord.length; i++) {
    blank.push("_");
}

incrementLoss()
incrementWin()

document.onkeydown = function (event) {
    userText.textContent = event.key;
    
    var keyPress = userText.textContent;
    
    for (i = 0; i < randWord.length; i++) {
        // var strLetter = randWord[i];
        
        if (randWord[i] === keyPress) {
            letterWrong.push(keyPress);
        } else {
            letterCorrect.push(keyPress);
        }
    }
};

document.getElementById("wins") = "wins: " + totWin;
document.getElementById("losses") = "losses: " + totLoss;

document.getElementById("blanks") = blank;
document.getElementById("randWord") = randWord;

document.getElementById("wrongLetters") = "correct letters: " + letterWrong;
document.getElementById("correctLetters") = "worng letters: " + letterCorrect;
