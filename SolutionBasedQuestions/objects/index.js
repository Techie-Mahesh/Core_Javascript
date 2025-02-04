// Objects in Javascript

// Problem 1
const user = {
  name: "John",
  age: 25,
  place: "USA"
};
user.name = "Jane";
delete user.age;
console.log(user); // { name: 'Jane' }

const func = (function (a) {
  delete a; // delete key is used to delete a key from an object not a variable
  return a;
})(5);
console.log(func); // 5

for (key in user) {
  console.log(key, " -> ", user[key]); // name -> Jane, place -> USA
}
// ---------------------------------------------------------------------------------------------------------------------------------

// Problem 2
const obj = {
  a: 1,
  b: 2,
  a: 3
};
console.log(obj); // { a: 3, b: 2 }

// -----------------------------------------------------------------------

// Problem 3

const obj1 = {
  a: 100,
  b: 200,
  title: "Hello"
};
const multiplyByTwo = obj => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  console.log(obj);
};

multiplyByTwo(obj1);

// -----------------------------------------------------------------------

// Problem 4
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456  because the key is converted to string

// -----------------------------------------------------------------------

// Problem 5
const settings = {
  username: "john",
  password: "12345",
  age: 28
};
const data = JSON.stringify(settings, ["username", "age"]);
console.log(data); // {"username":"john","age":28}

// -----------------------------------------------------------------------

// Problem 6
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius // Here arrow function points to the global object
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// -----------------------------------------------------------------------

// Problem 7

let c1 = { greeting: "Hey!" };
let d;
d = c1; // Here we are assigning the reference of c1 to d
c1.greeting = "Hello";
console.log(d.greeting); // Hello

// console.log({ a: 10 } === { a: 10 }); // false
console.log({ a: 10 } == { a: 10 }); // false

// -----------------------------------------------------------------------

// Problem 8
let person = { name: "John" };
const members = [person];
person = null;
console.log(person); // null
console.log(members); // [ { name: 'John' } ] because the reference is copied

// person.name = null;
// console.log(members); // [ { name: null } ] because the reference is copied

// -----------------------------------------------------------------------

// Problem 9

const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

// -----------------------------------------------------------------------

// Problem 10

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };
  return person;
}
let personObj1 = {
  name: "Alex",
  age: 30
};
let personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }

// -----------------------------------------------------------------------
