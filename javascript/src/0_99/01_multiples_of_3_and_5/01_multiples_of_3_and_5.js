"use strict";
/*
  Link: https://projecteuler.net/problem=1

  Problem 1: Multiples of 3 and 5

  My solution will need:
    - a way to find all multiples of 3 and 5 below given number
    - optional: a sum function
*/
// ---------------------------------------------------------------------------
/**
 * This function finds all multiples of 3 and 5 below a given number and returns the sum of the multiples.
 *
 * @param {number} n - A given number
 * @return {number} - Sum of the multiples of 3 and 5 below the given number
 */
var main = function (n) {
    var nums = findMultiples(n);
    return nums.reduce(function (total, n) { return total + n; }, 0);
};
// ---------------------------------------------------------------------------
/**
 * This function finds all multiples of 3 and 5 below a specified number.
 *
 * @param {number} n - Specified number
 * @return {Array<number>} - List of multiples
 */
var findMultiples = function (n) {
    var result = [];
    // Add current number to result array if it is divisible by 3 or 5.
    for (var i = 0; i < n; ++i)
        if (i % 3 === 0 || i % 5 === 0)
            result.push(i);
    return result;
};
