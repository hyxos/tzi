const { polarity, trines, opposite, duo} = require("../functions")

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
  it("returns an array of all trines", () => {
    for (let i = 1; i <= 60; i++) {
      console.log(i, trines(i).length, trines(i))
    }
  }
  )
})

