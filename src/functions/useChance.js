const { add, forEach } = require('lodash')

const useChance = (playersPoints, dices) => {
    let scoreBonus = 0

    forEach(dices, (dice) => {
        scoreBonus += parseInt(dice)
    })

    return add(playersPoints, scoreBonus)
}

module.exports = useChance
