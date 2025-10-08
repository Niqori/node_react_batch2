var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

var length = sentence.length
var kategori = " "
if (length < 10){
    kategori = "Pendek"
}
else if (length >= 10 && length <= 30){
    kategori = "Sedang"
}
else {
    kategori = "Panjang"
}

console.log("Panjang String = ",length)
console.log("Kategori = ",kategori)

// TUGAS NOMOR 2

var nilai 
var indeks = " "

if (nilai >= 80){
    indeks = "A"
}
else if (nilai >= 70 && nilai < 80 ){
    indeks = "B"
}
else if (nilai >= 60 && nilai < 70 ){
    indeks = "C"
}
else if (nilai >= 50 && nilai < 60 ){
    indeks = "D"
}
else{
    indeks = "E"
}

console.log("Nilai yang diambil = ",nilai = 65)
console.log("Indeks didapat :",indeks)

//TUGAS NOMR 3

var tahun = 2000
var bulan = 9
var tanggal = 25

var nambulan
switch(bulan){
    case 1 :
        nambulan = "Januari"
        break
    case 2 :
        nambulan = "Februari"
        break
    case 3 :
        nambulan = "Maret"
        break
    case 4 :
        nambulan = "April"
        break
    case 5 :
        nambulan = "Mei"
        break
    case 6 :
        nambulan = "Juni"
        break
    case 7 :
        nambulan = "Juli"    
        break
    case 8 :
        nambulan = "Agustus"
        break
    case 9 :
        nambulan = "September"
        break   
    case 10 :
        nambulan = "Oktober"
        break
    case 11 :
        nambulan = "November"
        break
    case 12 :
        nambulan = "Desember"
        break
    default :
        console.log("bentar, gk valid. ganti ")
    break
}

console.log(tanggal," ",nambulan," ",tahun)
