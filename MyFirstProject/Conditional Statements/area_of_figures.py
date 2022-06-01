kind = input()
if kind == 'square':
    side_a = float(input())
    aside = side_a * side_a
elif kind == 'rectangle':
    side_a = float(input())
    side_b = float(input())
    aside = side_a * side_b
elif kind == 'circle':
    r = float(input())
    import math
    aside = (math.pi)*r**2
elif kind == 'triangle':
    side_a = float(input())
    side_b = float(input())
    aside = (side_a * side_b) /2

print(f'{aside:.3f}')
