def number_letter_counts(limit)
    letter_count = 0
    result = (1..limit).to_a.map do |number|
        number.in_words.gsub(/\s/, "")
    end
    result
    #letter_count
end

p number_letter_counts(1000)