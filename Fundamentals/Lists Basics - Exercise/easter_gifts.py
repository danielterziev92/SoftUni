def out_of_stock(a_gift, all_gifts):
    for i in range(len(all_gifts)):
        if a_gift == all_gifts[i]:
            all_gifts[i] = 'None'
    return all_gifts


def required(a_gift, an_index, all_gifts):
    all_gifts[an_index] = a_gift
    return all_gifts


def just_in_case(a_gift, all_gifts):
    last_index = -1
    all_gifts[last_index] = a_gift
    return all_gifts


gifts = input().split(' ')
commands = input().split(' ')
while commands[0] != 'No' and commands[1] != 'Money':
    current_command = commands[0]
    if 'OutOfStock' == current_command:
        current_gift = commands[1]
        out_of_stock(a_gift=current_gift, all_gifts=gifts)
    elif 'Required' == current_command:
        new_gift = commands[1]
        index = int(commands[2])
        if 0 <= index < len(gifts):
            required(a_gift=new_gift, an_index=index, all_gifts=gifts)
    elif 'JustInCase' == current_command:
        new_gift = commands[1]
        just_in_case(a_gift=new_gift, all_gifts=gifts)
    commands = input().split(' ')
for i in range(len(gifts)):
    if gifts[i] != 'None':
        print(gifts[i], end=' ')