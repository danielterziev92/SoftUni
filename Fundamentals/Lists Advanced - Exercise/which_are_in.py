first_sequences = input().split(', ')
second_sequences = input()
result = [word for word in first_sequences if word in second_sequences]
print(result)