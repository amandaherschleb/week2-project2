/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/

// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
console.log('Question 1 - List items in array');

for (i = 0; i < livingRoom.length; i++) {
    var item = livingRoom[i];
    console.log(item);
}


// 2. Using a loop, log numbers 22-33 in the console.
console.log('Question 2 - log numbers 22-33')

for (i = 22; i < 34; i++){
  console.log(i);
}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log('Question 3 - log numbers 75 - 100 in increments of 5')

for (i = 75; i < 101; i = i+5){
  console.log(i);
}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
console.log('Question 4 - log This is how a professional loops.')

var apples = 5;
while (apples < 10){
  console.log('This is how a professional loops.');
  apples = apples + 5;
}

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

console.log('Question 5');
console.log('Using for loop:');

for (i = 10; i < 111; i += 25){
  console.log('At home, I have '+ i + ' cats.');
};

console.log('Using while loop: ');

var cats = 10;
while (cats < 111){
  console.log('At home, I have ' + cats + ' cats.');
  cats += 25;
};

// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
console.log('Question 6');

var numArray = [2, 17, 9, 24, 8];

for (i = 0; i < numArray.length; i++){
  var number = numArray[i];
  if(number%2 == 0 && number < 10){
    console.log('even');

  } else if(number%2 == 0 && number > 10) {
    console.log('even and greater than 10');

  } else if(number%2 !== 0) {
    console.log('odd');
  }
};


// 7. Using the following Array, create variable called
// numThrees with the value [13, 23, 33, 43, 53, 63, 73]
console.log('Question 7');

var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]

var numThrees = [];

for (i = 0; i < numArray.length; i+=3){
  var num = numArray[i];
  numThrees.push(num);
};

console.log(numThrees);

// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log('Question 8');

for (i = 0; i < 8; i++) {
  console.log('#'.repeat(i));
};

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

console.log('Question 9');

for (i = 1; i<101; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log('FizzBuzz');
  } else if (i%3 === 0) {
    console.log('Fizz');
  } else if (i%5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
};


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
console.log('Question 10');
var invalid = false;

do {
  var message;
  //var message = invalid ? 'Invalid choice, please choose again' : 'Choose rock, paper or scissors';
  if (invalid === true) {
    message = 'Invalid choice, please choose again';
  } else {
    message = 'Choose rock, paper or scissors';
  }

  var human = prompt(message, "rock, paper or scissors");

  if (human !== 'rock' && human !== 'paper' && human !== 'scissors') {
    invalid = true;
  } else {
    invalid = false;
  }

} while (invalid ===  true);


console.log('Human choice: ' + human);

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
console.log('Question 11');

var computer = Math.random();
console.log('Computer random number: ' + computer);


// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
console.log('Question 12');

if (computer > 0 && computer < .3333){
  computer = 'rock';
} else if (computer > .3333 && computer < .6667) {
  computer = 'paper';
} else {
  computer = 'scissors';
};

console.log('Computer choice: ' + computer);

// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
console.log('Question 13 & 14');


if(human === computer){
  console.log('It\'s a tie!');
} else if(human === 'rock' && computer == 'scissors'){
  console.log('Rock crushes scissors, you win!');
} else if (human === 'rock' && computer === 'paper'){
  console.log('Paper covers rock, computer wins');
} else if (human === 'paper' && computer === 'rock'){
  console.log('Paper covers rock, you win!');
} else if (human === 'paper' && computer === 'scissors'){
  console.log('Scissors cut paper, computer wins');
} else if (human === 'scissors' && computer === 'rock'){
  console.log('Rock crushes scissors, computer wins');
} else if (human === 'scissors' && computer === 'paper'){
  console.log('Paper covers rock, you win!');
};


// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

//See question 10


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
var max = -Infinity;
for (i = 0; i < largestNum.length; i++){
  if(largestNum[i] > max){
    max = largestNum[i];
  }
}

console.log('Largest number in array is: ' + max);


// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)

console.log('Question 17');

function flipCoin() {
  coin = Math.floor(Math.random() * 2);

  if (coin === 0){
  var result = 'tails';
  } else {
  result ='heads';
  }

  return result;
}

console.log('Result: ' + flipCoin());

// 18. Use a do/while loop to keep flipping the coin until you get tails.

console.log('Question 18');

do {
  var result = flipCoin();
} while (result === 'heads');

console.log('Result (should be tails): ' + result);


// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

console.log('Question 19');

for (i=0; i < 8; i++){
  if (i%2 === 0) {
    console.log(' # # # #');
  } else {
    console.log('# # # # ');
  }
}


// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// so that it works for any size, outputting a grid of the given width and height.
console.log('Question 20');

var boardSize = 12;

for (i=0; i < boardSize; i++){
  if (i%2 === 0) {
    console.log(' #'.repeat(boardSize/2));
  } else {
    console.log('# '.repeat(boardSize/2));
  }
}
