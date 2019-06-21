def largest_palindrome_product
    palindromes = []
    (100..999).to_a.reverse_each do |num1|
        (100..999).to_a.reverse_each do |num2|
            palindromes << num1 * num2 if (num1 * num2).to_s == (num1 * num2).to_s.reverse
        end
    end
    palindromes.sort[-1]
end

p largest_palindrome_product == 906609