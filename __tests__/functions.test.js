const { 
  polarity,
  seniority,
  elementOrder,
  element,
  animal,
  order,
  name,
  numberString,
  fileString,
  trines, 
  isTrine,
  squares,
  isSquare,
  isKind,
  opposite,
  duo
} = require("../functions")

describe("polarity(n)", () => {
  it("returns polarity 0 for evens and 1 for odds", () => {
    expect(polarity(39)).toBe(1)
    expect(polarity(12)).toBe(0)
    expect(polarity(-14)).toBe(0)
  })   
})

describe("seniority(n)", () => {
  it("returns n mod 60 except for 60 returns 60", () => {
    expect(seniority(0)).toBe(60)
    expect(seniority(-60)).toBe(-60)
    expect(seniority(12)).toBe(12)
    expect(seniority(-45)).toBe(-45)
    expect(seniority(145)).toBe(25)
    expect(seniority(-137)).toBe(-17)
  })   
})

describe("elementOrder(n)", () => {
  it("returns proper element order based on n", () => {
    expect(elementOrder(0)).toBe(5)
    expect(elementOrder(60)).toBe(5)
    expect(elementOrder(45)).toBe(3)
    expect(elementOrder(-45)).toBe(-3)
    expect(elementOrder(145)).toBe(3)
    expect(elementOrder(-145)).toBe(-3)
  })
})

describe("element", () => {
  it("returns proper element based on number", () => {
    expect(element(1)).toBe('wood')
    expect(element(3)).toBe('fire')
    expect(element(5)).toBe('earth')
    expect(element(7)).toBe('metal')
    expect(element(10)).toBe('water')
    expect(element(-5)).toBe('earth')
  })
})

describe("animal", () => {
  it("returns proper animal based on number", () => {
    expect(animal(1)).toBe('rat')
    expect(animal(4)).toBe('rabbit')
    expect(animal(5)).toBe('dragon')
    expect(animal(9)).toBe('monkey')
    expect(animal(10)).toBe('rooster')
    expect(animal(-5)).toBe('dragon')
  })
})

describe('name(n)', () => {
  it("returns proper element(n) + animal(n) string separated by space", () => {
    expect(name(1)).toBe('wood rat')
    expect(name(-11)).toBe('wood dog')
    expect(name(60)).toBe('water pig')
  })
})

describe('numberString(n)', () => {
  it("returns properly formatted number string for positives and negatives", () => {
    expect(numberString(1)).toBe('01')
    expect(numberString(-1)).toBe('N01')
    expect(numberString(100)).toBe('40')
    expect(numberString(-120)).toBe('N60')
  })
})

describe('filesString', () => {
  it("returns proper files string separated by underscores", () => {
    expect(fileString(1)).toBe('01_wood_rat')
    expect(fileString(-11)).toBe('N11_wood_dog')
    expect(fileString(60)).toBe('60_water_pig')
    expect(fileString(56)).toBe('56_earth_sheep')
    expect(fileString(120)).toBe('60_water_pig_120')
    expect(fileString(-130)).toBe('N10_water_rooster_130')
  })
})


describe("order", () => {
  it("returns n mod 12 except for 12 returns 12", () => {
    expect(order(0)).toBe(12)
    expect(order(60)).toBe(12)
    expect(order(-45)).toBe(-9)
    expect(order(145)).toBe(1)
    expect(order(-12)).toBe(-12)
  })   
})

describe('opposite', () => {
  it("returns opposite n defaults mod(60)", () => {
    expect(opposite(1)).toBe(31)
    expect(opposite(-5)).toBe(-35)
    expect(opposite(1, 12)).toBe(7)
  })
})


describe("duo", () => {
  it("returns preceding n for evens and proceeding n for odds", () => {
    expect(duo(5)).toBe(6)
    expect(duo(22)).toBe(21)
    expect(duo(-21)).toBe(-22)
  })
})

describe("trines", () => {
  it("returns an array of all the trines for n", () => {
    expect(trines(4).length).toBe(10)
    expect(trines(4).includes(8)).toBe(true)
  }
  )
})

describe("squares", () => {
  it("returns an array of all the squares for n", () => {
    expect(squares(4).length).toBe(15)
  }
  )
})

describe("isTrine", () => {
  it("returns true if n is in trine, otherwise false", () => {
    expect(isTrine(9, 13)).toBe(true)
    expect(isTrine(1, 60)).toBe(false)
    expect(isTrine(-2, 6)).toBe(true)
    expect(isTrine(1, [])).toBe(false)
    expect(isTrine(2, [6])).toBe(true)
    expect(isTrine(2, [10])).toBe(true)
  }
  )
})

describe("isSquare", () => {
  it("returns true if n is in square, otherwise false", () => {
    expect(isSquare(9, 13)).toBe(false)
    expect(isSquare(1, 60)).toBe(false)
    expect(isSquare(17, 11)).toBe(true)
    expect(isSquare(-52, 55)).toBe(true)
  }
  )
})

describe("isKind", () => {
  it("returns true if n is same order as i, otherwise false", () => {
    expect(isKind(1, 25)).toBe(true)
    expect(isKind(2, 4)).toBe(false)
    expect(isKind(-1, 1)).toBe(true)
  })
})

