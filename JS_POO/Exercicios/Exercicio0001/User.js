class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login (email, password) {
        if(email === this.email && password === this.password) {
            console.log('Seu Login foi bem sucedido!')
        } else {
            console.log('Algo está errado em seu login!')
        }
    }
}

const cleberson = new User("Cleberson Rodrigues dos Santos", "clebersonrodrigues616@gmail.com", 991371)

console.log(cleberson)

cleberson.login("clebersonrodrigues616@gmail.com", 991371)



