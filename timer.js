var myButton = document.getElementById ("myButton");
var decrButton = document.getElementById ("decrButton");
var time = document.getElementById("time");

time.style.fontFamily = "Impact, Charcoal"

var secondsLeft = 76;
var isRunning = false;
var timerInterval;

myButton.addEventListener("click", function () {
    if(isRunning){
        return;
    } 
    choiceA.addEventListener("click", getResult);
    choiceB.addEventListener("click", getResult);
    choiceC.addEventListener("click", getResult);
    choiceD.addEventListener("click", getResult);
    state = 0;
    secondsLeft = 76;

    isRunning = true;
    document.getElementById("theQuiz").classList.remove("hidden");
    // secondsLeft = 30;
    timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft + " remaining.";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage();
        }
  
    }, 1000);
  })
  function sendMessage() {
    secondsLeft = 0 + " - Time's Up!"
    time.textContent = secondsLeft;
    isRunning = false;
    document.getElementById("theQuiz").classList.add("hidden");
    
  }
  
decrButton.addEventListener("click", function(){
    secondsLeft -= 10;
})

var stopTimer = function()
{
  clearInterval(timerInterval);
  return secondsLeft;
}