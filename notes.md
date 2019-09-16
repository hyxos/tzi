---
title: Allowing Negatives Values for `seniority` and `order`
author: Donnie
date: 09162019
---

Had a bit of an aha moment, when I realized my own innate resistance to negative numbers, as the inital implementation of the `seniority` and `order` functions used the js built-in `Math.abs` so as to make sure that seniority and order were always assigned a positive value. 

I'm not sure why exactly I made that decision, probably thinking in terms of playing the game with negative values for these numbers was just too out there for me to even consider at the moment.

Then I ran into a problem trying to implement the algorithm for `trines`. I kept trying to implement a version using `order(n)` but wasn't getting the results I was looking for. I eventually settled on what felt like a very clunky solution using a `for` loop that eventually was refactored into a `reduce`.

```js
const trines = n => 
  rangeArray(1, 15).reduce((p, i) => 
    mod(3)(i) !== 0 
    ? [...p, numberString(seniority(n + i * 4))] 
    : [...p], [])
    .sort().map(i => Number(i)
  )
```
This works, but feels a little brute force. Bringing in `rangeArray` to create a  `[1...15]` array to operate for `i`? The math kind of makes sense if you've played with the cards a lot, but I had the feeling there was a simpler solution that I was somehow missing.

The solution for squares is pretty much exactly the same, just different values

```js
const squares = n => 
  rangeArray(1, 20).reduce((p, i) => 
    mod(4)(i) !== 0 
    ? [...p, numberString(seniority(n + i * 3))] 
    : [...p], [])
    .sort().map(i => Number(i)
  )
```

This is already strongly hinting at some generalization... we could break down the variables to pass into finding different relationships between the numbers based on

n ~ passed integer
i ~ range max
m ~ modulus factor
x ~ i multipler (i * x)

For trines i = 15, m = 3, x = 4, and for squares i = 20, m = 4, x = 3. In a group of 60, there are 4 trines and 3 squares, which fits the multiplier. The function of the modulus is to exlude members of ones own kind. In both cases i * m = 60.

These functions produce an array of positive integers, but as we said, shouldn't we be able to include negative numbers as well? Even worse, the `isTrine` and `isSquare` functions just just this array we produced and an `includes` method to see if its there.

```js
const isTrine = (i, n) => trines(i).includes(seniority(n))
const isSquare = (i, n) => squares(i).includes(seniority(n))
```

Let's flip it around and instead, write the isTrine function to handle negative numbers as well

```js
const isTrine = (i, n) => {
  let iAbs = Math.abs(order(i))
  let nAbs = Math.abs(order(n))
  let prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8
  let post = order(iAbs + 4)
  return nAbs === prev || nAbs === post
}
```
Here it makes sense to use the `Math.abs` because we want to be able to stay in the positive number plane to make our comparisions, if we don't do that, the code becomes twice as complex! Now we can see if negative and positive numbers are in the same trine!

```fish
> let tzi = require('./functions')
> tzi.isTrine(-1, -5)
9 5
true
> tzi.isTrine(56, 52)
4 12
true
> tzi.isTrine(56, -52)
4 12
true
```
And now making the `trines` function becomes trivial

```js
const trines = n => rangeArray(1, 60).filter(i => isTrine(i, n))
```

For now, this only includes the positive trines 1 - 60. Possible expansion would to be leave a default range but allow arbitrary parameters for range. Before we can implement this we will have to add the functionality to rangeArray to support negative numbers.

Notice that the previous functions for creating the trines and squares iterated over smaller arrays, however, any advantage that may have provided in terms of speed was lost when converting for sorting and sorting happened. The advantage of using `filter` on the range array is that the values are already sorted.

For now we will leave the positive numbers for arrays, maybe in the future we will implement `negTrines` and `negSquares` functions that will have their opposites.
