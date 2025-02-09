packege_pencil = int(input())
packege_marker = int(input())
board_cleaner = int(input())
discount = int(input())
amount_packege_pencil = 5.8 * packege_pencil
amount_packege_marker = 7.2 * packege_marker
amount_boarder_cleaner = 1.2 * board_cleaner
amount_money = amount_packege_pencil + amount_packege_marker + amount_boarder_cleaner
amount_discount = discount / 100
total_amount = amount_money -  amount_money * amount_discount
print(total_amount)