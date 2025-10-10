var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// waktu awal (10 detik = 10000 ms)
var time = 10000;

// function untuk membaca buku satu per satu
function readBooksSerial(waktu, index) {
    // jika index sudah melebihi panjang array, hentikan
    if (index >= books.length) {
        console.log("Semua buku sudah dibaca!");
        return;
    }

    // panggil function readBooks dari callback.js
    readBooks(waktu, books[index], function(sisaWaktu) {
        if (sisaWaktu >= 0) {
            // lanjut ke buku berikutnya
            readBooksSerial(sisaWaktu, index + 1);
        } else {
            console.log("Waktu habis sebelum selesai membaca semua buku.");
        }
    });
}

// mulai membaca dari buku pertama
readBooksSerial(time, 0);
