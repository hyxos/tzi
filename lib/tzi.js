"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tzi = void 0;

var _functions = require("./functions");

var _constants = require("./constants");

var _svgGenerator = require("./svgGenerator");

var _helpers = require("./helpers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tzi =
/*#__PURE__*/
function () {
  _createClass(Tzi, null, [{
    key: "elements",
    get: function get() {
      return _constants.elements;
    }
  }, {
    key: "animals",
    get: function get() {
      return _constants.animals;
    }
  }, {
    key: "range",
    get: function get() {
      return range;
    }
  }, {
    key: "Tau",
    get: function get() {
      return _constants.Tau;
    }
  }, {
    key: "deck",
    get: function get() {
      return (0, _helpers.rangeArray)(1, 60).map(function (i) {
        return new Tzi(i);
      });
    }
  }, {
    key: "shuffle",
    get: function get() {
      return (0, _helpers.shuffle)(Tzi.rangeArray(1, 60).map(function (i) {
        return new Tzi(i);
      }));
    }
  }, {
    key: "rangeArray",
    get: function get() {
      return _helpers.rangeArray;
    }
  }, {
    key: "deal",
    get: function get() {
      return;
    }
  }]);

  function Tzi(_int) {
    _classCallCheck(this, Tzi);

    this.name = (0, _functions.name)(_int);
    this.urlName = (0, _functions.urlName)(_int);
    this.numberString = (0, _functions.numberString)(_int);
    this.fileString = (0, _functions.fileString)(_int);
    this.natural = _int;
    this.seniority = (0, _functions.seniority)(_int);
    this.elementOrder = (0, _functions.elementOrder)(_int);
    this.element = (0, _functions.element)(_int);
    this.order = (0, _functions.order)(_int);
    this.animal = (0, _functions.animal)(_int);
    this.polarity = (0, _functions.polarity)(_int);
    this.opposite = (0, _functions.opposite)(_int);
    this.duo = (0, _functions.duo)(_int);
    this.yin = (0, _functions.yin)(_int);
    this.yang = (0, _functions.yang)(_int);
    this.tau = (0, _functions.tau)(_int);
    this.trines = (0, _functions.trines)(_int);
    this.squares = (0, _functions.squares)(_int);
    this.column = (0, _functions.column)(_int);
    this.row = (0, _functions.row)(_int);
    this.color = (0, _functions.color)(_int);
    this.hexColor = (0, _functions.hexColor)(_int);
    this.glyph = (0, _svgGenerator.genGlyph)(_int);
    this.grid = (0, _functions.grid)(_int);
  }

  _createClass(Tzi, [{
    key: "cleanInput",
    value: function cleanInput(input) {
      return input instanceof Tzi ? input.seniority : input;
    }
  }, {
    key: "isTrine",
    value: function isTrine(tzi) {
      var _this = this;

      var n = this.cleanInput(tzi);
      if (Array.isArray(n)) return n.reduce(function (p, i) {
        return p === false ? false : (0, _functions.isTrine)(_this.seniority, _this.cleanInput(i));
      });else return (0, _functions.isTrine)(this.seniority, n);
    }
  }, {
    key: "isSquare",
    value: function isSquare(tzi) {
      var n = tzi instanceof Tzi ? tzi.seniority : tzi;
      return (0, _functions.isSquare)(this.seniority, n);
    }
  }, {
    key: "isKind",
    value: function isKind(tzi) {
      var n = tzi instanceof Tzi ? tzi.order : tzi;
      return (0, _functions.isKind)(this.order, n);
    }
  }, {
    key: "isUnity",
    value: function isUnity(tzi) {
      var _this2 = this;

      var n = this.cleanInput(tzi);
      if (Array.isArray(n)) return n.reduce(function (p, i) {
        return p === false ? false : (0, _functions.isUnity)(_this2.seniority, _this2.cleanInput(i));
      });else return (0, _functions.isUnity)(this.seniority, n);
    }
  }, {
    key: "isDiverse",
    value: function isDiverse(tzi) {
      var _this3 = this;

      var n = this.cleanInput(tzi);
      if (Array.isArray(n)) return n.reduce(function (p, i) {
        return p === false ? false : (0, _functions.isDiverse)(_this3.seniority, _this3.cleanInput(i));
      });else return (0, _functions.isDiverse)(this.seniority, n);
    }
  }]);

  return Tzi;
}();

exports.Tzi = Tzi;
var _default = Tzi;
exports["default"] = _default;