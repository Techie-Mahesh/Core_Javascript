// Problem 1: What is the output of the following code?

const obj = {
  name: "John"
};
function sayHello(age, place) {
  console.log(
    "Hello, " +
      this.name +
      " is " +
      age +
      " years old" +
      " and lives in " +
      place
  );
}
sayHello.call(obj, 20, "USA"); // Hello, John is 20 years old and lives in USA
sayHello.apply(obj, [20, "USA"]); // Hello, John is 20 years old and lives in USA
const bindFunc = sayHello.bind(obj);
bindFunc(20, "USA"); // Hello, John is 20 years old and lives in USA
console.log("-------------------------------------------------------");

// Problem 2: What is the output of the following code?

var status = "global";

setTimeout(() => {
  const status = "local";
  const data = {
    status: "data",
    getStatus() {
      return this.status;
    }
  };
  console.log("problem 2 o/p: ", data.getStatus()); // local
  console.log("problem 2 o/p: ", data.getStatus.call(this)); // global
  // setTimeout is a global function and it doesn't have access to the object properties.
}, 0);

console.log("-------------------------------------------------------");

// Problem 3: What is the output of the following code?
const animals = [
  {
    species: "Lion",
    name: "King"
  },
  {
    species: "Whale",
    name: "Fail"
  }
];
function printAnimal(i) {
  this.print = function () {
    console.log("# " + i + " " + this.species + " is named " + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimal.call(animals[i], i);
}
console.log("-------------------------------------------------------");

// Problem 4: Find min and max of an array using call and apply methods.
const numbers = [1, 2, 3, 4, 5];
console.log(Math.min.apply(null, numbers)); // 1
console.log(Math.max.call(null, ...numbers)); // 5

console.log("-------------------------------------------------------");

// Problem 5: Bind Function

function f() {
  console.log(this);
}
let user = {
  g: f.bind(null)
};
user.g(); // window object

console.log("-------------------------------------------------------");

// Problem 6: Bind chaining

function f1() {
  console.log(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" }); // Bind chaining is not allowed the first bind will be considered.
f(); // John

console.log("-------------------------------------------------------");

// Problem 7: login using bind
var password = "12345";
function checkPassword(success, failed) {
  if (password === "12345") {
    success();
  } else {
    failed();
  }
}

let user1 = {
  name: "John",
  loginSuccess: function () {
    console.log(this.name + " logged in successfully");
  },
  loginFailed: function () {
    console.log(this.name + " login failed");
  }
};
checkPassword(user1.loginSuccess.bind(user1), user1.loginFailed.bind(user1)); // John logged in successfully

console.log("-------------------------------------------------------");

// Problem 8: partial application for login
let password1 = "123465";
function checkPassword2(success, failed) {
  if (password1 === "12345") {
    success();
  } else {
    failed();
  }
}
const user2 = {
  name: "John",
  login(result) {
    console.log(
      this.name + (result ? " logged in successfully123" : " login failed")
    );
  }
};

// fill the code

// checkPassword2(?,?)
checkPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false)); // John logged in successfully

console.log("-------------------------------- 10 -----------------------");

// Problem 9: Exlict Binding with arrow function

const myage = 24;
const person = {
  name: "John",
  age: 25,
  getAgeArrow: () => console.log(this.age),
  getAge() {
    console.log(this.age);
  }
};
const person2 = { age: 30 };
person.getAgeArrow.call(person2); //  global object
person.getAge.call(person2); // 30
