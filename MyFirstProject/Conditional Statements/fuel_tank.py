type = input()
qty = float(input())
type_of_fuel = ["Diesel","Gasoline","Gas"]
if type in type_of_fuel:
    if qty < 25:
        print(f'Fill your tank with {type.lower()}!')
    elif qty >= 25:
        print(f'You have enough {type.lower()}.')
else:
    print('Invalid fuel!')