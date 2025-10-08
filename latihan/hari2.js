var arr = ['batu','gunting','kertas']


function hitungpersegi (sisi){
    var luas_persegi 
    var keliling_persegi

    function luas_persegi(s){return s*s}
    function keliling_persegi(s){return 4*s}

    console.log("Luas Persegi = ",luas_persegi(sisi))
    console.log("Keliling Persegi = ",keliling_persegi(sisi))
}

function hitungpersegipanjang(panjang,lebar){
    var luas_persegipanjang 
    var keliling_persegipanjang

    function luas_persegipanjang(p,j){return p*j}
    function keliling_persegipanjang(p,j){return 2*(p+j)}

    console.log("Luas Persegi Panjang = ",luas_persegipanjang(12,7))
    console.log("Keliling Persegi Panjang = ",keliling_persegipanjang(12,7))
}


function hitungkubus(sisi){
    var volume = Math.pow(sisi,3)
    console.log("Volume Kubus = ",volume)
    return volume
}

function hitungbalok(pjg,lbr,tgi){
    var volume = pjg * lbr *tgi
    console.log("Volume Balok = ",volume)
    return volume
}

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]


var mod = "happi"

if(mod = "happi"){
    console.log("happi")
}
else if (mod != happi){
    console.log('not happi')
}

var minimarketStatus = "open"
var telur = "soldout"
var buah = "ready"

if (minimarketStatus == "open") {
    console.log("saya akan membeli telur dan buah")
    
    if (telur == "soldout" && buah == "soldout") {
        console.log("belanjaan saya tidak lengkap")
    } else if (telur == "soldout") {
        console.log("telur habis")
    } else if (buah == "soldout") {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

hitungpersegi(8)
hitungpersegipanjang(12,7)
hitungkubus(8)
hitungbalok(12,7,5)

//test test
//test test

