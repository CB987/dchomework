from characters import characters
# print(characters[0])
# print(characters[0]["name"])
deadPeople = 0
for people in characters:
    if people["died"] != "":
        deadPeople += 1

print(deadPeople)

with open("got1.txt", "w") as got1:
    got1.write("%d are dead" % deadPeople)

     