"use strict";
console.log("this", this); // here this is the global object window for browser and global for node
function x() {
  //NON-strict mode: if strict mode is not enabled then this will be the global object
  // strict mode: here this is undefined because it is in strict mode and strict mode does not allow to set this to global object
  console.log(this);
}

// Note: If the value of this keyword is null or undefined, it is set to the global object. only in non-strict mode

// this keyword value depends on how the function is called
x(); // this is the global object in non-strict mode and undefined in strict mode
window.x(); // this is the window object in browser irrespective of strict mode or non-strict mode

// this inside an object
const obj = {
  a: 10,
  b: function () {
    console.log(this);
  }
};

obj.b(); // o/p: {a: 10, b: f}
// this inside an object method is the object itself

// call, apply, bind methods
const student = {
  name: "Mahesh",
  printName: function () {
    console.log(this.name); // this is the student object (Mahesh)
  }
};
const student2 = {
  name: "Ramesh"
};
// If we want to printName of student2 which is not a method of student2 object then we can use call, apply, bind methods

student.printName.call(student2); // o/p: Ramesh, value of this keyword is student2 object

// Inside arrow function
const object2 = {
  a: 10,
  b: () => {
    console.log(this); // this is the global object window for browser and global for node irrespective of strict mode or non-strict mode
  }
};
object2.b();

// this inside nested arrow function

const object3 = {
  a: 10,
  b: function () {
    // enclosing lexical context
    const c = () => {
      console.log(this); // this is the object3 object because it shares
    };
    c();
  }
};
object3.b(); // o/p: {a: 10, b: f}

// this inside DOM is refer to the element itself