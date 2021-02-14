const { countBy, get } = require('lodash')

const useTwo = (playersPoints, dices) => {
    const numberMultiplier = 2
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '2', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useTwo
