// 2 - 4 lines declared variable and array.
const defaultResult = 0;
let currentResult = defaultResult;
let entriesLog = [];



// parse the string into real value
const getUserNumInput= () =>{
    return parseInt(userInput.value);
}

// PERFORM OPERATIONAl FUNCTION BACK INTO THE WEB-SPACE
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

// WRITE A LOG INTO CONSOLE (HISTORY)
function writeToLog(arithmeticOperators,previousResult, enteredValue, updatedResult){

  const entryLog= {
    operator: arithmeticOperators,
    prevResult: previousResult,
    number: enteredValue,
    result: updatedResult
  };

  entriesLog.push(entryLog);
  console.log(entryLog.operator);
  console.log(entriesLog);
  }

// OPERATIONAL FUNCTION



const calculation = (operation) =>{
  const enteredNumber = getUserNumInput();
  const initialResult = currentResult;
  let operator;
  if(operation === 'ADD'){
    currentResult += enteredNumber;
    operator = '+';
  }else if(operation === 'SUBTRACT'){
    currentResult += enteredNumber;
    operator = '-';   
  }else if(operation === 'MULTIPLY'){
    currentResult += enteredNumber;
    operator = '*';
  }else{
    currentResult += enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult,enteredNumber,currentResult);
}

//OPERATES WHEN BUTTON IS CLICKED AND CALL A FUNCTION

addBtn.addEventListener('click', calculation.bind(this, 'ADD'));

subtractBtn.addEventListener('click', calculation.bind(this, 'SUBTRACT'));

multiplyBtn.addEventListener('click', calculation.bind(this, 'MULTIPY'));

divideBtn.addEventListener('click', calculation.bind(this, 'DIVIDE'));
