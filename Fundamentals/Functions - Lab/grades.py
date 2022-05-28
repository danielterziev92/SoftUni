def grade_word(grade_score: float):
    if 2 <= grade_score < 3:
        return 'Fail'
    elif 3 <= grade_score < 3.5:
        return 'Poor'
    elif 3.5 <= grade_score < 4.5:
        return 'Good'
    elif 4.5 <= grade_score < 5.5:
        return 'Very Good'
    elif 5.5 <= grade_score <= 6.00:
        return 'Excellent'


grade = float(input())
print(grade_word(grade_score=grade))
