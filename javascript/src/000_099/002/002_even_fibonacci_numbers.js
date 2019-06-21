"use strict";
/*
  Link: https://projecteuler.net/problem=2

  Problem 2: Even Fibonacci Numbers

  My solution will need:
    - a memoized fibonacci function that can calculate up to 4 million without timing out
    - to be able to summate all even numbers within the fibonacci sequence

  The steps I am thinking about taking are:
    1. Calculate an array of fibonacci numbers.
    2. call Array.prototype.reduce() to summate all even numbers.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
/**
 * This function returns the sum of all even fibonacci numbers less than the maximum value passed.
 *
 * @param {number} maxValue - Largest fibonacci number to be calculated
 * @return {number} - Sum of even fibonacci numbers up to value passed
 */
var sumOfEvenFib = function (maxValue) {
    var nums = calculateFibSequence(maxValue);
    // Summate fibonacci numbers if it is even
    return nums.reduce(function (total, n) {
        if (n % 2 === 0)
            total += n;
        return total;
    }, 0);
};
// ---------------------------------------------------------------------------
/**
 * This function calculates all fibonacci numbers up to the specified step, expressed as n.
 *
 * @param {number} maxValue - Maximum fibonacci number to be calculated
 * @return {Array<number>} - List of fibonacci numbers up to specified value
 */
var calculateFibSequence = function (maxValue) {
    var nums = []; // Array of fibonacci numbers
    var cache = {}; // Key-value pairs of step to fibonacci number
    var step = 0; // Current step in fibonacci sequence
    // This function calculates fibonacci numbers.
    var fib = function (n) {
        if (n < 2)
            return 1;
        else if (cache[n])
            return cache[n];
        return fib(n - 1) + fib(n - 2);
    };
    // While current fibonacci number is less than maxValue, add it to the nums array
    while (fib(step) < maxValue) {
        nums.push(fib(step));
        step++;
    }
    return nums;
};
exports.default = sumOfEvenFib;
