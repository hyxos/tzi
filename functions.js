const { elements, animals, Tau } = require('./constants')
const { rangeArray } = require('./helpers')
const { abs, ceil, floor } = Math

const mod = n => i => i % n
const polarity = n => abs(mod(2)(n))
const seniority = n => {
  let i = mod(60)(n)
  if (i !== 0) return i
  else return n >= 0 ? 60 : -60
}
const elementOrder = n => {
  let i = mod(10)(seniority(n))
  if (n >= 0 && i !==0) return ceil(i / 2)
  else if (n >= 0 && i === 0) return 5
  else if (n < 1 && i !== 0) return floor(i / 2)
  else return -5
}

const element = n => elements[abs(elementOrder(n)) - 1]
const order = n => {
  let i = mod(12)(seniority(n))
  if (i !== 0) return i
  else return n >= 0 ? 12 : -12

}
const animal = n => animals[abs(order(n)) - 1]
const name = n => element(n) + " " + animal(n)
// const parseName
const numberString = n => {
  let i = seniority(n)
  if (n > 0) return i < 10 ? "0" + String(i) : String(i)
  else return i > -10 ? "-0" + String(abs(i)) : String(i)
}
const opposite = (n, mod) => mod === 12 ? order(order(n) + 6) : seniority(n + 30)
const duo = n => {
  let p = polarity(n)
  let c = n > 0
  if (p && c) return seniority(n + 1)
  else if (p && !c) return seniority(n - 1)
  else if (!p && !c) return seniority(n + 1)
  else return seniority(n - 1) 
}

const isTrine = (i, n) => {
  let iAbs = abs(order(i))
  let nAbs = abs(order(n))
  let prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8
  let post = order(iAbs + 4)
  return nAbs === prev || nAbs === post
}

const isSquare = (i, n) => {
  let iAbs = abs(order(i))
  let nAbs = abs(order(n))
  let prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9
  let post = order(iAbs + 3)
  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12)
}

const trines = n => rangeArray(1, 60).filter(i => isTrine(i, n))
const squares = n => rangeArray(1, 60).filter(i => isSquare(i, n))
const isKind = (i, n) => Math.abs(order(i)) === Math.abs(order(n))
const yin = n => !Boolean(polarity(n))
const yang = n => Boolean(polarity(n))
const tau = n => order(n) !== 12 ? (order(n) * Tau) / 12 : 0

module.exports = {
  mod: mod,
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
