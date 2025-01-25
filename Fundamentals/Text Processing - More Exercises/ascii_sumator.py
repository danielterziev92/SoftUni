start_index = input()
end_index = input()
total_sum = [ord(ch) for ch in input() if ord(ch) in range(ord(start_index), ord(end_index))]
print(sum(total_sum))