// Question 1
const user = {
  firstName: "John",
  getName() {
    const firstName = "Karan";
    return this.firstName;
  }
};

console.log(user.getName()); // John

// Question 2
function makeUser() {
  return {
    name: "John",
    ref: this,
    ref1() {
      return this;
    }
  };
}

let user1 = makeUser();
console.log(user1.ref.name); // undefined
console.log(user1.ref1().name); // John

// Question 3
const myUser = {
  name: "John",
  logMessage() {
    console.log(this.name);
  }
};

// setTimeOut(myUser.logMessage, 10); // undefined
// It won't work because setTimeout is a global function and it doesn't have access to the object properties.

//  To fix this, we can use callback function or bind method inside the setTimeout.
setTimeout(() => {
  myUser.logMessage();
}, 0);

// Question 4

const myUser1 = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  },
  fareWell: () => {
    console.log("Goodbye, " + this.name);
  }
};
console.log(myUser1.greet()); // Hello, John
console.log(myUser1.fareWell()); // Goodbye, undefined
console.log("-------------------------------------------------------");

// Question 5
var length = 4;
function callback() {
  console.log(this.length); // 4
}
const object = {
  length: 5,
  method(fn) {
    fn(); // this points to the global object not the object itself because it is a global function.
  },
  method2() {
    arguments[0](); // this points to the arguments object not the object itself.
  }
};
object.method(callback); // 4 because callback is a global function and it doesn't have access to the object properties.
object.method2(callback); // 2 because arguments object doesn't have length property.

// Question 6
// Implement a calculator object with the following methods:
//  const result = calc.add(10).sub(5).mul(2).div(2)
//  console.log(result.total); // 5

let calc = {
    total: 0,
    add: function (a) {
      this.total += a;
      return this;
    },
    sub: function (a) {
      this.total -= a;
      return this;
    },
    mul: function (a) {
      this.total *= a;
      return this;
    },
    div: function (a) {
      this.total /= a;
      return this;
    }
  };
  const result = calc.add(10).sub(5).mul(2).div(2);
  console.log(result.total, "result"); // 5