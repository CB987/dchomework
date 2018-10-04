list1 = [2, 4, 6, 8, 10]
list2 = [1, 2, 3, 4, 5]
result = []
x = 0

while x < len(list1):
    result.append(list1[x]*list2[x])
    x += 1

print(result)
 
