const { usePair } = require('./../../src/functions')

describe(`As a Player
I want to use a Pair
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,1,1,1,1)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 102 points`, () => {
        const dices = [1,1,1,1,1]
        const PatrickPoints = 100

        const result = usePair(PatrickPoints, dices)

        expect(result).toEqual(102)
    })

    it(`Given Patrick dices was (6,6,6,6,6)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 112 points`, () => {
        const dices = [6,6,6,6,6]
        const PatrickPoints = 100

        const result = usePair(PatrickPoints, dices)

        expect(result).toEqual(112)
    })


    it(`Given Patrick dices was (6,6,2,2,2)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 112 points`, () => {
        const dices = [6,6,2,2,2]
        const PatrickPoints = 100

        const result = usePair(PatrickPoints, dices)

        expect(result).toEqual(112)
    })

    it(`Given Patrick dices was (6,4,5,4,2)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 108 points`, () => {
        const dices = [6,4,5,4,2]
        const PatrickPoints = 100

        const result = usePair(PatrickPoints, dices)

        expect(result).toEqual(108)
    })

    it(`Given Patrick dices was (4,4,5,5,2)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 110 points`, () => {
        const dices = [4,4,5,5,2]
        const PatrickPoints = 100

        const result = usePair(PatrickPoints, dices)

        expect(result).toEqual(110)
    })

    it(`Given Patrick dices was (2,3,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Pair
    Then Patrick would have 100 points`, () => {
        const dices = [2,3,4,5,6]
        const PatricksPoints = 100

        const result = usePair(PatricksPoints, dices)

        expect(result).toEqual(100)
    })
})
