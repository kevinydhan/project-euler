def distinct_powers
    result = []
    (2..100).each do |a|
        (2..100).each do |b|
            result << a ** b unless result.include?(a ** b)
        end
    end
    result.length
end

p distinct_powers ==9183

"The approximate time this function took to complete was 12.400207075 seconds."