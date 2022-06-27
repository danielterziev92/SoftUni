count_money_by_one_leva = int(input())
count_money_by_two_leva = int(input())
count_money_by_five_leva = int(input())
total_amount = int(input())
for all_count_by_one_leva in range(count_money_by_one_leva+1):
    for all_count_by_two_leva in range(count_money_by_two_leva+1):
        for all_count_by_five_leva in range(count_money_by_five_leva+1):
            if ((all_count_by_one_leva*1)+(all_count_by_two_leva*2)+(all_count_by_five_leva*5)) == total_amount:
                print(f'{all_count_by_one_leva} * 1 lv. + {all_count_by_two_leva} * 2 lv. + {all_count_by_five_leva} * 5 lv. = {total_amount} lv.')