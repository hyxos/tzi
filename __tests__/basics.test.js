const { mod12, mod60, polarity, opposite, duo} = require("../functions")

describe("mod12", () => {
  test("returns number mod 12", () => {
    expect(mod12(13)).toBe(1)
  })  
})
describe("mod60", () => {
  test("returns a number mod 60", () => {
    expect(mod60(72)).toBe(12)
  })
})

describe("polarity", () => {
  test("returns polarity 0 for evens and 1 for odds", () => {
    expect(polarity(99)).toBe(1)
    expect(polarity(12)).toBe(0)
  })   
})

console.log("polarity(2)\n", polarity(2), 0)
console.log("Opposite (no cb): 2\n", opposite(2), "\nShould be 32")
console.log("Opposite (no cb && n > 60): 70\n", opposite(70), "\nShould be 100"
)
console.log("Opposite (cb = base12 && n > 12): 16\n", opposite(16, mod12), "\nShould be 10")
console.log("Opposite (cb = base12 && n > 12): 16\n", opposite(16, mod12), "\nShould be 10")
console.log("Opposite (cb = base60): 16\n", opposite(16, mod60), "\nShould be 46")
console.log("Opposite (cb = base60 && n > 60): 77\n", opposite(77, mod60), "\nShould be 47")
console.log("Duo (odd): 5\n", duo(5), "\nShould be 6")
console.log("Duo (even): 10\n", duo(5), "\nShould be 9")
