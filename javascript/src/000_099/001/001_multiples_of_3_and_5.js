"use strict";
/*
  Problem 1: Multiples of 3 and 5

  My solution will need:
    - a way to find all multiples of 3 and 5 below given number
    - optional: a sum function
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
/**
 * Finds all multiples of 3 and 5 below a given number and returns the sum of the multiples.
 *
 * @param {number} n - A given number
 * @return {number} - Sum of the multiples of 3 and 5 below the given number
 *
 * @see - https://projecteuler.net/problem=1
 */
const sumOfMultiplesOf3And5 = (n) => {
    const nums = []; // Array of multiples of 3 and/or 5
    // Add current number to result array if it is divisible by 3 or 5.
    for (let i = 0; i < n; ++i)
        if (i % 3 === 0 || i % 5 === 0)
            nums.push(i);
    return nums.reduce((total, n) => total + n);
};
exports.default = sumOfMultiplesOf3And5;
