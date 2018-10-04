day = int(input ("Day (0-6)? "))
weekDays = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
for i in weekDays.keys():
  if day == i:
     print(weekDays[i])
else:
  print("Number not within range.")    
     
     
# if day == 0:
    # print("Sunday")
# elif day == 1:
    # print("Monday")
# elif day == 2:
    # print("Tuesday")
# elif day == 3:
    # print("Wednesday")
# elif day == 4:
    # print("Thursday")
# elif day == 5:
    # print("Friday")
# elif day == 6:
    # print("Saturday")