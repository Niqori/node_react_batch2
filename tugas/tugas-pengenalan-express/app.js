const express = require('express')
const app = express()
const port = 3000

//SOAL NOMOR 1

app.get('/lingkaran-tabung/:r/:t', (req, res) => {

    const PI = Math.PI;
    const luasLingkaran = (r) => { return PI * r * r; };
    const kelilingLingkaran = (r) => { return 2 * PI * r; };
    const volumeTabung = (r, t) => { return luasLingkaran(r) * t; };
    const jariJari = parseFloat(req.params.r);
    const tinggi = parseFloat(req.params.t);

    if (isNaN(jariJari) || isNaN(tinggi)) {
        return res.status(400).send('Input jari-jari (r) dan tinggi (t) harus berupa angka.');
    }
    const vol = volumeTabung(jariJari, tinggi).toFixed(2);
    const luasAlas = luasLingkaran(jariJari).toFixed(2);
    const kelilingAlas = kelilingLingkaran(jariJari).toFixed(2);
    const output = `jariJari : ${jariJari}, tinggi: ${tinggi}, volume tabung : ${vol}, luas alas tabung : ${luasAlas}, keliling alas tabung : ${kelilingAlas}`;
    
    res.send(output);
});


// Soal 2
app.get('/data-orang', (req, res) => {
    // Data yang akan difilter
    let dataOrang = [
        {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
        {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
        {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
        {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
        {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
    ];

    // Mengambil parameter dari URL Query (?umur=X&gender=Y)
    const filterUmur = req.query.umur;
    const filterGender = req.query.gender;

    // Variabel untuk menyimpan data hasil filter
    let dataHasilFilter = dataOrang;

    // 1. Filter berdasarkan UMUR
    if (filterUmur) {
        // Mengubah parameter umur menjadi angka
        const umurMin = parseInt(filterUmur);

        // Memastikan input umur valid (angka)
        if (isNaN(umurMin)) {
            return res.status(400).send('Parameter "umur" harus berupa angka.');
        }

        // Memfilter data: umur di atas atau sama dengan filterUmur
        dataHasilFilter = dataHasilFilter.filter(orang => orang.umur >= umurMin);
    }

    // 2. Filter berdasarkan GENDER
    if (filterGender) {
        const gender = filterGender.toUpperCase(); // Agar filter tidak case-sensitive (L/l atau P/p)

        // Memfilter data
        dataHasilFilter = dataHasilFilter.filter(orang => orang.jenisKelamin === gender);
    }

    // 3. Format Output
    if (dataHasilFilter.length === 0) {
        return res.send('Tidak ada data yang sesuai dengan kriteria filter.');
    }

    // Mengubah array objek menjadi string berformat
    const outputText = dataHasilFilter.map((orang, index) => {
        return `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun`;
    }).join('\n');
    

    res.send(outputText);
});

app.get('/data-orang/:id', (req, res) => {

    let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
    ]

    const t_id = parseInt(req.params.id)
    const ketemu = dataOrang.find(orang => orang.id === t_id)

    if (!ketemu){
        return res.status(404).send("Maaf data tidak ditemukan")
    }

    const sapaan = ketemu.jenisKelamin === 'L' ? 'Pak' : 'Ibu';

    const outputText = `${sapaan} ${ketemu.name} adalah seorang ${ketemu.pekerjaan} yang berusia ${ketemu.umur} tahun`;

    res.send(outputText);

});

// Server mendengarkan pada port yang ditentukan
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Hitung Tabung: http://localhost:${port}/lingkaran-tabung/:r/:t`)
    console.log(`Coba filter umur: http://localhost:${port}/data-orang?umur=30`);
    console.log(`Coba filter gender: http://localhost:${port}/data-orang?gender=L`);
    console.log(`Coba kedua filter: http://localhost:${port}/data-orang?umur=30&gender=L`);
    console.log(`Coba cari lewat id : http://localhost:${port}/data-orang/:id`)
});

app.get('/', (req, res) => {
res.send('Hello World!')
})