def calc_total_amount(product: str, quality: int):
    coffee = 1.5
    water = 1.0
    coke = 1.4
    snacks = 2.0
    if product == 'coffee':
        return coffee * quality
    elif product == 'water':
        return water * quality
    elif product == 'coke':
        return coke * quality
    elif product == 'snacks':
        return snacks * quality


current_product = input()
current_quality = int(input())
print(f'{calc_total_amount(product=current_product, quality= current_quality):.2f}')