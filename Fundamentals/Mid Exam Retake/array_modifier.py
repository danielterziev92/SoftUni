matrix = list(map(int, input().split(" ")))
line = input()
while line != 'end':
    line = line.split(" ")
    command = line[0]
    if command == 'swap':
        index_1 = int(line[1])
        index_2 = int(line[2])
        matrix[index_1], matrix[index_2] = matrix[index_2], matrix[index_1]
    elif command == 'multiply':
        index_1 = int(line[1])
        index_2 = int(line[2])
        matrix[index_1] *= matrix[index_2]
    elif command == 'decrease':
        matrix = list([el-1 for el in matrix])

    line = input()
result = ', '.join([str(el) for el in matrix])
print(result)
