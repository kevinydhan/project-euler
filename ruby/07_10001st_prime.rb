# Please don't run. Extremely slow.

Inf = Float::INFINITY

def ten_thousand_and_first_prime
    prime_list = []
    
    (2..Inf).each do |number|
        if is_prime?(number)
            prime_list << number
            p "#{number} is prime."
        end    
        return prime_list[-1] if prime_list.length > 10000
    end
end 
    
def is_prime?(num)
    !(1...num).to_a.any? { |potential_factor| num % potential_factor == 0 && potential_factor != 1 }
end

p ten_thousand_and_first_prime == 104743