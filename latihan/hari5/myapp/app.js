const express = require('express')
const app = express()
const port = 3000

let movies = [
{id: 1, title: "Spider-Man", year: 2002},
{id: 2, title: "John Wick", year: 2014},
{id: 3, title: "The Avengers", year: 2012},
{id: 4, title: "Logan", year: 2017},
]

// Konstanta Pi
const PI = Math.PI;

// --- Fungsi Perhitungan ---

/**
 * Menghitung luas lingkaran (luas alas tabung).
 * @param {number} r Jari-jari
 * @returns {number} Luas lingkaran
 */
const luasLingkaran = (r) => {
    return PI * r * r;
};

/**
 * Menghitung keliling lingkaran (keliling alas tabung).
 * @param {number} r Jari-jari
 * @returns {number} Keliling lingkaran
 */
const kelilingLingkaran = (r) => {
    return 2 * PI * r;
};

/**
 * Menghitung volume tabung.
 * @param {number} r Jari-jari
 * @param {number} t Tinggi
 * @returns {number} Volume tabung
 */
const volumeTabung = (r, t) => {
    // Volume = Luas Alas * Tinggi
    const luasAlas = luasLingkaran(r); 
    return luasAlas * t;
};

// --- Route GET ---

// Path harus menyertakan parameter URL untuk jari-jari dan tinggi, misalnya /lingkaran-tabung/7/10
app.get('/lingkaran-tabung/:r/:t', (req, res) => {
    // 1. Mengambil nilai dari parameter URL
    // Wajib diubah menjadi tipe Number karena parameter URL berupa string
    const jariJari = parseFloat(req.params.r);
    const tinggi = parseFloat(req.params.t);

    // 2. Validasi input
    if (isNaN(jariJari) || isNaN(tinggi)) {
        return res.status(400).send('Input jari-jari (r) dan tinggi (t) harus berupa angka.');
    }

    // 3. Melakukan perhitungan
    const vol = volumeTabung(jariJari, tinggi).toFixed(2);
    const luasAlas = luasLingkaran(jariJari).toFixed(2);
    const kelilingAlas = kelilingLingkaran(jariJari).toFixed(2);

    // 4. Membuat teks output
    const output = `jariJari : ${jariJari}, tinggi: ${tinggi}, volume tabung : ${vol}, luas alas tabung : ${luasAlas}, keliling alas tabung : ${kelilingAlas}`;
    
    // 5. Mengirimkan respons
    res.send(output);
});


// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

app.listen(port, () => {
console.log(`App listening on port http://localhost:${port}`)
})