package Methods.Lab;

import java.util.Scanner;

public class Calculations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String action = scanner.nextLine();
        int firstNumber = Integer.parseInt(scanner.nextLine());
        int secondNumber = Integer.parseInt(scanner.nextLine());

        switch (action) {
            case "add" -> add(firstNumber, secondNumber);
            case "subtract" -> subtract(firstNumber, secondNumber);
            case "multiply" -> multiply(firstNumber, secondNumber);
            case "divide" -> divide(firstNumber, secondNumber);
        }
    }

    private static void add(int a, int b) {
        System.out.println(a + b);
    }

    private static void subtract(int a, int b) {
        System.out.println(a - b);
    }

    private static void multiply(int a, int b) {
        System.out.println(a * b);
    }

    private static void divide(int a, int b) {
        System.out.println(a / b);
    }
}
