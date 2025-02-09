from collections import deque
customer_name = input()
customers = deque()
while customer_name != "End":

    if customer_name == "Paid":
        while customers:
            print(customers.popleft())
    else:
        customers.append(customer_name)
    customer_name = input()

print(f"{len(customers)} people remaining.")