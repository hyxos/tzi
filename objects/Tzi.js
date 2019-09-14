class Tzi {
  static get elements() {return ['wood', 'fire', 'earth', 'metal', 'water']}
  static get animals() { return ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig']}
  constructor(integer) {
    this.natural = integer
    this.seniority = Math.abs(integer % 60)
    this.elementOrder = Math.ceil(this.seniority % 10 / 2)
    this.element = Tzi.elements[this.elementOrder -1]
    this.order = this.seniority % 12
    this.animal = Tzi.animals[this.order -1]
    this.name = this.element + "_" + this.animal
    this.polarity = this.seniority % 2
    this.opposite = (this.seniority + 30) % 60
    this.duo = this.seniority % 2 === 0
      ? this.seniority - 1
      : this.seniority + 1
  }
  trine(integer) {
    return integer === this.order + 4 
                      || integer === this.order - 4 
                      ? true : false
  }
  square(integer) {
    return integer === this.order + 3 
                      || integer === this.order - 3 
                      || integer === this.opposite
                      ? true : false
  }
  kind(integer) {
    return integer % 12 === this.order
  }
  diversityTrine(integer1, integer2) {
    let tzi1 = new Tzi(integer1)
    let tzi2 = new Tzi(integer2)
    return this.trine(tzi1.order) 
      && this.trine(tzi2.order)
      && tzi1.order !== tzi2.order
      && (this.element !== tzi1.element
          && this.element !== tzi2.element
          && tzi1.element !== tzi2.element)
  }
  diversitySquare(integer1, integer2, integer3) { 
    let tzi1 = new Tzi(integer1)
    let tzi2 = new Tzi(integer2)
    let tzi3 = new Tzi(integer3)
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

let wr = new Tzi(1)
console.log("name: ", wr.name)
console.log("natural: ", wr.natural)
console.log("seniority: ", wr.seniority)
console.log("order: ", wr.order)
console.log("elementOrder: ", wr.elementOrder)
console.log("opposite: ", wr.opposite)
console.log("duo: ", wr.duo)
console.log("trine(5): ", wr.trine(5))
console.log("square(4): ", wr.square(4))
let fr = new Tzi(4)
console.log("name: ", fr.name)
console.log("natural: ", fr.natural)
console.log("seniority: ", fr.seniority)
console.log("order: ", fr.order)
console.log("elementOrder: ", fr.elementOrder)
console.log("opposite: ", fr.opposite)
console.log("duo: ", fr.duo)
console.log("trine(5): ", fr.trine(5))
console.log("square(4): ", fr.square(4))
let wm = new Tzi(9)
console.log("name: ", wm.name)
console.log("natural: ", wm.natural)
console.log("seniority: ", wm.seniority)
console.log("order: ", wm.order)
console.log("elementOrder: ", wm.elementOrder)
console.log("opposite: ", wm.opposite)
console.log("duo: ", wm.duo)
console.log("trine(5): ", wm.trine(5))
console.log("square(4): ", wm.square(4))
let mr = new Tzi(28)
console.log("name: ", mr.name)
console.log("natural: ", mr.natural)
console.log("seniority: ", mr.seniority)
console.log("order: ", mr.order)
console.log("elementOrder: ", mr.elementOrder)
console.log("opposite: ", mr.opposite)
console.log("duo: ", mr.duo)
console.log("trine(5): ", mr.trine(5))
console.log("square(4): ", mr.square(4))
console.log("kind(4): ", mr.kind(4))
console.log("kind(31): ", mr.kind(31))
console.log("diversityTrine(56, 12): ", mr.diversityTrine(56, 12))
console.log("diversitySquare(1, 10, 55): ", mr.diversityTrine(1, 10, 55))

