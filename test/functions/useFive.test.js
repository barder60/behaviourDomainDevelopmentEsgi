const { useFive } = require('./../../src/functions')

describe(`As a Player
I want to use a Five
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (5,4,5,4,5)
    And Patrick had 100 points
    When Patrick decides to use a Five
    Then Patrick would have 115 points`, () => {
        const dices = [5,4,5,4,5]
        const PatrickPoints = 100

        const result = useFive(PatrickPoints, dices)

        expect(result).toEqual(115)
    })

    it(`Given Patrick dices was (1,2,1,6,3)
    And Patrick had 100 points
    When Patrick decides to use a Five
    Then Patrick would have 100 points`, () => {
        const dices = [1,2,1,6,3]
        const PatrickPoints = 100

        const result = useFive(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
