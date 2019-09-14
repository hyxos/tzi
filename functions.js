
const mod12 = n => n % 12
const mod60 = n => n % 60
const seniority = n => Math.abs(n % 60)
const elementOrder = n => Math.ceil(seniority(n % 60) % 10 / 2)
const elements = () => ['wood', 'fire', 'earth', 'metal', 'water']
const order = n => seniority(n) % 12
const animals = () => ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig']
const animal = n => animals(order(n) - 1)
const element = n => elements()[Math.ceil(Math.abs(n % 60) % 10 / 2) - 1]
const polarity = n => n % 2 === 0 ? 0 : 1

module.exports = {
  mod12: mod12,
  mod60: mod60,
  seniority: seniority,
  elementOrder: elementOrder,
  elements: elements,
  element: element,
  order: order,
  animals: animals,
  animal: animal,
  polarity: polarity,
  opposite: (n, cb) => cb? cb(n) + cb(30) : n + 30,
  duo: n => n % 2 === 0 ? n - 1 : n + 1
}
