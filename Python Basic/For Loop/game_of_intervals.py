count_people = int(input())
point = 0
zero_nine = 0
ten_nineteen = 0
twenty_twentynine = 0
thirty_thirtynine = 0
forty_fifty = 0
invalid_numbers = 0
def percent(part, whole):
    return 100 * float(part)/float(whole)
for count_people in range(count_people):
    each_move = int(input())
    if 0 <= each_move <= 9:
        point = point+ (each_move*0.2)
        zero_nine += 1
    elif 10 <= each_move <= 19:
        point = point+ (each_move*0.3)
        ten_nineteen += 1
    elif 20 <= each_move <= 29:
        point = point+ (each_move*0.4)
        twenty_twentynine += 1
    elif 30 <= each_move <= 39:
        point += 50
        thirty_thirtynine += 1
    elif 40 <= each_move <= 50:
        point +=(100)
        forty_fifty += 1
    else:
        point /= 2
        invalid_numbers += 1
point_zero_nine = percent(zero_nine, count_people+1)
point_ten_nineteen = percent(ten_nineteen, count_people+1)
point_twenty_twentynine = percent(twenty_twentynine, count_people+1)
point_thirty_thirtynine = percent(thirty_thirtynine, count_people+1)
point_forty_fifty = percent(forty_fifty, count_people+1)
point_invalid_numbers = percent(invalid_numbers, count_people+1)
print(f'{point:.2f}')
print(f'From 0 to 9: {point_zero_nine:.2f}%')
print(f'From 10 to 19: {point_ten_nineteen:.2f}%')
print(f'From 20 to 29: {point_twenty_twentynine:.2f}%')
print(f'From 30 to 39: {point_thirty_thirtynine:.2f}%')
print(f'From 40 to 50: {point_forty_fifty:.2f}%')
print(f'Invalid numbers: {point_invalid_numbers:.2f}%')