/*
  Problem 3: Largest Prime Factor

  My solution will need:
    - a way to find out the factors of a given number
    - a way to find out if a number is prime

  The steps I am thinking about taking are:
    1. Write a helper function that finds all factors for given number.
      - It might be ideal to return a list of factors from greatest to least.
    2. Write a helper function that checks if a number is prime.
    3. Get array of factors.
    4. Iterate through array and find out if the factor is prime. If prime, return the factor.

  Refactorization:
    - Looked online and tried to refactor solution.
*/

// ---------------------------------------------------------------------------

/**
 * Finds the largest prime factor for a given number.
 *
 * @param {number} n - Given number
 * @return {number} - Largest prime factor, returns -1 if `n` is negative
 *
 * @see - https://projecteuler.net/problem=3
 */

const largestPrimeFactor = (n: number): number => {
  if (n < 0) return -1 // Return -1 if n is negative
  if (n === 1) return 1 // Return 1 if n is 1

  const factors: Array<number> = [] // Array of prime factors
  let m: number = n

  if (m % 2 === 0) { // If n is divisible by 2, add to list
    factors.push(2)
    m = m / 2
  }

  while(m % 2 === 0) m = m / 2 // Reduce current number until it is indivisible by 2

  // For range 3 to square root of n, check if i is a factor
  // If i is factor, add to list and reduce current number until indivisible by i
  for (let i = 3; i * i <= n; i += 2) {
    if (m % i === 0) {
      factors.push(i)
      while (m % i === 0) m = m / i
    }
  }

  if (m > 2 && !factors.includes(m)) factors.push(m)

  return factors[factors.length - 1]
}

export default largestPrimeFactor