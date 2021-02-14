const { useFour } = require('./../../src/functions')

describe(`As a Player
I want to use a Four
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (4,4,3,4,2)
    And Patrick had 100 points
    When Patrick decides to use a Four
    Then Patrick would have 112 points`, () => {
        const dices = [4,4,3,4,2]
        const PatrickPoints = 100

        const result = useFour(PatrickPoints, dices)

        expect(result).toEqual(112)
    })

    it(`Given Patrick dices was (1,2,1,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Four
    Then Patrick would have 100 points`, () => {
        const dices = [1,2,1,5,6]
        const PatrickPoints = 100

        const result = useFour(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
