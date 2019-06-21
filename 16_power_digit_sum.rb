def power_digit_sum
    sum = 0
    result = (2 ** 1000).to_s.split('').to_a.each do |digit_str| 
        sum += digit_str.to_i
    end
    sum
end

p power_digit_sum == 1366