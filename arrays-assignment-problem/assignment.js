// TASK #1
// Task 1.a

//  Creating an array of numbers(of your choice) and perform the 3 array operation on it.

const randomNumbers = [12,3,43,56,67,2,21,23,56,78,98,100,-10];

//  task 1.b filter for numbers greater than 5,

const greaterThanFive= randomNumbers.filter((number,index, randomNumbers)=> number > 5 );


console.log('Output greater than 5: ',greaterThanFive);

// task 1.c map every number to an object which holds the number of some property (eg "num") and reduce the array to a single number(the multiplication of all numbers)

// converted into objects 
const intoMap = randomNumbers.map((number, index, randomNumbers)=> ({num: number}))

console.log(intoMap);

// reduce into possible shortest way to write the code.
const theProductOfRandomNumbers = randomNumbers.reduce((previousValue,currentValue,currentIndex, randomNumbers)=> {return previousValue * currentValue}, 1);

console.log(theProductOfRandomNumbers);
 


// Task 2

// TODO: Task 2.a Write a function ("findMax") which executes some logic that finds the
        // largest number in a list of arguments.
const findMax = (arrayNumbers) => console.log(Math.max(...arrayNumbers))
;


findMax(randomNumbers);

// TODO: Task 2.b 



// TASK 3.

// TASK 3.A 

const findMaxAndMin = (arrayOfNumbers) => {
  const minAndMAx = [];
  minAndMAx.push(Math.min(...arrayOfNumbers), Math.max(...arrayOfNumbers))
  console.log(minAndMAx)
  return minAndMAx;
}
findMaxAndMin(randomNumbers);


// TASK 3.B 
const [min, max] = findMaxAndMin(randomNumbers);
console.log(min, max);


// TASK 4 

const uniqueID = [12,23,1,3,4,5,10,21,32,33,34,56];

const setsOfNumber = new Set(uniqueID);

setsOfNumber.add(56);
setsOfNumber.add(106);
setsOfNumber.add(996);
console.log(setsOfNumber)

