package Methods.Lab;

import java.util.Scanner;

public class MathOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int first = Integer.parseInt(scanner.nextLine());
        String operator = scanner.nextLine();
        int second = Integer.parseInt(scanner.nextLine());

        int result = calculate(first, second, operator);
        System.out.println(result);
    }

    private static int calculate(int first, int second, String operator) {
        switch (operator) {
            case "+" -> {
                return first + second;
            }
            case "-" -> {
                if (first > second) {
                    return first - second;
                }
                return second - first;
            }
            case "*" -> {
                return first * second;
            }
            case "/" -> {
                if (first > second) {
                    return first / second;
                }
                return second / first;
            }
        }
        return 0;
    }
}
