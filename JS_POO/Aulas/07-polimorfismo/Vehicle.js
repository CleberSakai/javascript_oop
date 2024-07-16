class Vehicle {
    move() {
        console.log('O Veiculo está se movendo.')
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo.")
    }
}

class Ship extends Vehicle {
    move() {
        console.log("O navio está navegando.")
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(75)

// Outra possibilidade incrível da sobrescrita de métodos é utilizar de forma genérica objetos
// que obedecem a mesma interface

function start(vehicle) {
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)