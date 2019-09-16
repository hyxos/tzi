const { 
  seniority, 
  elementOrder, 
  element,
  order, 
  animal,
  polarity,
  name,
  opposite, 
  duo,
  yin,
  yang,
  tau,
  trines,
  numberString,
  isTrine,
  squares, 
  isSquare,
  isKind
} = require("./functions")

const {
  animals,
  elements, 
  range,
  Tau
} = require("./constants")

const {
  shuffle,
  rangeArray,
} = require("./helpers")

class Tzi {
  static get elements() { return elements }
  static get animals() { return animals }
  static get range() { return range }
  static get Tau() { return Tau }
  static get deck() { return Tzi.range.map(i => new Tzi(i)) }
  static get shuffle() { return shuffle(Tzi.range.map(i => new Tzi(i)) )}
  static get rangeArray() { return rangeArray }
  constructor(int) {
    this.name = name(int)
    this.numberString = numberString(int)
    this.natural = int
    this.seniority = seniority(int)
    this.elementOrder = elementOrder(int)
    this.element = element(int)
    this.order = order(int)
    this.animal = animal(int)
    this.polarity = polarity(int)
    this.opposite = opposite(int)
    this.duo = duo(int)
    this.yin = yin(int)
    this.yang = yang(int)
    this.tau = tau(int)
    this.trines = trines(int)
    this.squares = squares(int)
  }

  isTrine(tzi) {
    let n = tzi instanceof Tzi ? tzi.seniority : tzi
    return isTrine(this.seniority, n)
  }

  isSquare(tzi) {
    let n = tzi instanceof Tzi ? tzi.seniority : tzi
    return isSquare(this.seniority, n)
  }

  isKind(tzi) {
    let n = tzi instanceof Tzi ? tzi.order : tzi
    return isKind(this.order, n)
  }
}

module.exports = Tzi