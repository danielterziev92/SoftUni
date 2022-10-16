def start_spring(**kwargs):
    flowers = {}
    for value, key in kwargs.items():
        if key not in flowers:
            flowers[key] = list()
        flowers[key].append(value)

    result = ''
    for flower, names in sorted(flowers.items(), key=lambda x: (-len(x[1]), x[0])):
        result += f'{flower}:\n'
        for name in sorted(names):
            result += f'-{name}\n'

    return result


example_objects = {"Water Lilly": "flower",
                   "Swifts": "bird",
                   "Callery Pear": "tree",
                   "Swallows": "bird",
                   "Dahlia": "flower",
                   "Tulip": "flower", }
print(start_spring(**example_objects))
# #
# # example_objects = {"Swallow": "bird",
# #                    "Thrushes": "bird",
# #                    "Woodpeckers": "bird",
# #                    "Swallows": "bird",
# #                    "Warblers": "bird",
# #                    "Shrikes": "bird",}
# # print(start_spring(**example_objects))
#
# example_objects = {"Magnolia": "tree",
#                    "Swallow": "bird",
#                    "Thrushes": "bird",
#                    "Pear": "tree",
#                    "Cherries": "tree",
#                    "Shrikes": "bird",
#                    "Butterfly": "insect"}
# print(start_spring(**example_objects))
