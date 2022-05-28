def multipliaction_numbers(one: int, two: int, three: int):
    if any([three > 0 > one and two < 0, two > 0 > one and three < 0, one > 0 > two and three < 0,
            one > 0 and two > 0 and three > 0]):
        return 'positive'
    elif any([one < 0, two < 0, three < 0]):
        return 'negative'
    elif any([one == 0, two == 0, three == 0]):
        return 'zero'


number_one = int(input())
number_two = int(input())
number_three = int(input())
print(multipliaction_numbers(number_one, number_two, number_three))
