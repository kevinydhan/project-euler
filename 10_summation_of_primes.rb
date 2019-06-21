def get_primes(limit)
    # numbers between 2 and limit
    numbers = Array.new( limit - 2 ) { |x| x + 2 } # 2, 3, 4, ..., limit

    maxToBeChecked = Math.sqrt( limit ).to_i

    for i in 0..numbers.length - 1

        number = numbers[i]

        if number == -1 then next end # next -> equivalent to "continue"
        if number > maxToBeChecked then break end

        for x in (number + number - 2..numbers.length - 1).step(number)

            numbers[x] = -1
        end
    end
    numbers.select { |x| x != -1 }
end


def summation_of_primes(limit)
    prime_array = get_primes(limit)

    prime_array.reduce(:+)
end

def is_prime?(num)
    potential_factor = 1
        
    while potential_factor < num
        return false if num % potential_factor == 0 && potential_factor != 1
        potential_factor += 1
    end
    true    
end

p summation_of_primes(2_000_000) == 142913828922

"The approximate time this function took to complete was 1.507909519 seconds."