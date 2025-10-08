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