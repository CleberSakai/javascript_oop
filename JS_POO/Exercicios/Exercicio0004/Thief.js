const Character = require("./Character");

class Thief extends Character {
    constructor(name, lifePts, attackPts, defensePts) {
        super(name, lifePts, attackPts, defensePts)
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.exports = Thief