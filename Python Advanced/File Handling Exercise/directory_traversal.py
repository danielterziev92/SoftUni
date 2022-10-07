from os import walk
from os.path import splitext


def get_direction_file_name(path_dir):
    result = {}
    for root, dirs, files in walk(path_dir):
        for file in files:
            name, extension = splitext(file)
            if extension not in result:
                result[extension] = []
            result[extension].append(name)
    return result


test_path = './Resources'
file_path = './directory_traversal-report.txt'
all_extensions = get_direction_file_name(test_path)
with open(file_path, 'w') as file:
    for extension, files in sorted(all_extensions.items(), key=lambda x: x[0]):
        file.write(extension + '\n')
        for curr_file in files:
            file.write(f'- - - {curr_file}{extension}\n')
