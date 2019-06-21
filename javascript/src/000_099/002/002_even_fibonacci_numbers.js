"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------
var sumOfEvenFib = function () { return 1; };
var fib = function (n) {
    /*
      This object is used to store calculated fibonacci numbers using the step number and fibonacci number as key-value pairs.
      ex. { 0: 1, 1: 1, 2: 3 }
    */
    var cache = {};
    if (n < 2)
        return 1;
    if (cache[n])
        return cache[n];
};
exports.default = sumOfEvenFib;
