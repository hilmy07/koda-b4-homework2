const { addToCart } = require("./cart");

async function viewMenu(ask, dashBoard) {
  console.log("\n =============== Menu Roti'o ================= ");
  console.log("1. Roti Bun                   : Rp. 10.000,-");
  console.log("2. Chicken curry pastry       : Rp. 10.000,-");
  console.log("3. Crombo'o cappuccino        : Rp. 10.000,-");
  console.log("4. Crombo'o choco green tea   : Rp. 10.000,-");
  console.log("5. Crombo'o tiramisu          : Rp. 10.000,-");
  console.log("6. Martabak croissant         : Rp. 10.000,-");
  console.log("7. Cheese pastry              : Rp. 10.000,-");
  console.log("8. Beef pastry                : Rp. 10.000,-");
  console.log("9. Butter croissant           : Rp. 10.000,-");
  console.log("10. Sultana pastry            : Rp. 10.000,-");
  console.log("==============================================");
  console.log("99 kembali ke dashboard.");

  let input = parseInt(
    await ask("\n\nMasukkan nomor menu (1-10): | kembali ke dashboard 99 : "),
    10
  );

  if (input === 99) {
    return dashBoard();
  }

  let qty = parseInt(await ask("Masukkan jumlah pesanan: "), 10);

  if (isNaN(input) || input < 1 || input > 10) {
    console.log("Nomor menu tidak valid!");
  } else if (isNaN(qty) || qty < 1) {
    console.log("Jumlah pesanan harus lebih dari 0!");
  } else {
    addToCart(input, qty);
    console.log(
      `✅ Pesanan ${qty}x menu nomor ${input} berhasil ditambahkan ke keranjang!`
    );
  }
  dashBoard();
}

module.exports = { viewMenu };
