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
  } else if (operator != "") {}
};

operatorButtons.forEach(function (pressedButton) {
  pressedButton.addEventListener("click", handleOperatorButtons);
}); //  finalStatement = firstStatement+secondStatement;        
//  mainScreen.value = finalStatement;

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

}; //Try using .innerText instead of .innerHTML
// .innText returns the text of the element plus all of it's children.


equalsButton.addEventListener("click", handleEqualsButton); // const handleEqualsButton = (screenEquals) => {
// }
// equalsButton.addEventListener("click", handleEqualsButton);
// for (let index = 0; index < allButtons.length; index++) {
//     allButtons[index].addEventListener("click", handlePressedButton);
// }
// clearButton.addEventListener("click", () => mainScreen.value = ``);
// const findButtonIndex = (buttonIdex) => {
//     console.log(buttonIdex);
// }
// allButtons.addEventListener("click", findButtonIndex);
// const handleButtonPress = (event) => {
//     console.log("clear button");    
// }
// clearButton.addEventListener("click", handleButtonPress);
// const clearButton = document.querySelector(".clear-button");
// const divideButton = document.querySelector(".divide-button");
// const oneButton = document.querySelector(".one-button");
// const twoButton = document.querySelector(".two-button");
// const threeButton = document.querySelector(".three-button");
// const multiplyButton = document.querySelector(".multiply-button");
// const fourButton = document.querySelector(".four-button");
// const fiveButton = document.querySelector(".five-button");
// const sixButton = document.querySelector(".six-button");
// const additionButton = document.querySelector(".addition-button");
// const sevenButton = document.querySelector(".seven-button");
// const eightButton = document.querySelector(".eight-button");
// const nineButton = document.querySelector(".nine-button");
// const minusButton = document.querySelector(".minus-button");
// const decimalButton = document.querySelector(".decimal-button");
// const equalsButton = document.querySelector(".equals-button");
// const zeroButton = document.querySelector(".zero-button");