#Produce a list characters with the last name "Targaryen"
from characters import characters

targaryen = 0


for people in characters:
    splitName = people["name"].split(" ")
    if len(splitName) > 1:
        if splitName[(len(splitName))-1] == "Targaryen":
            targaryen += 1
print(targaryen)

#solution was that i already had called 'people' in splitName so
#i didn't need to call people[splitName] but i did need to call 
# [splitName][(len(splitName))-1] to get the last index of the splitname list