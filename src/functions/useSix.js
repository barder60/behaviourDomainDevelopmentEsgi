const { countBy, get } = require('lodash')

const useSix = (playersPoints, dices) => {
    const numberMultiplier = 6
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '6', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useSix
