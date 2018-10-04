from characters import characters

#How many characters names start with "A"?

aNames = 0

for peopleNames in characters: #*within* the list of characters
    if peopleNames["name"][0] == "A" and peopleNames["name"] != "": # access next level item by name ("name")
        aNames += 1

print(aNames)

with open("got2.txt","w") as got2:
    got2.write("%d characters' names start with \'A.\'" % aNames)