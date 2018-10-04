# height = int(input("How tall should the box be?"))
# width = int(input("How wide should the box be?"))
# row = 0
# column = 0
# for row == 0 or row == height:
#     while column < width:
#         print("*", end = "")
#         column += 1
#     row += 1
#     print()
# if row > 0 and row < height:
#     while column < width:
#         print("*", " "*(width - 2), "*", end = "")
#         column += 1
#     row += 1    
#     print()

#print entire first row
#for rows in between 1 and height, print 1st position and last position
#print entire last row


# while row < height:
#     column = 0
#     while column < width:
#         if column == 0:
#             print("*", end = "")
#             column += 1
#         elif column == 0 or column == width or row == 0 or row == height:
#             print("*", end = "")
#         else:
#             print(" ", end = "")    
#         column += 1    
#     row += 1    
#     print()
# height = int(input("How tall should the box be?"))
# width = int(input("How wide should the box be?"))
# row = 0
# column = 0
# while row < height:
#     # while row > 0 or row < height:
#     if row == 0 or row == height-1:
#         print("*" * width, end = "")
#     elif column == 0 and row < height:
#         print("*", end="")    
#     elif column == width-1 and row  < height:
#         print("*", end="") 
#     else:
#         print(" ", end = "")  
#         column += 1    
#     row += 1
    # print()   


#THIS ONE WORKS EXCEPT FOR WONKY SPACING. edit: SPACING FIXED BITCHES!
height = int(input("How tall should the box be?"))
width = int(input("How wide should the box be?"))
row = 0 #col = 0
while row < height:
    if row == 0 or row == height-1: #or col == 0 or col == (height-1)
        print("*" * width, end = "")
    elif row < height: #else:
        print("*" + " " * (width-2) + "*", end = "")  #print (" ", end="")
    row += 1 # col +=1
    print()   

