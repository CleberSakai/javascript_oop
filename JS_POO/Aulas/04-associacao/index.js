// const Adress = require("./Adress");
const Person = require("./Person");

// const addr = new Adress("7 de Maio", 1671, "Vila Sônia", "Praia Grande", "São Paulo")
const cleberson = new Person("Cleberson", "7 de Maio", 1671, "Vila Sônia", "Praia Grande", "São Paulo")

console.log(cleberson)
console.log(cleberson.address.fullAddress())