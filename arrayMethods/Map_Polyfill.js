Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

console.log([1,2,3,4].myMap((item) => item * 2)); // [2, 4, 6, 8]
