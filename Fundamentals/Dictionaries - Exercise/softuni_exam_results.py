results = input()
users_score = dict()
languages = dict()
while results != "exam finished":
    results = results.split("-")
    username = results[0]
    if "banned" in results:
        is_banned = True
        users_score[username]["is_banned"] = is_banned
    else:
        language = results[1]
        if language not in languages.keys():
            languages[language] = 0
        languages[language] += 1
        score = int(results[2])
        is_banned = False
        if username not in users_score.keys():
           users_score[username] = {"score": score, "is_banned": False}
        else:
            if score > users_score[username].get("score"):
                users_score[username]["score"] = score

    results = input()
print("Results:")
for user in users_score.keys():
    score = users_score[user].get("score")
    is_banned = users_score[user].get("is_banned")
    if not is_banned:
        print(f"{user} | {score}")
print("Submissions:")
for language in languages.keys():
    print(f"{language} - {languages[language]}")