def largest_prime_factor(num)
    current_state = num

    while is_composite?(current_state)
        first_prime_factor = first_prime_factor(current_state)
        current_state /= first_prime_factor
    end
    current_state
end

def first_prime_factor(num)
    (1..num).each do |potential_prime_factor|
        return potential_prime_factor if !is_composite?(potential_prime_factor) && potential_prime_factor != 1 && num % potential_prime_factor == 0
    end
end

def is_composite?(num)
    (1..num).any? { |potential_factor| num % potential_factor == 0 && (potential_factor != 1 && potential_factor != num) }
end

p largest_prime_factor(600851475143) == 6857