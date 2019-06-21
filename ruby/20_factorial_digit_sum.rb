def factorial_digit_sum(n)
    sum = 0
    factorial(n).to_s.each_char do |digit|
        sum += digit.to_i
    end
    sum
end

def factorial(n)
    (1..n).reduce(:*) || 1
end

p factorial_digit_sum(100) == 648