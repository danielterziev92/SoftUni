import os


def zip_files(file_paths, zip_filename):
    """
    Compresses specified files into a ZIP archive using the Linux 'zip' command.

    Args:
        file_paths: List of file paths to be compressed.
        zip_filename: Name of the ZIP archive to create.
    """
    files_str = " ".join(file_paths)

    command = f"zip -r {zip_filename} {files_str} > /dev/null 2>&1"

    os.system(command)


if __name__ == "__main__":
    files_to_zip = [
        "./main_app",
        "./orm_skeleton",
        "./caller.py",
        "./manage.py",
        "./requirements.txt"
    ]

    current_directory = '_'.join(os.path.basename(os.getcwd()).lower().split())
    zip_filename = f"{current_directory}.zip"

    zip_files(files_to_zip, zip_filename)

    print(f"Compression completed. ZIP archive saved as: {zip_filename}")
