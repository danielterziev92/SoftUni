package Methods.Exercise;

import java.util.Scanner;

public class FactorialDivision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();

        long factorial1 = calculateFactorial(num1);
        long factorial2 = calculateFactorial(num2);

        double result = (double) factorial1 / factorial2;
        System.out.printf("%.2f", result);
    }

    private static long calculateFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        long factorial = 1;
        for (int i = 2; i <= n; i++) {
            factorial *= i;
        }

        return factorial;
    }
}
