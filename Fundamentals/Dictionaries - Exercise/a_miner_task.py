commands = input()
count = 0
resources = dict()
last_resource = ""
quantity = 0
while commands != "stop":
    if count % 2 == 0:
        last_resource = commands
        if last_resource not in resources:
            resources[last_resource] = 0
    elif count % 2 != 0:
        quantity = int(commands)
        resources[last_resource] += quantity

    count += 1
    commands = input()
for resource, value in resources.items():
    print(f"{resource} -> {value}")