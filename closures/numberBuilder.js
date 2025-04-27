const numberBuilder = () => {
  let total = 0;

  const validateNumber = num => {
    if (num === undefined || num === null) {
      throw new Error("Number cannot be empty");
    }
    if (num < 0) {
      throw new Error("Number cannot be negative");
    }
    if (num > 100) {
      throw new Error("Number cannot be greater than 100");
    }
  };

  const addToTotal = (num, multiplier) => {
    validateNumber(num);
    total += num * multiplier;
  };

  return {
    lakhs(num) {
      addToTotal(num, 100000);
      return this;
    },
    thousands(num) {
      addToTotal(num, 1000);
      return this;
    },
    hundreds(num) {
      addToTotal(num, 100);
      return this;
    },
    tens(num) {
      addToTotal(num, 10);
      return this;
    },
    units(num) {
      addToTotal(num, 1);
      return this;
    },
    value() {
      return total;
    }
  };
};

// Example usage
console.log(
  numberBuilder().lakhs(2).thousands(5).hundreds(3).tens(4).units(1).value()
); // Output: 205341
