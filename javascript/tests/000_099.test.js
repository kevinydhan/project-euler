const solutions = require('../src/000_099')

// ---------------------------------------------------------------------------
// Problem 001: Multiples of 3 and 5

const { sumOfMultiplesOf3And5 } = solutions

xtest('Problem 001: Multiples of 3 and 5', () => {
  expect(sumOfMultiplesOf3And5(1000)).toBe(233168)
})

// ---------------------------------------------------------------------------
// Problem 002: Even Fibonacci Numbers

const { sumOfEvenFib } = solutions

xtest('Problem 002: Even Fibonacci Numbers', () => {
  expect(sumOfEvenFib(4000000)).toBe(4613732)
})

// ---------------------------------------------------------------------------
// Problem 003: Largest Prime Factor

const { largestPrimeFactor } = solutions

test('Problem 003: Largest Prime Factor', () => {
  expect(largestPrimeFactor(13195)).toBe(29)
  expect(largestPrimeFactor(600851475143)).toBe(6857)
})

// ---------------------------------------------------------------------------
// Problem 004: Largest Palindrome Product

const { largestPalindromeProduct } = solutions

xtest('Problem 004: Largest Palindrome Product', () => {
  expect(largestPalindromeProduct(2)).toBe(9009)
  expect(largestPalindromeProduct(3)).toBe(906609)
})
