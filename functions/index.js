// functions

// function declaration
function greet() {
  console.log("Hello");
}

// function expression : Anonymous function assigned to a variable greet is a function expression
const greet1 = function () {
  console.log("Hello");
};

// first class functions: functions are treated as first class citizens in javascript i.e. functions can be assigned to variables, passed as arguments to other functions, returned from other functions

const square = function (num) {
  return num * num;
};

function displaySquare(cb, num) { 
  console.log(cb(num));
}

displaySquare(square, 5); // 25

// Higher order functions: A function that takes another function as an argument or returns a function is called a higher order function
//  example: displaySquare is a higher order function

// difference between Higher order functions and first class functions : Higher order functions are functions that take another function as an argument or return a function. First class functions are functions that can be assigned to variables, passed as arguments to other functions, returned from other functions.

// callback functions: A function that is passed as an argument to another function is called a callback function
// practical example: map,filter,reduc, setTimeout, eventlistners etc functions
