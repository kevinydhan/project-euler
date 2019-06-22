"use strict";
/*
  Link: https://projecteuler.net/problem=10

  Problem 10: Summation of Primes

  My solution will need:
    - a way to find all primes below the max
    - sum all primes together

  The steps I am thinking about taking are:
    1. Write a helper function to find all primes below a given number.
      - might need another function to find out if a number is prime
    2. Summate all primes using Array.prototype.reduce().
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
const summationOfPrimes = (max) => {
    if (max <= 1)
        return -1; // Check if max is a positive number greater than 1
    const result = []; // Array of prime numbers
    for (let i = 2; i < max; ++i) //
        if (isPrime(i))
            result.push(i);
    return result.reduce((total, n) => total + n);
};
// ---------------------------------------------------------------------------
/**
 * This function sees whether or not a given number is prime.
 * This function does not check if the number is negative or 1.
 *
 * @param {number} n - Number to be checked
 * @return {boolean} - If true, the number is prime
 */
const isPrime = (n) => {
    if (n === 2 || n === 3)
        return true;
    if (n % 2 === 0)
        return false;
    for (let i = 3; i * i <= n; i += 2)
        if (n % i === 0)
            return false;
    return true;
};
exports.default = summationOfPrimes;
