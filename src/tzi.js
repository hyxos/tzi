import { 
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
  fileString,
  isTrine,
  squares, 
  isSquare,
  isKind,
  isUnity,
  isDiverse
} from "./functions"

import  {
  animals,
  elements, 
  Tau
} from "./constants"

import {
  shuffle,
  rangeArray,
} from "./helpers"

export class Tzi {
  static get elements() { return elements }
  static get animals() { return animals }
  static get range() { return range }
  static get Tau() { return Tau }
  static get deck() { return rangeArray(1,60).map(i => new Tzi(i)) }
  static get shuffle() { return shuffle(Tzi.rangeArray(1,60).map(i => new Tzi(i)) )}
  static get rangeArray() { return rangeArray }
  static get deal() { return }
  constructor(int) {
    this.name = name(int)
    this.numberString = numberString(int)
    this.fileString = fileString(int)
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

  cleanInput(input) {
    return input instanceof Tzi ? input.seniority : input
  }

  isTrine(tzi) {
    let n = this.cleanInput(tzi)
    if (Array.isArray(n)) return n.reduce((p, i) => 
                                    p === false 
                                    ? false
                                    : isTrine(this.seniority, this.cleanInput(i)))
    else return isTrine(this.seniority, n)
  }

  isSquare(tzi) {
    let n = tzi instanceof Tzi ? tzi.seniority : tzi
    return isSquare(this.seniority, n)
  }

  isKind(tzi) {
    let n = tzi instanceof Tzi ? tzi.order : tzi
    return isKind(this.order, n)
  }

  isUnity(tzi) {
    let n = this.cleanInput(tzi)
    if (Array.isArray(n)) return n.reduce((p, i) => 
                                    p === false 
                                    ? false
                                    : isUnity(this.seniority, this.cleanInput(i)))
    else return isUnity(this.seniority, n)
  }
  isDiverse(tzi) {
    let n = this.cleanInput(tzi)
    if (Array.isArray(n)) return n.reduce((p, i) => 
                                    p === false 
                                    ? false
                                    : isDiverse(this.seniority, this.cleanInput(i)))
    else return isDiverse(this.seniority, n)
  }
}

export default Tzi