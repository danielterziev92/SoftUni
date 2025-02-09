climbers = int(input())
musala = 0
monblan = 0
kilimandjaro = 0
k2 = 0
everest = 0
all_people = 0
for climbers in range(climbers):
    people = int(input())
    if people <= 5:
        musala += people
        all_people += people
    elif 6 <= people <= 12:
        monblan += people
        all_people += people
    elif 13 <= people <= 25:
        kilimandjaro += people
        all_people += people
    elif 26 <= people <= 40:
        k2 += people
        all_people += people
    elif people >= 41:
        everest += people
        all_people += people
print(f'{(musala/all_people)*100:.2f}%')
print(f'{(monblan/all_people)*100:.2f}%')
print(f'{(kilimandjaro/all_people)*100:.2f}%')
print(f'{(k2/all_people)*100:.2f}%')
print(f'{(everest/all_people)*100:.2f}%')