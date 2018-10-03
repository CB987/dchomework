#What actor plays "Hot Pie" (and don't use IMDB)?
from characters import characters


for actors in characters:
    if actors["name"] == "Hot Pie":
        print(actors["playedBy"])
        break
    
with open("got6.txt", "w") as got6:
    got6.write("In the acclaimed HBO series, the character of \"Hot Pie\" is played by actor Ben Hawkey.")


