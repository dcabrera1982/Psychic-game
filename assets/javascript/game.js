/* Psychic game pseudocode
1.  User presses any letter on the keyboard.
2.  User has 9 attempts to guess the correct letter.
3.  A list of letters picked by the user will populate so the user cannot pick the same letter more than once.
4.  If user does not guess correct letter after 9 attempts then the computer will receive a point.
5.  If the user guesses the correct letter within the 9 attempts then the user receives a point.  
6.  Attempts will reset back to quantity 9 if the user uses all 9 tries and does not guess correctly.
7.  Attempts will reset back to quantity 9 if the user guesses correctly within the 9 attempts.  */


// Array of letters
alert("You have 9 guesses.  Guess any letter A-Z");

var answer = 3;
var guess;

for (i=0; i < 9; i++) {
    //console.log(i);
    guess = prompt("Guess the letter");
}
