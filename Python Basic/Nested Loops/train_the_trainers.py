data = int(input())
presentation = input()
total_amount_score = 0
count_loop = 0
while presentation != 'Finish':
    number = int(data)
    total_score = 0
    for i in range(number):
        score = float(input())
        total_score += score
    print(f'{presentation} - {total_score/number:.2f}.')
    total_amount_score += total_score/number
    count_loop += 1
    presentation = input()
print(f"Student's final assessment is {total_amount_score/count_loop:.2f}.")