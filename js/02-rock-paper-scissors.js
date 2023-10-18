/*
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Begin by prompting the user for their choice.
Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
What if the result ends in a tie? Figure out how to handle that as well.
What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

*/

let options=['scissors', 'rock', 'paper', '3', '2', '1'];
let userInput;
//STEP 1 User makes a choice. How will we collect the user’s choice?
while (true){
    userInput=prompt('Rock (1), paper (2) or scissors (3)').toLowerCase() ;
    if (options.includes(userInput)){ break}
}
if (userInput==='rock' || userInput==='1'){userChoice=1}
else if (userInput==='paper' || userInput==='2'){userChoice=2}
else {userChoice=0}
console.log(`Your choice is ${options[userChoice]}`);

//STEP 2 Computer makes a choice. How will we collect the computer’s choice?
computerChoice = Math.round(Math.random()*2);//0,1, 2
console.log(`Computer’s choice is ${options[computerChoice]}`);
//STEP 3 A conditional that determines who wins.
// 0- scissors
// 1- rock
// 2- paper
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.

if ((computerChoice===0 && userChoice===1) || (userChoice===2 && computerChoice===1)){
    console.log('You are winner!');
}
else if (userChoice===0 && computerChoice===2){
    console.log('You are winner!');
}
else if (userChoice===computerChoice){
    console.log ('A tie');
}
else {
    console.log('Sorry, you lost')
}