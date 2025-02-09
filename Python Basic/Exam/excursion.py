count_people_in_group = int(input())
count_nights = int(input())
count_card_transport = int(input())
count_card_museums = int(input())
one_night = 20
card_transport = 1.6
ticket_museum = 6
unexpected_costs = 1.25
total_amount_for_nights = count_nights * one_night
total_amount_for_card_transport = count_card_transport * card_transport
total_amount_for_card_museums = count_card_museums * ticket_museum
total_amount_for_person = (total_amount_for_nights + total_amount_for_card_museums + total_amount_for_card_transport)*unexpected_costs
total_amount_for_group = count_people_in_group * total_amount_for_person
print(f'{total_amount_for_group:.2f}')