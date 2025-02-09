money_for_the_trip = float(input())
available_money = float(input())
number_of_days_passed = 0
number_of_days_spend_money = 0
while available_money < money_for_the_trip:
    action = input()
    money = float(input())
    if action == 'spend':
        number_of_days_spend_money += 1
        number_of_days_passed += 1
        if money > available_money:
            available_money = 0
        else:
            available_money -= money
        if number_of_days_spend_money >= 5:
            print("You can't save the money.")
            print(f'{number_of_days_passed}')
            break
    elif action == 'save':
        available_money += money
        number_of_days_spend_money = 0
        number_of_days_passed += 1
if available_money >= money_for_the_trip:
    print(f'You saved the money for {number_of_days_passed} days.')