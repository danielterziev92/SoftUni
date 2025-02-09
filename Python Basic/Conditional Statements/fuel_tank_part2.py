type = input()
qty = float(input())
club_cart = input()
type_of_fuel = ["Diesel", "Gasoline", "Gas"]
diesel = 2.33
gasoline = 2.22
gas = 0.93

def final_discount(fuel,discount):
    if qty < 20:
        fuel = fuel - discount
        print(f'{fuel * qty:.2f} lv.')
    elif qty >= 20 and qty <= 25:
        new_discount = fuel - discount
        last_discount = new_discount - (new_discount*0.08)
        fuel = last_discount
        print(f'{fuel * qty:.2f} lv.')
    elif qty > 25:
        new_discount = fuel - discount
        last_discount = new_discount - (new_discount * 0.1)
        fuel = last_discount
        print(f'{fuel * qty:.2f} lv.')

def calculate(fuel,qty,discount,club_cart):
    if club_cart == 'Yes':
        final_discount(fuel, discount)
    elif club_cart == 'No':
        discount = 0
        final_discount(fuel,discount)

if type == 'Diesel':
    fuel = diesel
    discount = 0.12
    calculate(fuel,qty,discount,club_cart)
elif type == 'Gasoline':
    fuel = gasoline
    discount = 0.18
    calculate(fuel, qty, discount, club_cart)
elif type == 'Gas':
    fuel = gas
    discount = 0.08
    calculate(fuel, qty, discount, club_cart)