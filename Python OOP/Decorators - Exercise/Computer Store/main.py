from project.computer_store_app import ComputerStoreApp

computer_store = ComputerStoreApp()
print(computer_store.build_computer("Laptop", "Apple", "Macbook", "Apple M1 Pro", 64))
print(computer_store.warehouse)
print(computer_store.build_computer('Desktop Computer', "ASDF", "ASDF", "AMD Ryzen 9 5950X", 128))
print(computer_store.sell_computer(10000, "Apple M1 Pro", 32))
print(computer_store.profits)
print(computer_store.sell_computer(3000, 'Apple M1 Max', 64))
print(computer_store.profits)

# computer_store2 = ComputerStoreApp()
# print(computer_store2.build_computer('Desktop Computer', 'SoftUni', 'Daniels Book', 'AMD Ryzen 7 5700G', 64))
