//TUGAS NOMOR 1
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 1\n")

function hitungpersegi (sisi){
    var luas_persegi 
    var keliling_persegi

    function luas_persegi(s){return s*s}
    function keliling_persegi(s){return 4*s}

    console.log("Luas Persegi = ",luas_persegi(sisi))
    console.log("Keliling Persegi = ",keliling_persegi(sisi))
}

hitungpersegi(8)
hitungpersegipanjang(12,7)

function hitungpersegipanjang(panjang,lebar){
    var luas_persegipanjang 
    var keliling_persegipanjang

    function luas_persegipanjang(p,j){return p*j}
    function keliling_persegipanjang(p,j){return 2*(p+j)}

    console.log("Luas Persegi Panjang = ",luas_persegipanjang(12,7))
    console.log("Keliling Persegi Panjang = ",keliling_persegipanjang(12,7))
}

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 2\n")
//TUGAS NOMOR 2

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

hitungkubus(8)
hitungbalok(12,7,5)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 3\n")

function sorting(n){
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
for (let i = 0; i < people.length; i++) {
    people.sort((a,b) => a.age - b.age)
    console.log( `${i+1}. ${people[i].name}` )
}
    
    
}
sorting()

//TUGAS NOMOR 4
console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 4\n")

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

var hphitam = phones.filter(phone => phone.colors.includes("black"))
hphitam.sort((a,b) => a.year - b.year)

function sortingan(i, index = 0 ){
    if (index >= i.length){
        return
    }
    console.log( index+1, i[index].name," Colors Available : " ,i[index].colors)
    sortingan(i, index + 1)
}

sortingan(hphitam)
