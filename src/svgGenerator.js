import { name, column, row, hexColor, elementOrder, polarity } from './functions'

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
  anchor=[-60, -60]
}) =>
`<svg id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${dimensions[0]}" height="${dimensions[1]}">
  <rect x="${anchor[0]}" y="${anchor[1]}" width="100%" height="100%" stroke="${stroke}" stroke-width="${strokeWidth}" fill="${boxFill}"/>
  <g fill="${contentFill}">
    ${content}
  </g>
</svg>`

const hb1 = `<rect id="hb1"  x="-46" y="-50" rx="3" width="12" height="100" />`
const hb2 = `<rect id="hb2"  x="-6" y="-50" rx="3" width="12" height="100" />`
const hb3 = `<rect id="hb3" x="34" y="-50" rx="3" width="12" height="100" />`
const vb1 = `<rect id="vb1" x="-50" y="-46" rx="3" width="100" height="12" />`
const vb2 = `<rect id="vb2" x="-50" y="-6" rx="3" width="100" height="12" />`
const vb3 = `<rect id="vb3" x="-50" y="34" rx="3" width="100" height="12" />`
const dc1r1 = `<circle id="dc1r1" cx="-20" cy="-20" r="6" />`
const dc2r1 = `<circle id="dc2r1" cx="20" cy="-20" r="6" />`
const dc1r2 = `<circle id="dc1r2" cx="-20" cy="20" r="6" />`
const dc2r2 = `<circle id="dc2r2" cx="20" cy="20" r="6" />`

const genbars = n => {
  let c = column(n)
  let r = row(n)
  let bars = ''
  switch(c) {
    case 1:
      bars += hb2
      break
    case 2:
      bars += hb1 + '\n  ' + hb3
      break
    case 3:
      bars +=  hb1 + '\n  ' + hb2 + '\n  ' + hb3
      break
  }
  switch(r) {
    case 2:
      bars += vb2
      break
    case 3:
      bars += vb1 + '\n  ' + vb3
      break
    case 4:
      bars += vb1 + '\n  ' + vb2 + '\n  ' + vb3
      break
  }
  return bars
}

const genDots = n => {
  let e = elementOrder(n)
  let dots = ''
  switch(e) {
    case 1:
      dots += dc2r1 + '\n  ' + dc2r2
      break
    case 2:
      dots += dc1r1 + '\n  ' + dc2r1
      break
    case 4:
      dots += dc1r1 + '\n  ' + dc1r2
      break
    case 5:
      dots += dc1r2 + '\n  ' + dc2r2
      break
  }
  return dots
}

export const genGlyph = n => {
  if (!polarity(n)) return svgWrapper({
    id: name(n),
    content: genbars(n) + '\n  ' + genDots(n),
    boxFill: hexColor(n),
    contentFill: "white"
  })
  else return svgWrapper({
    id: name(n),
    content: genbars(n) + '\n  ' + genDots(n),
    contentFill: hexColor(n)
  })
}

export default genGlyph