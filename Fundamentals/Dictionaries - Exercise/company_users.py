commands = input()
company = dict()
while commands != "End":
    commands = commands.split(" -> ")
    company_name = commands[0]
    employee_id = commands[1]
    if company_name not in company.keys():
        company[company_name] = list()
    if employee_id not in company[company_name]:
        company[company_name].append(employee_id)

    commands = input()
for company_name, employees in company.items():
    print(f"{company_name}")
    for employee in employees:
        print(f"-- {employee}")
