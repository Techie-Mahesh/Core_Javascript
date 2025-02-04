const cart = ["shirt", "pant", "shoe"];

const validCart = cart => {
  if (!cart || cart.length === 0) {
    return false;
  }
  return true;
};
const createOrder = cart => {
  return new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      reject(new Error("Invalid Cart"));
    }
    const orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        return resolve(orderId);
      }, 2000);
    }
  });
};
const proceedTopayment = orderId => {
  return new Promise((resolve, reject) => {
    resolve({
      message: `Payment is successFul for order id: ${orderId}`,
      amt: 2000
    });
  });
};

const showOrderSummary = (message, amt) => {
  return new Promise((resolve, reject) => {
    if (amt >= 2000) {
      resolve({ message: `You have ordered items that cost ${amt} RS`, amt });
    } else {
      reject(new Error("Please buy more for discount", amt));
    }
  });
};

createOrder(cart)
  .then(orderId => {
    console.log("Order created with id: ", orderId);
    return orderId;
  })
  .then(orderId => proceedTopayment(orderId))
  .then(paymentInfo => {
    console.log(paymentInfo, "hello world");
    return paymentInfo;
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log("Your wallet has beed debited by:", amt);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happens, I will get executed");
  });
