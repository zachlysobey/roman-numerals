module.exports = romanNumeral

function romanNumeral (n) {
  if (n === 0) {
    return ''
  }
  if (n < 5) {
    return 'I' + romanNumeral(n - 1)
  }
  if (n < 10) {
    return 'V' + romanNumeral(n - 5)
  }
  if (n < 50) {
    return 'X' + romanNumeral(n - 10)
  }
  if (n < 100) {
    return 'L' + romanNumeral(n - 50)
  }
  if (n < 500) {
    return 'C' + romanNumeral(n - 100)
  }
  if (n < 1000) {
    return 'D' + romanNumeral(n - 500)
  }
}
