#Create a histogram of the houses (it's the "allegiances" key)

from characters import characters

# wordCount = {}

# for word in sentenceList:   
#     if word not in wordCount:
#         wordCount[word] = 1 
#     elif word in wordCount:
#         wordCount[word] += 1 

#"allegiances" is a list
for person in characters:
    allegiances = {}
    for i in ['allegiances']:
        if i not in allegiances:
            allegiances['allegiances'] = 1
        elif i in ['allegiances']:
            allegiances['allegiances'] += 1

print(allegiances)
