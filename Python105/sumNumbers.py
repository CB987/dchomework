numberList = [3, 27, 900] #given a list of numbers
x = 0 #set index to 0
sum = 0 #variable to hold sum
while x < len(numberList):  # iterate through the list
    sum += numberList[x] # add each value to the variable holding the sum
    x += 1 #increment index plus one each time
print(sum) #print the final sum (outside of the loop so it just prints the final)