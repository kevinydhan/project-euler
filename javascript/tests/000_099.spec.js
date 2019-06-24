const solutions = require('../src/000_099')

// ---------------------------------------------------------------------------
// Problem 001: Multiples of 3 and 5

const { sumOfMultiplesOf3And5 } = solutions

describe('Problem 001: Multiples of 3 and 5', () => {
  xtest('The sum of all multiples of 3 and 5 below 1,000 is 233,168.', () => {
    expect(sumOfMultiplesOf3And5(1000)).toBe(233168)
  })
})

// ---------------------------------------------------------------------------
// Problem 002: Even Fibonacci Numbers

const { sumOfEvenFib } = solutions

describe('Problem 002: Even Fibonacci Numbers', () => {
  xtest('The sum of even-valued terms below 4,000,000 is 4,613,732.', () => {
    expect(sumOfEvenFib(4000000)).toBe(4613732)
  })
})

// ---------------------------------------------------------------------------
// Problem 003: Largest Prime Factor

const { largestPrimeFactor } = solutions

describe('Problem 003: Largest Prime Factor', () => {
  xtest('The largest prime factor of 5 is 5.', () => {
    expect(largestPrimeFactor(5)).toBe(5)
  })

  xtest('The largest prime factor of 14 is 7.', () => {
    expect(largestPrimeFactor(14)).toBe(7)
  })

  xtest('The largest prime factor of 25 is 5.', () => {
    expect(largestPrimeFactor(25)).toBe(5)
  })

  xtest('The largest prime factor of 13,195 is 29.', () => {
    expect(largestPrimeFactor(13195)).toBe(29)
  })

  xtest('The largest prime factor of 600,851,475,143 is 6,857.', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857)
  })
})

// ---------------------------------------------------------------------------
// Problem 004: Largest Palindrome Product

const { largestPalindromeProduct } = solutions

describe('Problem 004: Largest Palindrome Product', () => {
  xtest('The largest palindrome made from the product of two 2-digit numbers is 9,009.', () => {
    expect(largestPalindromeProduct(2)).toBe(9009)
  })

  xtest('The largest palindrome made from the product of two 3-digit numbers is 906,609.', () => {
    expect(largestPalindromeProduct(3)).toBe(906609)
  })
})

// ---------------------------------------------------------------------------
// Problem 005: Smallest Multiple

const { smallestMultiple } = solutions

describe('Problem 005: Smallest Multiple', () => {
  xtest('The smallest positive number evenly divisible by all of the numbers from 1 to 20 is 232,792,560.', () => {
    expect(smallestMultiple(1, 20)).toBe(232792560)
  })
})

// ---------------------------------------------------------------------------
// Problem 006: Sum Square Difference

const { sumSquareDifference } = solutions

describe('Problem 006: Sum Square Difference', () => {
  xtest('The difference between the sum of the squares of the first 10 natural numbers and the square of the sum is 2,640.', () => {
    expect(sumSquareDifference(10)).toBe(2640)
  })

  xtest('The difference between the sum of the squares of the first 100 natural numbers and the square of the sum is 25,164,150.', () => {
    expect(sumSquareDifference(100)).toBe(25164150)
  })
})

// ---------------------------------------------------------------------------
// Problem 007: 10,001st Prime

const { getPrime } = solutions

describe('Problem 007: 10,000st Prime', () => {
  test('The 6th prime number is 13.', () => expect(getPrime(6)).toBe(13))

  test('The 10,001st prime number is 104,743.', () =>
    expect(getPrime(10001)).toBe(104743))
})

// ---------------------------------------------------------------------------
// Problem 010: Summation of Primes

const { summationOfPrimes } = solutions

describe('Problem 010: Summation of Primes', () => {
  xtest('The sum of all of the primes below 10 is 17.', () => {
    expect(summationOfPrimes(10)).toBe(17)
  })

  xtest('The sum of all the primes below 2,000,000 is 142,913,828,922.', () => {
    expect(summationOfPrimes(2000000)).toBe(142913828922)
  })
})
