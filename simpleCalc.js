let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.querySelector(".screen");
let equalTo = document.getElementById("equals");

let firstNum = 0;
let secondNum = 0;
let operation = "";


numbers.forEach((number) => {
    number.addEventListener("click", () => {
    
        if(display.innerText === "0"){
            display.innerText = number.innerText;
        } else{
            display.innerText = display.innerText + number.innerText;
        }
    });
});


operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(operator.innerText === "="){
            return;
        }
        firstNum = Number(display.innerText);
        operation = operator.innerText;
        display.innerText = "";
    });
});

equalTo.addEventListener("click", () => {
    secondNum = Number(display.innerText);
    if(operation === "+"){
        display.innerText = firstNum + secondNum;
    } else if(operation === "-"){
        display.innerText = firstNum - secondNum;
    } else if(operation === "X"){
        display.innerText = firstNum * secondNum;
    } else if(operation === "/"){
        if(secondNum === 0){
            return;
        } else{
            display.innerText = firstNum / secondNum;
        }
    } else if(operation === "%"){
        display.innerText = firstNum % secondNum;
    }
});

