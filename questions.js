var theQuiz = document.getElementById(theQuiz);
var theQuestion = document.getElementById(theQuestion);
var answer = document.getElementById(answer);
var options = document.getElementsByName(label);

answer.textContent = 'Answer One';

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
        question: "Strings must be enclosed in _____, when being applied to a variable:",
        answers: {
            A: "Commas",
            B: "Square Brackets",
            C: "Quotation Marks",
            D: "They don't need to be enclosed",
        },
        correctAnswer: "B"
    },
]