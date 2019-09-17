"use strict";

var _require = require('./constants'),
    elements = _require.elements,
    animals = _require.animals,
    Tau = _require.Tau;

var _require2 = require('./helpers'),
    rangeArray = _require2.rangeArray;

var abs = Math.abs,
    ceil = Math.ceil,
    floor = Math.floor;

var mod = function mod(n) {
  return function (i) {
    return i % n;
  };
};

var polarity = function polarity(n) {
  return abs(mod(2)(n));
};

var seniority = function seniority(n) {
  var i = mod(60)(n);
  if (i !== 0) return i;else return n >= 0 ? 60 : -60;
};

var elementOrder = function elementOrder(n) {
  var i = mod(10)(seniority(n));
  if (n >= 0 && i !== 0) return ceil(i / 2);else if (n >= 0 && i === 0) return 5;else if (n < 1 && i !== 0) return floor(i / 2);else return -5;
};

var element = function element(n) {
  return elements[abs(elementOrder(n)) - 1];
};

var order = function order(n) {
  var i = mod(12)(seniority(n));
  if (i !== 0) return i;else return n >= 0 ? 12 : -12;
};

var animal = function animal(n) {
  return animals[abs(order(n)) - 1];
};

var name = function name(n) {
  return element(n) + " " + animal(n);
}; // const parseName


var numberString = function numberString(n) {
  var i = seniority(n);
  if (n > 0) return i < 10 ? "0" + String(i) : String(i);else return i > -10 ? "N0" + String(abs(i)) : "N" + String(abs(i));
};

var fileString = function fileString(n) {
  if (n > 0 && n <= 60) return numberString(n) + "_" + element(n) + "_" + animal(n);else if (n < 0 && n >= -60) return numberString(n) + "_" + element(n) + "_" + animal(n);else if (n > 60 || n < -60) return numberString(n) + "_" + element(n) + "_" + animal(n) + "_" + String(abs(n));
};

var opposite = function opposite(n, mod) {
  var c = n > 0;
  if (c) return mod === 12 ? order(order(n) + 6) : seniority(n + 30);else return mod === 12 ? order(order(n) - 6) : seniority(n - 30);
};

var duo = function duo(n) {
  var p = polarity(n);
  var c = n > 0;
  if (p && c) return seniority(n + 1);else if (p && !c) return seniority(n - 1);else if (!p && !c) return seniority(n + 1);else return seniority(n - 1);
};

var isTrine = function isTrine(i, n) {
  var iAbs = abs(order(i));
  var nAbs = abs(order(n));
  var prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8;
  var post = order(iAbs + 4);
  return nAbs === prev || nAbs === post;
};

var isSquare = function isSquare(i, n) {
  var iAbs = abs(order(i));
  var nAbs = abs(order(n));
  var prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9;
  var post = order(iAbs + 3);
  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12);
};

var isUnity = function isUnity(i, n) {
  return elementOrder(i) === elementOrder(n);
};

var isDiverse = function isDiverse(i, n) {
  return elementOrder(i) !== elementOrder(n);
};

var trines = function trines(n) {
  return rangeArray(1, 60).filter(function (i) {
    return isTrine(i, n);
  });
};

var squares = function squares(n) {
  return rangeArray(1, 60).filter(function (i) {
    return isSquare(i, n);
  });
};

var isKind = function isKind(i, n) {
  return Math.abs(order(i)) === Math.abs(order(n));
};

var yin = function yin(n) {
  return !Boolean(polarity(n));
};

var yang = function yang(n) {
  return Boolean(polarity(n));
};

var tau = function tau(n) {
  return order(n) !== 12 ? order(n) * Tau / 12 : 0;
};

module.exports = {
  mod: mod,
  seniority: seniority,
  elementOrder: elementOrder,
  element: element,
  order: order,
  animal: animal,
  polarity: polarity,
  opposite: opposite,
  name: name,
  duo: duo,
  yin: yin,
  yang: yang,
  tau: tau,
  trines: trines,
  numberString: numberString,
  isTrine: isTrine,
  squares: squares,
  isSquare: isSquare,
  isKind: isKind,
  isUnity: isUnity,
  isDiverse: isDiverse,
  fileString: fileString
};