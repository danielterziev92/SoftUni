package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int groupOfPeople = Integer.parseInt(scanner.nextLine());
        String groupType = scanner.nextLine();
        String day = scanner.nextLine();

        double price = 0;
        switch (day) {
            case "Friday" -> {
                switch (groupType) {
                    case "Students" -> price = 8.45;
                    case "Business" -> price = 10.90;
                    case "Regular" -> price = 15;
                }
            }
            case "Saturday" -> {
                switch (groupType) {
                    case "Students" -> price = 9.80;
                    case "Business" -> price = 15.60;
                    case "Regular" -> price = 20;
                }
            }
            case "Sunday" -> {
                switch (groupType) {
                    case "Students" -> price = 10.46;
                    case "Business" -> price = 16;
                    case "Regular" -> price = 22.50;
                }
            }
        }

        double totalPrice = groupOfPeople * price;

        if (groupType.equals("Students") && groupOfPeople >= 30) {
            totalPrice = totalPrice * 0.85;
        }

        if (groupType.equals("Business") && groupOfPeople >= 100) {
            totalPrice = totalPrice - (10 * price);
        }

        if (groupType.equals("Regular") && groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice = totalPrice * 0.95;
        }

        System.out.printf("Total price: %.2f", totalPrice);
    }
}