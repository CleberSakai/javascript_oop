class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; // 10099
  }

  get amount() {
    return this.#amount / 100; // 100.99
  }

  set username(newUsername) {
    // se for um tipo diferente de string, o valor de #username, não será atribuido
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("username must be of type string");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Cleberson"; // definindo o valor de #username
console.log(myWallet.username);

myWallet.username += " Rodrigues";
console.log(myWallet.username);

myWallet.username = 52002;
console.log(myWallet.username);
