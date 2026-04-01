let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.querySelector("#display");
let equalTo = document.getElementById("equals");
let backSpace = document.getElementById("backspace");


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
        if(operator.id === "equals" || operator.id === "backspace"){ 
            return;
        }
        if(operator.id === "clearAll"){
            display.innerText = "0";
            firstNum = 0;
            secondNum = 0;
            operation = "";
            return;
        }
        firstNum = Number(display.innerText);
        operation = operator.innerText;
        display.innerText = "";
    });
});

backSpace.onclick = () => {
    let current = display.innerText;

    if(current.length === 1){
        display.innerText = "0";
    } else {
        display.innerText = current.slice(0,-1);
    }
}

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

