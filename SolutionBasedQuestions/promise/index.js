// console.log("------------------Problem 1------------------");

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then(res => {
//   console.log(res);
// });
// console.log("end");

// // Output: start, 1, end, 2

// console.log("------------------Problem 2------------------");
// console.log("start");
// const promise2 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });
// promise1.then(res => {
//   console.log(res);
// });
// console.log("end");

// // Output: start, 1, 3, end, 2

// console.log("------------------Problem 3------------------");

// console.log("start");
// const promise3 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
// });
// promise1.then(res => {
//   // This will not be executed as promise3 is not resolved
//   console.log(res);
// });
// console.log("end");

// // Output: start, 1, 3, end

// console.log("------------------Problem 4------------------");

// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");
// fn().then(res => {
//   console.log(res);
// });
// console.log("end");

// // o/P: Start, middle, 1, end, success

// console.log("------------------Problem 5------------------");
// console.log("start");

// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }
// let promise = job();

// promise
//   .then(() => console.log("success 1"))
//   .then(() => console.log("success 2"))
//   .then(() => console.log("success 3"))
//   .catch(() => console.log("Error"))
//   .then(() => console.log("success 4"));

// //   O/P: start, Error, success 4

console.log("------------------Problem 6------------------");
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise6 = job(true);

promise6
  .then(data => {
    console.log("success 1 ->", data);
    return job(false);
  })
  .catch(error => {
    console.log("Error 1", error);
    return "error caught";
  })
  .then(data => {
    console.log("success 2 ->", data);
    return job(true);
  })
  .catch(error => console.log("Error ->", error));

//   o/p:
//  success 1 -> success
// Error 1 error
// success 2 -> error caught
