#input a string, and return the Caesar cipher of the string
#test with "lbh zhfg hayrnea jung lbh unir yrnearq"
phrase = (input("Speak friend and enter: ")).lower() #ask user for input and render lowercase
# #you know i really want to use a dictionary or 2 to solve this
# # can i do it with the alphabet as a string?
alphabet = "abcdefghijklmnopqrstuvwxyz" #let's see... so here's my alphabet
index = 0 #start at the beginning of the word
while index < len(phrase):
    alphadex = 0
    
    while phrase[index] != alphabet[alphadex]: 
        alphadex +=1
        if alphadex >= len(alphabet):
            print(phrase[index], end="")
            break

        
    if alphadex != 26 and (alphadex + 13) > 25:
            print(alphabet[alphadex-13], end = "")
    elif (alphadex + 13) <= 25:
            print(alphabet[alphadex + 13], end = "")
        
            # make a new variable and if the alphadex + 13 is greater than the length of the alphabet, subtract the length of the alphabet and then use that index 
        # alphadex += 1
    index += 1
print()

#not working

#given a phrase, return in written in index+13 of the alphabet
# phrase = input("string?")
# alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
# index = 0
# listIndex = 0
# while listIndex < len(alphabet):
#     if phrase[index] == alphabet[listIndex]:
#         if (listIndex + 13) > 25:
#             print(alphabet[listIndex-13])
#         else:
#                 print(alphabet[listIndex + 13])
#     else:
#         print(phrase[index])   
#         listIndex += 1
#     index +=1


# Chris':
phrase = ""
alphabet = "abc"

rotateBey = 13
