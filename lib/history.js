let historyCart = [];
let historyIndex = 0;
let historyCount = [];
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function history() {
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

  console.log("\n=== Riwayat Pesanan ===");
  if (historyIndex === 0) {
    console.log("Belum ada pesanan.");
    // dashBoard();
  } else {
    for (let h = 0; h < historyIndex; h++) {
      console.log(`\nCheckout ke-${h + 1}:`);
      let grandTotal = 0;
      const keranjang = historyCart[h];
      const jumlahItem = historyCount[h];

      for (let i = 0; i < jumlahItem; i++) {
        const c = keranjang[i];
        const m = menu[c.item];
        const subTotal = m.price * c.qty;
        grandTotal += subTotal;
        console.log(`  ${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-`);
      }

      console.log(`  Total Checkout ${h + 1}: Rp. ${grandTotal},-`);
    }
  }
}
