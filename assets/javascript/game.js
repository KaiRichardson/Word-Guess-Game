//Ref to the DOM
var newGameButtonHTML = document.getElementById("new-game-button");
var placeHoldersHTML = document.getElementById("place-holders");
// var wordTestHTML = document.getElementById("word-test");
var guessedLettersHTML = document.getElementById("guessed-letters");
var guessesLeftHTML = document.getElementById("guesses-left");
var winsHTML = document.getElementById("win-s");
var lossesHTML = document.getElementById("loss-s");

//Arrays
var wordBank = ["camel", "bull", "bat", "cougar", "sheep", "rhinoceros", "ferret", "beaver", "panther", "turtle"];
var pickedWordPlaceHolderArr = [];
var incorrectLetterBank = [];
var guessedLetterBank = [];
var pickedWord = [];

//Vars
var wins = 0;
var losses = 0;
var guessesLeft = 12;

//game starts as off
var gameRunning = false;

//newGame resets everything and picks new word
function newGame() {
    gameRunning = true;
    guessesLeft = 12;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceHolderArr = [];

    // picks random word from array
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //create placeholder out of new word
    for (let i = 0; i < pickedWord.length; i++) {
        pickedWordPlaceHolderArr.push("_");
    }

    //Pushing everything to the DOM
    guessesLeftHTML.textContent = guessesLeft;
    placeHoldersHTML.textContent = pickedWordPlaceHolderArr.join(" ");
    // wordTestHTML.textContent = pickedWord;
    guessedLettersHTML.textContent = incorrectLetterBank;

};

//starts game after button press
newGameButtonHTML.onclick = newGame;


//Tests pressed letter
function letterGuess(letter) {

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        //add new letter to letterbank
        guessedLetterBank.push(letter);

        //checks pressed letter for match in word
        for (let i = 0; i < pickedWord.length; i++) {
            //convert guessed letter to lowercase
            if (pickedWord[i] === letter.toLowerCase()) {
                //then swap '_' for letter
                pickedWordPlaceHolderArr[i] = letter;
            }
        }

        placeHoldersHTML.textContent = pickedWordPlaceHolderArr.join(" ");

        // if not in word bank, add to worng letters
        if (pickedWordPlaceHolderArr.indexOf(letter) === -1) {
            //subtracts guesses
            guessesLeft--;
            // adds worng letter to array
            incorrectLetterBank.push(letter);
            // sends everything to the DOM
            guessedLettersHTML.textContent = incorrectLetterBank.join(" ");
            guessesLeftHTML.textContent = guessesLeft;
            
            //checkloss
            if (guessesLeft === 0) {
                losses++;
                lossesHTML.textContent = losses;
                alert("you lost! lets try again");
                newGame();
            }
        }
        
        //checkwin
        if (pickedWord == pickedWordPlaceHolderArr.join("")) {
            wins++;
            winsHTML.textContent = wins;
            alert("you won! lets try again");
            newGame();
        }
        
    } else {
        if (gameRunning === false) {
            alert("click 'Start New Game' to play");
        } else {
            alert("already picked letter");
        }
    }
}

// onkeyup event triggers letterguess
document.onkeydown = function (event) {

    if (event.keyCode > 64 && event.keyCode < 91) {
        letterGuess(event.key);
    } else {
        alert("that is not a letter!");
    }
}



