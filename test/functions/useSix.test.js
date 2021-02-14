const { useSix } = require('./../../src/functions')

describe(`As a Player
I want to use a Five
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (6,6,6,6,6)
    And Patrick had 100 points
    When Patrick decides to use a Six
    Then Patrick would have 130 points`, () => {
        const dices = [6,6,6,6,6]
        const PatrickPoints = 100

        const result = useSix(PatrickPoints, dices)

        expect(result).toEqual(130)
    })

    it(`Given Patrick dices was (1,2,1,5,3)
    And Patrick had 100 points
    When Patrick decides to use a Six
    Then Patrick would have 100 points`, () => {
        const dices = [1,2,1,5,3]
        const PatrickPoints = 100

        const result = useSix(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
