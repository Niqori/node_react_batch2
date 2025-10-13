class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    // Getter untuk name
    get name() {
        return this._name;
    }

    // Getter dan Setter untuk legs
    get legs() {
        return this._legs;
    }

    set legs(newLegs) {
        this._legs = newLegs;
    }

    // Getter untuk cold_blooded (tidak perlu setter karena bersifat default/konstan)
    get cold_blooded() {
        return this._cold_blooded;
    }
}

// Pengujian Class Animal
var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

sheep.legs = 3 // Menggunakan setter
console.log(sheep.legs) // 3

// Soal No 2
// Code class Ape dan class Frog di sini

class Ape extends Animal {
    constructor(name) {
        super(name);
    }

    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log("hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log("=".repeat(50))
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log("=".repeat(50))