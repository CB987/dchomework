from characters import characters
#Who has the most titles?
# length_dict = {key: len(value) for key, value in characters["titles"].items()}
# length_key = len(d['titles'])

#Chris' code
# count the number of things in a list using the length function
titleLength = []
for person in characters:
    # get the length of titles key\
    numTitles = len(person["titles"])
    titleLength.append(numTitles)

mostTitles = max(titleLength) #use max function to have the highest
print(mostTitles)

indexOfRecord = titleLength.index(mostTitles)

personMostTitles = characters[indexOfRecord]
print(personMostTitles["name"])


    #then call the "name" of that person

    #NOT WORKING

with open("got4.txt","w") as got4:
    got4.write("%s has the most titles." %  personMostTitles["name"])

    #Ed's code
    #detect who has the most titles and print that
# current_most = ''
# the_most_titles = 0
# for person in characters.characters:
#     if len(person['titles']) > the_most_titles:
#         current_most = person['name']
#         the_most_titles = len(person['titles'])
#         print('%s has the most titles with %d' % (current_most, the_most_titles))
        