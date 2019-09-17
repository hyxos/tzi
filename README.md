# TZI Standard Libray

A library for working with TZI Objects and functions.

Install with `npm`

```bash
npm install tzi
```
Or `yarn`...

```bash
yarn add tzi
```
fire up `node`

```js
> const { Tzi, isSquare } = require('./tzi')
undefined
> let woodRabbit = new Tzi(52)
undefined
> woodRabbit.name
'wood rabbit'
> let woodRat = new Tzi(1)
undefined
> woodRabbit.isSquare(woodRat)
true
> woodRabbit.isKind(woodRat)
false
> woodRabbit.isUnity(woodRat)
true
> woodRabbit.isDiverse(woodRat)
false
> isSquare(52, 1)
true
```
