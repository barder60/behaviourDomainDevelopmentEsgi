const { useLargeStraight } = require('./../../src/functions')

describe(`As a Player
I want to use a Large straight
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,2,3,4,5)
    And Patrick had 100 points
    When Patrick decides to use a Large straight
    Then Patrick would have 120 points`, () => {
        const dices = [1,2,3,4,5]
        const PatrickPoints = 100

        const result = useLargeStraight(PatrickPoints, dices)

        expect(result).toEqual(120)
    })

    it(`Given Patrick dices was (2,3,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Large straight
    Then Patrick would have 120 points`, () => {
        const dices = [2,3,4,5,6]
        const PatrickPoints = 100

        const result = useLargeStraight(PatrickPoints, dices)

        expect(result).toEqual(120)
    })

    it(`Given Patrick dices was (1,1,1,1,2)
    And Patrick had 100 points
    When Patrick decides to use a Large straight
    Then Patrick would have 100 points`, () => {
        const dices = [1,1,1,1,2]
        const PatrickPoints = 100

        const result = useLargeStraight(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
