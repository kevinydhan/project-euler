
limit = 10000

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

primes = numbers.select { |x| x != -1 }

puts "Prime numbers between 2 and #{limit} are: #{primes}"
puts "Found #{primes.length} prime numbers."