const { elements, animals } = require('./constants')

const mod = n => i => i % n
const seniority = n => Math.abs(mod(60)(n))
const elementOrder = n => Math.ceil(mod(10)(seniority(n)) / 2)
const element = n => elements[elementOrder(n) - 1]
const order = n => mod(12)(seniority(n))
const animal = n => animals[order(n) - 1]
const name = n => element(n) + " " + animal(n)
const polarity = n => mod(2)(n)
const opposite = n => seniority(n + 30)
const duo = n => n % 2 === 0 ? n - 1 : n + 1
const trine = (n, i) => order(n) === order(i) + 4 || order(n) === order(i) - 4 

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
  trine: trine
}
