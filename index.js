'use strict'

var randGen = require('seed-random')

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array, seed) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    , rand = randGen(seed || Math.random())

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(rand() * currentIndex --)

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

module.exports = shuffle;
