const {describe, it} = require('mocha')
const {expect} = require('chai')

const romanNumeral = require('../app.js')

describe('roman numerals app', () => {

  const data = [
    [1, 'I'],
    [2, 'II'],
    [5, 'V'],
  ]

  data.forEach(([input, expected]) => {
    it(`returns "${expected}" for ${input}`, () => {
      const result = romanNumeral(input)
      expect(result).to.equal(expected)
    })
  })

})

