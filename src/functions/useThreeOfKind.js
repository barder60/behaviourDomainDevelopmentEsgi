const { countBy, filter } = require('lodash')

const useThreeOfKind = (playersPoints, dices) => {
    let pairsDice = 0
    const multiplier = 3
    const countDices = countBy(dices, Math.floor)

    filter(countDices, (numberOfDice, dice) => {
        if (numberOfDice >= 3 && dice > pairsDice) {
            pairsDice = dice
        }
    })

    return playersPoints + pairsDice * multiplier
}

module.exports = useThreeOfKind
