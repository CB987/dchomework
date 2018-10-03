#print a 5x5 square of *s

row = 0 
while row < 5:
    column = 0
    while column < 5:
        print("*", end = "")
        column += 1
    row += 1    
    print()