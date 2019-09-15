const { elements, animals, range, Tau } = require('./constants')

const mod = n => i => i % n
const seniority = n => n % 60 !== 0 ? Math.abs(mod(60)(n)) : 60
const elementOrder = n => n % 10 !== 0 ? Math.ceil(mod(10)(seniority(n)) / 2) : 5
const element = n => elements[elementOrder(n) - 1]
const order = n => n % 12 !== 0 ? mod(12)(seniority(n)) : 12
const animal = n => animals[order(n) - 1]
const name = n => element(n) + " " + animal(n)
const polarity = n => mod(2)(n)
const opposite = n => seniority(n + 30)
const duo = n => n % 2 === 0 ? n - 1 : n + 1
const trine = (n, i) => order(n) === order(i) + 4 || order(n) === order(i) - 4 
// const square = (n, i, j) =>
const yin = n => !Boolean(polarity(n))
const yang = n => Boolean(polarity(n))
const tau = n => order(n) !== 12 ? (order(n) * Tau) / 12 : 0

module.exports = {
  seniority: seniority,
  elementOrder: elementOrder,
  elements: elements,
  element: element,
  order: order,
  animals: animals,
  animal: animal,
  polarity: polarity,
  opposite: opposite,
  name: name,
  duo: duo,
  trine: trine,
  yin: yin,
  yang: yang,
  range: range,
  tau: tau
}
