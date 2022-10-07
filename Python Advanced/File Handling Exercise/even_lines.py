input_file_path = './even_lines-text.txt'
output_file_path = 'even_lines-output.txt'
symbols = ['-', ',', '.', '!', '?']
with open(input_file_path, 'r') as file, open(output_file_path, 'w') as output_file:
    for index, line in enumerate(file):
        if index % 2 != 0:
            continue
        result = ' '.join(line.split()[::-1])
        for symbol in symbols:
            result = result.replace(symbol, '@')
        output_file.write(result + '\n')
