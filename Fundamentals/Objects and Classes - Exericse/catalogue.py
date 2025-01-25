class Catalogue:

    def __init__(self, name):
        self.name = name
        self.products = list()

    def __repr__(self):
        self.products.sort()
        new_line = "\n"
        result = f"Items in the {self.name} catalogue:{new_line}{new_line.join([product for product in self.products])}"
        return result

    def add_product(self, product_name: str):
        self.products.append(product_name)

    def get_by_letter(self, first_letter: str):
        result = [product for product in self.products if first_letter == product[0]]
        return result


catalogue = Catalogue("Furniture")
catalogue.add_product("1")
catalogue.add_product("5")
catalogue.add_product("3")
catalogue.add_product("4")
catalogue.add_product("2")
print(catalogue)