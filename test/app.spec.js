const {describe, it} = require('mocha')
const {expect} = require('chai')

const romanNumeral = require('../app.js')

describe('roman numerals app', () => {

  it('is a function', () => {
    expect(romanNumeral).to.be.a('function')
  })

  it('returns "I"', () => {
    expect(romanNumeral(1)).to.equal('I')
  })

})

