side_x = float(input())
side_y = float(input())
side_z = float(input())
cost_green_paint = 3.4
cost_red_paint = 4.3
door = 1.2 * 2
windows = 1.5 * 1.5
roof_side_a = 2 * (side_x * side_y)
roof_side_b = 2 * (side_x * side_z)
house_side_back_area = (side_x * side_x)
house_side_aside_area = 2 * (side_x * side_y) - 2 * windows
total_area_aside = house_side_aside_area + (2 * house_side_back_area)- door
total_paint_aside = total_area_aside / cost_green_paint
roof_area_side_a = 2 * (side_x * side_y)
roof_area_side_b = 2 * (side_x * (side_z/2))
total_area_roof = roof_area_side_b + roof_area_side_a
total_paint_roof = total_area_roof / cost_red_paint
print(f'{total_paint_aside:.2f}')
print(f'{total_paint_roof:.2f}')