"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Tzi: true
};
Object.defineProperty(exports, "Tzi", {
  enumerable: true,
  get: function get() {
    return _tzi.Tzi;
  }
});

var _tzi = require("./tzi");

var _functions = require("./functions");

Object.keys(_functions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _functions[key];
    }
  });
});