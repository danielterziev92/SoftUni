budget = float(input())
qty_video_cart = int(input())
qty_processor = int(input())
qty_ram = int(input())
video_cart = 250
processor = 0.35
ram = 0.1
video_cart_amount = qty_video_cart * video_cart
amount = qty_video_cart * video_cart + ( video_cart_amount * processor * qty_processor )+ ( video_cart_amount * ram * qty_ram)
if qty_video_cart > qty_processor:
    discount = amount * 0.15
    total_amount = amount - discount
else:
    total_amount = amount

if budget >= total_amount :
    print(f'You have {budget - total_amount:.2f} leva left!')
elif total_amount > budget :
    print(f'Not enough money! You need {abs(budget - total_amount):.2f} leva more!')