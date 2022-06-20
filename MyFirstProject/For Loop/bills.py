mounth = int(input())
water = 0
internet = 0
electricity_list = []
other = 0
for mounth in range(mounth):
    electricity = float(input())
    electricity_list.append(electricity)
    water += 20
    internet += 15
    other += (electricity + 20 + 15) * 1.2
total_electr = sum(electricity_list)
avarage = (total_electr + water + internet + other) / (mounth+1)
print(f'Electricity: {sum(electricity_list):.2f} lv')
print(f'Water: {water:.2f} lv')
print(f'Internet: {internet:.2f} lv')
print(f'Other: {other:.2f} lv')
print(f'Average: {avarage:.2f} lv')