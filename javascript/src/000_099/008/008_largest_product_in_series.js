"use strict";
/*
  Problem 8: Largest Product in a Series

  My solution will need:
    - a way to iterate through the series, need to use parseInt(), +, or * 1

    - it might be beneficial to keep a rolling product and as I
      iterate through the series, I can divide the leftmost digit
      and multiple the rightmost digit

      ex. 1 2 3 4 5 6 7 8 9 0      Current Product
          |_______|             -> 120

            |_______|           -> 120 / 1 = 120 * 6 = 720

              |_______|         -> 720 / 2 = 360 * 7 = 2520


  The steps I am thinking about taking are:
    1. Create a variable to keep tracking of rolling product.
    2. Create a variable to keep track of highest product.
    3. Write a for loop to iterate through series.
      - The condition should be when i < series.length - digits
    4. On i = 0, set rolling product equal to product of series[i] * series[i + 1]...
    5. Each iteration after the first pass:
      - Divide rolling product by series[i - 1]
      - Multiple product by series[i + digits]???
      - Do a check to see if rolling product > highest product
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
/**
 * Calculates the largest product of n adjacent digits in a given series.
 *
 * @param {string} series - A string of numbers
 * @param {number} digits - Number of adjacent digits to calculate the product
 *
 * @see - https://projecteuler.net/problem=8
 */
const largestProductInSeries = (series, digits) => {
    let curr = [...Array(digits).keys()]
        .map(e => +series[e]).reduce((a, e) => a * e);
    let max = curr;
    // console.log(' i | sequence | curr |')
    for (let i = 1; i < series.length - digits; ++i) {
        curr = curr / +series[i - 1];
        curr *= +series[i + digits - 1];
        // console.log(` ${i} | ${series.slice(i, i + digits)}      | ${curr}  |`)
        if (curr > max) {
            max = curr;
        }
    }
    return max;
};
exports.default = largestProductInSeries;
