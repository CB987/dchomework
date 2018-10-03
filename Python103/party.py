yearToCheck = 1999
partyMessage = "Party like it\'s %d"

birthYear = int(input("Birth Year? "))
isClassic = birthYear <= yearToCheck

if isClassic:
    print(partyMessage % yearToCheck)
else:
    print(partyMessage % birthYear)    