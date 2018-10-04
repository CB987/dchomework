# $ python letter_histogram.py
# Please enter a word: banana
# {'a': 3, 'b': 1, 'n': 2}

word = input("Word me: ")

histogram = {} #empty dictionary

for letter in word:   #iterate through word
    if letter not in histogram: #then check against letters in the dictionary. if not already in there,
        histogram[letter] = 1 #add each letter to histogram dictionary with value of 1
    elif letter in histogram: #if the letter matches one already in the histogram key,
        histogram[letter] += 1    # +1 the the value

# histogram[letter] = histogram.get(letter, 0) +1 #Greg's code of .get method

print(histogram)
