count_number = int(input())
number_p1 = [] # Под 200
number_p2 = [] # От 200 до 399
number_p3 = [] # От 400 до 599
number_p4 = [] # От 600 до 799
number_p5 = [] # Над 800
for count_number in range(count_number):
    number = int(input())
    if number < 200:
        number_p1.append(number)
    elif 200 <= number <= 399:
        number_p2.append(number)
    elif 400 <= number <= 599:
        number_p3.append(number)
    elif 600 <= number <= 799:
        number_p4.append(number)
    elif number >= 800:
        number_p5.append(number)
persent_p1 = (len(number_p1)/(count_number+1))*100
persent_p2 = (len(number_p2)/(count_number+1))*100
persent_p3 = (len(number_p3)/(count_number+1))*100
persent_p4 = (len(number_p4)/(count_number+1))*100
persent_p5 = (len(number_p5)/(count_number+1))*100
print(f'{persent_p1:.2f}%')
print(f'{persent_p2:.2f}%')
print(f'{persent_p3:.2f}%')
print(f'{persent_p4:.2f}%')
print(f'{persent_p5:.2f}%')