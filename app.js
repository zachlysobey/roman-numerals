module.exports = romanNumeral

const symbols = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]

function romanNumeral (n) {
  if (n === 0) {
    return ''
  }
  for (let i = 0; i < symbols.length; i++) {
    const [sym, val] = symbols[i]
    const nextVal = symbols[i + 1] ? symbols[i + 1][1] : Infinity
    if (n < nextVal) {
      return sym + romanNumeral(n - val)
    }
  }
}
