

def no_repeats(year_start, year_end)
    (year_start..year_end).to_a.select { |year| no_repeat?(year) }
end

def no_repeat?(year)
    string = year.to_s
    string === string.split('').uniq.join('')
end

def letter_count(str)
    result = {}
    str.gsub(/\s+/, "").each_char do |char|
        result.include?(char) ? result[char] += 1 : result[char] = 1
    end
    result    
end

#####################################

def ordered_vowel_words(str)
   str.split(' ').select { |word| ordered_vowel_word?(word) }.join(' ')
end

def ordered_vowel_word?(str)
    str.scan(/[aeiou]/) == str.scan(/[aeiou]/).sort
end

#####################################

def morse_encode(str)
    result = []
    str.split(' ').each do |word|
       result.push(morse_encode_word(word)) 
    end
    result.join('  ')
end

def morse_encode_word(word)
    letter_to_morse_code = {
        "a" => ".-",
        "b" => "-...",
        "c" => "-.-.",
        "d" => "-..",
        "e" => ".",
        "f" => "..-.",
        "g" => "--.",
        "h" => "....",
        "i" => "..",
        "j" => ".---",
        "k" => "-.-",
        "l" => ".-..",
        "m" => "--",
        "n" => "-.",
        "o" => "---",
        "p" => ".--.",
        "q" => "--.-",
        "r" => ".-.",
        "s" => "...",
        "t" => "-",
        "u" => "..-",
        "v" => "...-",
        "w" => ".--",
        "x" => "-..-",
        "y" => "-.--",
        "z" => "--.."
    }
    
    result = ""
    word.each_char do |char|
        result << letter_to_morse_code[char] << " "
    end
    result.rstrip
end

#####################################

def word_unscrambler(word, dictionary)
    word_array = get_letter_array(word)
    dictionary.select { |lookup| get_letter_array(lookup) == word_array }
end

def get_letter_array(word)
   word.split('').sort
end