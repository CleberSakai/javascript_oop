class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock (quantity) {
        this.inStock += quantity
    }

    calculateDiscount (discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const ps5 = new Product("PlayStation5", "VideoGame Super Divertido", 4500)

ps5.addToStock(50)

console.log(ps5)

priceWithDiscount = ps5.calculateDiscount(50)

console.log(priceWithDiscount)

