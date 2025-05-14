let car = {
  name: "BMW",
  model: "X5"
};

function purchaseCar(price) {
  console.log(this.name + " " + this.model + " purchased for " + price);
}

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw Error(this + " is not callable");
  }
  //   if (!Array.isArray(args)) {
  //     throw new Error("Second argument should be an array");
  //   }
  context.fn = this;
  return context.fn.apply(context, args);
};

purchaseCar.myApply(car,[50000]); // BMW X5 purchased for 50000
