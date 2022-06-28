total_square_meter = float(input())
price_per_square_meter = 7.61
discount = 18 / 100
final_price_for_service = total_square_meter * price_per_square_meter
final_discount_for_service = final_price_for_service * discount
total_price = final_price_for_service - final_discount_for_service
print(f'The final price is: {total_price} lv.')
print(f'The dicount is: {final_discount_for_service} lv.')