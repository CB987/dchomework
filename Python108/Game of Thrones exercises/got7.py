
# How many characters are *not* in the tv show?
from characters import characters


# def startsWith(letter):
#     count = 0
#     for person in characters:
#         if person["name"][0] == letter:
#             count += 1
#     return count
notTV = 0

for people in characters:
    onShow = people["tvSeries"]
    if onShow == ['']:
        notTV += 1

print(notTV)        #solution: can't search for empty string if what 
#you are actually looking for is an empty LIST or list containing empty string

with open("got7.txt", "w") as got7:
    got7.write("The number of characters that appear in the books but not on the show is not 0 or 2124, so it must be %s." % notTV)