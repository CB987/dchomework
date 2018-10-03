int1 = 1
while int1 < 11:
    int2 = 1
    while int2 < 11:
        print((int1), ("x"), (int2), (" = "), (int1*int2))
        # print("%d x %d = %d" % (int1, int2, (int1*int2)))
        int2 += 1
    int1 +=  1   
print()    