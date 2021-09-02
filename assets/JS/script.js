// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerEl= document.querySelector(".timer-count");
var questionEl = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");
var startScreenEl = document.getElementById("start-screen");

var answerBtn1 = document.querySelector(".option-1");
var answerBtn2 = document.querySelector(".option-2");
var answerBtn3 = document.querySelector(".option-3");
var answerBtn4 = document.querySelector(".option-4");


var timerCount;
var timer;

// Quiz-box appeared after clicking start quiz button
function startQuiz() {
    // hide the first page
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.remove();

    // un-hide question section
        document.querySelector(".quiz-box").style.display="inline-block";
    
    function setTime() {
        var secondsLeft = 80;
        var timerInterval = setInterval(function() {
        
        if (secondsLeft >0) {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            secondsLeft = secondsLeft--;
            
          }
          else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
        }
            
        }, 1000);
    }
    setTime();
    
}

startButton.addEventListener("click", startQuiz); 

function getResult1() {
    var answerBtn1 = true;



}







