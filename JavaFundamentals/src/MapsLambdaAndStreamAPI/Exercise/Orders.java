package MapsLambdaAndStreamAPI.Exercise;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Product> products = new LinkedHashMap<>();
        String input;
        while (!(input = scanner.nextLine()).equals("buy")) {
            String[] data = input.split("\\s+");

            String name = data[0];
            double price = Double.parseDouble(data[1]);
            int quantity = Integer.parseInt(data[2]);

            products.merge(name, new Product(price, quantity), (existing, newProduct) -> {
                existing.updatePrice(newProduct.getPrice());
                existing.addQuantity(newProduct.getQuantity());
                return existing;
            });
        }

        products.forEach((name, product) ->
                System.out.printf("%s -> %.2f%n", name, product.getTotalPrice()));

        scanner.close();
    }

    static class Product {
        private double price;
        private int quantity;

        Product(double price, int quantity) {
            this.price = price;
            this.quantity = quantity;
        }

        void updatePrice(double newPrice) {
            this.price = newPrice;
        }

        void addQuantity(int additionalQuantity) {
            this.quantity += additionalQuantity;
        }

        double getTotalPrice() {
            return price * quantity;
        }

        double getPrice() {
            return price;
        }

        int getQuantity() {
            return quantity;
        }
    }
}


