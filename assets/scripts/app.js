 /* 
  parse Int/Float/etc. Is a way to convert the text the way we wanted it to be. 
  browser  to JS is always on the text so this method is somehow the way how to make it work
  in a mathematical way.

  on the other hand if we want to convert a number into a string just simply add next to the variable
  variableName.toString()
*/

const defaultResult = 0;
let currentResult = defaultResult;
let entriesLog = [];

// this function is just to shorten the hassle everytime we change a variable name.

function getUserNumInput(){
    return parseInt(userInput.value);
}

/*
    resultBeforeCalc- is the initial value in the calculator which usually start with 0
    operator - is the arithmetic operator we decide to use in our calculation
    calcNumber - it is the  value that we wanted to add or be used along with the initial value

*/
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}



function add(){
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  
  const entryLog= {
        operator: 'ADDITION',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
  };

  entriesLog.push(entryLog);
  console.log(entriesLog);
}



function subtract(){
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}



addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
