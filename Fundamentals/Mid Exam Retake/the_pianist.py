number_of_pieces = int(input())
music_collection = list()
for _ in range(number_of_pieces):
    music_collection.append(list(input().split('|')))
line = input()
while line != 'Stop':
    line = line.split('|')
    command = line[0]
    if command == 'Add':
        pieces = line[1]
        composer = line[2]
        key = line[3]
        if pieces not in [piece[0] for piece in music_collection]:
            music_collection.append([pieces, composer, key])
            print(f"{pieces} by {composer} in {key} added to the collection!")
        else:
            print(f"{pieces} is already in the collection!")
    elif command == "Remove":
        pieces = line[1]
        pieces_index = 0
        if pieces in [piece[0] for piece in music_collection]:
            for piece in music_collection:
                if piece[0] == pieces:
                    music_collection.remove(piece)
                    break
            print(f"Successfully removed {pieces}!")
        else:
            print(f"Invalid operation! {pieces} does not exist in the collection.")
    elif command == "ChangeKey":
        pieces = line[1]
        key = line[2]
        if pieces in [piece[0] for piece in music_collection]:
            for piece in music_collection:
                if piece[0] == pieces:
                    piece[2] = key
                    break
            print(f"Changed the key of {pieces} to {key}!")
        else:
            print(f"Invalid operation! {pieces} does not exist in the collection.")

    line = input()
for piece in music_collection:
    print(f"{piece[0]} -> Composer: {piece[1]}, Key: {piece[2]}")