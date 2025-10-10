class Car{
    constructor(brand, factory){
        this.brand =brand 
        this.factory = factory
        this.sound = "honk honk "
    }

    present(x){
        return "Hello My Factory is "+ this.factory
    }

    // get carname(){
    //     return this._carname = x 
    // }

    // set carname(x){
    //     this._carname = x
    // }

}

var innova =  new Car ("Innova","Toyota")
console.log(innova)
console.log(innova.present())
// innova.carname = "Volkswagen"