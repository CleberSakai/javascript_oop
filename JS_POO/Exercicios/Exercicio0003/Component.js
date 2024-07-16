export class Component {
    #element = null

    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent 
        this.options = options
        this.build()
    }

    getElement() {
        return this.#element
    }

    // Função responsavel por criar o elemento
    build() {
        this.#element = document.createElement(this.tag)
        // Passa todas as opcções(ex: Id, Name, Value) para dentro do meu elemento
        Object.assign(this.#element, this.options)
        return this // retornando a propria instancia, consigo acessar os metodos disponiveis
    }

    // Função responsavel por renderizar o elemento na tela
    render() {
        if(this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}