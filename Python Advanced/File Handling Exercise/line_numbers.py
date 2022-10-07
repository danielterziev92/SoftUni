from string import punctuation

punctuations = set(punctuation)
input_file_path = './line_numbers-text.txt'
output_file_path = './line_numbers-output.txt'
with open(input_file_path, 'r') as file, open(output_file_path, 'w') as output_file:
    for index, line in enumerate(file):
        letter_count = 0
        punctuation_marks_count = 0
        for ch in line.strip():
            if ch.isalpha():
                letter_count += 1
            elif ch in punctuations:
                punctuation_marks_count += 1
        output_file.write(f'Line {index + 1}: {line.strip()} ({letter_count}) ({punctuation_marks_count})\n')
