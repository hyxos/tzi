const rangeArray = (min, max) => [...Array(max - min + 1).keys()].map(num => num + min)
const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

module.exports = {
  rangeArray: rangeArray,
  shuffle: shuffle,
}