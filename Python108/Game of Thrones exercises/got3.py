#How many characters names start with "Z"?
from characters import characters

zNames = 0

# for peopleNames in characters:
#     if peopleNames["name"][0] == "Z" and peopleNames["name"] != "":
#         zNames += 1

# Chris' function

def startsWith(letter):
    count = 0
    for person in characters:
        if person["name"][0] == letter:
            count += 1
    return count

print(startsWith("Z"))

with open("got3.txt", "w") as got3:
    got3.write("A mere %d characters' names start with \'Z\'." % zNames)