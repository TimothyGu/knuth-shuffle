'use strict'

var shuffle = require('./')
  , a = [2,11,37,42]

// The shuffle modifies the original array
// calling a.slice(0) creates a copy, which is assigned to b
var b = shuffle(a.slice(0))
console.log(b)

// Seed the following two functions the same way. The output should be the
// same.
var c = shuffle(a.slice(0), 2)
console.log(c)
var d = shuffle(a.slice(0), 2)
console.log(d)
