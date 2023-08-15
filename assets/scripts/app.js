 // parse Int/Float/etc. Is a way to convert the text the way we wanted it to be. 
  // browser  to JS is always on the text so this method is somehow the way how to make it work
  // in a mathematical way.

  //on the other hand if we want to convert a number into a string just simply add next to the variable
  //variableName.toString()


const defaultResult = 0;
let currentResult = defaultResult;



function getUserNumInput(){
    return parseInt(userInput.value);
}


function add(){
 
  const enteredNumber = getUserNumInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
  
}

function subtract(){
  const enteredNumber = getUserNumInput();
  const calcDescription = `${currentResult} - ${enteredNumber}`
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDescription);
}

function multiply(){
  const enteredNumber = getUserNumInput();
  const calcDescription = `${currentResult} * ${enteredNumber}`
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDescription);
}

function divide(){
  const enteredNumber = getUserNumInput();
  const calcDescription = `${currentResult} / ${enteredNumber}`
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
