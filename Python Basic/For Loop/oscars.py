total_point = []
name = input()
point = float(input())
total_point.append(point)
count_evaluators = int(input())
for count_evaluators in range(count_evaluators):
    evaluators_name = input()
    evaluators_point = float(input())
    total_point.append((len(evaluators_name) * evaluators_point)/2)
    if sum(total_point) >= 1250.5:
        break
if sum(total_point) >= 1250.5:
    print(f'Congratulations, {name} got a nominee for leading role with {sum(total_point):.1f}!')
else:
    print(f'Sorry, {name} you need {1250.5 - sum(total_point):.1f} more!')