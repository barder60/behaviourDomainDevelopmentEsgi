const { countBy, get } = require('lodash')

const useFour = (playersPoints, dices) => {
    const numberMultiplier = 4
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '4', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useFour
