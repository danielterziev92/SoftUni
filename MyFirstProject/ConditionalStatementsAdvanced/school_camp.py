season = input()
gender_group = input()
count_students = int(input())
count_nights = int(input())
price_for_nights = 0
sport = ''
if season == 'Winter':
    if gender_group == 'boys' or gender_group == 'girls':
        price_for_nights = 9.6
        if gender_group == 'boys':
            sport = 'Judo'
        elif gender_group == 'girls':
            sport = 'Gymnastics'
    elif gender_group == 'mixed':
        price_for_nights = 10
        sport = 'Ski'
elif season == 'Spring':
    if gender_group == 'boys' or gender_group == 'girls':
        price_for_nights = 7.2
        if gender_group == 'bous':
            sport = 'Tennis'
        elif gender_group == 'girls':
            sport = 'Athletics'
    elif gender_group == 'mixed':
        price_for_nights = 9.5
        sport = 'Cycling'
elif season == 'Summer':
    if gender_group == 'boys' or gender_group == 'girls':
        price_for_nights = 15
        if gender_group == 'boys':
            sport = 'Football'
        elif gender_group == 'girls':
            sport = 'Volleyball'
    elif gender_group == 'mixed':
        price_for_nights = 20
        sport = 'Swimming'
total_amount = price_for_nights * count_students * count_nights
if count_students >= 50:
    total_amount *= 0.5
elif 20 <= count_students < 50:
    total_amount *= 0.85
elif 10 <= count_students < 20:
    total_amount *= 0.95
print(f'{sport} {total_amount:.2f} lv.')