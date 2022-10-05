file_path = './text.txt'
try:
    file = open(file_path)
    print('File found')
except FileNotFoundError:
    print('File not found')
