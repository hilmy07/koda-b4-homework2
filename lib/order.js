// let historyCart = [];
// let historyIndex = 0;
// let historyCount = [];
const { getCart, addHistory } = require("./cart");

async function order(ask, dashBoard) {
  const menu = {
    1: { name: "Roti Bun", price: 10000 },
    2: { name: "Chicken curry pastry", price: 10000 },
    3: { name: "Crombo'o cappuccino", price: 10000 },
    4: { name: "Crombo'o choco green tea", price: 10000 },
    5: { name: "Crombo'o tiramisu", price: 10000 },
    6: { name: "Martabak croissant", price: 10000 },
    7: { name: "Cheese pastry", price: 10000 },
    8: { name: "Beef pastry", price: 10000 },
    9: { name: "Butter croissant", price: 10000 },
    10: { name: "Sultana pastry", price: 10000 },
  };

  const cart = getCart();
  const cartIndex = cart.length;

  console.log("\n=== Keranjang Pesanan ===");
  if (cartIndex === 0) {
    console.log("Belum ada pesanan.");
    dashBoard();
  } else {
    let grandTotal = 0;
    cart.forEach((c, idx) => {
      const m = menu[c.item];
      const subTotal = m.price * c.qty;
      grandTotal += subTotal;
      console.log(`${idx + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-`);
    });

    console.log("---------------------------------");
    console.log(`Total semua pesanan: Rp. ${grandTotal},-`);

    const answer = await ask("Apakah Anda ingin checkout? (y/n): ");
    if (answer.toLowerCase() === "y") {
      addHistory();

      console.log("Terima kasih telah berbelanja di Roti'o Bakery!");
      cart.length = 0;
      dashBoard();
    } else {
      console.log("Pesanan belum di-checkout.");
      dashBoard();
    }
  }
}

module.exports = { order };
