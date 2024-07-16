class Account {
    #password
    #balance = 0

    constructor (user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if(this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate (email, password) {
        return this.email === email && this.#password === password
    }
    
}

const user = {
    email: "clebersonrodrigues616@gmail.com",
    password: "123456"
}

const userAccount = new Account(user)

console.log(userAccount)
// console.log(userAccount.#password) // gera erro
console.log(userAccount.getBalance("clebersonrodrigues616@gmail.com", "123456"))
console.log(userAccount.getBalance("clebersonrodrigues616@gmail.com", "12345678"))