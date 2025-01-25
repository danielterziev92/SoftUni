def add_command(lessons_title, lessons):
    if lessons_title not in lessons:
        lessons.append(lessons_title)
    return lessons


def insert_command(lessons_title, index, lessons):
    if not index >= len(lessons) and lessons_title not in lessons:
        lessons.insert(index, lessons_title)
    return lessons


def remove_commnad(lessons_title, lessons):
    if lessons_title in lessons:
        if f"{lessons_title}-Exercise" in lessons:
            lessons.remove(f"{lessons_title}-Exercise")
        lessons.remove(lessons_title)
    return lessons


def swap_command(first_title, second_title, lessons):
    if first_title in lessons and second_title in lessons:
        index_of_first_lessons_title = lessons.index(first_title)
        index_of_second_lessons_title = lessons.index(second_title)
        lessons[index_of_first_lessons_title], lessons[index_of_second_lessons_title] = \
            lessons[index_of_second_lessons_title], lessons[index_of_first_lessons_title]
        if f'{first_title}-Exercise' in lessons:
            lessons.remove(f'{first_title}-Exercise')
            lessons.insert(index_of_second_lessons_title + 1, f'{first_title}-Exercise')
        elif f'{second_title}-Exercise' in lessons:
            lessons.remove(f'{second_title}-Exercise')
            lessons.insert(index_of_first_lessons_title + 1, f'{second_title}-Exercise')
        return lessons


def exercise_command(lessons_title, lessons):
    lessons_title_exercise = f"{lessons_title}-Exercise"
    if lessons_title in lessons:
        index = lessons.index(lessons_title)
        if lessons_title_exercise not in lessons:
            lessons.insert(index + 1, lessons_title_exercise)
    elif lessons_title not in lessons:
        lessons.append(lessons_title)
        if lessons_title_exercise not in lessons:
            lessons.append(lessons_title_exercise)
    return lessons


lessons = input().split(', ')
line = input()
while line != "course start":
    line = line.split(':')
    command = line[0]
    if command == 'Add':
        lessons_title = line[1]
        add_command(lessons_title, lessons)
    elif command == 'Insert':
        lessons_title = line[1]
        index = int(line[2])
        insert_command(lessons_title,index, lessons)
    elif command == 'Remove':
        lessons_title = line[1]
        remove_commnad(lessons_title, lessons)
    elif command == 'Swap':
        first_lessons_title = line[1]
        second_lessons_title = line[2]
        swap_command(first_lessons_title, second_lessons_title, lessons)
    elif command == 'Exercise':
        lessons_title = line[1]
        exercise_command(lessons_title, lessons)
    line = input()

for index, name_lessons in enumerate(lessons, 1):
    print(f"{index}.{name_lessons}")