const { useSmallStraight } = require('./../../src/functions')

describe(`As a Player
I want to use a Small straight
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,2,3,4,5)
    And Patrick had 100 points
    When Patrick decides to use a Small straight
    Then Patrick would have 115 points`, () => {
        const dices = [1,2,3,4,5]
        const PatrickPoints = 100

        const result = useSmallStraight(PatrickPoints, dices)

        expect(result).toEqual(115)
    })

    it(`Given Patrick dices was (2,3,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Small straight
    Then Patrick would have 115 points`, () => {
        const dices = [2,3,4,5,6]
        const PatrickPoints = 100

        const result = useSmallStraight(PatrickPoints, dices)

        expect(result).toEqual(115)
    })

    it(`Given Patrick dices was (3,4,5,6,1)
    And Patrick had 100 points
    When Patrick decides to use a Small straight
    Then Patrick would have 115 points`, () => {
        const dices = [3,4,5,6,1]
        const PatrickPoints = 100

        const result = useSmallStraight(PatrickPoints, dices)

        expect(result).toEqual(115)
    })

    it(`Given Patrick dices was (1,1,1,1,2)
    And Patrick had 100 points
    When Patrick decides to use a Small straight
    Then Patrick would have 100 points`, () => {
        const dices = [1,1,1,1,2]
        const PatrickPoints = 100

        const result = useSmallStraight(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
