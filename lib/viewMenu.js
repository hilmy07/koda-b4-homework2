let cart = [];
let cartIndex = 0;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function viewMenu() {
  console.log(" =============== Menu Roti'o ================= ");
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

  rl.question("Masukkan nomor menu (1-10): ", (item) => {
    rl.question("Masukkan jumlah pesanan: ", (qty) => {
      item = parseInt(item);
      qty = parseInt(qty);

      cart[cartIndex] = { item, qty };
      cartIndex++;

      console.log("Pesanan berhasil ditambahkan ke keranjang!");
      dashBoard();
    });
  });
}
