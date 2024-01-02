const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, () => {
  api.proceedToPaymemt(() => {
    api.showOrderSummary(() => {
      api.updateWallet();
    });
  });
});

api.proceedToPaymemt();
//dependencies of flow
setTimouet(() => {
  console.log;
  setTimeout(() => {}, 3000);
}, 2000);
