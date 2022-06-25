number = int(input())
# x1 + x2 + x3 = n
x1 = 0
x2 = 0
x3 = 0
count = 0
for x1 in range(0, number+1):
    for x2 in range(0, number+1):
        for x3 in range(0, number+1):
            if x1 + x2 + x3 == number:
                count += 1
print(count)