const cart = ["shirt", "pant", "shoe"];

const validCart = cart => {
  if (!cart || cart.length === 0) {
    return false;
  }
  return true;
};

const createOrder = cart => {
  const pr = new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      reject(new Error("Invalid Cart"));
    }
    // logic for create order (fetch from api or db)
    const orderId = "1234";
    if (orderId) {
      // Lets consider this as a async operation taking 5 seconds to complete api call
      setTimeout(() => {
        return resolve(orderId);
      }, 5000);
    }
  });
  return pr;
};
const proceedTopayment = orderId => {
  return new Promise((resolve, reject) => {
    resolve("Payment is successFul");
  });
};

createOrder(cart)
  .then(orderId => {
    console.log("Order created with id: ", orderId);
    return orderId; // return is important to pass the value to next then block
  })
  .then(orderId => proceedTopayment(orderId))
  .then(paymentId => console.log("Payment done with id: ", paymentId))
  .catch(err => console.log(err.message)) // catch block to handle error if any in the promise chain till now
  .then(paymentInfo =>
    console.log("No matter what happens, this block will be executed")
  )
  .catch(err => console.log(err.message));
