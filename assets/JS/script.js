// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerEl= document.querySelector(".timer-count");
var questionEl = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");
var startScreenEl = document.getElementById("start-screen");


var timerCount;
var timer;

// if Start Quiz button clicked => timer starts counting down

document.querySelector(".start-button").addEventListener("click", setTime); 

function setTime() {
    var secondsLeft = 75;
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

// Quiz-box appeared after clicking start quiz button
function startQuiz() {
    // hide the first page
    var startScreenEl = Document.getElementById("start-screen");
    startScreenEl.remove();
    // un-hide question section
    questionEl.getAttribute("quiz-box");

startButton.addEventListener("click", startQuiz);
}
 




