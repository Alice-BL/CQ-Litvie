// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerEl= document.querySelector(".timer-count");
var questionEl = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");
var startScreenEl = document.getElementById("start-screen");


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
    setTime();
    
}

startButton.addEventListener("click", startQuiz); 








