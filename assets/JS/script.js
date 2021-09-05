// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
var container = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");
var startScreenEl = document.getElementById("start-screen");


var questionEl = document.getElementById("q-Content");
var option1 = document.getElementById("answer1");
var option2 = document.getElementById("answer2");
var option3 = document.getElementById("answer3");
var option4 = document.getElementById("answer4");

var timerCount;
var timer;

var quesIndex = 0;
var score = 0;
var totalScore = 0;
var userAnswer = null;
var resultQu = document.getElementById("result");

// Quiz-box appeared after clicking start quiz button
function startQuiz() {
    // hide the first page
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.remove();

    // un-hide question section
    document.querySelector(".quiz-box").style.display = "inline-block";


    displayQuestions(quizQuestions[quesIndex]);
    setTime();

}

startButton.addEventListener("click", startQuiz);

// Part 2 - working on QA part

function displayQuestions(q) {


    questionEl.textContent = q.content;
    option1.textContent = q.options[0];
    option2.textContent = q.options[1];
    option3.textContent = q.options[2];
    option4.textContent = q.options[3];

    option1.addEventListener("click", function () {
        userAnswer = 0;
        displayNext();
    });
    option2.addEventListener("click", function () {
        userAnswer = 1;
        displayNext();
    });
    option3.addEventListener("click", function () {
        userAnswer = 2;
        displayNext();
    })
    option4.addEventListener("click", function () {
        userAnswer = 3;
        displayNext();
    });


}
// When user answers a question, he/she will be presented with another question
function displayNext() {

    quesIndex++;

    if (quizQuestions[quesIndex - 1].answer == quizQuestions[quesIndex - 1].options[userAnswer]) {
        alert("correct");
        totalScore++;}
        else {
            alert("incorrect");
        }
     console.log(quizQuestions[quesIndex-1].answer);
        

    if (quesIndex < quizQuestions.length) {
        questionEl.textContent = quizQuestions[quesIndex].content;
        option1.textContent = quizQuestions[quesIndex].options[0];
        option2.textContent = quizQuestions[quesIndex].options[1];
        option3.textContent = quizQuestions[quesIndex].options[2];
        option4.textContent = quizQuestions[quesIndex].options[3];

    } else {
        console.log("END OF QUIZ");
    }
}


function setTime() {
    var secondsLeft = 80;
    var timerInterval = setInterval(function () {

        if (secondsLeft > 0) {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            secondsLeft = secondsLeft--;

        }
        else {
            timerEl.textContent = "Time Over";
            clearInterval(timerInterval);
        }
        
        
        

    }, 1000);
}







