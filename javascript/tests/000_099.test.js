const solutions = require('../src/000_099')

// ---------------------------------------------------------------------------
// Problem 001: Multiples of 3 and 5

const { sumOfMultiplesOf3And5 } = solutions

test('Problem 001: Multiples of 3 and 5', () => {
  const n = 1000
  expect(sumOfMultiplesOf3And5(n)).toBe(233168)
})

// ---------------------------------------------------------------------------
// Problem 002: Even Fibonacci Numbers

const { sumOfEvenFib } = solutions

test('Problem 002: Even Fibonacci Numbers', () => {
  const maxValue = 4000000
  expect(sumOfEvenFib(maxValue)).toBe(4613732)
})

// ---------------------------------------------------------------------------
// Problem 003: Largest Prime Factor

const { largestPrimeFactor } = solutions

xtest('Problem 003: Largest Prime Factor', () => {
  const n = 600851475143
  expect(largestPrimeFactor(n)).toBe(6857)
})

// ---------------------------------------------------------------------------
// Problem 004: Largest Palindrome Product

const { largestPalindromeProduct } = solutions

xtest('Problem 004: Largest Palindrome Product', () => {
  expect(largestPalindromeProduct(2)).toBe(9009)
  expect(largestPalindromeProduct(3)).toBe(906609)
})
