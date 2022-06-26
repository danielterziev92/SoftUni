chats = list()
while True:
    command = input()
    if command.startswith("Chat "):
        message = command.replace("Chat ", "")
        chats.append(message)
    elif command.startswith("Delete "):
        message = command.replace("Delete ", "")
        if message in chats:
            chats.remove(message)
    elif command.startswith("Edit "):
        command = command.split()
        message = command[1]
        new_message = command[2]
        if message in chats:
            index = chats.index(message)
            chats[index] = new_message
    elif command.startswith("Pin "):
        message = command.replace("Pin ", "")
        if message in chats:
            index = chats.index(message)
            new_message = chats.pop(index)
            chats.append(new_message)
    elif command.startswith("Spam "):
        command = command.split()
        for message in command[1:]:
            chats.append(message)
    elif command.startswith("end"):
        break
for message in chats:
    print(message)
