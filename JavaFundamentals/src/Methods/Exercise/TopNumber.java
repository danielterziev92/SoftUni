package Methods.Exercise;

import java.util.Scanner;

public class TopNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        for (int number = 1; number <= n; number++) {
            if (isTopNumber(number)) {
                System.out.println(number);
            }
        }

        scanner.close();
    }

    private static boolean isTopNumber(int number) {
        return isSumOfDigitsDivisibleByEight(number) && hasAtLeastOneOddDigit(number);
    }

    private static boolean isSumOfDigitsDivisibleByEight(int number) {
        int digitSum = 0;

        while (number > 0) {
            digitSum += number % 10;
            number /= 10;
        }

        return digitSum % 8 == 0;
    }

    private static boolean hasAtLeastOneOddDigit(int number) {
        while (number > 0) {
            int digit = number % 10;
            if (digit % 2 != 0) {
                return true;
            }
            number /= 10;
        }

        return false;
    }
}
