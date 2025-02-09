expression = input()
stack = list()

for i in range(len(expression)):
    ch = expression[i]
    if ch == "(":
        stack.append(i)
    elif ch == ")" and stack:
        start_index = stack.pop()
        end_index = i + 1
        print(expression[start_index:end_index])