def even_fibonacci_numbers
    array = []
    n = 1
    while fib(n) < 4_000_000
        array << fib(n)
        n += 1
    end
    array.select { |number| number.even? }.reduce(:+)
end

def fib_memo(n, memo)
    memo[n] ||= fib_memo(n-1, memo) + fib_memo(n-2, memo)
end

def fib(n)
    fib_memo(n, [0, 1])
end

p even_fibonacci_numbers == 4613732