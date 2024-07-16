class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150 // esse mesmo valor é igual e acessivel a toda classe, podemos modificar o valor normalmente via atribuição

    static showBaseFee() {
        console.log(`Basee fee is $${Reservation.baseFee}`) // ele fica acessivel diretamente da classe
    }

    // Também podemos combinar o uso do static com o get e o set sem problemas
    static get premiunFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee() // pode ser acessado sem uma instancia
console.log(`Premium fee is $${Reservation.premiunFee}`)

const r1 = new Reservation(3, "201", 5)
console.log(r1)

Reservation.baseFee = 200 // reatribuindo seu valor normalmente aqui
Reservation.showBaseFee()

const r2 = new Reservation(2, "104", 2)
console.log(r2)
console.log(`Premium fee is $${Reservation.premiunFee}`) // como calculo baseFeee foi reatribuido, consequentemente esse também aumentou o valor
