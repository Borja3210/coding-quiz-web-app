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



// VAR FOR TIMER   (global) 
var time = document.querySelector(".timer");
var score = document.querySelector("#score");
var secondsLeft = 75;

//VAR FOR BUTTONS (global )
const start = document.querySelector("#start");

// VAR FOR INTRO/START
const codersIntro = document.querySelector("#challenge-begins");

//CALL END LOAD ELEMENT VAR
var questionsEl = document.querySelector(".all-question");

// ELEMENT LOCATIONS VAR
let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;


// FINAL SCORE VAR
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");

// HIGH SCORE VAR 
const highscoresEl = document.querySelector("#high-scores");
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];

// CALL OUT THE ANSWER CLASS BUTTON
const ansBtn = document.querySelectorAll("button.answer-btn")

// VAR SUBMIT, GO, CLEAR, VIEW
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");


// VAR ANSWER CALL
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");



// TIMER FUNCTION STARTS PROCESS 
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

// QUIZ BEGIN FUNCTION
function startQuiz() {
    codersIntro.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// SET QUESTION FUNCTION
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// EVENT FUNCTION CHECK ANSWERS BEGING PROCESS
function checkAnswer(event) {
    event.preventDefault();

    //CREATING ELEMENT OF RIGHT OR WRONG
    correctWrong.style.display = "block";
    let p = document.createElement("p");
    correctWrong.appendChild(p);

    // DISPLAY NEW ELEMENT FOR X AMOUNR OF TIME
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // RIGHT OR WRONG ANSWER CONDITIONAL STATEMENTS CORRECT
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } 
   
     // RIGHT OR WRONG ANSWER CONDITIONAL STATEMENTS WRONG
    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    // CYCLE 
    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

