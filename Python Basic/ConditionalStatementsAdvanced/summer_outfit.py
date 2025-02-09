degree = int(input())
time_of_day = input()

def Morning(degree):
    if 10 <= degree <= 18:
        outfit = "Sweatshirt"
        shoes = "Sneakers"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif 19 <= degree <= 24:
        outfit = "Shirt"
        shoes = "Moccasins"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif degree >= 25:
        outfit = "T-Shirt"
        shoes = "Sandals"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")

def Afternoon(degree):
    if 10 <= degree <= 18:
        outfit = "Shirt"
        shoes = "Moccasins"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif 19 <= degree <= 24:
        outfit = "T-Shirt"
        shoes = "Sandals"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif degree >= 25:
        outfit = "Swim Suit"
        shoes = "Barefoot"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")

def Evening(degree):
    if 10 <= degree <= 18:
        outfit = "Shirt"
        shoes = "Moccasins"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif 19 <= degree <= 24:
        outfit = "Shirt"
        shoes = "Moccasins"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")
    elif degree >= 25:
        outfit = "Shirt"
        shoes = "Moccasins"
        print(f"It's {degree} degrees, get your {outfit} and {shoes}.")

if time_of_day == 'Morning':
    Morning(degree)
elif time_of_day == 'Afternoon':
    Afternoon(degree)
elif time_of_day == 'Evening':
    Evening(degree)