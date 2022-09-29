def fill_the_box(height, length, width, *args):
    general_cub = height * length * width
    for numb in args:
        if numb == 'Finish':
            break
        general_cub -= numb

    if general_cub > 0:
        return f'There is free space in the box. You could put {general_cub} more cubes.'
    else:
        return f'No more free space! You have {abs(general_cub)} more cubes.'


# print(fill_the_box(2, 8, 2, 2, 1, 7, 3, 1, 5, "Finish"))
# print(fill_the_box(5, 5, 2, 40, 11, 7, 3, 1, 5, "Finish"))
print(fill_the_box(10, 10, 10, 40, "Finish", 2, 15, 30))
