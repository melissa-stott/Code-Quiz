var theQuiz = document.getElementById("theQuiz");
var theQuestion = document.getElementById("theQuestion");
var answerResult = document.getElementById("answerResult");
// var answer = document.getElementById(answer);
var theQuestions = document.createElement("P");
var options = document.getElementsByName("question1");
var choiceA = document.getElementById("answerA");
var choiceALabel = document.getElementById("answerALabel");
var choiceB = document.getElementById("answerB");
var choiceBLabel = document.getElementById("answerBLabel");
var choiceC = document.getElementById("answerC");
var choiceCLabel = document.getElementById("answerCLabel");
var choiceD = document.getElementById("answerD");
var choiceDLabel = document.getElementById("answerDLabel");

theQuestion.style.fontSize = '20px';
theQuestion.style.fontFamily = 'Arial, bold';

// created an array to store questions, answers, and correct answer
const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            A: "Strings",
            B: "Alerts",
            C: "Booleans",
            D: "Numbers",
        },
        correctAnswer: "answerB"
    },
    {
        question: "The condition of an if/else statement is enclosed in:",
        answers: {
            A: "Square Brackets",
            B: "Curly Braces",
            C: "Parantheses",
            D: "Quotation Marks",
        },
        correctAnswer: "answerC"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            A: "Numbers",
            B: "Objects",
            C: "Strings",
            D: "All of the above",
        },
        correctAnswer: "answerD"
    },
    {
        question: "A great tool for debugging is:",
        answers: {
            A: "Console Log",
            B: "An array",
            C: "Prompt",
            D: "Who needs to debug?",
        },
        correctAnswer: "answerA"
    },
    {
        question: "Strings must be enclosed in _____, when being applied to a variable:",
        answers: {
            A: "Commas",
            B: "Square Brackets",
            C: "Quotation Marks",
            D: "They don't need to be enclosed",
        },
        correctAnswer: "C"
    },
]

// displays questions and answer options
function populateAnswers (index){
    choiceALabel.innerText=myQuestions[index].answers.A;
    choiceBLabel.innerText=myQuestions[index].answers.B;
    choiceCLabel.innerText=myQuestions[index].answers.C;
    choiceDLabel.innerText=myQuestions[index].answers.D;
    theQuestion.innerText=myQuestions[index].question;
}

var state = 0;
populateAnswers(state);

// function to let user know if they answered correctly. displays on the screen.
function getResult(event){
    if (event.srcElement.id == myQuestions[state].correctAnswer) {
        answerResult.innerText = "You are correct";
    } else {
        secondsLeft -= 10;
        answerResult.innerText = "That answer is incorrect";
    }

    
    state++;
    if (state < 5) {
        populateAnswers(state);
    }
    else
    {
        // stops the game once all questions are answered
        var score = stopTimer();
        console.log("score: " + score);
        choiceA.removeEventListener("click", getResult);
        choiceB.removeEventListener("click", getResult);
        choiceC.removeEventListener("click", getResult);
        choiceD.removeEventListener("click", getResult);
    }
}