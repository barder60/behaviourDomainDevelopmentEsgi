const { countBy, filter } = require('lodash')

const useFourOfKind = (playersPoints, dices) => {
    let pairsDice = 0
    const multiplier = 4
    const countDices = countBy(dices, Math.floor)

    filter(countDices, (numberOfDice, dice) => {
        if (numberOfDice >= 4 && dice > pairsDice) {
            pairsDice = dice
        }
    })

    return playersPoints + pairsDice * multiplier
}

module.exports = useFourOfKind
