rows, columns = tuple(map(int, input().split(', ')))

matrix = []
for _ in range(rows):
    row = []
    line = input().split(', ')
    for data in line:
        row.append(int(data))
    matrix.append(row)

print(sum([sum(i) for i in matrix]))
print(matrix)
