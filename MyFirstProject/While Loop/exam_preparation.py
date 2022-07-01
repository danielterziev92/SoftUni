count_row = int(input())
total_score = 0
last_job = ''
count_total_job = 0
count_bad_score = 0
name_job = input()
while name_job != 'Enough':
    score = int(input())
    if score <= 4:
        count_bad_score += 1
        if count_bad_score >= count_row:
            print(f'You need a break, {count_bad_score} poor grades.')
            exit()
    last_job = name_job
    count_total_job += 1
    total_score += score
    name_job = input()
print(f'Average score: {total_score/count_total_job:.2f}')
print(f'Number of problems: {count_total_job}')
print(f'Last problem: {last_job}')