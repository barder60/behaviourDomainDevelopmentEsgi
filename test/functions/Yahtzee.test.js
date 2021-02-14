const { Yahtzee } = require('./../../src/functions')


describe(`As a Player
    I want to use a Yahtzee
    So that i can gain point to win`, () => {

    it(`Given Patrick dices was (1,1,1,1,1)
    And Patrick had 100 points
    When Patrick decides to use a Yahtzee
    Then Patrick would have 150 points`, () => {
        const dices = [1,1,1,1,1]
        const PatrickPoints = 100

        const result = Yahtzee(PatrickPoints, dices)

        expect(result).toEqual(150)
    })

    it(`Given Patrick dices was (1,1,1,1,2)
    And Patrick had 100 points
    When Patrick decides to use a Yahtzee
    Then Patrick would have 100 points`, () => {
        const dices = [1,1,1,1,2]
        const PatrickPoints = 100

        const result = Yahtzee(PatrickPoints, dices)

        expect(result).toEqual(100)
    })
})
