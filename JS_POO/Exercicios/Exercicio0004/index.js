const Mage = require("./Mage");
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const mateus = new Mage("Mateus", 90, 4, 2, 14)
const shuha = new Thief("Shuha", 140, 22, 8)
const cleberson = new Warrior("Cleberson", 200, 14, 12, 4)

console.table({ mateus, shuha, cleberson })

cleberson.switchStance()
mateus.attack(cleberson)
shuha.attack(mateus)
mateus.heal(mateus)

console.table({ mateus, shuha, cleberson })