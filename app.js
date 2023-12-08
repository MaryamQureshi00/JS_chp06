// EXERCISE  6.1
//  step 1
function addNum(num1, num2) {
    return num1 + num2;
}
// step 2
let var1 = 3;
let var2 = 7;

// step 3
console.log(`Result 01 of adding two variables:`, addNum(var1, var2));

// step 4
var result2 = addNum(8, 10); // Using two more numbers directly
console.log("Result 02 of adding two variables:", result2);

// EXERCISE  6.2
// Step 1
let descriptiveWords = ["Beautifull", "Charming", "Cool", "Tasty", "Horrible", "Adore", "Enjoy", "Large", "Fancy", "Amazing"];
// step 2
function askTheName() {
    let userName = prompt(`Enter a name`);
    // step 3
    let randomNumber = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
    // step 4
    console.log(`The name ${userName} is ${randomNumber}`);
}
// step 5
askTheName();

// EXERCISE 6.3

let number1 = 14;
let number2 = 4;

let sum = "+";
let Sub = "-";

function calculator(_value1, _value2, _sign) {
    let ans
    if (_sign == '+') {
        ans = _value1 + _value2;
    }
    else if (_sign == '-') {
        ans = _value1 - _value2;
    }
    else {
        ans = _value1 + _value2;
    }
    console.log(`Your answer is ${ans}`);
}
const operand1 = '+';
const operand2 = '-';

// addition
calculator(9, 3, operand1);
// subtraction
calculator(9, 3, operand2);
// invalid operator
calculator(9, 3,);

//  exercise 6.4

let arrayResult = [];

for (i = 0; i < 10; i++) {
    let firstValue = i * 5;
    let secondValue = i * i;

    function calculateFunc(alpha1, alpha2) {
        return alpha1 + alpha2;
    }
    let response = calculateFunc(firstValue, secondValue);
    arrayResult.push(response);
}

console.log(arrayResult);

// exercise 6.5
let beta = '1000';

(function(){
    let beta = 'The new value from IIFE 1'
    console.log(`The local value from IIFE 1:`, beta);
}());

let resultVariable = (function() {
    let beta = 'The new value from IIFE 2'
    return beta;
} ());
console.log(`The return variable from IIFE 2:`, resultVariable);
console.log(`Original variable`, beta);

let anonymousFunction = function(parameterValue) {
    let beta = parameterValue;
    console.log(`Value from Anonymous function:`, beta);
}
anonymousFunction(`New value from anonymous function`);

//  Exercise 6.6
function calculateFactorial(n) {
    if (n === 0) {
      console.log(`Reached 0, returning 1`);
      return 1;
    } else {
      console.log(`Calculating factorial(${n}) = ${n} * factorial(${n - 1})`);
      return n * calculateFactorial(n - 1);
    }
  }
  
  let numberToCalculate = 5;
  let result = calculateFactorial(numberToCalculate);
  console.log(`Factorial of ${numberToCalculate} is: ${result}`);

//  exercise 6.7

let start = 10;

function countdown(value) {
  console.log(value);
  if (value < 1) {
    return;
  }

  countdown(value - 1);
}

function secondCountdown(value) {
  if (value > 0) {
    console.log(value);
    value--;
    return secondCountdown(value);
  }
}

let startValue = 10;

function countdown(value) {
  console.log(value);
  if (value < 1) {
    return;
  }
  countdown(value - 1);
}

function secondCountdown(value) {

  if (value > 0) {
    console.log(value);
    value--;
    return secondCountdown(value);
  }
}
console.log("Countdown 1:");
countdown(start);

console.log("\nCountdown 2:");
secondCountdown(startValue);

// exercise 6.8

const printToConsole = function(argument) {
    console.log(argument);
};
printToConsole("Hello, World!");

function printToConsoleDeclaration(argument) {
    console.log(argument);
}
printToConsoleDeclaration("Greetings!");

// CHAPTER PROJECT
// CREATE A RECURSIVE FUNCTION
function countUpTo10(startNumber) {
    if (startNumber > 10) {
        return;
    }
    console.log(startNumber);
    countUpTo10(startNumber + 1);
}
console.log("Counting up to 10 starting from 1:");
countUpTo10(1);

console.log("\nCounting up to 10 starting from 5:");
countUpTo10(5);

console.log("\nCounting up to 10 starting from 8:");
countUpTo10(8);

// SET TIMEOUT ORDER
const outputOne = () => {
    console.log("One");
};
const outputTwo = () => {
    console.log("Two");
};

const outputThreeAndInvokeOthers = () => {
    console.log("Three");
    outputOne();
    outputTwo();
};
const outputFourAndInvokeFirstAndThird = () => {
    console.log("Four");
    setTimeout(() => {
        outputOne();
        setTimeout(outputThreeAndInvokeOthers, 0);
    }, 0);
};

outputFourAndInvokeFirstAndThird();
