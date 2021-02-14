const { countBy, get } = require('lodash')

const useOne = (playersPoints, dices) => {
    const numberMultiplier = 1
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '1', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useOne
