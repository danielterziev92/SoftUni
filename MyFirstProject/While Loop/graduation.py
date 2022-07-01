name = input()
annual_assessment = float(input())
all_assessment = []
while annual_assessment > 1 and len(all_assessment) <= 12:
    if annual_assessment == 2:
        print(f'{name} has been excluded at {len(all_assessment)+1} grade')
    all_assessment.append(annual_assessment)
    if len(all_assessment) >= 12:
        break
    annual_assessment = float(input())
print(f'{name} graduated. Average grade: {sum(all_assessment)/len(all_assessment):.2f}')