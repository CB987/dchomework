# start = ["3", "27", "900"] #list
# x = 0 
# while x < len(start): #
#     if x > int(start[0]):
#         del(start[0])
#     x += 1
# print(start)  
#not working

# guven list
start = [3, 27, 900] 
largest = 0
x = 0
while x < len(start):
    if start[x] > largest:
        largest = start[x]
    x += 1
print(largest)        