count_students = int(input())
poor_list = []
middle_list = []
good_list = []
excellent_list = []
all_evaluation = []
def percent(part, whole):
    return 100 * float(part)/float(whole)
for count_students in range(count_students):
    evaluation = float(input()) # оценка от изпита
    if 2 <= evaluation <= 2.99:
        poor_list.append(evaluation)
        all_evaluation.append(evaluation)
    elif 3 <= evaluation <= 3.99:
        middle_list.append(evaluation)
        all_evaluation.append(evaluation)
    elif 4 <= evaluation <= 4.99:
        good_list.append(evaluation)
        all_evaluation.append(evaluation)
    elif 5 <= evaluation:
        excellent_list.append(evaluation)
        all_evaluation.append(evaluation)
count_poor = len(poor_list)
count_middle = len(middle_list)
count_good = len(good_list)
count_excellent = len(excellent_list)
persent_poor =  percent(count_poor, count_students+1)
persent_middle = percent(count_middle, count_students+1)
persent_good = percent(count_good, count_students+1)
persent_excellent = percent(count_excellent, count_students+1)
average = sum(all_evaluation) / (count_students+1)
print(f'Top students: {persent_excellent:.2f}%')
print(f'Between 4.00 and 4.99: {persent_good:.2f}%')
print(f'Between 3.00 and 3.99: {persent_middle:.2f}%')
print(f'Fail: {persent_poor:.2f}%')
print(f'Average: {average:.2f}')