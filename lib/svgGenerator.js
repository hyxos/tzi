"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.genGlyph = void 0;

var _functions = require("./functions");

var svgWrapper = function svgWrapper(_ref) {
  var id = _ref.id,
      content = _ref.content,
      _ref$contentFill = _ref.contentFill,
      contentFill = _ref$contentFill === void 0 ? "none" : _ref$contentFill,
      _ref$boxFill = _ref.boxFill,
      boxFill = _ref$boxFill === void 0 ? "none" : _ref$boxFill,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? "none" : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? "-60 -60 120 120" : _ref$viewBox,
      _ref$dimensions = _ref.dimensions,
      dimensions = _ref$dimensions === void 0 ? [100, 100] : _ref$dimensions,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? [-60, -60] : _ref$anchor;
  return "<svg id=\"".concat(id, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"").concat(viewBox, "\" width=\"").concat(dimensions[0], "\" height=\"").concat(dimensions[1], "\">\n  <rect x=\"").concat(anchor[0], "\" y=\"").concat(anchor[1], "\" width=\"100%\" height=\"100%\" stroke=\"").concat(stroke, "\" stroke-width=\"").concat(strokeWidth, "\" fill=\"").concat(boxFill, "\"/>\n  <g fill=\"").concat(contentFill, "\">\n    ").concat(content, "\n  </g>\n</svg>");
};

var hb1 = "<rect id=\"hb1\"  x=\"-46\" y=\"-50\" rx=\"3\" width=\"12\" height=\"100\" />";
var hb2 = "<rect id=\"hb2\"  x=\"-6\" y=\"-50\" rx=\"3\" width=\"12\" height=\"100\" />";
var hb3 = "<rect id=\"hb3\" x=\"34\" y=\"-50\" rx=\"3\" width=\"12\" height=\"100\" />";
var vb1 = "<rect id=\"vb1\" x=\"-50\" y=\"-46\" rx=\"3\" width=\"100\" height=\"12\" />";
var vb2 = "<rect id=\"vb2\" x=\"-50\" y=\"-6\" rx=\"3\" width=\"100\" height=\"12\" />";
var vb3 = "<rect id=\"vb3\" x=\"-50\" y=\"34\" rx=\"3\" width=\"100\" height=\"12\" />";
var dc1r1 = "<circle id=\"dc1r1\" cx=\"-20\" cy=\"-20\" r=\"6\" />";
var dc2r1 = "<circle id=\"dc2r1\" cx=\"20\" cy=\"-20\" r=\"6\" />";
var dc1r2 = "<circle id=\"dc1r2\" cx=\"-20\" cy=\"20\" r=\"6\" />";
var dc2r2 = "<circle id=\"dc2r2\" cx=\"20\" cy=\"20\" r=\"6\" />";

var genbars = function genbars(n) {
  var c = (0, _functions.column)(n);
  var r = (0, _functions.row)(n);
  var bars = '';

  switch (c) {
    case 1:
      bars += hb2;
      break;

    case 2:
      bars += hb1 + '\n  ' + hb3;
      break;

    case 3:
      bars += hb1 + '\n  ' + hb2 + '\n  ' + hb3;
      break;
  }

  switch (r) {
    case 2:
      bars += vb2;
      break;

    case 3:
      bars += vb1 + '\n  ' + vb3;
      break;

    case 4:
      bars += vb1 + '\n  ' + vb2 + '\n  ' + vb3;
      break;
  }

  return bars;
};

var genDots = function genDots(n) {
  var e = (0, _functions.elementOrder)(n);
  var dots = '';

  switch (e) {
    case 1:
      dots += dc1r1 + '\n  ' + dc1r2;
      break;

    case 2:
      dots += dc1r1 + '\n  ' + dc2r1;
      break;

    case 4:
      dots += dc2r1 + '\n  ' + dc2r2;
      break;

    case 5:
      dots += dc1r2 + '\n  ' + dc2r2;
      break;
  }

  return dots;
};

var genGlyph = function genGlyph(n) {
  if (!(0, _functions.polarity)(n)) return svgWrapper({
    id: (0, _functions.name)(n),
    content: genbars(n) + '\n  ' + genDots(n),
    boxFill: (0, _functions.hexColor)(n),
    contentFill: "white"
  });else return svgWrapper({
    id: (0, _functions.name)(n),
    content: genbars(n) + '\n  ' + genDots(n),
    contentFill: (0, _functions.hexColor)(n)
  });
};

exports.genGlyph = genGlyph;
var _default = genGlyph;
exports["default"] = _default;