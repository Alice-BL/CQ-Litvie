// Getting all required elements
var gameOver = false;
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

var timer;

var quesIndex = 0;
var score = 0;
var userAnswer = null;


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
    // Setting alert for  right and wrong answer
    if (quizQuestions[quesIndex - 1].answer == quizQuestions[quesIndex - 1].options[userAnswer]) {
        
        alert("correct");
        }
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
        gameOver = true;
    }
}


function setTime() {
    var secondsLeft = 80;
    var timerInterval = setInterval(function () {

        if (secondsLeft > 0 && !gameOver) {

            secondsLeft--;
            timerEl.textContent = secondsLeft;
            secondsLeft = secondsLeft--;

        }
        else if (gameOver){
            clearInterval(timerInterval); 
            getScore(secondsLeft);

        }
        else {
            timerEl.textContent = "Time Over";
            clearInterval(timerInterval);
        }
    
    }, 1000);
}
function getScore(secondsLeft) {
    score += secondsLeft;
    alert(score);

}





