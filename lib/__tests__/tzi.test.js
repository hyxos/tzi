"use strict";

var _tzi = _interopRequireDefault(require("../tzi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("new Tzi()", function () {
  it("creates a new instance of Tzi class", function () {
    expect(new _tzi["default"](1)).toBeInstanceOf(_tzi["default"]);
  });
});
describe('n.isTrine(i)', function () {
  it("checks if i, Z object, or array is trine to n", function () {
    var woodRat = new _tzi["default"](1);
    expect(woodRat.isTrine(5)).toBe(true);
    var fireDragon = new _tzi["default"](53);
    expect(woodRat.isTrine(fireDragon)).toBe(true);
    var woodMonkey = new _tzi["default"](21);
    expect(woodRat.isTrine(woodMonkey)).toBe(true);
    expect(woodRat.isTrine([fireDragon, woodMonkey])).toBe(true);
    expect(woodRat.isTrine([5, 9])).toBe(true);
    expect(woodRat.isTrine([5, 9, 7])).toBe(false);
    expect(woodRat.isTrine([5, woodMonkey])).toBe(true);
    var fireDog = new _tzi["default"](23);
    expect(woodRat.isTrine(fireDog)).toBe(false);
    expect(woodRat.isTrine([fireDragon, fireDog])).toBe(false);
  });
});