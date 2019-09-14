module.exports = {
  mod12: n => n > 12 ? n % 12 : n,
  mod60: n => n > 60 ? n % 60 : n,
  polarity: n => n % 2 === 0 ? 0 : 1,
  opposite: (n, cb) => cb? cb(n) + cb(30) : n + 30,
  duo: n => n % 2 === 0 ? n - 1 : n + 1
}
