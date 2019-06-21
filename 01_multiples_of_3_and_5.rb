def multiples_of_three_and_five(limit)
    result = (1...limit).to_a.select { |num| num % 3 == 0 || num % 5 == 0 }
    result.reduce(0, :+)
end

p multiples_of_three_and_five(1000) == 233168