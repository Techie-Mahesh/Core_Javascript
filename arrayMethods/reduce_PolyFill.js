Array.prototype.myReducer = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reducedArray = [1, 2, 3, 4].myReducer((acc, item) => acc + item);
console.log(reducedArray); // 10
