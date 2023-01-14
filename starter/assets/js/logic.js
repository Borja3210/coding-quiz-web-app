// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score




//Selecting all required elements
const startScreen = document.querySelector("startScreen");
const start = document.querySelector ("start")
const timer = document.querySelector("time");
const questions = document.querySelector ("questions");
const questionsTitle = document.querySelector ("questionsTitle");
const choices = document.querySelector ("choices");
const endScreen = document.querySelector ("endScreen");
const finalScore = document.querySelector ("finalScore");
const initials = document.querySelector ("initials");
const submit = document.querySelector ("submit");
const feedback = document.querySelector ("feedback")

// if start button is clicked

start.onclick = () =>{

startScreen.remove("startScreen");//hide starting screen
questions.add("questions") //show questions
showQuestions (0) //calling showQuestions function
queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function

}








