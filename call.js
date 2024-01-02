const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then((orderId) => {
    // proceedtoPayment(orderId);
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return console.log(paymentInfo);
  });

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Sucessful");
  });
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
