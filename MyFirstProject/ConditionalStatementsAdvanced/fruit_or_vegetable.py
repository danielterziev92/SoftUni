name = input()
fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes']
vegetable = ['tomato', 'cucumber', 'pepper', 'carrot']
if name in fruit:
    print('fruit')
elif name in vegetable:
    print('vegetable')
else:
    print('unknown')