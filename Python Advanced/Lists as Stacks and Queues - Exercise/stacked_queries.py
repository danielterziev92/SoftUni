def push(number):
    stack.append(number)


def delete():
    stack.pop()


def print_max():
    max_number = max(stack)
    return max_number


def print_min():
    min_number = min(stack)
    return min_number


range_number = int(input())
stack = []
for _ in range(range_number):
    command = input()
    if command.startswith("1 "):
        command = command.split(" ")
        current_number = int(command[1])
        push(current_number)
    elif command.startswith("2") and stack:
        delete()
    elif command.startswith("3") and stack:
        print(print_max())
    elif command.startswith("4") and stack:
        print(print_min())
stack = list(map(str, stack))
print(", ".join(stack[::-1]))