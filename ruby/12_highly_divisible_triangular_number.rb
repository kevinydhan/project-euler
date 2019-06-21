def highly_divisible_triangular_number
    (1..7).each do |num|
        find_number_of_divisors(memoize(num)) if find_number_of_divisors(memoize(num)).length > 5
    end    
end

def find_triangle_number(nth_term)
    (1..nth_term).to_a.reduce(0, :+)
end

def find_number_of_divisors(number)
    (1..number).to_a.select { |potential_factor| number % potential_factor == 0 }
end    

def memoize(nth_term)
    cache = {}
    unless cache.include?(nth_term)
        cache[nth_term] = find_triangle_number(nth_term)
    end
    cache[nth_term]
end    

p highly_divisible_triangular_number