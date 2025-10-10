var readBooksPromise = require('./promise.js')
 
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

    readBooksPromise(waktu, books[index], function(sisaWaktu) {
        readBooksSerial(sisaWaktu, books.slice(1))
    }).catch(readBooksSerial(sisaWaktu))
    {
        console.log("waktu saya habis");
    }
}

// mulai membaca dari buku pertama
readBooksSerial(time, 0);
