def is_first_win(first_move: list, second_move: list, third_move: list):
    if first_move.count('1') == 3 or second_move.count('1') == 3 or third_move.count('1') == 3:
        return True
    elif first_move[0] == '1':
        if second_move[1] == '1' and third_move[2] == '1':
            return True
        elif second_move[0] == '1' and third_move[0] == '1':
            return True
    elif first_move[1] == '1':
        if second_move[1] == '1' and third_move[1] == '1':
            return True
    elif first_move[2] == '1':
        if second_move[1] == '1' and third_move[0] == '1':
            return True
        elif second_move[2] == '1' and third_move[2] == '1':
            return True

def is_second_win(first_move: list, second_move: list, third_move: list):
    if first_move.count('2') == 3 or second_move.count('2') == 3 or third_move.count('2') == 3:
        return True
    elif first_move[0] == '2':
        if second_move[1] == '2' and third_move[2] == '2':
            return True
        elif second_move[0] == '2' and third_move[0] == '2':
            return True
    elif first_move[1] == '2':
        if second_move[1] == '2' and third_move[1] == '2':
            return True
    elif first_move[2] == '2':
        if second_move[1] == '2' and third_move[0] == '2':
            return True
        elif second_move[2] == '2' and third_move[2] == '2':
            return True


first_move = input().split(' ')
second_move = input().split(' ')
third_move = input().split(' ')
if bool(is_first_win(first_move=first_move, second_move=second_move, third_move=third_move)):
    print('First player won')
elif bool(is_second_win(first_move=first_move, second_move=second_move, third_move=third_move)):
    print('Second player won')
else:
    print('Draw!')