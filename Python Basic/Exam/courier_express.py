shipment_weight = float(input())
type_of_service = input()
distance = int(input())
price = 0
final_prece = 0
if type_of_service == 'standard':
    if shipment_weight < 1:
        price = 0.03
    elif 1 < shipment_weight < 10:
        price = 0.05
    elif 10 <= shipment_weight < 40:
        price = 0.1
    elif 40 <= shipment_weight < 90:
        price = 0.15
    elif 90 <= shipment_weight < 150:
        price = 0.2
    final_prece = price * distance
elif type_of_service == 'express':
    markup = 0
    if shipment_weight < 1:
        price = 0.03
        markup = 0.8
    elif 1 < shipment_weight < 10:
        price = 0.05
        markup = 0.4
    elif 10 <= shipment_weight < 40:
        price = 0.1
        markup = 0.05
    elif 40 <= shipment_weight < 90:
        price = 0.15
        markup = 0.02
    elif 90 <= shipment_weight < 150:
        price = 0.2
        markup = 0.01
    final_prece = (price * distance) + ((price*markup) * shipment_weight)*distance
print(f'The delivery of your shipment with weight of {shipment_weight:.3f} kg. would cost {final_prece:.2f} lv.')