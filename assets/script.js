// Getting all required elements
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionList = document.querySelector(".quiz-box");
var completeQ = document.querySelector(".complete-box");

timerCount = 75;
var timerCount;
var timer;

// Adding eventListener to my button
document.querySelector(".start-button").addEventListener("click", startTimer); 

// if Start Quiz button clicked => timer starts counting down
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0){
        clearInterval();
        document.querySelector(".timer-count").innerHTML= "Done";
        }
            else {
                document.querySelector(".timer-count").innerHTML = TimerCount + "seconds remaining";
            }
            timerCount -= 1;
    }, 1000);
}
            
// If Start Quiz button clicked => Quiz box appears

startButton.onclick = () => {
    questionList.classList.add("activeInfo");
}





 




