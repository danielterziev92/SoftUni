loop_number = int(input())
for number in range(loop_number):
    current_string = input()
    if ',' in current_string or '.' in current_string or '_' in current_string:
        print(f"{current_string} is not pure!")
        continue
    print(f"{current_string} is pure.")
