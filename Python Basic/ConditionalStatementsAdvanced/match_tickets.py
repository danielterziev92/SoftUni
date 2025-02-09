budget = float(input())
type_ticket = input()
number_people = int(input())
class Tickets:
    vip = 499.99
    normal = 249.99
if 0 < number_people <= 4:
    budget *= 0.25
elif 5 <= number_people <= 9:
    budget *= 0.4
elif 10 <= number_people <= 25:
    budget *= 0.5
elif 25 <= number_people <= 49:
    budget *= 0.6
elif number_people >= 50:
    budget *= 0.75
ticket_price = getattr(Tickets, type_ticket.lower())
total_amount = ticket_price * number_people
if total_amount < budget:
    print(f'Yes! You have {budget - total_amount:.2f} leva left.')
else:
    left_amount = total_amount - budget
    print(f'Not enough money! You need {left_amount:.2f} leva.')