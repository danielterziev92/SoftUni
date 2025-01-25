the_string = input().replace(', ',' ').split()
the_list = []
count = 0
for i in the_string:
    if i == '0':
        count += 1
    else:
        the_list.append(int(i))
for i in range(count):
    the_list.append(0)
print(the_list)