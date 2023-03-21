const operatorButtons = document.querySelectorAll(".operator__buttons");
const equalsButton = document.querySelector(".equals__button");
const mainScreen = document.querySelector(".main__screen");
const allButtons = document.querySelectorAll(".button__cards");
let firstStatement = "";
let secondStatement = "";
let finalStatement = "";
let operator = "";



const handlePressedButton = (event) => {
    if (event.target.innerHTML == "CLEAR") {
        mainScreen.value = "";
        firstStatement = "";
        secondStatement = "";
        finalStatement = "";
        operator = "";
    
    } else {
       mainScreen.value += event.target.innerHTML;
   }

   
}


allButtons.forEach((pressedButton) =>{
    pressedButton.addEventListener("click", handlePressedButton)
});

const handleOperatorButtons = () => {
    if (firstStatement == "") {
        firstStatement = mainScreen.value;
        const firstStatementArray = firstStatement.split("");
        operator = firstStatementArray.pop();
        console.log(operator);
        firstStatement = Number.parseFloat(firstStatement);
        console.log(firstStatement);
        mainScreen.value = "";

    } else if (operator != "") {
        mainScreen.value = "error";
    }
}

operatorButtons.forEach((pressedButton) => {
    pressedButton.addEventListener("click", handleOperatorButtons);
})


const handleEqualsButton = () => {
    secondStatement = mainScreen.value;
    secondStatement = Number.parseFloat(secondStatement);
    console.log(secondStatement);


    switch (true) {
        case  operator == "x":
            mainScreen.value = firstStatement * secondStatement;            
            break;
        case  operator == "/" && secondStatement != 0:
            mainScreen.value = firstStatement / secondStatement;            
            break;
        case  operator == "+":
            mainScreen.value = firstStatement + secondStatement;            
            break;
        case  operator == "-":
            mainScreen.value = firstStatement - secondStatement;            
            break;
        case  operator == "/" && secondStatement == 0:
            mainScreen.value = "error";            
            break;   
        default:
            break;
    }
}




equalsButton.addEventListener("click", handleEqualsButton);