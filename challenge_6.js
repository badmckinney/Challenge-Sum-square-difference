/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
}

// do work here
SumOfASquare.prototype.sumOfSquares = function () {
  let sum = 0;
  for (let i = 1; i <= this.naturalNumbers; i++) {
    let squared = Math.pow(i, 2);
    sum += squared;
  }
  return sum;
}

SumOfASquare.prototype.squareOfTheSums = function () {
  sum = 0;
  for (let i = 1; i <= this.naturalNumbers; i++) {
    sum += i;
  }
  let squared = Math.pow(sum, 2);
  return squared;
}

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
