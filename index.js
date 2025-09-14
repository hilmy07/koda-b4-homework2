const { viewMenu } = require("./lib/viewMenu");
const { order } = require("./lib/order");
const { history } = require("./lib/history");
// const { cart, cartIndex, addToCart } = require("./cart");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function dashBoard() {
  console.log("\nWelcome to Roti'o Bakery!");
  console.log("=========================");
  console.log("Please select an option:");
  console.log("1. Lihat Menu");
  console.log("2. Lihat Keranjang");
  console.log("3. Riwayat Pesanan");
  console.log("4. Keluar");

  // rl.question("Masukkan Pilihan: ", (choice) => {
  const choice = await ask("Masukkan pilihan (1-4): ");
  switch (choice) {
  case "1":
    await viewMenu(ask, dashBoard);
    break;
  case "2":
    await order(ask, dashBoard);
    break;
  case "3":
    history();
    dashBoard();
    break;
  case "4":
    console.log("Terima kasih! Sampai jumpa!");
    rl.close();
    break;
  default:
    console.log("Pilihan tidak valid.");
    dashBoard();
  }
  // });
}

dashBoard();
