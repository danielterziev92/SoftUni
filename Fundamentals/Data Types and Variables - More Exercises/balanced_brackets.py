numb = int(input())
last_value = []
for i in range(numb):
    value = input()
    if '(' in value and '(' not in last_value:
        last_value.append('(')
    elif ')' in value and ')' not in last_value:
        last_value.append(')')
    if ')' in last_value and '(' in last_value:
        last_value.clear()
if ')' in last_value and '(' in last_value or bool(last_value) is False:
    print('BALANCED')
else:
    print('UNBALANCED')
