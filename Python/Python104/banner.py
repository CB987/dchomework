message = input("So what's your big announcement?")
width = (len(message) + 2)
row = 0
while row <= 3:
    if row == 0 or row == 2:
        print("*" * (width + 2), end = "")
    elif row == 1:
        print("* " + message + " *", end = "")  
    row += 1
    print()   