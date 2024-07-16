const App = require("./App")

App.createUser('cleberson@email.com', 'Cleberson Rodrigues')
App.createUser('isabella@email.com', 'Isabella Rodrigues')
App.createUser('luziana@email.com', 'Luziana Rodrigues')

App.deposit('cleberson@email.com', 100)

App.transfer('cleberson@email.com', 'isabella@email.com', 50)

App.changeLoanFee(10)

App.takeLoan('luziana@email.com', 2000, 12)

console.log(App.findUser('cleberson@email.com'))
console.log(App.findUser('cleberson@email.com').account)

console.log(App.findUser('isabella@email.com'))
console.log(App.findUser('isabella@email.com').account)

console.log(App.findUser('luziana@email.com'))
console.log(App.findUser('luziana@email.com').account)
console.log(App.findUser('luziana@email.com').account.loans[0].installments)



