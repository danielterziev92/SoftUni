username = input()
password = input()
current_password = input()
while password != current_password:
    current_password = input()
print(f'Welcome {username}!')