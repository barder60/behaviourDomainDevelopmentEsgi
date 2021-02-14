const { countBy, get, isEqual } = require('lodash')

const useSmallStraight = (playersPoints, dices) => {
    const bonusScore = 15
    const countDices = countBy(dices, Math.floor)

    const ones = get(countDices, '1', 0)
    const twos = get(countDices, '2', 0)
    const threes = get(countDices, '3', 0)
    const fours = get(countDices, '4', 0)
    const fives = get(countDices, '5', 0)
    const sixs = get(countDices, '6', 0)


    if (!isEqual(ones, 0) &&
        !isEqual(twos, 0) &&
        !isEqual(threes, 0) &&
        !isEqual(fours, 0)) {
        return playersPoints + bonusScore
    }

    if (!isEqual(twos, 0) &&
        !isEqual(threes, 0) &&
        !isEqual(fours, 0) &&
        !isEqual(fives, 0)) {
        return playersPoints + bonusScore
    }

    if (!isEqual(threes, 0) &&
        !isEqual(fours, 0) &&
        !isEqual(fives, 0) &&
        !isEqual(sixs, 0)
    ) {
        return playersPoints + bonusScore
    }

    return playersPoints
}

module.exports = useSmallStraight
