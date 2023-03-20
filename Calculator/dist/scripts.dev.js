"use strict";

var operatorButtons = document.querySelectorAll(".operator-button");
var equalsButton = document.querySelector(".equals-button");
var mainScreen = document.querySelector(".screen");
var allButtons = document.querySelectorAll(".button__cards");
var firstStatement = "";
var secondStatement = "";
var finalStatement = "";
var operator = ""; // const clearButton = document.querySelector("clear-button");
// C     /    
// 1 2 3 X
// 4 5 6 +
// 7 8 9 - 
// . -0- =
// change the html to event.target.innerHTML on the screen
// take the expression on mainScreen and show the result
// store each expression as a variable.

var handlePressedButton = function handlePressedButton(event) {
  if (event.target.innerHTML == "clear") {
    mainScreen.value = "";
    firstStatement = "";
    secondStatement = "";
    finalStatement = "";
    operator = "";
  } else if (event.target.innerHTML == ".") {
    mainScreen.value += ".";
  } else {
    mainScreen.value += event.target.innerHTML;
  } // alert("you pressed" + event.target.innerHTML);

};

allButtons.forEach(function (pressedButton) {
  pressedButton.addEventListener("click", handlePressedButton);
});

var handleOperatorButtons = function handleOperatorButtons() {
  if (firstStatement == "") {
    firstStatement = mainScreen.value;
    var firstStatementArray = firstStatement.split("");
    operator = firstStatementArray.pop();
    console.log(operator);
    firstStatement = Number.parseFloat(firstStatement);
    console.log(firstStatement);
    mainScreen.value = "";
  } else if (operator != "") {
    mainScreen.value = "error";
  }
};

operatorButtons.forEach(function (pressedButton) {
  pressedButton.addEventListener("click", handleOperatorButtons);
});

var handleEqualsButton = function handleEqualsButton() {
  secondStatement = mainScreen.value;
  secondStatement = Number.parseFloat(secondStatement);
  console.log(secondStatement);

  switch (true) {
    case operator == "x":
      mainScreen.value = firstStatement * secondStatement;
      break;

    case operator == "/" && secondStatement != 0:
      mainScreen.value = firstStatement / secondStatement;
      break;

    case operator == "+":
      mainScreen.value = firstStatement + secondStatement;
      break;

    case operator == "-":
      mainScreen.value = firstStatement - secondStatement;
      break;

    case operator == "/" && secondStatement == 0:
      mainScreen.value = "error";
      break;

    default:
      break;
  } // mainScreen.value = firstStatement - secondStatement ;   

};

equalsButton.addEventListener("click", handleEqualsButton);