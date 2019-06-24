"use strict";
/*
  Link: https://projecteuler.net/problem=6

  Problem 6: Sum Square Difference

  My solution will need:
    - a way to calculate sum of squares of first n numbers
    - a way to calculate square of the sum of first n numbers
    - maybe there's some more advanced mathematical approach...?

  The steps I am thinking about taking are:
    1. Write
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
/**
 * Calculates the difference between the sum of the squares for `1...n` and the square of the sum for `1...n`.
 * @param {number} n - Upper limit
 * @return {number} - Difference between sum of squares and square of sum
 */
const sumSquareDifference = (n) => {
    // Create an array from 1 to n
    const array = [...Array(n).keys()].map(x => ++x);
    // Square each number in range and add
    const summedSquares = array.reduce((acc, e) => acc + e * e);
    // Add numbers in range and square sum
    const squaredSum = Math.pow(array.reduce((acc, e) => acc + e), 2);
    return squaredSum - summedSquares;
};
exports.default = sumSquareDifference;
