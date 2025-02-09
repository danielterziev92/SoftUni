count_tones = int(input())
minibus_cargo = []
truck_cargo = []
train_cargo = []
all_cargo = []
price_minibus = 200
price_truck = 175
price_train = 120
for count_tones in range(count_tones):
    count_shipments = int(input())
    all_cargo.append(count_shipments)
    if count_shipments <= 3:
        minibus_cargo.append(count_shipments)
    elif 4 <= count_shipments <= 11:
        truck_cargo.append(count_shipments)
    elif count_shipments >= 12:
        train_cargo.append(count_shipments)
count = sum(all_cargo)
average = ((sum(minibus_cargo)*price_minibus) + (sum(truck_cargo)*price_truck) + (sum(train_cargo)*price_train)) / count
persent_minibus_cargo = sum(minibus_cargo) / count * 100
persent_truck_cargo = sum(truck_cargo) / count * 100
persent_train_cargo = sum(train_cargo) / count * 100
print(f'{average:.2f}')
print(f'{persent_minibus_cargo:.2f}%')
print(f'{persent_truck_cargo:.2f}%')
print(f'{persent_train_cargo:.2f}%')