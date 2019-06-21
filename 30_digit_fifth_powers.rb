def digit_fifth_powers(range)
    result = (range).to_a.select { |number| sum_of_digits_powers?(number) }
    result.reduce(0, :+)
end

def sum_of_digits_powers?(num, power=5)
    array = num.to_s.split('').map { |digit_str| digit_str.to_i ** power }
    array.reduce(0, :+) == num
end

p digit_fifth_powers(2..999999) == 443839