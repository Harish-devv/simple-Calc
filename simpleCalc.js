let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.querySelector("#display");
let equalTo = document.getElementById("equals");

let firstNum = 0;
let secondNum = 0;
let operation = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendValue(number.innerText);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        chooseOperation(operator.id, operator.innerText);
    });
});

document.getElementById("backspace").onclick = () => {
    backSpace();
}

equalTo.addEventListener("click", () => {
    calculate();
});


function appendValue(number){
    if(display.innerText === "0"){
        display.innerText = number;
    } else{
        display.innerText = display.innerText + number;
    }
}

function chooseOperation(operator_id, operator_innerText){
    if(operator_id === "equals" || operator_id === "backspace"){ 
        return;
    }
    if(operator_id === "clearAll"){
        display.innerText = "0";
        firstNum = 0;
        secondNum = 0;
        operation = "";
        return;
    }
    firstNum = Number(display.innerText);
    operation = operator_innerText;
    display.innerText = "";
}

function backSpace(){
    let current = display.innerText;

    if(current.length === 1){
        display.innerText = "0";
    } else {
        display.innerText = current.slice(0,-1);
    }
}

function calculate(){
    secondNum = Number(display.innerText);
    if(operation === "+"){
        display.innerText = firstNum + secondNum;
    } else if(operation === "-"){
        display.innerText = firstNum - secondNum;
    } else if(operation === "X"){
        display.innerText = firstNum * secondNum;
    } else if(operation === "/"){
        if(secondNum === 0){
            display.innerText = "Denominator cant be zero";
            return;
        } else{
            display.innerText = firstNum / secondNum;
        }
    } else if(operation === "%"){
        display.innerText = firstNum % secondNum;
    }

    operation = "";
    firstNum = "";
    secondNum = "";
}

document.addEventListener("keydown", (e) => {
    if("1234567890.".includes(e.key)){
        appendValue(e.key);
    } 
    if("+-*/%".includes(e.key)){
        chooseOperation("", e.key);
    }
    if(e.key === "=" || e.key === "Enter"){
        calculate();
    }
    if(e.key === "Backspace"){
        backSpace();
    }
});
