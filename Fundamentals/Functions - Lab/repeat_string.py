def create_new_string(the_string: str, the_counter: int):
    return the_string * the_counter


current_string = input()
current_count = int(input())
print(create_new_string(the_string=current_string, the_counter=current_count))