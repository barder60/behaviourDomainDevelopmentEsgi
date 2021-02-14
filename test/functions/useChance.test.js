const { useChance } = require('./../../src/functions')

describe(`As a Player
I want to use a Chance
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,1,1,1,1)
    And Patrick had 100 points
    When Patrick decides to use a Chance
    Then Patrick would have 105 points`, () => {
        const dices = [1,1,1,1,1]
        const PatrickPoints = 100

        const result = useChance(PatrickPoints, dices)

        expect(result).toEqual(105)
    })

    it(`Given Patrick dices was (6,6,6,6,6)
    And Patrick had 100 points
    When Patrick decides to use a Chance
    Then Patrick would have 130 points`, () => {
        const dices = [6,6,6,6,6]
        const PatrickPoints = 100

        const result = useChance(PatrickPoints, dices)

        expect(result).toEqual(130)
    })


    it(`Given Patrick dices was (1,1,1,5,1)
    And Patrick had 100 points
    When Patrick decides to use a Chance
    Then Patrick would have 109 points`, () => {
        const dices = [1,1,1,5,1]
        const PatrickPoints = 100

        const result = useChance(PatrickPoints, dices)

        expect(result).toEqual(109)
    })
})
