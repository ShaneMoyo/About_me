//Greeting
var dialogue = ['Hello, my name is Shane. Welcome to my project!', 'What is your name?', 
  ' Would you like to try my guessing game?', 'Great! I love games, let\'s get started', 
  'Our guest would like to play our game.', 'Do I live in Oregon?', 'Wow! You are right!',
  'Wrong! I do live in oregon. OK, let\'s try another question', ' answered question #1 with ', 
  'Have I ever been outside of the U.S.A.?', 'You are right! I love to travel!',
  'What!? I love to travel! Let\'s try another question!',' answered question #2 with ', 
  'Do you think I like to draw?', 'I love to draw! I cant say I am very good but, I think it is really fun!', 
  'I do like to draw, it is my favorite hobby!', '! 4 in a row! You know me pretty well!', '! 3 more to go!', 
  '! Halfway done!', ' answered question #3 with ', 'Is my favorite color Blue?',
  'No way! My favorite color has been red ever since I can remember!', 'Ok we are on to the last question, get ready!',
  'That is right! My favorite color is red!', ' answered question #4 with ', 'Do I like pizza?',
  'Yes, you are right! I guess that was pretty easy huh?', 'Are you kidding!? Of course I like pizza, who doesn\'t', 
  ' answered question #5 with ', 'Try guessing the number I am thinking of between 1 and 10.', ' guesses left!', 
  'Too low, guess higher. You have ', 'Too high, guess lower. You have ', 
  'Sorry you ran out of guesses. The number I was thinking of was ', ' out of 7 right!', ' Wow, you know me pretty well!', 
  ' Which isn\'t bad seeing how we just met!', 'Thank you for playing my guessing game ', '! It was very nice meeting you!',
  '! It was very nice meeting you!', 'Our guest does not want to play our game.',
  'Can you guess a country I want to travel to?', 'Nope, that one is not on the top of my list. Try again you have ',
  'You are right! I have always wanted to go to ', 'here is a list of all the countries I would like to go to ',
  'Sorry, you ran out of guesses. ', 'Here is a list of all the countries I would like to go to. ', 
  ' answered question #7 with ', ' answered question #6 with '];
var countries = ['mexico', 'cuba', 'japan', 'italy', 'spain'];
alert( dialogue[0] );
var playerName = prompt( dialogue[1] );
var player = confirm( 'Hi ' + playerName + dialogue[2] );
var score = 0;
var randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum);
console.log(dialogue[21]);

if ( player ) {
  alert( dialogue[3] );
  console.log( dialogue[47] );
  
  // Question #1
  var firstQuestion = prompt( dialogue[5] ).toLowerCase();
  if( firstQuestion.charAt(0) === 'y') {
    alert(dialogue[6]);
    score = score + 1;
  } else {
    alert( dialogue[7]);
  }
  console.log( playerName + dialogue[8] + firstQuestion);

  // Question #2
  var secondQuestion = prompt( dialogue [9]).toLowerCase();
  if( secondQuestion.charAt(0) === 'y') {
    alert(dialogue[10]);
    score = score + 1;
  } else {
    alert(dialogue[11]);
  }
  console.log( playerName + dialogue[12] + secondQuestion);

  //Question #3
  var thirdQuestion = prompt(dialogue[13]).toLowerCase();
  if (thirdQuestion.charAt(0) === 'y'){
    alert(dialogue[14]);
    score = score + 1;
  } else {
    alert(dialogue[15]);
  }
  console.log( playerName + dialogue[19] + thirdQuestion);

  //Question #4
  var fourthQuestion = prompt(dialogue[20]).toLowerCase();
  if (fourthQuestion.charAt(0) === 'n') {
    alert(dialogue[23]);
    score = score + 1;
  } else { 
    alert(dialogue[21]);
  }
  if (score === 4) {
    alert('Wow ' + playerName + dialogue[16]);
  } else if ( score === 0) {
    alert('Dont give up ' + playerName + dialogue[17]);
  } else { 
    alert('Keep going ' + playerName + dialogue[18]);
  }
  console.log( playerName + dialogue[24] + fourthQuestion);

  //Question #5
  var fithQuestion = prompt(dialogue[25]).toLowerCase();
  if (fithQuestion.charAt(0) === 'y') {
    alert(dialogue[26]);
    score = score + 1;
  } else {
    alert(dialogue[27]);
  }
  console.log( playerName + dialogue[28] + fithQuestion);

  //Question 6
  var hiddenNum = randomNum;
  var userGuess6 = prompt( dialogue[29]);
  var guessCount6 = 0;
  while ( hiddenNum != userGuess6 && guessCount6 < 3 ) {
    var guessLeft = 3 - guessCount6;
    if (hiddenNum > userGuess6) {
      userGuess6 = prompt(dialogue[31] + guessLeft + dialogue[30]);
      guessCount6 = guessCount6 + 1;
    } else { 
      userGuess6 = prompt(dialogue[32] + guessLeft + dialogue[30]);
      guessCount6 = guessCount6 + 1;
      console.log(playerName + dialogue[48] + userGuess6);
    }
  }
  if ( hiddenNum == userGuess6) { 
    alert(dialogue[6]);
    score = score + 1;
  } else { 
    alert(dialogue[33] + hiddenNum + '!');
  }
  alert(dialogue[22]);

  //Question #7
  var userGuess7 = prompt(dialogue[41]).toLowerCase();
  var guessCount7 = 0;
  while( !countries.includes(userGuess7) && guessCount7 < 6) {
    var guessLeft7 = 5 - guessCount7;
    var userGuess7 = prompt(dialogue[42]
    + guessLeft7 + ' guesses left!').toLowerCase();
    guessCount7 = guessCount7 + 1;
    console.log(playerName + dialogue[47] + userGuess7);
  }

  if (countries.includes(userGuess7)) {
    alert(dialogue[43] + userGuess7 + '!');
    alert(dialogue[44] + countries[0] + ', ' + countries[1] + ', ' 
    + countries[2] + ', ' + countries[3] + ' and ' + countries[4] + '!' );
    score = score + 1;
    console.log(playerName + dialogue[47] + userGuess7);
  } else { alert(dialogue[45]); alert(dialogue[46] + countries[0] + ', ' + countries[1] + ', ' 
    + countries[2] + ', ' + countries[3] + ' and ' + countries[4] + '!');
  console.log(playerName + dialogue[47] + userGuess7);
  }
  
  //All done!
  var finalScore = 'You got ' + score + dialogue[34];
  if( score >= 3 ) {
    alert(finalScore + dialogue[35]); 
  } else {
    alert(finalScore + dialogue[36]);
  }
  alert(dialogue[37] + playerName + dialogue[38]);

} else {
  alert('Ok, ' + playerName + dialogue[39]);
  console.log(dialogue[40]);
}
