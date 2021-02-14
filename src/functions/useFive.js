const { countBy, get } = require('lodash')

const useFive = (playersPoints, dices) => {
    const numberMultiplier = 5
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '5', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useFive
