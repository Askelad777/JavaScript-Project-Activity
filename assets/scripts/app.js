// 2 - 4 lines declared variable and array.
const defaultResult = 0;
let currentResult = defaultResult;
let entriesLog = [];



// parse the string into real value
function getUserNumInput(){
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



  // FUNCTION THAT CALCULATE DEPENDS OF THE USER's OPERATION CHOICE
  function calculateResult(calculationType){

    if( calculationType === 'ADDITION' ||
        calculationType === 'SUBTRACTION' ||
        calculationType === 'MULTIPLICATION' ||
        calculationType === 'DIVISION')
      {
        return;
      }



      const enteredNumber = getUserNumInput();
      const initialResult = currentResult;
      let mathOperator;

      //CODITIONAL STATEMENT IN OPERATOR
      if(calculationType === 'ADDITION'){  
          currentResult += enteredNumber;
          mathOperator = '+';
      }else if(calculationType ==='SUBTRACTION'){
        currentResult -= enteredNumber;
        mathOperator = '-';
      }else if(calculationType === 'MULTIPLICATION'){
        currentResult *= enteredNumber;
        mathOperator= '*';
      }else if (calculationType === 'DIVISION'){
        currentResult /= enteredNumber;
        mathOperator = '/';
      }
      
      createAndWriteOutput(mathOperator, initialResult, enteredNumber);
      writeToLog(calculationType, initialResult,enteredNumber,currentResult);
  }



// OPERATIONAL FUNCTION

function add(){
  calculateResult('ADDITION');
}

function subtract(){
  calculateResult('SUBTRACTION');

}

function multiply(){
  calculateResult('MULTIPLICATION')
}

function divide(){
  calculateResult('DIVISION');
}

//OPERATES WHEN BUTTON IS CLICKED AND CALL A FUNCTION

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
