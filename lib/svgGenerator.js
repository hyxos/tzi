"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.logo = exports.genGlyphTemplate = exports.genGlyph = exports.genDots = void 0;

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
      anchor = _ref$anchor === void 0 ? [-60, -60] : _ref$anchor,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return "<svg id=\"".concat(id, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"").concat(viewBox, "\">\n  <rect class=\"box\" x=\"").concat(anchor[0], "\" y=\"").concat(anchor[1], "\" rx=\"6\" width=\"100%\" height=\"100%\" stroke=\"").concat(stroke, "\" stroke-width=\"").concat(strokeWidth, "\" fill=\"").concat(boxFill, "\"/>\n  <g class=\"").concat(className, "\" fill=\"").concat(contentFill, "\">\n    ").concat(content, "\n  </g>\n</svg>");
};

var bar = function bar(_ref2) {
  var id = _ref2.id,
      x = _ref2.x,
      y = _ref2.y,
      rx = _ref2.rx,
      w = _ref2.w,
      h = _ref2.h;
  return "<rect id=\"".concat(id, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" rx=\"").concat(rx, "\" width=\"").concat(w, "\" height=\"").concat(h, "\" />");
};

var bw = 14; // bar width

var bh = 100; // bar height

var rx = 4; // bar radius

var ba = -50; // bar anchor

var b1 = -45; // bar1 index

var b2 = -7; // bar2 index

var b3 = 31; // bar3 index

var vb1 = bar({
  id: "vb1",
  x: b1,
  y: ba,
  rx: rx,
  w: bw,
  h: bh
});
var vb2 = bar({
  id: "vb2",
  x: b2,
  y: ba,
  rx: rx,
  w: bw,
  h: bh
});
var vb3 = bar({
  id: "vb3",
  x: b3,
  y: ba,
  rx: rx,
  w: bw,
  h: bh
});
var hb1 = bar({
  id: "hb1",
  x: ba,
  y: b1,
  rx: rx,
  w: bh,
  h: bw
});
var hb2 = bar({
  id: "hb2",
  x: ba,
  y: b2,
  rx: rx,
  w: bh,
  h: bw
});
var hb3 = bar({
  id: "hb3",
  x: ba,
  y: b3,
  rx: rx,
  w: bh,
  h: bw
});

var circle = function circle(_ref3) {
  var id = _ref3.id,
      cx = _ref3.cx,
      cy = _ref3.cy,
      r = _ref3.r;
  return "<circle id=\"".concat(id, "\" cx=\"").concat(cx, "\" cy=\"").concat(cy, "\" r=\"").concat(r, "\" />");
};

var f = 19;
var r = 7;
var dc1r1 = circle({
  id: "dc1r1",
  cx: -f,
  cy: -f,
  r: r
});
var dc2r1 = circle({
  id: "dc2r1",
  cx: f,
  cy: -f,
  r: r
});
var dc1r2 = circle({
  id: "dc1r2",
  cx: -f,
  cy: f,
  r: r
});
var dc2r2 = circle({
  id: "dc2r2",
  cx: f,
  cy: f,
  r: r
});

var genbars = function genbars(n) {
  var c = (0, _functions.column)(n);
  var r = (0, _functions.row)(n);
  var bars = '';

  switch (c) {
    case 1:
      bars += vb2;
      break;

    case 2:
      bars += vb1 + '\n  ' + vb3;
      break;

    case 3:
      bars += vb1 + '\n  ' + vb2 + '\n  ' + vb3;
      break;
  }

  switch (r) {
    case 2:
      bars += hb2;
      break;

    case 3:
      bars += hb1 + '\n  ' + hb3;
      break;

    case 4:
      bars += hb1 + '\n  ' + hb2 + '\n  ' + hb3;
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

exports.genDots = genDots;

var genGlyph = function genGlyph(n) {
  var className = "glyph";
  if (!(0, _functions.polarity)(n)) return svgWrapper({
    id: (0, _functions.urlName)(n),
    content: genbars(n) + '\n  ' + genDots(n),
    boxFill: (0, _functions.hexColor)(n),
    contentFill: "white",
    className: className
  });else return svgWrapper({
    id: (0, _functions.urlName)(n),
    content: genbars(n) + '\n  ' + genDots(n),
    contentFill: (0, _functions.hexColor)(n),
    className: className
  });
};

exports.genGlyph = genGlyph;

var genGlyphTemplate = function genGlyphTemplate() {
  return svgWrapper({
    id: "tzi-template",
    content: genbars(8) + '\n  ' + genDots(1) + '\n  ' + genDots(8),
    contentFill: "black",
    className: "glyph",
    dimensions: ["", ""]
  });
};

exports.genGlyphTemplate = genGlyphTemplate;

var logo = function logo() {
  return "<svg id=\"tzi-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-60 -60 120 120\">\n<rect x=\"-60\" y=\"-60\" width=\"100%\" height=\"100%\" stroke=\"none\" fill=\"none\"/>\n<rect x=\"-6\" y=\"-60\" rx=\"3\" width=\"12\" height=\"120\" fill=\"#080808\" transform=\"rotate(45, 0, 0)\"/>\n<rect x=\"-6\" y=\"-50\" rx=\"3\" width=\"12\" height=\"100\" fill=\"#080808\" />\n<rect x=\"-18\" y=\"-6\" rx=\"3\" width=\"36\" height=\"12\" fill=\"#080808\" />\n<rect x=\"-50\" y=\"-46\" rx=\"3\" width=\"100\" height=\"12\" fill=\"#080808\" />\n<rect x=\"-50\" y=\"34\" rx=\"3\" width=\"100\" height=\"12\" fill=\"#080808\" />\n</svg>";
};

exports.logo = logo;
var _default = genGlyph;
exports["default"] = _default;