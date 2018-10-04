# given a string, return in leetspeak
# make sure to render everything lowercase first
name = (input("Speak friend and enter: ")).lower() #prompt user for a string
position = 0 #start at index 0
while position < len(name): #iterate through the length of the string
    if name[position] == "a": #replace these characters with as many
        print("4", end = "")  # as i felt like typing in
    elif name[position] == "e":
        print("3", end = "")    #making sure that it would print in a 
    elif name[position] == "k":  #continuous string, not line by line
        print("|<", end = "")
    elif name[position] == "o":
        print("0", end = "")
    elif name[position] == "s":
        print("5", end = "")
    elif name[position] == "u":
        print("(_)", end = "")
    elif name[position] == "x":
        print("><", end = "")
    elif name[position] == "z":
        print("2", end = "")
    else: #if it's not any of those
        print(name[position].upper(), end = "") #just print it, in upper case
    position += 1 #iterate through string one index at a time
print() # and finish by giving a newline