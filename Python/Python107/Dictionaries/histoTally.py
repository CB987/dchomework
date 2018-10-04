sentence = input("Sentence me: ").lower()
sentenceList = sentence.split(" ")
wordCount = {}

for word in sentenceList:   
    if word not in wordCount:
        wordCount[word] = 1 
    elif word in wordCount:
        wordCount[word] += 1    


x = len(wordCount) 
while x > 0:      #until down to 0
    for word in wordCount: #got through each key in the dictionary
        if wordCount[word] == x:  #if the value is equal to the value of x
            print(word, wordCount[word])  #print it
        x -= 1
 #start with the vaue of x and go through each value to find the one that matches, then decrement x




#Alex's code
# split sentence into list 
# find how many of each same as 
# commonWord = []
# highest = max(histogram.values())   #max function
# while len(common_words) < 3: