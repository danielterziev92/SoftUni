count_buy_chrysanthemums = int(input())
count_buy_rose = int(input())
count_buy_tulips = int(input())
season = input()
is_holiday = input()
if season == 'Spring' or season == 'Summer': # Пролет и Лято
    chrysanthemums = 2
    rose = 4.1
    tulips = 2.5
elif season == 'Autumn' or season == 'Winter': # Есен и Зима
    chrysanthemums = 3.75
    rose = 4.5
    tulips = 4.15
total_amount = count_buy_tulips * tulips + count_buy_rose * rose + count_buy_chrysanthemums * chrysanthemums
total_count = count_buy_tulips + count_buy_rose + count_buy_chrysanthemums
arranging = 2
if is_holiday == 'Y':
    total_amount *= 1.15
if count_buy_tulips > 7 and season == 'Spring':
    total_amount *= 0.95
elif count_buy_rose >= 10 and season == 'Winter':
    total_amount *= 0.9
if total_count > 20:
    total_amount *= 0.8
final_amount = total_amount + arranging
print(f'{final_amount:.2f}')