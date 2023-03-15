"use strict";

var mainScreen = document.querySelector(".screen");
var allButtons = document.querySelectorAll(".button__cards"); // const clearButton = document.querySelector("clear-button");
// C     /    
// 1 2 3 X
// 4 5 6 +
// 7 8 9 - 
// . -0- =
// Click button, button runs function that finds the index of clicked button
// plug index into switch case that assigns a value to the index
// then print that value on the screen
// change the html to event.target.value on the screen

var handlePressedButton = function handlePressedButton(event) {
  if (event.target.innerHTML == "clear") {
    mainScreen.value = "";
  } else {
    mainScreen.value += event.target.innerHTML;
  } // alert("you pressed" + event.target.innerHTML);

};

allButtons.forEach(function (pressedButton) {
  pressedButton.addEventListener("click", handlePressedButton);
}); // for (let index = 0; index < allButtons.length; index++) {
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