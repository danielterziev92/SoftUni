pocket_day = float(input()) # джобните на Тереза на ден
sales_profits = float(input()) # парите, които тя печели на ден от продажби
cost_for_period = float(input()) # разходите на Тереза за целия период
cost_present = float(input()) # цената на подаръка
total_pocket_day = 5 * pocket_day
total_sales_profits = 5 * sales_profits
total_save_money = total_pocket_day + total_sales_profits
final_amount = total_save_money - cost_for_period
if final_amount > cost_present:
    print(f'Profit: {final_amount:.2f} BGN, the gift has been purchased.')
else:
    print(f'Insufficient money: {cost_present-final_amount:.2f} BGN.')