let calculator = {
  read() {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter second number", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  sub() {
    return this.a - this.b;
  },
  div() {
    return this.a / this.b;
  }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
