"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tau = exports.yang = exports.yin = exports.isKind = exports.squares = exports.trines = exports.isDiverse = exports.isUnity = exports.isSquare = exports.isTrine = exports.duo = exports.opposite = exports.fileString = exports.numberString = exports.urlName = exports.name = exports.animal = exports.order = exports.element = exports.elementOrder = exports.seniority = exports.polarity = exports.mod = void 0;

var _constants = require("./constants");

var _helpers = require("./helpers");

var abs = Math.abs,
    ceil = Math.ceil,
    floor = Math.floor;

var mod = function mod(n) {
  return function (i) {
    return i % n;
  };
};

exports.mod = mod;

var polarity = function polarity(n) {
  return abs(mod(2)(n));
};

exports.polarity = polarity;

var seniority = function seniority(n) {
  var i = mod(60)(n);
  if (i !== 0) return i;else return n >= 0 ? 60 : -60;
};

exports.seniority = seniority;

var elementOrder = function elementOrder(n) {
  var i = mod(10)(seniority(n));
  if (n >= 0 && i !== 0) return ceil(i / 2);else if (n >= 0 && i === 0) return 5;else if (n < 1 && i !== 0) return floor(i / 2);else return -5;
};

exports.elementOrder = elementOrder;

var element = function element(n) {
  return _constants.elements[abs(elementOrder(n)) - 1];
};

exports.element = element;

var order = function order(n) {
  var i = mod(12)(seniority(n));
  if (i !== 0) return i;else return n >= 0 ? 12 : -12;
};

exports.order = order;

var animal = function animal(n) {
  return _constants.animals[abs(order(n)) - 1];
};

exports.animal = animal;

var name = function name(n) {
  return element(n) + " " + animal(n);
};

exports.name = name;

var urlName = function urlName(n) {
  return element(n) + "-" + animal(n);
}; // export const parseName


exports.urlName = urlName;

var numberString = function numberString(n) {
  var i = seniority(n);
  if (n > 0) return i < 10 ? "0" + String(i) : String(i);else return i > -10 ? "N0" + String(abs(i)) : "N" + String(abs(i));
};

exports.numberString = numberString;

var fileString = function fileString(n) {
  if (n > 0 && n <= 60) return numberString(n) + "_" + element(n) + "_" + animal(n);else if (n < 0 && n >= -60) return numberString(n) + "_" + element(n) + "_" + animal(n);else if (n > 60 || n < -60) return numberString(n) + "_" + element(n) + "_" + animal(n) + "_" + String(abs(n));
};

exports.fileString = fileString;

var opposite = function opposite(n, mod) {
  var c = n > 0;
  if (c) return mod === 12 ? order(order(n) + 6) : seniority(n + 30);else return mod === 12 ? order(order(n) - 6) : seniority(n - 30);
};

exports.opposite = opposite;

var duo = function duo(n) {
  var p = polarity(n);
  var c = n > 0;
  if (p && c) return seniority(n + 1);else if (p && !c) return seniority(n - 1);else if (!p && !c) return seniority(n + 1);else return seniority(n - 1);
};

exports.duo = duo;

var isTrine = function isTrine(i, n) {
  var iAbs = abs(order(i));
  var nAbs = abs(order(n));
  var prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8;
  var post = order(iAbs + 4);
  return nAbs === prev || nAbs === post;
};

exports.isTrine = isTrine;

var isSquare = function isSquare(i, n) {
  var iAbs = abs(order(i));
  var nAbs = abs(order(n));
  var prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9;
  var post = order(iAbs + 3);
  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12);
};

exports.isSquare = isSquare;

var isUnity = function isUnity(i, n) {
  return elementOrder(i) === elementOrder(n);
};

exports.isUnity = isUnity;

var isDiverse = function isDiverse(i, n) {
  return elementOrder(i) !== elementOrder(n);
};

exports.isDiverse = isDiverse;

var trines = function trines(n) {
  return (0, _helpers.rangeArray)(1, 60).filter(function (i) {
    return isTrine(i, n);
  });
};

exports.trines = trines;

var squares = function squares(n) {
  return (0, _helpers.rangeArray)(1, 60).filter(function (i) {
    return isSquare(i, n);
  });
};

exports.squares = squares;

var isKind = function isKind(i, n) {
  return Math.abs(order(i)) === Math.abs(order(n));
};

exports.isKind = isKind;

var yin = function yin(n) {
  return !Boolean(polarity(n));
};

exports.yin = yin;

var yang = function yang(n) {
  return Boolean(polarity(n));
};

exports.yang = yang;

var tau = function tau(n) {
  return order(n) !== 12 ? order(n) * _constants.Tau / 12 : 0;
};

exports.tau = tau;