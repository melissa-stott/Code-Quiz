var myButton = document.getElementById ("myButton");
var decrButton = document.getElementById ("decrButton");
var time = document.getElementById("time");

var secondsLeft = 30;
var isRunning = false;

myButton.addEventListener("click", function () {
    if(isRunning){
        return;
    } 
    isRunning = true;
    secondsLeft = 30;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft + " remaining.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        }
  
    }, 1000);
  })
  function sendMessage() {
    time.textContent = secondsLeft;
    isRunning = false;
  }
  
decrButton.addEventListener("click", function(){
    secondsLeft -= 5;
})