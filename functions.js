const { elements, animals, Tau } = require('./constants')
const { rangeArray } = require('./helpers')

const mod = n => i => i % n
const seniority = n => mod(60)(n) !== 0 ? mod(60)(n) : 60
const elementOrder = n => mod(10)(n) !== 0 ? Math.ceil(mod(10)(seniority(n)) / 2) : 5
const element = n => elements[elementOrder(n) - 1]
const order = n => mod(12)(n) !== 0 ? mod(12)(seniority(n)) : 12
const animal = n => animals[order(n) - 1]
const name = n => element(n) + " " + animal(n)
// const parseName
const numberString = n => seniority(n) < 10 ? "0" + String(n) : String(n)
const polarity = n => mod(2)(n)
const opposite = (n, mod) => mod === 12 ? order(order(n) + 6) : seniority(n + 30)
const duo = n => mod(2)(seniority(n)) === 0 ? seniority(n) - 1 : seniority(n) + 1

const isTrine = (i, n) => {
  let iAbs = Math.abs(order(i))
  let nAbs = Math.abs(order(n))
  let prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8
  let post = order(iAbs + 4)
  return nAbs === prev || nAbs === post
}

const isSquare = (i, n) => {
  let iAbs = Math.abs(order(i))
  let nAbs = Math.abs(order(n))
  let prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9
  let post = order(iAbs + 3)
  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12)
}

const trines = n => rangeArray(1, 60).filter(i => isTrine(i, n))
const squares = n => rangeArray(1, 60).filter(i => isSquare(i, n))
const isKind = (i, n) => order(i) === order(n)
const yin = n => !Boolean(polarity(n))
const yang = n => Boolean(polarity(n))
const tau = n => order(n) !== 12 ? (order(n) * Tau) / 12 : 0

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
  yin: yin,
  yang: yang,
  tau: tau,
  trines: trines,
  numberString: numberString,
  isTrine: isTrine,
  squares: squares,
  isSquare: isSquare,
  isKind: isKind
}
