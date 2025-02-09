period = int(input())
doctors = 7
treated_patient = 0
untreated_patient = 0
for period in range(1, period + 1):
    count_patient = int(input())
    if treated_patient < untreated_patient and period % 3 == 0:
        doctors += 1
    if count_patient <= doctors:
        treated_patient += count_patient
    else:
        treated_patient += doctors
        untreated_patient += count_patient - doctors
print(f'Treated patients: {treated_patient}.')
print(f'Untreated patients: {untreated_patient}.')