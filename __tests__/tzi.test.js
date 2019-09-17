const Tzi = require('../tzi')

describe("new Tzi()", () => {
  it("creates a new instance of Tzi class", () => {
    expect(new Tzi(1)).toBeInstanceOf(Tzi)
  })   
})

describe('n.isTrine(i)', () => {
  it("checks if i, Z object, or array is trine to n", () => {
    let woodRat = new Tzi(1)
    expect(woodRat.isTrine(5)).toBe(true)
    let fireDragon = new Tzi(53)
    expect(woodRat.isTrine(fireDragon)).toBe(true)
    let woodMonkey = new Tzi(21)
    expect(woodRat.isTrine(woodMonkey)).toBe(true)
    expect(woodRat.isTrine([fireDragon, woodMonkey])).toBe(true)
    expect(woodRat.isTrine([5, 9])).toBe(true)
    expect(woodRat.isTrine([5, 9, 7])).toBe(false)
    expect(woodRat.isTrine([5, woodMonkey])).toBe(true)
    let fireDog = new Tzi(23)
    expect(woodRat.isTrine(fireDog)).toBe(false)
    expect(woodRat.isTrine([fireDragon, fireDog])).toBe(false)
  })

})


