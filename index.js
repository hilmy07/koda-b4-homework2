function dashBoard() {
  console.log("\nWelcome to Roti'o Bakery!");
  console.log("=========================");
  console.log("Please select an option:");
  console.log("1. Lihat Menu");
  console.log("2. Lihat Keranjang");
  console.log("3. Riwayat Pesanan");
  console.log("4. Keluar");

  rl.question("Masukkan Pilihan: ", (choice) => {
    switch (choice) {
      case "1":
        viewMenu();
        break;
      case "2":
        order();
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
  });
}
