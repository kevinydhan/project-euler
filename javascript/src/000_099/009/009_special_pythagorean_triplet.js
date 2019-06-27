"use strict";
/*
  Problem 9: Special Pythagorean Triplet

  My solution will need:
    - I guess I'm stuck doing a double for loop, where a and b < target because a + b + c < 1000
    - c can be calculated by doing 1000 - a - b

  The steps I am thinking about taking are:
    1.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
/**
 * Returns the product of the first pythagorean triplet. A pythagorean triplets satisfies the conditions: `a < b < c`, `a^2 + b^2 = c^2`, and `a + b + c = target`.
 *
 * @param {number} target - The target sum of `a + b + c`
 * @return - Product of pythagorean triplet, returns `-1` if no triplet is found
 *
 * @see - https://projecteuler.net/problem=9
 */
const specialPythagoreanTriplet = (target) => {
    let c;
    for (let a = 1; a < target; ++a) {
        for (let b = 1; b < target; ++b) {
            c = target - a - b;
            if (a < b && b < c && a < c // a < b < c
                && a * a + b * b === c * c // a^2 + b^2 = c^2
                && a + b + c === target) // a + b + c = 1000
                return a * b * c;
        }
    }
    return -1;
};
exports.default = specialPythagoreanTriplet;
