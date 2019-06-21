def special_pythagorean_triplet
    range = (1..1000)
    range.each do |a|
        range.each do |b|
            range.each do |c|
                if (a + b + c) == 1000 && is_pythagorean_triplet?(a, b, c)
                    puts "#{a} #{b} #{c}"
                    return a * b * c 
                end
            end
        end    
    end
end

def is_pythagorean_triplet?(a, b, c)
    (a ** 2) + (b ** 2) == (c ** 2) 
end

p special_pythagorean_triplet == 31875000