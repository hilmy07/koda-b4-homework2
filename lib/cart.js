let cart = [];
let cartIndex = 0;
const historyCart = [];
const historyCount = [];
let historyIndex = 0;

function addToCart(item, qty) {
  cart[cartIndex] = { item, qty };
  cartIndex++;
}

function resetCart() {
  cart.length = 0;
  cartIndex = 0;
}

function getCart() {
  return cart;
}

function getCartIndex() {
  return cartIndex;
}

function addHistory() {
  historyCart.push([...cart]);
  historyCount.push(cart.length);
  historyIndex++;
  resetCart();
}

function getHistory() {
  return { historyCart, historyCount, historyIndex };
}

module.exports = {
  addToCart,
  resetCart,
  getCart,
  getCartIndex,
  addHistory,
  getHistory,
};
