"use strict";

var _functions = require("../functions");

describe("polarity(n)", function () {
  it("returns polarity 0 for evens and 1 for odds", function () {
    expect((0, _functions.polarity)(39)).toBe(1);
    expect((0, _functions.polarity)(12)).toBe(0);
    expect((0, _functions.polarity)(-14)).toBe(0);
  });
});
describe("seniority(n)", function () {
  it("returns n mod 60 except for 60 returns 60", function () {
    expect((0, _functions.seniority)(0)).toBe(60);
    expect((0, _functions.seniority)(-60)).toBe(-60);
    expect((0, _functions.seniority)(12)).toBe(12);
    expect((0, _functions.seniority)(-45)).toBe(-45);
    expect((0, _functions.seniority)(145)).toBe(25);
    expect((0, _functions.seniority)(-137)).toBe(-17);
  });
});
describe("elementOrder(n)", function () {
  it("returns proper element order based on n", function () {
    expect((0, _functions.elementOrder)(0)).toBe(5);
    expect((0, _functions.elementOrder)(60)).toBe(5);
    expect((0, _functions.elementOrder)(45)).toBe(3);
    expect((0, _functions.elementOrder)(-45)).toBe(-3);
    expect((0, _functions.elementOrder)(145)).toBe(3);
    expect((0, _functions.elementOrder)(-145)).toBe(-3);
  });
});
describe("element", function () {
  it("returns proper element based on number", function () {
    expect((0, _functions.element)(1)).toBe('wood');
    expect((0, _functions.element)(3)).toBe('fire');
    expect((0, _functions.element)(5)).toBe('earth');
    expect((0, _functions.element)(7)).toBe('metal');
    expect((0, _functions.element)(10)).toBe('water');
    expect((0, _functions.element)(-5)).toBe('earth');
  });
});
describe("animal", function () {
  it("returns proper animal based on number", function () {
    expect((0, _functions.animal)(1)).toBe('rat');
    expect((0, _functions.animal)(4)).toBe('rabbit');
    expect((0, _functions.animal)(5)).toBe('dragon');
    expect((0, _functions.animal)(9)).toBe('monkey');
    expect((0, _functions.animal)(10)).toBe('rooster');
    expect((0, _functions.animal)(-5)).toBe('dragon');
  });
});
describe('name(n)', function () {
  it("returns proper element(n) + animal(n) string separated by space", function () {
    expect((0, _functions.name)(1)).toBe('wood rat');
    expect((0, _functions.name)(-11)).toBe('wood dog');
    expect((0, _functions.name)(60)).toBe('water pig');
  });
});
describe('numberString(n)', function () {
  it("returns properly formatted number string for positives and negatives", function () {
    expect((0, _functions.numberString)(1)).toBe('01');
    expect((0, _functions.numberString)(-1)).toBe('N01');
    expect((0, _functions.numberString)(100)).toBe('40');
    expect((0, _functions.numberString)(-120)).toBe('N60');
  });
});
describe('filesString', function () {
  it("returns proper files string separated by underscores", function () {
    expect((0, _functions.fileString)(1)).toBe('01_wood_rat');
    expect((0, _functions.fileString)(-11)).toBe('N11_wood_dog');
    expect((0, _functions.fileString)(60)).toBe('60_water_pig');
    expect((0, _functions.fileString)(56)).toBe('56_earth_sheep');
    expect((0, _functions.fileString)(120)).toBe('60_water_pig_120');
    expect((0, _functions.fileString)(-130)).toBe('N10_water_rooster_130');
  });
});
describe("order", function () {
  it("returns n mod 12 except for 12 returns 12", function () {
    expect((0, _functions.order)(0)).toBe(12);
    expect((0, _functions.order)(60)).toBe(12);
    expect((0, _functions.order)(-45)).toBe(-9);
    expect((0, _functions.order)(145)).toBe(1);
    expect((0, _functions.order)(-12)).toBe(-12);
  });
});
describe('opposite', function () {
  it("returns opposite n defaults mod(60)", function () {
    expect((0, _functions.opposite)(1)).toBe(31);
    expect((0, _functions.opposite)(-5)).toBe(-35);
    expect((0, _functions.opposite)(1, 12)).toBe(7);
  });
});
describe("duo", function () {
  it("returns preceding n for evens and proceeding n for odds", function () {
    expect((0, _functions.duo)(5)).toBe(6);
    expect((0, _functions.duo)(22)).toBe(21);
    expect((0, _functions.duo)(-21)).toBe(-22);
  });
});
describe("trines", function () {
  it("returns an array of all the trines for n", function () {
    expect((0, _functions.trines)(4).length).toBe(10);
    expect((0, _functions.trines)(4).includes(8)).toBe(true);
  });
});
describe("squares", function () {
  it("returns an array of all the squares for n", function () {
    expect((0, _functions.squares)(4).length).toBe(15);
  });
});
describe("isTrine", function () {
  it("returns true if n is in trine, otherwise false", function () {
    expect((0, _functions.isTrine)(9, 13)).toBe(true);
    expect((0, _functions.isTrine)(1, 60)).toBe(false);
    expect((0, _functions.isTrine)(-2, 6)).toBe(true);
    expect((0, _functions.isTrine)(1, [])).toBe(false);
    expect((0, _functions.isTrine)(2, [6])).toBe(true);
    expect((0, _functions.isTrine)(2, [10])).toBe(true);
  });
});
describe("isSquare", function () {
  it("returns true if n is in square, otherwise false", function () {
    expect((0, _functions.isSquare)(9, 13)).toBe(false);
    expect((0, _functions.isSquare)(1, 60)).toBe(false);
    expect((0, _functions.isSquare)(17, 11)).toBe(true);
    expect((0, _functions.isSquare)(-52, 55)).toBe(true);
  });
});
describe("isKind", function () {
  it("returns true if n is same order as i, otherwise false", function () {
    expect((0, _functions.isKind)(1, 25)).toBe(true);
    expect((0, _functions.isKind)(2, 4)).toBe(false);
    expect((0, _functions.isKind)(-1, 1)).toBe(true);
  });
});
describe("column(n)", function () {
  it("returns proper column for n", function () {
    expect((0, _functions.column)(1)).toBe(1);
    expect((0, _functions.column)(2)).toBe(3);
    expect((0, _functions.column)(8)).toBe(3);
    expect((0, _functions.column)(4)).toBe(1);
    expect((0, _functions.column)(12)).toBe(2);
  });
});
describe("row(n)", function () {
  it("returns proper row for n", function () {
    expect((0, _functions.row)(1)).toBe(1);
    expect((0, _functions.row)(2)).toBe(2);
    expect((0, _functions.row)(8)).toBe(4);
    expect((0, _functions.row)(4)).toBe(4);
    expect((0, _functions.row)(12)).toBe(4);
    expect((0, _functions.row)(7)).toBe(3);
  });
});
describe("color(n)", function () {
  it("returns proper color for n", function () {
    expect((0, _functions.color)(1)).toBe("green");
    expect((0, _functions.color)(56)).toBe("yellow");
    expect((0, _functions.color)(4)).toBe("red");
    expect((0, _functions.color)(57)).toBe("gray");
  });
});
describe('grid(n)', function () {
  it("returns proper grid position of n", function () {
    expect((0, _functions.grid)(1)).toMatchObject([1, 1]);
    expect((0, _functions.grid)(52)).toMatchObject([1, 4]);
    expect((0, _functions.grid)(56)).toMatchObject([3, 4]);
  });
});