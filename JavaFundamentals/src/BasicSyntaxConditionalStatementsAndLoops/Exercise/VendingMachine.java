package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Map;
import java.util.Scanner;

public class VendingMachine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        final double[] VALID_COINS = {0.1, 0.2, 0.5, 1.0, 2.0};
        final Map<String, Double> PRODUCTS = Map.of(
                "Nuts", 2.0,
                "Water", 0.7,
                "Crisps", 1.5,
                "Soda", 0.8,
                "Coke", 1.0
        );

        double coins = collectCoins(scanner, VALID_COINS);

        processPurchases(scanner, coins, PRODUCTS);
    }

    private static double collectCoins(Scanner scanner, double[] validCoins) {
        double sum = 0;
        String input;
        while (!"Start".equals(input = scanner.nextLine())) {
            double coin = Double.parseDouble(input);
            if (isValidCoin(coin, validCoins)) {
                sum += coin;
            } else {
                System.out.printf("Cannot accept %.2f%n", coin);
            }
        }
        return sum;
    }

    private static boolean isValidCoin(double coin, double[] validCoins) {
        for (double validCoin : validCoins) {
            if (Math.abs(coin - validCoin) < 0.0001) {
                return true;
            }
        }
        return false;
    }

    private static void processPurchases(Scanner scanner, double balance, Map<String, Double> products) {
        double remainingMoney = balance;
        String input;

        while (!"End".equals(input = scanner.nextLine())) {
            if (!products.containsKey(input)) {
                System.out.println("Invalid product");
                continue;
            }

            double price = products.get(input);
            if (remainingMoney < price) {
                System.out.println("Sorry, not enough money");
                continue;
            }

            remainingMoney -= price;
            System.out.printf("Purchased %s%n", input);
        }

        System.out.printf("Change: %.2f", remainingMoney);
    }
}
