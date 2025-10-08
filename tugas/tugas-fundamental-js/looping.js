var i =1

console.log("LOOPING PERTAMA")
while (i<=10){
    var looping = i*2
    console.log(looping,"- i love coding")
    
    i++
}

console.log("LOOPING KEDUA")
do{
    var looping = i*2
    console.log(looping,"- i love coding")
    
    i--
}while(i>0)

// TUGAS NOMOR 2

for ( var angka = 1; angka <= 20 ; angka++){
    if (angka % 2 == 0){
        console.log(angka," - Angka Genap")
    }
    else{
        console.log(angka," - Angka Ganjil")
    }
}

//TUGAS NOMOR 3

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

//TUGAS NOMOR 4
for (var i = 1; i <= 7; i++) {
    var hasil = "";
    for (var j = 1; j <= i; j++) {
        hasil += "#";
    }
    console.log(hasil);
}


//TUGAS NOMOR 5

var sentence = "Fullstack Developer"

for (var i=0;i<sentence.length;i++)
{
    var char = sentence[i].toLowerCase();
    if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u" && char !== " "){
    console.log(sentence[i]); // tampilkan huruf aslinya (bisa juga char)
    }

}
