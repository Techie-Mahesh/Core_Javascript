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

Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};
const printMyData2 = printData.myBind(obj, "bangalore");
printMyData2("karnataka"); // Mahesh Kumar 25 bangalore
