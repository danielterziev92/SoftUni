users_input = input()
forces = dict()
while users_input != "Lumpawaroo":
    if " | " in users_input:
        users_input = users_input.split(" | ")
        force_side = users_input[0]
        force_user = users_input[1]
        if force_side not in forces.keys():
            forces[force_side] = list()
        is_name_in_a_side = False
        for side in forces.keys():
            if force_user in forces[side]:
                is_name_in_a_side = True
        if not is_name_in_a_side:
            forces[force_side].append(force_user)
    elif " -> " in users_input:
        users_input = users_input.split(" -> ")
        force_user = users_input[0]
        force_side = users_input[1]
        if force_side not in forces.keys():
            forces[force_side] = list()
        is_user_in_force = False
        for side in forces.keys():
            if force_user in forces[side]:
                is_user_in_force = True
        if is_user_in_force:
            for side in forces.keys():
                if force_user in forces[side]:
                    forces[side].remove(force_user)
        forces[force_side].append(force_user)
        print(f"{force_user} joins the {force_side} side!")
    users_input = input()


for force, users in forces.items():
    if users:
        force_users_count = len(users)
        print(f"Side: {force}, Members: {force_users_count}")
        for user in users:
            print(f"! {user}")