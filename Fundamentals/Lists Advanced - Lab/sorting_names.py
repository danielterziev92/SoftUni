all_names = input().split(', ')
all_names.sort(key=lambda name: (-len(name), name))
print(all_names)
