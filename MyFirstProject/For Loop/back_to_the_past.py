inherited_money = float(input())
year = int(input())
years_old = []
even_year_spent_money = 0
odd_year_spent_money = 0
money_spent = 0
for year in range (1800, year+1):
    years_old.append(year - 1782)
    if year % 2 == 0:
        inherited_money -= 12000
    else:
        inherited_money -= 12000 + (50 * years_old[-1])
if inherited_money >= 0:
    print(f'Yes! He will live a carefree life and will have {inherited_money:.2f} dollars left.')
else:
    print(f'He will need {abs(inherited_money):.2f} dollars to survive.')