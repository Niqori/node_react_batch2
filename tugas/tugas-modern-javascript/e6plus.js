console.log("+".repeat(75),"\n")
console.log("TUGAS NOMOR 1\n")
// (Arrow Function)

// Fungsi untuk menghitung luas lingkaran
const luas_lingkaran = (r) => {
  return Math.PI * r * r;
};

// Fungsi untuk menghitung keliling lnggaran
const keliling_lingkaran = (r) => {
  return 2 * Math.PI * r;
};

let jari_jari = 21;

console.log(`Luas lingkaran dengan jari-jari ${jari_jari} = ${luas_lingkaran(jari_jari)}`)
console.log(`Keliling lingkaran dengan jadi-jari ${jari_jari} = ${keliling_lingkaran(jari_jari)}`)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 2\n")

const introduce = (...data) => {
  const [nama, umur, gender, pekerjaan] = data;
  // Tentukan sapaan berdasarkan jenis kelamin
  const sapaan = gender.toLowerCase() === "laki-laki" ? "Pak" : "Bu";

  return `${sapaan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
};


const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn); 

const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah); 

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 3\n")

function nama(){

const newFunction = (firstName, lastName) => {
    return {
    firstName: firstName,
    lastName: lastName,
    fullName : () =>{
      console.log(`${firstName} ${lastName}`)
    }
}
}

console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

}
nama()

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 4\n")

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

let {name:phoneName,brand:phoneBrand,year,colors} = phone
let [colorBronze,,colorBlack] = colors
// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 5\n")

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
const updatebuku={...buku,warnaSampul: [...buku.warnaSampul,...warna],...dataBukuTambahan}
//gabungkanlah variabel warna (gabungkan dengan atribut warnaSampul) dan dataBukuTambahan ke variabel buku dengan menggunakan spread operator
console.log(updatebuku);

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 6\n")
/*
 tulislah function anda disini
*/
function addProducts(brand,newProduct){
  return{ 
  ...brand,
  products:[...brand.products,...newProducts],
}
}

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
 }

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

sumsung = addProducts(samsung, newProducts)

console.log(sumsung)
// buatlah sebuah function yang menambahkan dari newProducts


console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 7\n")

function tugasno7(){ 
let data = ["Bondra", "Medan", 25];
const [nama, domisili, umur] = data;

const konversiObject = (nama, domisili, umur) => {
  return {
    nama,
    domisili,
    umur,
  };
};
const result = konversiObject(nama, domisili, umur);
console.log(result);
}
tugasno7()

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 8\n")

const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
    { name: "Yogi", class: "react"},
    { name: "Fikri", class: "agile"},
    { name: "Arief", class: "agile"}
]

const graduate = (...students) => {
    const result = {};
    students[0].forEach(({ name, class: className }) => {
        if (!result[className]) {
            result[className] = [];
        }
        result[className] = [...result[className], name];
    });
    
    return result;
};

console.log(graduate(data1))
console.log(graduate(data2))