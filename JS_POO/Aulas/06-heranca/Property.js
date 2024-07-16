class Property {
    constructor (area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property {}

const land = new Property(200, 50000)
const sameHouse = new House(120, 200000)

console.log(land)
console.log(sameHouse)
// console.log(sameHouse instanceof Property) // true

class Apartament extends Property {
    constructor (number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartament("506", 100, 160000)
console.log(apt)
console.log(apt.getFloor())