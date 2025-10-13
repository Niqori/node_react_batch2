console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 1\n")

var buah = [
    {
    nama: 'Nanas',
    warna: 'Kuning',
    adabijinya: 'tidak',
    harga: 9000
    }, 
    {
    nama: 'Jeruk',
    warna: 'Oranye',
    adabijinya: 'ada',
    harga: 8000
    },
    {
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adabijinya: 'ada',
    harga: 10000
    },
    {
    nama: 'Pisang',
    warna: 'Kuning',
    adabijinya: 'tidak',
    harga: 5000
    }
]

var buahNobiji = buah.filter(item => item.adabijinya == 'tidak')

console.log(buahNobiji)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 2\n")

function tambahDataFilm(judul,durasi,genre,tahun){
    var film ={
        judul: judul,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    }
    dataFilm.push(film)
}
var dataFilm = []
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 3\n")

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var pria29 = people.filter(function(person){
    return person.gender === 'male' && person.age > 29
})
console.log(pria29)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 4\n")

var sum = people.reduce(function (x, person) {
    return x + person.age;
}, 0);
var mean = sum/people.length
console.log(`Total Umur = ${sum}`);
console.log(`Total orang = ${people.length}`)
console.log(`Rata-rata umur = ${mean}`)

console.log("\n","+".repeat(75),"\n")
console.log("TUGAS NOMOR 5\n")

function sortbyage(people){
    people.sort((a,b) => a.age-b.age)
    const output = people.map((person, index) => {
    return `${index + 1}. ${person.name}`;
});
    console.log(output.join('\n'));
}
sortbyage(people)

function nomor6(){
    console.log("\n","+".repeat(75),"\n")
    console.log("TUGAS NOMOR 5\n")
    var phone = {
        name: "Samsung Galaxy Note 20",
        brand: "Samsung",
        colors: ["Black"],
        release: 2020
    }

    function addColors(warna){
        phone.colors.push(warna)
    }
    addColors("Gold")
    addColors("Silver")
    addColors("Brown")
    console.log(phone)
}

nomor6()

