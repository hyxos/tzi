const Tzi = require('./tzi')

let woodRat = new Tzi(1)
let woodRabbit = new Tzi(52)
let woodRooster = new Tzi(22)
console.log(woodRabbit.isSquare(woodRat))
console.log(woodRooster.isSquare(woodRat))
console.log(woodRooster.isSquare(25))

let negDeck = Tzi.rangeArray(-60, -1).map(i => new Tzi(i))
console.log(negDeck)