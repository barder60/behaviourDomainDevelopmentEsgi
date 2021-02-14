const { countBy, get } = require('lodash')

const useThree = (playersPoints, dices) => {
    const numberMultiplier = 3
    const countDices = countBy(dices, Math.floor)
    const scoreBonus = get(countDices, '3', 0) * numberMultiplier

    return playersPoints + scoreBonus
}

module.exports = useThree
