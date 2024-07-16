const Adress = require("./Adress")

class Person {
    constructor (name, street, number, neighborhood, city, state) {
        this.name = name
        this.address = new Adress(street, number, neighborhood, city, state)
    }
}

module.exports = Person