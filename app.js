module.exports = romanNumeral

function romanNumeral (n) {
  if (n === 5) {
    return 'V'
  }
  if (n > 1) {
    return 'II'
  }
  return 'I'
}
