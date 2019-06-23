/* Psychic game pseudocode
1.  User presses any letter on the keyboard.
2.  User has 9 attempts to guess the correct letter.
3.  A list of letters picked by the user will populate so the user cannot pick the same letter more than once.
4.  If user does not guess correct letter after 9 attempts then the computer will receive a point.
5.  If the user guesses the correct letter within the 9 attempts then the user receives a point.  
6.  Attempts will reset back to quantity 9 if the user uses all 9 tries and does not guess correctly.
7.  Attempts will reset back to quantity 9 if the user guesses correctly within the 9 attempts.  */


// Alert to start
 var guessGame = confirm("You have 9 guesses.  Guess any letter A-Z");
alert(guessGame); 

var letterChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



var win = "wins:"
var loss = "Losses:"
var guess = "Guesses Left:"
var userGuess = "Your guesses so far:"



 for (var i=0; i < letterChoice.length; i++) {
    //console.log(i);
    if (answer == guess) {
        alert("That's correct")
        break;
    } else {
        guess = prompt("WRONG!!!!  Please try again.");
    }
 }
