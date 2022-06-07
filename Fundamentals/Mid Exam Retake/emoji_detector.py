import re
threshold = input()
cool_threshold = re.findall(r"\d", threshold)
cool_threshold = list(map(int, cool_threshold))
sum_cool_threshold = 1
for number in cool_threshold:
    sum_cool_threshold *= number
print(f"Cool threshold: {sum_cool_threshold}")
matches = re.finditer(r"\:{2}([A-Z]{1}[a-z]{2,})\:{2}|\*{2}([A-Z]{1}[a-z]{2,})\*{2}", threshold)
emojis = list()
for match in matches:
    emoji = match.group()
    emojis.append(emoji)
count_of_all_emojis = len(emojis)
print(f"{count_of_all_emojis} emojis found in the text. The cool ones are:")
emojis_output = list()
for emoji in emojis:
    ascii_sum = 0
    for ch in emoji:
        if ch != ":" and ch != "*":
            ascii_sum += ord(ch)
    if ascii_sum > sum_cool_threshold:
        print(emoji)
