const buttons = document.querySelectorAll(".btn")
const equalButton = document.getElementById("=")
const calcInput = document.getElementById("calc-input")
const calcOutput = document.getElementById("calc-output")
const oprButton = document.querySelectorAll(".opr")
const clearButton = document.querySelector("#clear")
const delButton = document.querySelector("#del")

//Add Event Listeners
for (const eachButton of buttons) {
    eachButton.addEventListener('click', () => displayBtn(eachButton))
}

for (const eachOpr of oprButton) {
    eachOpr.addEventListener('click', () => setOpr(eachOpr, firstNum, secNum))
}

clearButton.addEventListener('click', () => clearAll())

equalButton.addEventListener('click', () => doMath(currOperator,firstNum,secNum))

delButton.addEventListener('click', () => deleteDigits())


//Initialize calc values
let firstNum = "";
let secNum = "";
let currOperator = "";

//Calculator
const add = (a,b) => a+b
//Subtract function
const subtract = (a,b) => a-b
//Multiply function
const multiply = (a,b) => a*b
//Divide function
const divide = (a,b) => a/b

const updateOutput = (result) => {
    calcOutput.textContent = `${result}`
}

const updateInput = (result) => {
    calcInput.textContent = `${result}`
}

const clearAll = () => {
    updateInput("")
    updateOutput("")
    firstNum = ""
    secNum = ""
    currOperator = ""
}

//Operate function
const doMath = (opr,a,b) => {
    let res = 0;
    switch (opr) {
        case "":
            res = Infinity //to trigger the nope messages
            break;
        case "+":
            res = add(+a,+b)
            break
        case "-":
            res = subtract(+a,+b)
            break
        case "*":
            res = multiply(+a,+b)
            break
        case "/":
            res = divide(+a,+b)
            break
    }

    if (res !== Infinity && !isNaN(res)) { 
        updateOutput(res)
        firstNum = `${res}`
        secNum = ""
        return res
    }

    //if divide by 0 or numbers or invalid e.g. 12.2.3.4
    let arr = ["nope", "no way", "dont break me", ":c", "haha no", "y u do dis"]
    clearAll()
    updateOutput(arr[Math.floor(Math.random() * arr.length)])
}


const displayBtn = (button) => {
    updateInput(calcInput.textContent+button.textContent)
    return (currOperator === "") ? (firstNum = firstNum + button.id) : (secNum = secNum + button.id)
}

//Set operators.
const setOpr = (opr,a,b) => {
    if (!currOperator && firstNum) {
        currOperator = opr.id 
        calcInput.textContent = calcInput.textContent + opr.textContent
    } else if (currOperator && secNum) { // if you chain operators e.g. 6+6+6
        res = doMath(currOperator,a,b)
        currOperator = opr.id 
        updateInput(res+opr.textContent)
    } else if (currOperator) { //if you press equals, then another operator e.g. 6+6=36 ... 36+2
        currOperator = opr.id 
        updateInput(calcOutput.textContent + opr.textContent)
    } else if (firstNum) { //will not allow to place opr if there is no firstNum
        return
    }
}

const deleteDigits = () => {
    let inputText = calcInput.textContent

    const removeByOne = (str) => {
        return str.substring(0,(str.length-1))
    }

    if (inputText === firstNum && !secNum) { //user just calculated, meant to press clear instead of del
        clearAll()
    } else if (secNum && firstNum && currOperator) {
        secNum = removeByOne(secNum)
        updateInput(removeByOne(inputText))
    } else if (inputText.includes(currOperator) && !secNum) { 
        //user wants to remove operator
        //doMath() does not reset currOperator, so if user continues 2nd calculation, 
        //currOperator has a value
        currOperator = ""
        updateInput(removeByOne(inputText))
    } else if (!currOperator && !secNum) {
        firstNum = removeByOne(firstNum)
        updateInput(removeByOne(inputText))
    } else {
        return
    }
}

