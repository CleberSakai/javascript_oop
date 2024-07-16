// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//       name: "Christopher Paolini"
//     },
//     addOnStock(quantity) {
//       this.inStock += quantity // metodo do objeto
//     },
//     save: function () { // função anonima
//       // Save book data to database
//     }
//   }
  
//   console.log(book)

function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // save book to database
    }
}

const author = { name: "Christopher Paolini"}
const tags = ["Fantasy", "Adventure", "Medieval"]

const eragon = new Book("Eragon", 468, tags, author)
eragon.addOnStock(20)
console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)

console.log(eldest)