// always returns a promise
// async function getData() {
//   return "Namaste";
// }

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 2");
  }, 5000);
});

function getData() {
  p.then(data => {
    console.log(data); // this will be printed after 5 seconds
  });
  console.log("Hello"); // this will be printed first
}

// To overcome this issue, we can use async/await
async function handlePromise() {
  console.log("getData function called"); // this will be printed first
  //   JS engine will wait for the promise to resolve and then move to the next line
  const data = await p;
  console.log(data); // this will be printed after 10 seconds
  console.log("Hello"); // this will be printed first
  const data2 = await p2;
  console.log(data2); // this will be printed after 10 seconds
  console.log("Hello2"); // this will be printed first
}
const myData = () => {
  setTimeout(() => {
    console.log("After Promise ==??");
  }, 5000);
};
myData();
handlePromise();

// getData();
