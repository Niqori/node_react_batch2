//TUGAS NOMOR 1

var dataPeserta = ["john", "laki-laki", "programmer", "30"]

var output = "Halo, nama saya " + dataPeserta[0] + 
             ". saya " + dataPeserta[1] + 
             " berumur " + dataPeserta[3] + 
             " bekerja sebagai seorang " + dataPeserta[2]

console.log(output)

// TUGAS NOMOR 2

var sayuran=[]

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran)

// TUGAS NOMOR 3

sayuran.sort()

for ( i=0 ;i<sayuran.length;i++){
    console.log((i+1),". ",sayuran[i])
}