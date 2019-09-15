const { 
  polarity, 
  trines, 
  isTrine,
  squares,
  isSquare,
  isKind,
  opposite,
  duo
} = require("../functions")

describe("polarity", () => {
  it("returns polarity 0 for evens and 1 for odds", () => {
    expect(polarity(39)).toBe(1)
    expect(polarity(12)).toBe(0)
  })   
})

describe("duo", () => {
  it("returns preceding n for evens and proceeding n for odds", () => {
    expect(duo(5)).toBe(6)
    expect(duo(22)).toBe(21)
  })
})

describe("trines", () => {
  it("returns an array of all the trines for n", () => {
    expect(trines(4).length).toBe(10)
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
  }
  )
})

describe("isSquare", () => {
  it("returns true if n is in square, otherwise false", () => {
    expect(isSquare(9, 13)).toBe(false)
    expect(isSquare(1, 60)).toBe(false)
    expect(isSquare(17, 11)).toBe(true)
  }
  )
})

describe("isKind", () => {
  it("returns true if n is same order as i, otherwise false", () => {
    expect(isKind(1, 25)).toBe(true)
    expect(isKind(2, 4)).toBe(false)
  })
})

