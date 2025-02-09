const user = {
  name: "John",
  age: 18
};
function logMessage(age, place) {
  console.log(
    this.name +
      " logged in successfully and age is " +
      age +
      " years" +
      " and place is " +
      place
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw Error(this + " is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

logMessage.myCall(user, 25, "USA");
