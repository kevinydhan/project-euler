/*
  Problem 7: 10,001st Prime

  My solution will need:
    - some way to find out the sequence of prime numbers from 1..n
    - to be efficient in the way it generates the prime numbers

  The steps I am thinking about taking are:
    1. I need some loop to keep running so I can check numbers to see if they are prime or not.
      - a while loop or
      - for loop with a condition that checks if I have the 10,001st prime
    2. Write a function to check if a number is prime?
*/

// ---------------------------------------------------------------------------

/**
 * Calculates a sequence of prime numbers and returns the prime number at given position.
 *
 * @param {number} position - Position in sequence
 * @return {number} - Prime number at given position
 *
 * @see - https://projecteuler.net/problem=7
 */

const getPrime = (position: number): number => {
  let found = 1 // Counted 2 as the first prime found

  const isPrime = (n: number): boolean => {
    if (n === 3) return true

    for (let i = 3; i * i <= n; i += 2)
      if (n % i === 0) return false

    return true
  }

  for (let i = 3; found <= position; i += 2) {
    if (isPrime(i)) found++
    if (found === position) return i
  }

  return -1
}

export default getPrime