Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const filteredArray = [1, 2, 3, 4, 6].myFilter(item => item % 2 === 0);
console.log(filteredArray); // [2, 4]
