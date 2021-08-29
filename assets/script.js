// The startQuiz function is called when the start button is clicked
// Add eventListener to my button

// Show question lists
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionList = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");

timerCount = 75;
var timerCount;
var timer;

document.querySelector(".start-button").addEventListener("click", startButton); 

// if Start Quiz button clicked => timer starts counting down
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

    }, 1000);
}
            

startTimer();
 




// questions for the quiz
/* Q1. Which one of the following Array Methods that you can use if you want to add a value as the last item of the array?
(push method; pop method; sort method; shift method) */

/* Q2. Object values are written as name : value pairs (name and value separated by a ___)
(colon, coma, semicolon, exclamation) */

/* Q3. Items in a(n)___ list are preceded by numbers.
1. unordered 2. ordered 3. bulleted 4. name */

/* Q4. The # symbol specifies that the selector is ___
1. tag 2. class 3. element 4.id */


