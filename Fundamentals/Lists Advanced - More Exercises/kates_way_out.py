def remove_all_hashtag(matrix: list):
    for row in matrix:
        row = [i for i in row if i != '#']
    return matrix


number_of_row = int(input())
maze_rows = list()
for _ in range(number_of_row):
    maze_rows.append(list(map(str, input())))

for row in maze_rows:
    for index in range(len(row)):
        if row[index] == " ":
            row[index] = index

remove_all_hashtag(maze_rows)
print(maze_rows)