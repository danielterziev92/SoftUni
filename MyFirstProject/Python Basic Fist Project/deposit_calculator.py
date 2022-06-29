deposit_amount = int(input())
deposit_deadline = int(input())
annual_interest_rate =  float(input())
accrued_interest = deposit_amount * annual_interest_rate / 100
deposit_for_mount = accrued_interest / 12
deposit = deposit_for_mount * deposit_deadline
amount = deposit_amount + deposit
print(amount)