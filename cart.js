const cart = ["shoes0", "pants", "kurta"];

//create an api

createOrder(cart); //orderId in a database
//they are dependent to each other
proceedtoPayment(orderId);
//create order first and call the callback function once the order is created
api.createOrder(cart, () => {
  api.proceedtoPayment(orderId, () => {
    api.orderSummary(paymentInfo, () => {
      updateBalance();
    });
  });
});

const promise = createOrder(cart);
// {data : fill wit data automatically and we will have orderdetail after certain time}
//async operation with callback
//there is one issue inversion of control
promise
  .then((orderId) => {
    proceedtoPayment(orderId);
  })
  .then((paymentInfo) => {
    orderSummary(paymentInfo);
  })
  .then((orderSummary) => {
    updateSummary(orderSummary);
  });
