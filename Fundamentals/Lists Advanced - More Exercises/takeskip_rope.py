line = list(map(str, input()))
numbers = list()
non_number = list()
for i in range(len(line)):
    if line[i].isdigit():
        numbers.append(line[i])
    else:
        non_number.append(line[i])
numbers = list(map(int, numbers))
take_list = [numbers[number] for number in range(len(numbers)) if number % 2 == 0]
pass_list = [numbers[number] for number in range(len(numbers)) if number % 2 != 0]
result = list()
index = 0
while non_number:
    if take_list and pass_list:
        if index % 2 == 0:
            for i in range(take_list.pop(0)):
                if non_number:
                    result.append(non_number[0])
                    non_number.pop(0)
        else:
            for i in range(pass_list.pop(0)):
                if non_number:
                    non_number.pop(0)
        index += 1
    else:
        break
final_result = "".join(result)
print(final_result)
