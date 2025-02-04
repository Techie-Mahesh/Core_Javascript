const myMemoize = (fn, context) => {
  let cache = {};

  return function (...arguments) {
    let key = JSON.stringify(arguments);
    if (!cache[key]) {
      cache[key] = fn.call(context || this, ...arguments);
    }
    console.log("Cache", cache);

    return cache[key];
  };
};
const square = x => {
  for (let i = 0; i < 1000000; i++) {}
  return x * x;
};
const memoizeSquare = myMemoize(x => x * x);
console.time("First Call");
console.log(memoizeSquare(2)); // 4
console.timeEnd("First Call");
console.time("Second Call");
console.log(memoizeSquare(2)); // 4
console.timeEnd("Second Call");

const add = (a, b) => {
  for (let i = 0; i < 1000000; i++) {}
  return a + b;
};

const memoizeAdd = myMemoize(add);
console.time("First Call");
console.log(memoizeAdd(15, 2)); // 4
console.timeEnd("First Call");
console.time("Second Call");
console.log(memoizeAdd(15, 2)); // 4
console.timeEnd("Second Call");
