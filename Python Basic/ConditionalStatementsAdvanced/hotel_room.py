mount = input()
count = int(input())

fist_mount = ['May', 'October']
second_mount = ['June', 'September']
third_mount = ['July', 'August']

if mount in fist_mount:
    studio = 50
    apartment = 65
    if 7 < count <= 14:
        studio = studio - studio*0.05
    elif count > 14:
        studio = studio - studio*0.3
        apartment = apartment - apartment*0.1
elif mount in second_mount:
    studio = 75.2
    apartment = 68.7
    if count > 14:
        apartment = apartment - apartment * 0.1
        studio = studio - studio * 0.2
elif mount in third_mount:
    studio = 76
    apartment = 77
    if count > 14:
        apartment = apartment - apartment * 0.1

print(f'Apartment: {count * apartment:.2f} lv.')
print(f'Studio: {count * studio:.2f} lv.')