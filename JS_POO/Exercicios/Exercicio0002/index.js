const Author = require('./Author')

const cleberson = new Author("Cleberson")

const post = cleberson.writePost("Titulo do Meu Post", "Conteudo: Lorem Ipsum Dolor Sic Amet...")

post.addComment("Mateus", "Muito Bom")
post.addComment("Lucas", "Achei muito interessante")

console.log(cleberson)
console.log(post)
