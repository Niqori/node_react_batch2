console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 1\n")

function introduce(nama,gender,job,umur){
    var sapa 
     if (gender.toLowerCase() === "laki-laki") {
        sapa = "Pak";
    } else if (gender.toLowerCase() === "perempuan") {
        sapa = "Bu";
    } else {
        sapa = ""; // Jika gender tidak jelas
    }

    var perkenalan = (`${sapa} ${nama} adalah seorang ${job} yang berusia ${umur} tahun`)
    return perkenalan
}

var john = introduce("John", "laki-laki", "penulis", "30")
var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(john) ; console.log(sarah)

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 2\n")

function carihurufunik(){
    var text = "Super Bootcamp Fullstack Dev 2022"
    var spasi = " "
    var lowtext = text.toLowerCase()
    for ( var i = 0;i<lowtext.length;i++)
    {
        var elemen = lowtext[i]
        if ( lowtext.indexOf(elemen) === lowtext.lastIndexOf(elemen)){
            spasi += elemen
        }
    }

    console.log(spasi);
}
carihurufunik()

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 3\n")
var angka = [2,3,1,9,12,8,9,7]
hasilsort = angka.sort(function(a,b) {
    return b-a
})

console.log(hasilsort)

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 4\n")
// Buatlah function untuk menyusun karakter pada string secara alfabetis.

function arrangeString (str) {
    var split = str.split("")
    var sorting = split.sort()
    var hasil = sorting.join("")

    return hasil
}
//bentar ngelag 998ms 

// TEST CASE
console.log(arrangeString("bahasa")) // Output : aaabhs
console.log(arrangeString("similikiti")) // Output : iiiiiklmst
console.log(arrangeString("sanbercode")) // Output : abcdeenors
console.log(arrangeString("")) // Output : ""

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 5\n")

function palindrome(kata) {

    var split = kata.split("")
    var sorting = split.reverse()
    var hasil = sorting.join("")

    return kata == hasil
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 6\n")

// Diberikan sebuah function angkaPalindrome(angka)
// yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang
// mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan
// me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah
// merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
// Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya
// yang palindrome, yaitu 9.

function angkaPalindrome(num) {
  nextnum = num + 1
    while (true) {
        
        // --- LOGIKA PENGECEKAN PALINDROME ---
        
        var numString = nextnum.toString();
        var reversedString = "";
        var i;
        var len = numString.length;
        
        // Membalik string
        for (i = len - 1; i >= 0; i--) {
            reversedString += numString[i];
        }
        
        // Bandingkan string asli dengan string kebalikan
        if (numString === reversedString) {
            // Jika ditemukan palindrome, kembalikan angka tersebut dan hentikan loop
            return nextnum;
        }
        
        // Jika belum ditemukan, pindah ke angka berikutnya
        nextnum++;
    }
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log("\n","+".repeat(75),'\n')
console.log("TUGAS NOMOR 7\n")

function cekPermutasi(str1, str2) {
    if (str1.length !== str2.length){
        return false 
    } 
    var charCount = {}
    var char
   for (var i = 0; i < str1.length; i++) {
        char = str1[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (var i = 0; i < str1.length; i++) {
        char = str2[i];

       if (!charCount[char] || charCount[char] === 0) {
            return false;
        }
        
        charCount[char]--;
    }

    return true;
}

console.log(cekPermutasi("abah", "baha")) // true
console.log(cekPermutasi("ondel", "delon")) // true
console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
console.log(cekPermutasi("taco", "taca")) // false