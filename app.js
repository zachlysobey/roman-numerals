module.exports = romanNumeral

function romanNumeral (n) {
  if (n < 5) {
    return repeat('I', n)
  }
  return 'V' + romanNumeral(n - 5)
}

function repeat (str, count) {
  let result = ''
  for (let i = 0; i < count; i++) {
    result += str
  }
  return result
}