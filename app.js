//Greeting
alert('Hello, my name is Shane. Welcome to my project!');
var playerName = prompt('What is your name?');
var player = confirm('Hi ' + playerName + ' Would you like to try my guessing game?');
var score = 0;

if ( player ) {
  alert('Great! I love games, let\'s get started');
  console.log('Our guest would like to play our game.');
  
  // Question #1
  var firstQuestion = prompt('Do I live in Oregon?').toLowerCase();
  if( firstQuestion.charAt(0) === 'y') {
    alert('Wow! You are right!');
    score = score + 1;
  } else { 
    alert('Wrong! I do live in oregon. OK, let\'s try another question!');
  }
  console.log( playerName + ' answered question #1 with ' + firstQuestion);

  // Question #2
  var secondQuestion = prompt('Have I ever been outside of the U.S.A.?').toLowerCase();
  if( secondQuestion.charAt(0) === 'y') {
    alert('You are right! I love to travel!');
    score = score + 1;
  } else { 
    alert('What!? I love to travel! Let\'s try another question!');
  }
  console.log( playerName + ' answered question #2 with ' + secondQuestion);

  //Question #3
  var thirdQuestion = prompt('Do you think I like to draw?').toLowerCase();
  if (thirdQuestion.charAt(0) === 'y'){
    alert('I love to draw! I cant say I am very good but, I think it is really fun!');
    score = score + 1;
  } else {
    alert('I do like to draw, it is my favorite hobby!');
  }
  if (score === 3) {
    alert('Wow ' + playerName + '! 3 in a row! You know me pretty well!');
  } else if ( score === 0) {
    alert('Dont give up ' + playerName + '! 2 more to go!');
  } else { 
    alert('Keep going ' + playerName + '! Halfway done!');
  }
  console.log( playerName + ' answered question #3 with ' + thirdQuestion);

  //Question #4
  var fourthQuestion = prompt('Is my favorite color Blue?').toLowerCase();
  if (fourthQuestion.charAt(0) === 'y') {
    alert('No way! My favorite color has been red ever since I can remember!');
    alert('Ok we are on to the last question, get ready!');
    score = score + 1;
  } else { 
    alert('That is right! My favorite color is red!');
    alert('Ok we are on to the last question, get ready!');
  }
  console.log( playerName + ' answered question #4 with ' + fourthQuestion);

  //Question #5
  var fithQuestion = prompt('Do I pizza?').toLowerCase();
  if (fithQuestion.charAt(0) === 'y') {
    alert('Yes, you are right! I guess that was pretty easy huh?');
    score = score + 1;
  } else {
    alert('Are you kidding!? Of course I like pizza, who doesn\'t');
  }
  console.log( playerName + ' answered question #5 with ' + fithQuestion);

  //All done!
  var finalScore = 'You got ' + score + ' out of 5 right!';
  if( score >= 3 ) {
    alert(finalScore + ' Wow, you know me pretty well!'); 
  } else {
    alert(finalScore + ' Which isn\'t bad seeing how we just met!');
  }
  alert('Thank you for playing my guessing game ' + playerName + '! It was very nice meeting you!')

} else {
  alert('Ok, ' + playerName + 'maybe next time!');
  console.log('Our guest does not want to play our game.');
}
