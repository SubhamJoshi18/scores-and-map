const cart = ["shoes", "pants", "kurta"];

createOrderId(cart)
  .then(function (orderId) {
    return console.log(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err);
  });

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment Sucessful");
    }, 5000);
  });
}
function createOrderId(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
