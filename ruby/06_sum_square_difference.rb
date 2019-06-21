def sum_of_squares(limit)
    result = (1..limit).to_a.map { |num| num ** 2 }
    result.reduce(0, :+)
end

def sum_square_difference(limit)
    (1..limit).to_a.reduce(0, :+) ** 2 - sum_of_squares(limit)
end
    

p sum_square_difference(100) == 25164150