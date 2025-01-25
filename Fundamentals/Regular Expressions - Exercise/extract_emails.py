import re

user_input = input()
user_name_patter = r"( |^)[a-zA-Z0-9]+((([\._-])[a-zA-Z0-9]+)*)*"
email_patter = r"[a-zA-Z0-9]+([\-]\w+)*\.[a-zA-Z0-9]+((\.\w+)*)*\b"
matches_email = re.finditer(fr"{user_name_patter}@{email_patter}", user_input)
emails = list()
for match in matches_email:
    emails.append(match.group())
print("\n".join(emails))