#Given a string, return reversed
string = input("Speak friend and enter. ") #prompt user for string
index = len(string) #this variable starts out as equal to the length of the string
while index > 0: #as long as the variable is above 0 
    print(string[index-1]) #it should print each character
    index -= 1 #incrementing by -1 to go backwards