// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
var questionEl = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");
var startScreenEl = document.getElementById("start-screen");

var nextBtn = document.getElementById("next-btn");
var quizContent = document.getElementById("quiz-content");
var option1 = document.getElementById("answer1");
var option2 = document.getElementById("answer2");
var option3 = document.getElementById("answer3");
var option4 = document.getElementById("answer4");

var timerCount;
var timer;

var quizIndex = 0;
var score = 0;
var totalScore = 0;
var userAnswer = null;


// Quiz-box appeared after clicking start quiz button
function startQuiz() {
    // hide the first page
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.remove();

    // un-hide question section
    document.querySelector(".quiz-box").style.display = "inline-block";

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


    setTime();
    displayQuestion();
}

startButton.addEventListener("click", startQuiz);

// Part 2 - working on QA part

function displayQuestion(question) {
    quizContent.innerText = question.content;
    option1.innerText = question.options[0];
    option2.innerText = question.options[1];
    option3.innerText = question.options[2];
    option4.innerText = question.options[3];

    option1.addEventListener("click", function () {
        userAnswer = 0;
    });
    option2.addEventListener("click", function () {
        userAnswer = 1;
    });
    option3.addEventListener("click", function () {
        userAnswer = 2;
    })
    option4.addEventListener("click", function () {
        userAnswer = 3;
    });
    nextBtn.addEventListener("click", displayNext);

}











