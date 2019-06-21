# Extremely slow

Inf = Float::INFINITY

def smallest_multiple
    # number = 20
    # loop do
    #     return number if is_evenly_divisible?(number)
    #     number += 20
    # end
    (20..Inf).step(20) do |num|
        return num.to_i if is_evenly_divisible?(num)
    end
end    

def is_evenly_divisible?(num, limit=20)
    !(1..limit).to_a.any? { |factor| num % factor != 0 }
end


p smallest_multiple == 232792560