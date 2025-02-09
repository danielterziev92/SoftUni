current_string = input()
stack = [ch for ch in current_string]
reversed_string = ""
for _ in range(len(stack)):
    reversed_string += stack.pop()
print(reversed_string)