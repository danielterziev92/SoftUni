def make_digit(matrix:list):
    for i in range(len(matrix)):
        matrix[i] = int(matrix[i])
    return matrix

def is_exchange(index: int, matrix: list):
    if index >= len(matrix) or index < 0:
        print('Invalid index')
    else:
        matrix.extend(matrix[:index+1])
        del matrix[:index+1]
        return matrix


def is_max(matrix:list, current_command):
    max_index = []
    max_value = []
    if current_command == 'even':
        for i in range(len(matrix)):
            if matrix[i] % 2 == 0:
                max_value.append(matrix[i])
        for i in range(len(matrix)):
            if matrix[i] % 2 == 0 and matrix[i] == max(max_value):
                max_index.append(i)
    elif current_command == 'odd':
        for i in range(len(matrix)):
            if matrix[i] % 2 != 0:
                max_value.append(matrix[i])
        for i in range(len(matrix)):
            if matrix[i] % 2 != 0 and matrix[i] == max(max_value):
                max_index.append(i)
    if not max_index:
        print('No matches')
    else:
        print(max(max_index))


def is_min(matrix:list, current_command):
    min_index = []
    min_value = []
    if current_command == 'even':
        for i in range(len(matrix)):
            if matrix[i] % 2 == 0:
                min_value.append(matrix[i])
        for i in range(len(matrix)):
            if matrix[i] % 2 == 0 and matrix[i] == min(min_value):
                min_index.append(i)
    elif current_command == 'odd':
        for i in range(len(matrix)):
            if matrix[i] % 2 != 0:
                min_value.append(matrix[i])
        for i in range(len(matrix)):
            if matrix[i] % 2 != 0 and matrix[i] == min(min_value):
                min_index.append(i)
    if not min_index:
        print('No matches')
    else:
        print(max(min_index))


def first_count(count:int, current_command:str, matrix:list):
    new_matrix = []
    if count == 0:
        print(new_matrix)
    else:
        if current_command == 'even':
            for i in range(len(matrix)):
                if matrix[i] % 2 == 0:
                    new_matrix.append(matrix[i])
        elif current_command == 'odd':
            for i in range(len(matrix)):
                if matrix[i] % 2 != 0:
                    new_matrix.append(matrix[i])
        if len(new_matrix) > count:
            print(new_matrix[:count])
        else:
            print(new_matrix)


def last_count(count:int, current_command:str, matrix:list):
    new_matrix = []
    if count == 0:
        print(new_matrix)
    else:
        if current_command == 'even':
            for i in range(len(matrix)):
                if matrix[i] % 2 == 0:
                    new_matrix.append(matrix[i])
        elif current_command == 'odd':
            for i in range(len(matrix)):
                if matrix[i] % 2 != 0:
                    new_matrix.append(matrix[i])
        if len(new_matrix) > count:
            print(new_matrix[-count:])
        else:
            print(new_matrix)


matrix = input().split(' ')
make_digit(matrix=matrix)
command = input().split(' ')
while command[0] != 'end':
    if 'exchange' in command[0]:
        index = int(command[1])
        is_exchange(index=index, matrix=matrix)
    elif 'max' in command[0]:
        max_index = []
        current_command = command[1]
        is_max(matrix=matrix, current_command=current_command)
    elif 'min' in command[0]:
        min_index = []
        current_command = command[1]
        is_min(matrix=matrix, current_command=current_command)
    elif 'first' in command[0]:
        count = int(command[1])
        current_command = command[2]
        if count > len(matrix):
            print('Invalid count')
        else:
            first_count(count=count, current_command=current_command, matrix=matrix)
    elif 'last' in command[0]:
        count = int(command[1])
        current_command = command[2]
        if count > len(matrix):
            print('Invalid count')
        else:
            last_count(count=count, matrix=matrix, current_command=current_command)
    command = input().split(' ')
print(matrix)