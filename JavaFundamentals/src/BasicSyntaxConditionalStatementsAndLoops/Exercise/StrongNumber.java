package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Arrays;
import java.util.Scanner;

public class StrongNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String number = scanner.nextLine();
        int originalNumber = Integer.parseInt(number);

        int sum = Arrays.stream(number.split(""))
                .mapToInt(Integer::parseInt)
                .map(StrongNumber::calculateFactorial)
                .sum();

        System.out.println(sum == originalNumber ? "yes" : "no");
    }

    private static int calculateFactorial(int n) {
        int factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
