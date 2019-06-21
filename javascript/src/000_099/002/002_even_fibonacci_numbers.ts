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

const sumOfEvenFib = () => {return 1}

const fib = (n: number) => {
  /*
    This object is used to store calculated fibonacci numbers using the step number and fibonacci number as key-value pairs.
    ex. { 0: 1, 1: 1, 2: 3 }
  */
  const cache: any = {}

  if (n < 2) return 1
  if (cache[n]) return cache[n]
}

export default sumOfEvenFib