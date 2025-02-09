excursion = float(input())
qty_puzzle = int(input())
qty_talking_doll = int(input())
qty_teddy_bear = int(input())
qty_minion = int(input())
qty_truck = int(input())
puzzle = 2.6
talking_doll = 3
teddy_bear = 4.1
minion = 8.2
truck = 2
total_qti = qty_puzzle + qty_talking_doll + qty_teddy_bear + qty_minion + qty_truck
if total_qti >= 50:
    profit = qty_puzzle * puzzle + qty_talking_doll * talking_doll + qty_teddy_bear * teddy_bear + qty_minion * minion + qty_truck * truck
    total_profit = profit - profit * 0.25
else:
    total_profit = qty_puzzle * puzzle + qty_talking_doll * talking_doll + qty_teddy_bear * teddy_bear + qty_minion * minion + qty_truck * truck

rent = total_profit * 0.1
final_profit = total_profit - rent

if final_profit >= excursion:
    print(f'Yes! {final_profit - excursion:.2f} lv left.')
else:
    print(f'Not enough money! {excursion - final_profit:.2f} lv needed.')