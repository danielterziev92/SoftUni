days = int(input()) # дни за кражби
plunder_for_a_day = int(input()) # кражби за ден
expected_plunder = float(input()) # очаквана плячка
total_plunder = 0
for day in range(1, days+1):
    total_plunder += plunder_for_a_day
    if day % 3 == 0:
        total_plunder += plunder_for_a_day * 0.5
    if day % 5 == 0:
        total_plunder -= total_plunder * 0.3
if total_plunder >= expected_plunder:
    print(f"Ahoy! {total_plunder:.2f} plunder gained.")
else:
    plunder_percentage = (total_plunder / expected_plunder) * 100
    print(f"Collected only {plunder_percentage:.2f}% of the plunder.")
