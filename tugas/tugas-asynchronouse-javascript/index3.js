var filterBooksPromise = require('./promise2.js')
 

// Lanjutkan code untuk menjalankan function filterBookPromise
// gunakan promise dengan kondisi seperti di bawah ini:
// bukunya berwarna dan jumlah halamannya 50
// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
// bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini) 

var filterBooksPromise = require('./promise2.js');

// 🔹 1. Pakai .then() dan .catch()
// Kondisi: buku berwarna dan jumlah halamannya 50
filterBooksPromise(true, 50)
  .then(function(books) {
    console.log("✅ Buku berwarna dan 50 halaman ditemukan:", books);
  })
  .catch(function(error) {
    console.log("❌ Error:", error.message);
  });

// 🔹 2. Pakai async/await
// Kondisi: buku tidak berwarna dan jumlah halamannya 250
async function getUncoloredBooks() {
  try {
    const books = await filterBooksPromise(false, 250);
    console.log("✅ Buku tidak berwarna dan 250 halaman ditemukan:", books);
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

getUncoloredBooks();

// 🔹 3. Pakai async/await
// Kondisi: buku berwarna dan jumlah halamannya 30
async function getInvalidBooks() {
  try {
    const books = await filterBooksPromise(true, 30);
    console.log("✅ Buku ditemukan:", books);
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

getInvalidBooks();
