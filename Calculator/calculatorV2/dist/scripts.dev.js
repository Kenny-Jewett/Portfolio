"use strict";

var operatorButtons = document.querySelectorAll(".operator__buttons");
var equalsButton = document.querySelector(".equals__button");
var mainScreen = document.querySelector(".main__screen");
var allButtons = document.querySelectorAll(".button__cards");
var firstStatement = "";
var secondStatement = "";
var finalStatement = "";
var operator = "";

var handlePressedButton = function handlePressedButton(event) {
  if (event.target.innerHTML == "Clear") {
    mainScreen.value = "";
    firstStatement = "";
    secondStatement = "";
    finalStatement = "";
    operator = "";
  } else {
    mainScreen.value += event.target.innerHTML;
  }
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
  }
};

equalsButton.addEventListener("click", handleEqualsButton);