const { getHistory } = require("./cart");

function formatRupiah(number) {
  return "Rp. " + number.toLocaleString("id-ID") + ",-";
}

function history() {
  const { historyCart, historyCount, historyIndex } = getHistory();
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
      const invoiceNumber = String(h + 1).padStart(4, "0");
      console.log(`\n🧾 Invoice: #INV${invoiceNumber}`);

      const now = new Date();
      const tanggalDanJam = now.toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      console.log(`🕓 Date: ${tanggalDanJam}`);
      let grandTotal = 0;
      const keranjang = historyCart[h];
      const jumlahItem = historyCount[h];

      for (let i = 0; i < jumlahItem; i++) {
        const c = keranjang[i];
        const m = menu[c.item];
        const subTotal = m.price * c.qty;
        grandTotal += subTotal;
        console.log(
          `  ${i + 1}. ${m.name} x ${c.qty} = ${formatRupiah(subTotal)}`
        );
      }

      console.log(`  Total Checkout : ${formatRupiah(grandTotal)}`);
    }
  }
}

module.exports = { history };
