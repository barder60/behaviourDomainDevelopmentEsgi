const { useTwo } = require('./../../src/functions')

describe(`As a Player
I want to use a Two
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (2,3,2,3,2)
    And Patrick had 100 points
    When Patrick decides to use a Two
    Then Patrick would have 106 points`, () => {
        const dices = [2,3,2,3,2]
        const PatrickPoints = 100

        const result = useTwo(PatrickPoints, dices)

        expect(result).toEqual(106)
    })

    it(`Given Patrick dices was (1,3,4,6,5)
    And Patrick had 100 points
    When Patrick decides to use a Two
    Then Patrick would have 100 points`, () => {
        const dices = [1,3,4,6,5]
        const PatrickPoints = 100

        const result = useTwo(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
