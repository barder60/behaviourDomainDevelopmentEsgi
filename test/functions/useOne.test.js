const { useOne } = require('./../../src/functions')


describe(`As a Player
I want to use a One
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,1,1,1,1)
    And Patrick had 100 points
    When Patrick decides to use a One
    Then Patrick would have 105 points`, () => {
        const dices = [1,1,1,1,1]
        const PatrickPoints = 100

        const result = useOne(PatrickPoints, dices)

        expect(result).toEqual(105)
    })

    it(`Given Patrick dices was (2,3,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a One
    Then Patrick would have 100 points`, () => {
        const dices = [2,3,4,5,6]
        const PatricksPoints = 100

        const result = useOne(PatricksPoints, dices)

        expect(result).toEqual(100)
    })
})
