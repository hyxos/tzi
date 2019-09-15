module.exports = {
  rangeArray: (min, max) => [...Array(max - min + 1).keys()].map(num => num + min)
}