// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeNumber(4, 10);
randomRangeNumber(6, 13);
console.log(randomRangeNumber(4, 10));
// Only change code above this line

module.exports = randomRangeNumber;
