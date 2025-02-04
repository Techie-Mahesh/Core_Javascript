const obj = {
  firstName: "Mahesh",
  lastName: "Kumar"
  // printFullName: function(){
  //     console.log(this.firstName + " " + this.lastName);
  // }
};
const printFullName = function (age, city) {
  console.log(this.firstName + " " + this.lastName, +" " + age + " " + city);
};

const obj2 = {
  firstName: "Ramesh",
  lastName: "Kumar"
};

// obj.printFullName(); // Mahesh Kumar
// // call method is used to call a method of an object with another object (sharing the method of one object with another object)
// obj.printFullName.call(obj2); // Ramesh Kumar

printFullName.call(obj, 25, "bangalore"); // Mahesh Kumar
printFullName.call(obj2, 26, "france"); // Ramesh Kumar

// apply method is similar to call method but the only difference is that it takes an array of arguments
printFullName.apply(obj, [25, "bangalore"]); // Mahesh Kumar
printFullName.apply(obj2, [26, "france"]); // Ramesh Kumar

// bind method is similar to call method but the only difference is that it returns a new function
// use case of bind method is when we want to call a function later
const printMyName = printFullName.bind(obj, 25, "bangalore");
console.log(printMyName); // returns a new function
printMyName(); // Mahesh Kumar

