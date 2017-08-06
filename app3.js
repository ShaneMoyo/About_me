//Welcome to my guessing game javascript. I tried to practie using arrays and functions to get rid of redundancy. 
//I ended up getting my 150 line code down to 60(not counting the comments) but, I feel it may be a bit hard to read.
//I went ahead and added comments that somewhat narrate whats going which I hope will make it more readable. 
//If you prefer the more readable version I have included it here under the file name app2.js.

//Important variables.
var score = 0;
var rN = Math.floor((Math.random() * 10) + 1);
var chances = [3, 5];
var yesOrno = ['y', 'y', 'y', 'n', 'y'];
var mChoice = ['mexico', 'cuba', 'japan', 'italy', 'spain'];
var playerName = 0;
var player = 0;
var guessCount = 0;
//Arrays containing string necessary for the questionsMachine function to build all 7 questions. 
var questions = ['Do I live in Oregon?', 'Do I like to travel?', 'Do I enjoy drawing?', 'Is my favorite color blue?',
  'Do I like pizza?', 'Can you guess what number I am thinking of between 1 and 10?', 'Try naming a country I want to visit.'];
var correctResponse = ['Yes, you are right!', 'Yes, I love to travel!', 'You are right! I love to draw!',
  'That is right, my favorite color is red!', 'Yes, I love to eat pizza!', 'Wow! that is right!',
  'Wow! that is right! Here is a list of all the countries I want to visit. Mexico, Cuba, Japan, Italy, and Spain'];
var incorrectResponse = ['Opps! I do live in oregon!', 'Nope, I love to travel!', 'Oh no, I love to draw!',
  'No sorry, my favorite color is red!', 'What!? I love pizza, who doesn\'t?', 'Too low!', 'Too high!',
  'Nope, that one is not on my list.', 'Sorry, you ran out of guesses. The number I was thinking of is ' + rN + '!',
  'Sorry, you ran out of guesses. Here is a list of all the countries I want to visit. Mexico, Cuba, Japan, Italy, and Spain'];
guessingGame();//Starts game. 
//guessingGame:
//When invoked the guessingGame function will great the visitor and gather their name. 
//Then the function will ask the vistor if they would like to play the game. 
//If they want to play, a for loop will be called which will call questionMachine passing it the parameter i.
//The for loop will iterate increasing i by 1 as long as i < 7 successively creating each of the 7 questions.
//If the visitor does not want to play the game an alert will be called with text 'Ok, maybe next time'.  
function guessingGame() {
  alert('Hello, My name is Shane! Welcome to my project!');
  var playerName = prompt('What is your name?');
  var player = confirm('Hi ' + playerName + ' Would you like to play my guessin game?');
  if (player) {
    console.log(playerName + ' would like to play our game!');
    for (i = 0; i < 7; i++) {
      questionMachine(i);
    }
    endGame();
  } else { alert('Ok maybe next time!'); }
  
}
function endGame() {
  alert('You got ' + score + ' out of 7 right! Thank you for playing!');
}
//questionMachine:
//When invoked the the questionMachine funcion will create the question corresponding to the current value of i.
function questionMachine(i) {
  var answer = prompt(questions[i]);
  //Creates yes or no questions when i < 5.
  if (i < 5) {
    if (answer.toLowerCase().charAt(0) === yesOrno[i]) {
      alert(correctResponse[i]);
      score++;
    } else {
      alert(incorrectResponse[i]);
    }
    console.log(playerName + ' answered question ' + (i + 1) + ' with ' + answer);
  } else {
    //Creates multiple choice questions when i > 5.
    while (!mChoice.includes(answer) && parseInt(answer) !== rN && guessCount < chances[i - 5]) {
      var guessLeft = chances[i - 5] - guessCount;
      if (i === 5 && rN > answer) {
        alert(incorrectResponse[i]);
      } else if (i === 5) { alert(incorrectResponse[i + 1]); } else if (i === 7) { aler(incorrectResponse[i + 2]); }
      var answer = prompt('Guess again! You have ' + guessLeft + ' guesses left!');
      console.log(playerName + ' answered question ' + (i + 1) + ' with ' + answer);
      guessCount++;
    }
    if (mChoice.includes(answer) || parseInt(answer) === rN) {
      alert(correctResponse[i]);
      score++;
      guessCount = 0;
    } else { alert(incorrectResponse[i + 3]); guessCount = 0; }
  }
}
