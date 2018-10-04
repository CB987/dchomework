space = int(input("How many rows high should the pyramid be?"))

row = 0

while row < (space+2):
    print(" "*(space-1)+("*"*(2*row+1)))
    row += 1
    space -= 1
print()

