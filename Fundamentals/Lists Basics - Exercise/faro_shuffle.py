string_of_card = input().split(' ')
count_of_shuffles = int(input())
half = int(len(string_of_card)/2)
for i in range(count_of_shuffles):
    left_half = string_of_card[:half]
    right_half = string_of_card[half:]
    string_of_card.clear()
    for i in range(half):
        string_of_card.append(left_half[i])
        string_of_card.append(right_half[i])
print(string_of_card)