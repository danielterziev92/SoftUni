package Methods.Lab;

import java.util.Scanner;

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String product = scanner.nextLine();
        int quantity = Integer.parseInt(scanner.nextLine());

        double total = getTotal(product, quantity);
        System.out.printf("%.2f", total);
    }

    private static double getTotal(String product, int quantity) {
        return switch (product) {
            case "coffee" -> quantity * 1.5;
            case "water" -> quantity * 1.0;
            case "coke" -> quantity * 1.4;
            case "snacks" -> quantity * 2.0;
            default -> 0.0;
        };
    }
}
