import { 
  urlName, 
  column, 
  row, 
  hexColor, 
  elementOrder, 
  polarity } from './functions'

const svgWrapper = 
({
  id, 
  content, 
  contentFill="none",
  boxFill="none",
  stroke="none", 
  strokeWidth=1,
  viewBox="-60 -60 120 120",
  dimensions=[100, 100],
  anchor=[-60, -60],
  className=""
}) =>
`<svg id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${dimensions[0]}" height="${dimensions[1]}">
  <rect class="box" x="${anchor[0]}" y="${anchor[1]}" width="100%" height="100%" stroke="${stroke}" stroke-width="${strokeWidth}" fill="${boxFill}"/>
  <g class="${className}" fill="${contentFill}">
    ${content}
  </g>
</svg>`

const bar = ({id, x, y, rx, w, h}) =>  
  `<rect id="${id}" x="${x}" y="${y}" rx="${rx}" width="${w}" height="${h}" />`
const bw = 14 // bar width
const bh = 100 // bar height
const rx = 4 // bar radius
const ba = -50 // bar anchor
const b1 = -45 // bar1 index
const b2 = -7 // bar2 index
const b3 = 31 // bar3 index
const vb1 = bar({id: "vb1", x: b1, y: ba, rx, w: bw, h: bh })
const vb2 = bar({id: "vb2", x: b2, y: ba, rx, w: bw, h: bh })
const vb3 = bar({id: "vb3", x: b3, y: ba, rx, w: bw, h: bh })
const hb1 = bar({id: "hb1", x: ba, y: b1, rx, w: bh, h: bw })
const hb2 = bar({id: "hb2", x: ba, y: b2, rx, w: bh, h: bw })
const hb3 = bar({id: "hb3", x: ba, y: b3, rx, w: bh, h: bw })

const circle = ({id, cx, cy, r}) => 
  `<circle id="${id}" cx="${cx}" cy="${cy}" r="${r}" />`
const f = 19
const r = 7

const dc1r1 = circle({id: "dc1r1", cx: -f, cy: -f, r})
const dc2r1 = circle({id: "dc2r1", cx: f, cy: -f, r})
const dc1r2 = circle({id: "dc1r2", cx: -f, cy: f, r})
const dc2r2 = circle({id: "dc2r2", cx: f, cy: f, r})

const genbars = n => {
  let c = column(n)
  let r = row(n)
  let bars = ''
  switch(c) {
    case 1:
      bars += vb2
      break
    case 2:
      bars += vb1 + '\n  ' + vb3
      break
    case 3:
      bars +=  vb1 + '\n  ' + vb2 + '\n  ' + vb3
      break
  }
  switch(r) {
    case 2:
      bars += hb2
      break
    case 3:
      bars += hb1 + '\n  ' + hb3
      break
    case 4:
      bars += hb1 + '\n  ' + hb2 + '\n  ' + hb3
      break
  }
  return bars
}

export const genDots = n => {
  let e = elementOrder(n)
  let dots = ''
  switch(e) {
    case 1:
      dots += dc1r1 + '\n  ' + dc1r2
      break
    case 2:
      dots += dc1r1 + '\n  ' + dc2r1
      break
    case 4:
      dots += dc2r1 + '\n  ' + dc2r2  
      break
    case 5:
      dots += dc1r2 + '\n  ' + dc2r2
      break
  }
  return dots
}

export const genGlyph = n => {
  let className = "glyph"
  if (!polarity(n)) return svgWrapper({
    id: urlName(n),
    content: genbars(n) + '\n  ' + genDots(n),
    boxFill: hexColor(n),
    contentFill: "white",
    className
  })
  else return svgWrapper({
    id: urlName(n),
    content: genbars(n) + '\n  ' + genDots(n),
    contentFill: hexColor(n),
    className
  })
}

export const genGlyphTemplate = () => {
  return svgWrapper({
    id: "tzi-template",
    content: genbars(8) + '\n  ' + genDots(1) + '\n  ' + genDots(8),
    contentFill: "black",
    className: "glyph",
    dimensions: ["", ""]
  })
}

export default genGlyph