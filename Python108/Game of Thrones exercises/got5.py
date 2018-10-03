#How many are Valyrian?
from characters import characters

valyrian = 0

for peopleCulture in characters:
    if peopleCulture["culture"] == "Valyrian":
        valyrian += 1

print(valyrian)

with open("got5.txt", "w") as got5:
    got5.write("%d of the characters are Valyrian." % valyrian)