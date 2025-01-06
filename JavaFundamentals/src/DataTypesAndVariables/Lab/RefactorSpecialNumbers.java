package DataTypesAndVariables.Lab;

import java.util.Scanner;

public class RefactorSpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= count; i++) {
            int currentNumber = i;
            int sum = 0;

            while (currentNumber > 0) {
                sum += currentNumber % 10;
                currentNumber /= 10;
            }
            boolean isSpecial = sum == 5 || sum == 7 || sum == 11;
            System.out.printf("%d -> %s%n", i, isSpecial ? "True" : "False");
        }
    }
}
