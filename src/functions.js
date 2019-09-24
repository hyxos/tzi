import { elements, animals, Tau, colors, hexColors } from './constants'
import { rangeArray } from './helpers'
const { abs, ceil, floor } = Math

export const mod = n => i => i % n

export const polarity = n => abs(mod(2)(n))

export const seniority = n => {
  let i = mod(60)(n)
  if (i !== 0) return i
  else return n >= 0 ? 60 : -60
}

export const elementOrder = n => {
  let i = mod(10)(seniority(n))
  if (n >= 0 && i !==0) return ceil(i / 2)
  else if (n >= 0 && i === 0) return 5
  else if (n < 1 && i !== 0) return floor(i / 2)
  else return -5
}

export const element = n => elements[abs(elementOrder(n)) - 1]

export const color = n => colors[abs(elementOrder(n)) - 1]

export const hexColor = n => hexColors[abs(elementOrder(n)) - 1]

export const order = n => {
  let i = mod(12)(seniority(n))
  if (i !== 0) return i
  else return n >= 0 ? 12 : -12

}
export const animal = n => animals[abs(order(n)) - 1]

export const name = n => element(n) + " " + animal(n)

export const urlName = n => element(n) + "-" + animal(n)

// export const parseName

export const numberString = n => {
  let i = seniority(n)
  if (n > 0) return i < 10 ? "0" + String(i) : String(i)
  else return i > -10 ? "N0" + String(abs(i)) : "N" + String(abs(i))
}

export const fileString = n => {
  if (n > 0 && n <= 60) return numberString(n) + "_" + element(n) + "_" + animal(n) 
  else if (n < 0 && n >= -60) return numberString(n) + "_" + element(n) + "_" + animal(n)
  else if (n > 60 || n < -60) return numberString(n) + "_" + element(n) + "_" + animal(n) + "_" + String(abs(n))
}

export const opposite = (n, mod) => {
  let c = n > 0
  if (c) return mod === 12 ? order(order(n) + 6) : seniority(n + 30)
  else return mod === 12 ? order(order(n) - 6) : seniority(n - 30)

}

export const duo = n => {
  let p = polarity(n)
  let c = n > 0
  if (p && c) return seniority(n + 1)
  else if (p && !c) return seniority(n - 1)
  else if (!p && !c) return seniority(n + 1)
  else return seniority(n - 1) 
}

export const isTrine = (i, n) => {
  let iAbs = abs(order(i))
  let nAbs = abs(order(n))
  let prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8
  let post = order(iAbs + 4)
  return nAbs === prev || nAbs === post
}

export const isSquare = (i, n) => {
  let iAbs = abs(order(i))
  let nAbs = abs(order(n))
  let prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9
  let post = order(iAbs + 3)
  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12)
}

export const isUnity = (i, n) => elementOrder(i) === elementOrder(n)

export const isDiverse = (i, n) => elementOrder(i) !== elementOrder(n)

export const trines = n => rangeArray(1, 60).filter(i => isTrine(i, n))

export const squares = n => rangeArray(1, 60).filter(i => isSquare(i, n))

export const isKind = (i, n) => Math.abs(order(i)) === Math.abs(order(n))

export const yin = n => !Boolean(polarity(n))

export const yang = n => Boolean(polarity(n))

export const tau = n => order(n) !== 12 ? (order(n) * Tau) / 12 : 0

export const column = n => {
  n = abs(order(n))
  if (n === 1 || n === 4 || n === 7 || n === 10) return 1
  else if (n === 2 || n === 5 || n === 8 || n === 11) return 3
  else return 2
}

export const row = n => {
  n = abs(order(n))
  if (n === 1 || n === 5 || n === 9) return 1
  else if (n === 2 || n === 6 || n === 10) return 2
  else if (n === 3 || n === 7 || n === 11) return 3
  else return 4
}

export const grid = n => [column(n), row(n)]