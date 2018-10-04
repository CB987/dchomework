# create countdown, user can choose where to start, but not > 20

n = int(input("From what number should start our countdown? Please, no higher than 20.")) #getting user input
while n >= 0:
    if n > 20:
        print("Dude, are you insane?! Choose something under 20.")
        n = int(input("From what number should start our countdown? Please, no higher than 20.")) 
    else:
        print(n)
        n -=1