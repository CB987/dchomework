height = int(input("How tall should the square be?"))
width = int(input("How wide should the square be?"))
row = 0
while row < height:
    column = 0
    while column < width:
        print("*", end = "")
        column += 1
    row += 1    
    print()