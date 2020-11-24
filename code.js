var header = document.createElement("header");
var center = document.createElement("h1");
var theQuestions = document.createElement("div");
var quest1 = document.createElement("p");
var quest2 = document.createElement("p");
var quest3 = document.createElement("p");
var quest4 = document.createElement("p");
var quest5 = document.createElement("p");

document.body.append(header);
document.body.appendChild(center);
document.body.appendChild(theQuestions);
document.body.appendChild(quest1);

center.textContent += 'Coding Quiz Challenge';
center.style.padding = '50px';

quest1.textContent += 'Javascript is ridiculously hard!'