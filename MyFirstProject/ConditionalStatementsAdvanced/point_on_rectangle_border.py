point_x1 = int(input())
point_y1 = int(input())
point_x2 = int(input())
point_y2 = int(input())
point_x = float(input())
point_y = float(input())
final_print = ''
if point_x == point_x1 or point_x == point_x2 and point_y1 <= point_y <= point_y2:
    final_print = 'Inside / Outside'
    if point_y1 <= point_y and point_y2 >= point_y:
        final_print = 'Border'
elif point_y == point_y1 or point_y == point_y2 and point_x1 <= point_x <= point_x2:
    final_print = 'Inside / Outside'
    if point_x1 <= point_x and point_x2 >= point_x:
        final_print = 'Border'
else:
    final_print = 'Inside / Outside'

print(final_print)