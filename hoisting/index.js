// scope

var a = 5; // global scope or function scope

{
  a = 10; // global scope
  let b = 20; // block scope it is not accessible outside the block
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined

// shadowing
{
  let a = 20;
  console.log(a); // 20
}

//  Illegal shadowing
function test() {
  var d = "hello";
  let c = "world";

  if (true) {
    let d = "hi";
    var c = "world"; // SyntaxError: Identifier 'c' has already been declared
    console.log(d); // hi
    console.log(c);
  }
}
test();


// Hoisting : hoisting is a process of moving all the declaration to the top of the file
console.log(hello); // undefined
var hello = "world";


console.log(count); // ReferenceError: Cannot access 'count' before initialization because of let and const are hoisted in the temporal dead zone (TDZ) and not initialized
let count


