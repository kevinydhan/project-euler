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
  test('The largest prime factor of 5 is 5.', () => {
    expect(largestPrimeFactor(5)).toBe(5)
  })

  test('The largest prime factor of 14 is 7.', () => {
    expect(largestPrimeFactor(14)).toBe(7)
  })

  test('The largest prime factor of 25 is 5.', () => {
    expect(largestPrimeFactor(25)).toBe(5)
  })

  test('The largest prime factor of 13,195 is 29.', () => {
    expect(largestPrimeFactor(13195)).toBe(29)
  })

  test('The largest prime factor of 600,851,475,143 is 6,857.', () => {
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
