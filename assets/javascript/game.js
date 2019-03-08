var totWin = 0;
var totLoss = 0;
var min = 0;
var guessNum = 12;

var words = ["cat", "dog", "robin", "cheeta", "mouse"]
var randNum = Math.floor(Math.random() * (words.length - +min));
var randWord = words[randNum]

var blank = [];
var letterWrong = [];


function increment() {
    totWin += 1;
    totLoss += 1;
}

for (i = 0; i < randWord.length; i++) {
    blank.push("_");
}



increment()

document.getElementById("wins").innerHTML = "wins: " + totWin;
document.getElementById("losses").innerHTML = "losses: " + totLoss;

document.getElementById("blanks").innerHTML = blank;
document.getElementById("randWord").innerHTML = randWord;

