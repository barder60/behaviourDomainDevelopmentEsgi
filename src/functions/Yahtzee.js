const { every, get, isEqual } = require('lodash')

const Yahtzee = (playersPoints, dices) => {
    const firstDice = get(dices, '[0]')

    if (every(dices, (dice) => isEqual(firstDice, dice))) {
        return playersPoints + 50
    }

    return playersPoints
}

module.exports = Yahtzee
