//TUGAS NOMOR 1
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 1\n")
var dataPeserta = ["john", "laki-laki", "programmer", "30"]

var output = "Halo, nama saya " + dataPeserta[0] + 
             ". saya " + dataPeserta[1] + 
             " berumur " + dataPeserta[3] + 
             " bekerja sebagai seorang " + dataPeserta[2]

console.log(output)

// TUGAS NOMOR 2
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 2\n")
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
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 3\n")
sayuran.sort()

for ( i=0 ;i<sayuran.length;i++){
    console.log((i+1),". ",sayuran[i])
}

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 4\n")

var word = "car";
var result = [];
for (var i = 0; i < word.length; i++) {
    for (var j = i + 1; j <= word.length; j++) {
        result.push(word.slice(i, j));
    }
}
console.log(result);

console.log("" + "=".repeat(50) + "");

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 5\n")
var numbers = [ 4,5,1,4,6,8,9,21];
console.log(sum(numbers));
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 6\n")

var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
];
var hasil = [];
for (var i = 0; i < kumpulanAngka.length; i++) {
    hasil.push(sum(kumpulanAngka[i]));
}
console.log(hasil);