/*
  Link: https://projecteuler.net/problem=4

  Problem 4: Largest Palindrome Product

  My solution will need:
    - a way to generate the highest number with specified digits
    - a way to see if a number is palindrome

  The steps I am thinking about taking are:
    1. Have two variables, each equal to the highest number possible with given digit parameter.
    2. Have some for loop that continues as long as both numbers' digits are equal to given digit parameter.
    3. Multiply numbers and check if product is palindrome.
      - If true, check if
      - If false, decrement either number 1 or number 2 using the variable that tracks which number to decrement.
    4. Keep checking until a result is found or if loop ends.
*/

// ---------------------------------------------------------------------------

/**
 * This function finds the largest palindrome made from the product of two numbers of given digits.
 *
 * @param {number} digit - Number of digits
 * @return {number} - Largest palindrome product, return 0 if no palindrome found
 */

const largestPalindromeProduct = (digit: number): number => {
  const highest: any = { 2: 99, 3: 999 }
  const lowest: any = { 2: 10, 3: 100 }

  let max: number = 0
  let product: number

  for (let i = highest[digit]; i > lowest[digit]; --i) {
    for (let j = i; j > lowest[digit]; --j) {
      product = i * j
      if (isPalindrome(product) && product > max) max = product
    }
  }

  return max
}

// ---------------------------------------------------------------------------

/**
 * This function checks if a number is a palindrome.
 *
 * @param {number} n - Number to be checked
 * @return {boolean} - If true, number is a palindrome
 */

const isPalindrome = (n: number): boolean =>
  n.toString() === n.toString().split('').reverse().join('')


export default largestPalindromeProduct