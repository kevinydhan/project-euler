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

// ---------------------------------------------------------------------------

/**
 * Summates all prime numbers below a given number.
 *
 * @param {number} max - Upper bound
 * @return - Sum of all prime numbers, returns -1 if `max` is negative or 1
 */

const summationOfPrimes = (max: number): number => {
  if (max <= 1) return -1 // Check if max is a positive number greater than 1

  const result: Array<number> = [] // Array of prime numbers

  const composites: any = {}

  if (max > 2) result.push(2)

  for (let i = 3; i < max; i += 2)
    if (isPrime(i, composites)) result.push(i)

  return result.reduce((total, n) => total + n)
}

// ---------------------------------------------------------------------------

/**
 * Checks whether or not a given number is prime.
 * This function does not check if the number is negative or 1.
 *
 * @param {number} n - Number to be checked
 * @param {Object} [composites={}] - A map of known composite numbers, where the key is the composite number and the value is `true`
 * @return {boolean} - If `true`, the number is prime
 */

const isPrime = (n: number, composites: any = {}): boolean => {
  if (n === 2 || n === 3) return true

  if (n % 2 === 0) return false

  for (let i = 3; i * i <= n; i += 2) {
    if (composites[n]) return false

    if (n % i === 0) {
      composites[n] = true
      return false
    }
  }

  return true
}

export default summationOfPrimes