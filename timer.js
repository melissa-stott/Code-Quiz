var myButton = document.getElementById ("myButton");
var decrButton = document.getElementById ("decrButton");
var time = document.getElementById("time");

time.style.fontFamily = "Impact, Charcoal"

var secondsLeft = 76;
var isRunning = false;

myButton.addEventListener("click", function () {
    if(isRunning){
        return;
    } 
    isRunning = true;
    document.getElementById("theQuiz").classList.remove("hidden");
    // secondsLeft = 30;
    var timerInterval = setInterval(function() {
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
