const obj = {
  firstName: "Mahesh",
  lastName: "Kumar"
};
const printData = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + city + ", " + state
  );
};
myPrint = printData.bind(obj, "bangalore");
myPrint("karnataka"); // Mahesh Kumar is from bangalore, karnataka

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw Error(this + " is not callable");
  }
  context.fn = this;
  return function (...args2) {
    return context.fn(...args, ...args2);
  };
};
const printMyData2 = printData.myBind(obj, "bangalore");
printMyData2("karnataka"); // Mahesh Kumar 25 bangalore
