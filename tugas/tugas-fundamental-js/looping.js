var i =1
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 1\n")

console.log("LOOPING PERTAMA")
while (i<=10){
    var looping = i*2
    console.log(looping,"- i love coding")
    
    i++
}

console.log("LOOPING KEDUA")
do{
    i--
    var looping = i*2
    console.log(looping,"- i love coding")

}while(i>1)

// TUGAS NOMOR 2
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 2\n")
for ( var angka = 1; angka <= 20 ; angka++){
    if (angka % 2 == 0){
        console.log(angka," - Angka Genap")
    }
    else{
        console.log(angka," - Angka Ganjil")
    }
}

//TUGAS NOMOR 3
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 3\n")
for ( var angka = 1; angka <= 20 ; angka++){
    if (angka % 3 === 0 && angka % 2 !== 0){
        console.log(angka," - i love coding")
    }
    else if (angka % 3 === 0 && angka % 2 === 0){
        console.log(angka," - ToT")
    }
    else if (angka % 2 === 0){
        console.log(angka," - Berkualitas")
    }
    else{
        console.log(angka," - Santai")
    }
}

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 4\n")
//TUGAS NOMOR 4
for (var i = 1; i <= 7; i++) {
    var hasil = "";
    for (var j = 1; j <= i; j++) {
        hasil += "#";
    }
    console.log(hasil);
}


//TUGAS NOMOR 5
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 5\n")
var sentence = "Fullstack Developer"

function Konsonan(huruf){
var hasil =" "
for (var i=0;i<huruf.length;i++)
{
    var char = huruf[i].toLowerCase();
    if (!char.match(/[aiueo]/)){ 
        hasil += huruf[i]
    }
}
    console.log(hasil)
}
Konsonan(sentence)