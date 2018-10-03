# create a countdown from 10 to 0, then prints a message
n = 10 #start point of countdown
while n >= 0: # set duration of countdown
    print(n) #printing the number
    n -=1 #Incrementing down, sends back up to print. loops until condition is false
    if n < 0: #instructing when to print the message
        print("May the Force Be With You") #print the message