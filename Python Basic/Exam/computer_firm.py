count_comp = int(input())
total_raiting = 0
total_sales = 0
for model in range(count_comp):
    count_models = input()
    raiting = int(count_models[-1])
    total_raiting += raiting
    possible_sales = count_models [:-1] + ''
    if raiting == 2:
        sales = 0
        total_sales += sales * int(possible_sales)
    elif raiting == 3:
        sales = 0.5
        total_sales += sales * int(possible_sales)
    elif raiting == 4:
        sales = 0.7
        total_sales += sales * int(possible_sales)
    elif raiting == 5:
        sales = 0.85
        total_sales += sales * int(possible_sales)
    elif raiting == 6:
        sales = 1
        total_sales += sales * int(possible_sales)
print(f'{total_sales:.2f}')
print(f'{total_raiting/count_comp:.2f}')