package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.Scanner;

public class EvenNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            int number = Math.abs(Integer.parseInt(scanner.nextLine()));

            if (number % 2 == 0) {
                System.out.printf("The number is: %d%n", number);
                break;
            } else {
                System.out.println("Please write an even number.");
            }
        }
    }
}
