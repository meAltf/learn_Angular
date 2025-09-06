alert("Hey JS!")

// window.document.body and document.body both are same bcz window is globally appearance
console.dir(window.document.body);
console.log(document.body);

console.dir(document.body.childNodes[1]);
console.dir(document.head);

// Action
document.body.style.background = "green";

// document.body.childNodes[3].innerText = "Topic 1 : Hey started learning!";

// DOM manipulation
// #->id | #heading | it's always unique
// 1. selecting with id, className, tag |  document.getElementById/getElementByClassName/getElementByTagName

let heading = document.getElementById("heading"); // h1
console.dir(heading);

let headings = document.getElementsByClassName("heading-class")
console.dir(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);




