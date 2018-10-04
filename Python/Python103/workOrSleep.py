day = int(input ("Day (0-6)? "))
if day in range(1,6):
    print("Go to work")
elif day == 0 or day == 6:
    print("Sleep in yay")
else:
    print("Day not within range")    