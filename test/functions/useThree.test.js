const { useThree } = require('./../../src/functions')

describe(`As a Player
I want to use a Three
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (2,3,3,3,2)
    And Patrick had 100 points
    When Patrick decides to use a Three
    Then Patrick would have 109 points`, () => {
        const dices = [2,3,3,3,2]
        const PatrickPoints = 100

        const result = useThree(PatrickPoints, dices)

        expect(result).toEqual(109)
    })

    it(`Given Patrick dices was (1,2,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Three
    Then Patrick would have 100 points`, () => {
        const dices = [1,2,4,5,6]
        const PatrickPoints = 100

        const result = useThree(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
