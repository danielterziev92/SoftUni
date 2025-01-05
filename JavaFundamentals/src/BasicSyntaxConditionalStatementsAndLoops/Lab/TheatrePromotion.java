package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.Scanner;

public class TheatrePromotion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String day = scanner.nextLine();
        int age = Integer.parseInt(scanner.nextLine());
        int price = -1;

        if (age < 0 || age > 122) {
            System.out.println("Error!");
            return;
        }

        switch (day) {
            case "Weekday":
                if (age <= 18 || age > 64) {
                    price = 12;
                } else {
                    price = 18;
                }
                break;
            case "Weekend":
                if (age <= 18 || age > 64) {
                    price = 15;
                } else {
                    price = 20;
                }
                break;
            case "Holiday":
                if (age <= 18) {
                    price = 5;
                } else if (age > 64) {
                    price = 10;
                } else {
                    price = 12;
                }
                break;
            default:
                System.out.println("Error!");
                return;
        }

        System.out.printf("%d$", price);
    }
}
