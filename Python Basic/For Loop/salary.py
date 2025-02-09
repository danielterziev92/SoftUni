open_tab = int(input())
salary = int(input())
Facebook = 150
Instagram = 100
Reddit = 50
for open_tab in range(open_tab):
    if salary <= 0:
        break
    website = input()
    if website == 'Facebook':
        salary -= Facebook
    elif website == 'Instagram':
        salary -= Instagram
    elif website == 'Reddit':
        salary -= Reddit
if salary > 0:
    print(f'{salary:.0f}')
else:
    print('You have lost your salary.')