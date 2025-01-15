package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Scanner;

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double total = 0;
        int orderCount = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < orderCount; i++) {
            double pricePerCapsule = Double.parseDouble(scanner.nextLine());
            int days = Integer.parseInt(scanner.nextLine());
            double capsuleCount = Double.parseDouble(scanner.nextLine());

            double price = ((days * capsuleCount) * pricePerCapsule);
            System.out.printf("The price for the coffee is: $%.2f%n", price);
            total += price;
        }

        System.out.printf("Total: $%.2f%n", total);
    }
}
