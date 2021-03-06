const { useThreeOfKind } = require('./../../src/functions')

describe(`As a Player
I want to use a Three of a Kind
So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,1,1,1,1)
    And Patrick had 100 points
    When Patrick decides to use a Three of a Kind
    Then Patrick would have 103 points`, () => {
        const dices = [1,1,1,1,1]
        const PatrickPoints = 100

        const result = useThreeOfKind(PatrickPoints, dices)

        expect(result).toEqual(103)
    })

    it(`Given Patrick dices was (6,6,6,6,6)
    And Patrick had 100 points
    When Patrick decides to use a Three of a Kind
    Then Patrick would have 118 points`, () => {
        const dices = [6,6,6,6,6]
        const PatrickPoints = 100

        const result = useThreeOfKind(PatrickPoints, dices)

        expect(result).toEqual(118)
    })


    it(`Given Patrick dices was (6,6,2,2,2)
    And Patrick had 100 points
    When Patrick decides to use a Three of a Kind
    Then Patrick would have 106 points`, () => {
        const dices = [6,6,2,2,2]
        const PatrickPoints = 100

        const result = useThreeOfKind(PatrickPoints, dices)

        expect(result).toEqual(106)
    })

    it(`Given Patrick dices was (6,4,5,4,2)
    And Patrick had 100 points
    When Patrick decides to use a Three of a Kind
    Then Patrick would have 108 points`, () => {
        const dices = [6,4,5,4,2]
        const PatrickPoints = 100

        const result = useThreeOfKind(PatrickPoints, dices)

        expect(result).toEqual(100)
    })

    it(`Given Patrick dices was (2,3,4,5,6)
    And Patrick had 100 points
    When Patrick decides to use a Three of a Kind
    Then Patrick would have 100 points`, () => {
        const dices = [2,3,4,5,6]
        const PatricksPoints = 100

        const result = useThreeOfKind(PatricksPoints, dices)

        expect(result).toEqual(100)
    })
})
