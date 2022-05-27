def smallest_number(number: list):
    return min(number)


number_one = int(input())
number_two = int(input())
number_three = int(input())
all_numbers = [number_one, number_two, number_three]
print(smallest_number(number=all_numbers))
