const {describe, it} = require('mocha')
const {expect} = require('chai')

const romanNumeral = require('../app.js')

describe('roman numerals app', () => {

  const data = [
    [1, 'I'],
    [2, 'II'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'VIIII'],
    [10, 'X'],
    [12, 'XII'],
    [15, 'XV'],
    [19, 'XVIIII'],
    [20, 'XX'],
    [25, 'XXV'],
    [47, 'XXXXVII'],
    [50, 'L'],
    [51, 'LI'],
    [54, 'LIIII'],
    [94, 'LXXXXIIII'],
    [100, 'C'],
    [101, 'CI'],
    [111, 'CXI'],
    [146, 'CXXXXVI'],
    [350, 'CCCL'],
    [500, 'D'],
    [999, 'DCCCCLXXXXVIIII'],
  ]

  data.forEach(([input, expected]) => {
    it(`returns "${expected}" for ${input}`, () => {
      const result = romanNumeral(input)
      expect(result).to.equal(expected)
    })
  })

})

