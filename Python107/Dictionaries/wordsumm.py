sentence = input("Sentence me: ").lower()
sentenceList = sentence.split(" ")
wordCount = {}

for word in sentenceList:   
    if word not in wordCount:
        wordCount[word] = 1 
    elif word in wordCount:
        wordCount[word] += 1    

print(wordCount)


