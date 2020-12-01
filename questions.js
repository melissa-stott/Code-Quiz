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
const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            A: "Strings",
            B: "Alerts",
            C: "Booleans",
            D: "Numbers",
        },
        correctAnswer: "B"
    },
    {
        question: "The condition of an if/else statement is enclosed in:",
        answers: {
            A: "Square Brackets",
            B: "Curly Braces",
            C: "Parantheses",
            D: "Quotation Marks",
        },
        correctAnswer: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            A: "Numbers",
            B: "Objects",
            C: "Strings",
            D: "All of the above",
        },
        correctAnswer: "D"
    },
    {
        question: "A great tool for debugging is:",
        answers: {
            A: "Console Log",
            B: "An array",
            C: "Prompt",
            D: "Who needs to debug?",
        },
        correctAnswer: "B"
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

function populateAnswers (index){
    choiceALabel.innerText=myQuestions[index].answers.A;
    choiceBLabel.innerText=myQuestions[index].answers.B;
    choiceCLabel.innerText=myQuestions[index].answers.C;
    choiceDLabel.innerText=myQuestions[index].answers.D;
    theQuestion.innerText=myQuestions[index].question;
}

var state = 0;
populateAnswers(state);

choiceA.addEventListener("click", getResult);
choiceB.addEventListener("click", getResult);
choiceC.addEventListener("click", getResult);
choiceD.addEventListener("click", getResult);

function getResult(event){
    console.log(event.srcElement.id);

    state++;
    if (state < 5) {
        populateAnswers(state);
    }
}