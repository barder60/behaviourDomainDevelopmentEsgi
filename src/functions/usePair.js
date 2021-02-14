const { countBy, filter } = require('lodash')

const usePair = (playersPoints, dices) => {
    let pairsDice = 0
    const multiplier = 2

    const countDices = countBy(dices, Math.floor)
    filter(countDices, (numberOfDice, dice) => {
        if (numberOfDice >= 2 && dice > pairsDice) {
            pairsDice = dice
        }
    })

    return playersPoints + pairsDice * multiplier
}

module.exports = usePair
