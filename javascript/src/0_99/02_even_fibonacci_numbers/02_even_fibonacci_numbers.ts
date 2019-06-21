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

// ---------------------------------------------------------------------------

const fib = (max: number = 4000000) => {
  // This object is used to store calculated
  const cache = {}


}