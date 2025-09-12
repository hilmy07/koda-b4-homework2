let cart = [];
let cartIndex = 0;
let historyCart = [];
let historyIndex = 0;
let historyCount = [];
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function order() {
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

  console.log("\n=== Keranjang Pesanan ===");
  if (cartIndex === 0) {
    console.log("Belum ada pesanan.");
    dashBoard();
  } else {
    let grandTotal = 0;
    let i = 0;
    do {
      const c = cart[i];
      const m = menu[c.item];
      const subTotal = m.price * c.qty;
      grandTotal += subTotal;
      console.log(`${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-`);
      i++;
    } while (i < cartIndex);

    console.log("---------------------------------");
    console.log(`Total semua pesanan: Rp. ${grandTotal},-`);

    rl.question("Apakah Anda ingin checkout? (y/n): ", (answer) => {
      if (answer.toLowerCase() === "y") {
        historyCart[historyIndex] = [...cart];
        historyCount[historyIndex] = cartIndex;
        historyIndex++;

        console.log("Terima kasih telah berbelanja di Roti'o Bakery!");
        cart = [];
        cartIndex = 0;
        dashBoard();
      } else {
        console.log("Pesanan belum di-checkout.");
        dashBoard();
      }
    });
  }
}
