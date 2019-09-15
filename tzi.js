const { seniority, 
        elementOrder, 
        elements, 
        element,
        order, 
        animals,
        animal,
        polarity,
        name,
        opposite, 
        duo,
        trine,
        yin,
        yang,
        range} = require("./functions")

class Tzi {
  static get elements() { return elements }
  static get animals() { return animals }
  static get range() { return range }
  constructor(int) {
    this.natural = int
    this.seniority = seniority(int)
    this.elementOrder = elementOrder(int)
    this.element = element(int)
    this.order = order(int)
    this.animal = animal(int)
    this.name = name(int)
    this.polarity = polarity(int)
    this.opposite = opposite(int)
    this.duo = duo(int)
    this.yin = yin(int)
    this.yang = yang(int)
  }
  trine(num) {
    return trine(this.seniority, num)
  }
  square(int) {
    return int === this.order + 3 
                      || int === this.order - 3 
                      || int === this.opposite
                      ? true : false
  }
  kind(int) {
    return int % 12 === this.order
  }
  diversityTrine(int1, int2) {
    let tzi1 = new Tzi(int1)
    let tzi2 = new Tzi(int2)
    return this.trine(tzi1.order) 
      && this.trine(tzi2.order)
      && tzi1.order !== tzi2.order
      && (this.element !== tzi1.element
          && this.element !== tzi2.element
          && tzi1.element !== tzi2.element)
  }
  diversitySquare(int1, int2, int3) { 
    let tzi1 = new Tzi(int1)
    let tzi2 = new Tzi(int2)
    let tzi3= new Tzi(int3)
    return this.square(tzi1.order) 
      && this.square(tzi2.order) 
      && this.square(tzi3.order)
      && tzi1.order !== tzi2.order 
      && tzi2.order !== tzi3.order
      && (this.element !== tzi1.element
          && this.element !== tzi2.element
          && this.element !== tzi3.element
          && tzi1.element !== tzi2.element
          && tzi1.element !== tzi3.element
          && tzi2.element !== tzi3.element)
  }
}

module.exports = Tzi