const { rangeArray } = require('./helpers')

const elements = ['wood', 'fire', 'earth', 'metal', 'water']
const animals = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig']
const range = rangeArray(1, 60)
const Tau = Math.PI * 2

module.exports = {
  elements: elements,
  animals: animals,
  range: range,
  Tau: Tau
}