const { elements, animals, Tau, range } = require('./constants')

const mod = n => i => i % n
const seniority = n => mod(60)(n) !== 0 ? Math.abs(mod(60)(n)) : 60
const elementOrder = n => mod(10)(n) !== 0 ? Math.ceil(mod(10)(seniority(n)) / 2) : 5
const element = n => elements[elementOrder(n) - 1]
const order = n => mod(12)(n) !== 0 ? mod(12)(seniority(n)) : 12
const animal = n => animals[order(n) - 1]
const name = n => element(n) + " " + animal(n)
const polarity = n => mod(2)(n)
const opposite = n => seniority(n + 30)
const duo = n => mod(2)(seniority(n)) === 0 ? seniority(n) - 1 : seniority(n) + 1
// const trines = n => range.filter(i => order(i) === order(n) + 4 
//                                       || order(i) === 12 - Math.abs(order(n) - 4)
//                   
const numberString = n => seniority(n) < 10 ? "0" + String(n) : String(n)
// ?? This is the pattern [n + 4, n + 8, n + 16, n + 20, n + 28, n + 32, n + 41, n + 44, n + 52, n + 56 ]
// n + i * 4 up to i = 14, excluding those that are factorable by 3 (own kind)
const trines = n => {
  let trinesArray = []
  for (let i = 14; i > 0; i--) {
    mod(3)(i) !== 0 ? trinesArray.push(numberString(seniority(n + i * 4))) : null
  }
  return trinesArray.sort().map(i => Number(i))
}

const trine = (n, i) => order(n) === order(i) + 4 || order(n) === order(i) - 4 
// const square = (n, i, j) =>
const yin = n => !Boolean(polarity(n))
const yang = n => Boolean(polarity(n))
const tau = n => order(n) !== 12 ? (order(n) * Tau) / 12 : 0
const isTrine = (trines, tzi) => tzi instanceof Tzi && trines.includes(tzi.seniority) 
                      || trines.includes(seniority(tzi))

module.exports = {
  seniority: seniority,
  elementOrder: elementOrder,
  element: element,
  order: order,
  animal: animal,
  polarity: polarity,
  opposite: opposite,
  name: name,
  duo: duo,
  trine: trine,
  trines: trines,
  yin: yin,
  yang: yang,
  tau: tau,
  trines: trines,
  numberString: numberString,
  isTrine: isTrine
}
