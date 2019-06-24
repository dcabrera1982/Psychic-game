/* Psychic game pseudocode
1.  User presses any letter on the keyboard.
2.  User has 9 attempts to guess the correct letter.
3.  A list of letters picked by the user will populate so the user cannot pick the same letter more than once.
4.  If user does not guess correct letter after 9 attempts then the computer will receive a point.
5.  If the user guesses the correct letter within the 9 attempts then the user receives a point.  
6.  Attempts will reset back to quantity 9 if the user uses all 9 tries and does not guess correctly.
7.  Attempts will reset back to quantity 9 if the user guesses correctly within the 9 attempts.  */


// Alert to start

var win = 0;
var loss = 0;
var numberGuesses = 9;
var guessedChoices = [];

// set up array for computer to choose from
var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set up the computer to pick a random indexed value from array
var computerGuess = Math.floor(Math.random() * letterChoice.length);
var computerChoice = letterChoice[computerGuess];

//console.log(computerChoice);


// add a function for the user to press a key
document.onkeyup = function (event) {
    var userGuess = event.key;


    // user selects a value a-z
    var pick = /[a-z]/gi;
    if (!pick.test(userGuess)) {
        alert("please enter a letter");
    }
    else {
        //console.log(userGuess);
    }
    // reset computer choice if user loses
    if (numberGuesses <= 0) {
        loss++;
        document.getElementById("loss").innerHTML = loss++;
        console.log("You are NOT a winner!");
        alert("You are NOT a winner!");
        numberGuesses = 9;
        guessedChoices = [];
        document.getElementById("guessedChoices").innerHTML = guessedChoices;
        document.getElementById("numberGuesses").innerHTML = 9;
        computerGuess = Math.floor(Math.random() * letterChoice.length);
        computerChoice = letterChoice[computerGuess];
        //console.log(computerChoice);
    }
    // randomly selected computer choice and user choice comparison
    if (computerChoice === userGuess) {
        //console.log("We have a WINNER!");
        alert("We have a WINNER!");
        document.getElementById("win").innerHTML = win++;
        guessedChoices = [];
        document.getElementById("guessedChoices").innerHTML = guessedChoices;
        computerGuess = Math.floor(Math.random() * letterChoice.length);
        computerChoice = letterChoice[computerGuess];
        //console.log(computerChoice);
        numberGuesses = 9;
        document.getElementById("numberGuesses").innerHTML = 9;
    } else {
        //console.log("Try again!");
        document.getElementById("numberGuesses").innerHTML = numberGuesses--;
        guessedChoices.push(userGuess);
        document.getElementById("guessedChoices").innerHTML = guessedChoices;
    }
}









