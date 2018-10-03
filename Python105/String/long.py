#given a word, if it has double vowels, then add 3 more of the vowel
# something like if n == n-1 then insert n's value *3 more times?
word = input("The word? ").lower() #asking for user input word and putting in lowercase
position = 0 #starting at first letter of word
while position < len(word): #working through the length of the word
    if word[position] == word[position-1]: #if the letter in that index position is the same as the one bfore it
        if word[position] == "a" or word[position] == "e" or word[position] == "o": #and it's an a,e, or o (u and i don't get doubled and we don't care about consonants)
            print(word[position]*4, end = "") #then print that letter 4* (3* plus itself)
    else:
        print(word[position], end = "") #if it doesn't have any doubled letters, just print the letter as is
    position +=1 #increment through the string one letter at a time
print() #then return a newline