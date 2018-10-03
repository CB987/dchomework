n = int(input("What number should we factor? "))
print(n)
x = 0
while x <= n:
    x += 1
    if n % x == 0:
        print(x)
        