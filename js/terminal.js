//var hello = document.getElementById("text").getElementsByTagName('p')[0];

//hello.innerHTML = "hello";

var headingString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const parentDiv = document.getElementById("main");
const caretNode = document.getElementById("caret");

function loadLineText() {}

function beginLine() {
  // grabs text
  // new paragraph
  // drawLine
}

// I wish there were a better way to do this where the string stayed const.
// requestAnimationFrame/setTimeout/setInterval do not play nice when wrapped inside a loop, though.
function drawLine(text) {
  const pNode = document.createElement("p");
  //pNode.id = "mainp";
  parentDiv.insertBefore(pNode, caretNode);

  const interval = setInterval(function () {
    //textNode.textContent += text.charAt(0);
    pNode.innerHTML += text.charAt(0);
    // pNode.
    //pNode.innerHTML += caretP.outerHTML;
    text = text.substring(1);
    if (text == "") {
      clearInterval(interval);
      parentDiv.insertBefore(document.createElement("br"), caretNode);
      parentDiv.insertBefore(document.createElement("br"), caretNode);
    }
  }, 20);
}

// setInterval to blink caret cursor.
const backgroundColor = window.getComputedStyle(document.body).backgroundColor; // I love javascript <3
console.log(backgroundColor);

const caretColor = getComputedStyle(caretNode).backgroundColor;

setInterval(function() {
  // If it's filled, then blank it (make it the background colour).
  // Otherwise fill it again.
  // It blinks!
  if (getComputedStyle(caretNode).backgroundColor == caretColor) {
    caretNode.style.backgroundColor = backgroundColor;
  } else {
    caretNode.style.backgroundColor = caretColor;
  }
}, 530);

drawLine(headingString);
//drawText("vvvvvvvvvvvvvvvvv");
//newParagraph();

console.log("hello world");
