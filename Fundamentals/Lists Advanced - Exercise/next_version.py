current_version = input().split('.')
next_version = str(int(''.join(current_version)) + 1)
print(f'{next_version[0]}.{next_version[1]}.{next_version[2]}')
