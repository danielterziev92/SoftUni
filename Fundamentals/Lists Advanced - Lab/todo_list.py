to_do_notes = ['' for i in range(11)]
command = input()
while command != 'End':
    command = command.split('-')
    index = int(command[0])
    value = command[1]
    to_do_notes[index] = value
    command = input()

print([note for note in to_do_notes if note != ''])
