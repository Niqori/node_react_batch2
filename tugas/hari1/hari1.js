// TUGAS NOMOR 1

var perkenalan = 'Nama saya adalah';
var nama = "Nailul"
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"

console.log(perkenalan.concat(" ",nama,'.',kata1," ",kata2," ",kata3," ",kata4," ",kata5," ",kata6," ",kata7))
console.log(" ")

// TUGAS NOMOR 2

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3);
console.log(" ")

// TUGAS NOMOR 3 

var sentence2 = 'wow JavaScript is so cool';

var FirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4,14);
var thirdWord2 = sentence2.substring(15,17)
var fourthWord2 = sentence2.substring(18,20)
var fifthWord2 = sentence2.substring(21,25)

console.log('First Word: ' + FirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log(" ")

// TUGAS NOMOR 4

var sentence2 = 'wow JavaScript is so cool';

var FirstWord3 = sentence2.substring(0, 3);
var secondWord3 = sentence2.substring(4,14);
var thirdWord3 = sentence2.substring(15,17)
var fourthWord3 = sentence2.substring(18,20)
var fifthWord3 = sentence2.substring(21,25)

var firswordlength = FirstWord3.length
var secondwordlenght = secondWord3.length 
var thirdwordlength = thirdWord3.length
var fourthwordlength = fourthWord3.length
var fifthwordlength = fifthWord3.length


console.log('First Word: ' + FirstWord2 +', with lenght :',firswordlength)
console.log('Second Word: ' + secondWord2 + ', with lenght :',secondwordlenght);
console.log('Third Word: ' + thirdWord2 +', with lenght :', thirdwordlength);
console.log('Fourth Word: ' + fourthWord2 +', with lenght :', fourthwordlength);
console.log('Fifth Word: ' + fifthWord2 + ', with lenght :',fifthwordlength);
console.log(" ")

// TUGAS NOMOR 5

// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2:",kode2)

// 3. password ketiga : IMREADY

var kode3 = abjad.indexOf("I")+ "-" + abjad.indexOf("M")+ "-" + abjad.indexOf("R")+ "-" + abjad.indexOf("E")+ "-" + abjad.indexOf("A")+ "-" + abjad.indexOf("D")+ "-" + abjad.indexOf("Y")
console.log("kode 2:",kode3)
console.log(" ")

//TUGAS NOMOR 6

var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

// OUTPUT : Saya SenanG BelajaR JAVASCRIPT

var pertama1= pertama.replace('s','S')
var kedua1= kedua.replace('s','S')
var kedua2= kedua1.replace('g','G')
var ketiga1= ketiga.replace('b','B')
var ketiga2= ketiga1.replace('r','R')
var keempat1= keempat.toUpperCase()
console.log(pertama1+" "+kedua2+" "+ketiga2+" "+keempat1)
console.log(" ")

//TUGAS NOMOR 7

var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";
// ubahlah variabel diatas ke integer dan lakukan perhitungan luas Persegi panjang dan luas segitiga

var panjang1 = parseInt(panjang)
var lebar1 = parseInt(lebar)
var alas1 = parseInt(alas)
var tinggi1 = parseInt(tinggi)
var luassegitiga; var luaspersegipanjang

luaspersegipanjang = panjang1 * lebar1
luassegitiga = ( 0.5*alas1*tinggi1 ) 
console.log("Luas Segitiga =",luassegitiga)
console.log("Luas Persegi Panjang =",luaspersegipanjang)
console.log(" ")

// TUGAS NOMOR 8

var sisi= " 1 2 ";
var jariJari= "7.5";
var sisi1 = Number(sisi.replace(/\s+/g,''));
var jarijari= parseFloat(jariJari)

console.log("sisi = ",sisi1)
console.log("jari-jari =", jarijari)
console.log("luas persegi =",sisi1*sisi1)
console.log("luas lingkaran = ",3.14*jarijari*jarijari)