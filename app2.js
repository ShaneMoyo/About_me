
//Greeting.  
alert( 'Hello, My name is Shane! Welcome to my project!' );
var playerName = prompt( 'What is your name?' );
var player = confirm( 'Hi ' + playerName + ' Would you like to play my guessin game?' );
var score = 0;

//Asks Player if they would like to play a game. 
if ( player ) {
  alert( 'Great! I love games, let\'s get started!' );
  console.log( 'Our guest would like to play our game!' );
  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();

  // Question #1

  function q1() {

    var firstQuestion = prompt( 'Do I live in Oregon?' ).toLowerCase();
    if( firstQuestion.charAt(0) === 'y') {
      alert('Yes! You are right!');
      score = score + 1;
    } else {
      alert( 'I actually do live in oregon. Portland in fact!');
    }
    console.log( playerName + ' answered question #1 with ' + firstQuestion);
  }
  // Question #2

  function q2() {
    var secondQuestion = prompt( 'Have I ever been outside the U.S.A.?').toLowerCase();
    if( secondQuestion.charAt(0) === 'y') {
      alert('Yes, I love to travel' );
      score = score + 1;
    } else {
      alert('Oh no, I have been outside of the U.S.A.. I love to travel!');
    }
    console.log( playerName + ' answered question #2' + secondQuestion);
  }
  //Question #3

  function q3() {
    var thirdQuestion = prompt('Do I like to draw?').toLowerCase();
    if (thirdQuestion.charAt(0) === 'y'){
      alert('Yes, I love to draw! I cant say im very good but I love to practice!');
      score = score + 1;
    } else {
      alert('No, I actually love to draw! I cant say im very good but I love to practice!');
    }
    console.log( playerName + ' answered question #3 ' + thirdQuestion);
  }
  //Question #4

  function q4() {
    var fourthQuestion = prompt('Is my favorite color blue?').toLowerCase();
    if (fourthQuestion.charAt(0) === 'n') {
      alert('You are right! My favorite color is red!');
      score = score + 1;
    } else { 
      alert('No, my favorite color is red!');
    }
    if (score === 4) {
      alert('Wow ' + playerName + ' 4 in a row!');
    } else if ( score === 0) {
      alert('Dont give up ' + playerName + '! Dont feel bad, we only just met!');
    } else { 
      alert('Keep going ' + playerName + '! Halfway done!');
    }
    console.log( playerName + ' answered question #4 ' + fourthQuestion);
  }
  //Question #5

  function q5() {
    var fithQuestion = prompt('Do I like pizza?').toLowerCase();
    if (fithQuestion.charAt(0) === 'y') {
      alert('Yes, I love pizza!');
      score = score + 1;
    } else {
      alert('What!? Ofcourse I love pizza, who doesn\'t');
    }
    console.log( playerName + ' answered question #5 ' + fithQuestion);
  }
  //Question 6

  function q6() {
    var hiddenNum = Math.floor((Math.random() * 10) + 1);
    console.log(hiddenNum);
    var userGuess6 = prompt( 'Guess, what number I am thinking of.' );
    var guessCount6 = 0;
    while ( hiddenNum != userGuess6 && guessCount6 < 3 ) {
      var guessLeft = 3 - guessCount6;
      if (hiddenNum > userGuess6) {
        userGuess6 = prompt('Nope! Too low! ' + guessLeft + ' guesses left! Try again!');
        guessCount6 = guessCount6 + 1;
        console.log(playerName + ' answered question #6 ' + userGuess6);
      } else { 
        userGuess6 = prompt('Nope! Too high! ' + guessLeft + ' guesses left! Try again!');
        guessCount6 = guessCount6 + 1;
        console.log(playerName + ' answered question #6 ' + userGuess6);
      }
    }
    if ( hiddenNum == userGuess6) {
      alert('Yup, you are right!');
      score = score + 1;
    } else {
      alert('Sorry, you ran out of guesses. The number I was thinking of was ' + hiddenNum + '!');
    }
    alert( 'Ok, Last question!');
  }
  //Question #7

  function q7() {
    var countries = ['mexico', 'cuba', 'japan', 'italy', 'spain'];
    var userGuess7 = prompt('Try and guess a country I would like to travel to!').toLowerCase();
    var guessCount7 = 0;
    while( !countries.includes(userGuess7) && guessCount7 < 5) {
      var guessLeft7 = 5 - guessCount7;
      var userGuess7 = prompt( 'Nope! You have '
    + guessLeft7 + ' guesses left!').toLowerCase();
      guessCount7 = guessCount7 + 1;
      console.log(playerName + ' answered question #7 ' + userGuess7);
    }

    if (countries.includes(userGuess7)) {
      alert('Yes, you are right! I do want to go to ' + userGuess7 + '!');
      alert('Here is a list of all the countries I want to go to! ' + countries[0] + ', ' + countries[1] + ', '
    + countries[2] + ', ' + countries[3] + ' and ' + countries[4] + '!' );
      score = score + 1;
      console.log(playerName + ' answered question #7 ' + userGuess7);
    } else { alert('Sorry, you ran out of guesses. '); alert('Here is a list of all the countries I want to go to! ' + countries[0] + ', ' + countries[1] + ', ' 
    + countries[2] + ', ' + countries[3] + ' and ' + countries[4] + '!');
    console.log(playerName + ' answered question #7 ' + userGuess7);
    }
  }
  //Game Finished 
  var finalScore = 'You got ' + score + ' out of 7 right!';
  if( score >= 3 ) {
    alert(finalScore + ' You know me pretty well!'); 
  } else {
    alert(finalScore + ' Which is not so bad considering we just met!');
  }
  alert('Thank you for playing my game ' + playerName + '! It was very nice meeting you!');
//Our guest does not want to play our game.
} else {
  alert('Ok, ' + playerName + '. Maybe next time!');
  console.log('Our guest, does not want to play our game.');
}
