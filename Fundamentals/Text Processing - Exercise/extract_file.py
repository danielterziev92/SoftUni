file_path = input().split("\\")
file_name = file_path[-1].split(".")[0]
file_extension = file_path[-1].split(".")[-1]
print(f"File name: {file_name}\nFile extension: {file_extension}")