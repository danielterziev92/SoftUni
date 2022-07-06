the_numbers = input().split(" ")
reversed_numbers = list()
for _ in range(len(the_numbers)):
    reversed_numbers.append(the_numbers.pop())
print(" ".join(reversed_numbers))
