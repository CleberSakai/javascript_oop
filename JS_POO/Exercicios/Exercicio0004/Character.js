class Character {
    // todos os outros filhos receberão estes parametros
    constructor(name, lifePts, attackPts, defensePts) {
        this.name = name
        this.lifePts = lifePts
        this.attackPts = attackPts
        this.defensePts = defensePts
    }

    // calculo padrão de dano de ataque
    attack(targetCharacter) {
        targetCharacter.lifePts -= this.attack - this.defensePts
    }
}

module.exports = Character