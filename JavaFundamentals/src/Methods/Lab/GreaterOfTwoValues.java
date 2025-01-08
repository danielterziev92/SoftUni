package Methods.Lab;

import java.util.Scanner;

public class GreaterOfTwoValues {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String type = scanner.nextLine();

        switch (type) {
            case "int" -> {
                int firstNumber = Integer.parseInt(scanner.nextLine());
                int secondNumber = Integer.parseInt(scanner.nextLine());

                int maxValue = getMaxValue(firstNumber, secondNumber);
                System.out.println(maxValue);
            }
            case "char" -> {
                char firstChar = scanner.nextLine().charAt(0);
                char secondChar = scanner.nextLine().charAt(0);

                char maxValue = getMaxValue(firstChar, secondChar);
                System.out.println(maxValue);
            }
            case "String" -> {
                String firstString = scanner.nextLine();
                String secondString = scanner.nextLine();

                String maxValue = getMaxValue(firstString, secondString);
                System.out.println(maxValue);
            }
        }
    }

    private static int getMaxValue(int first, int second) {
        return Math.max(first, second);
    }

    private static char getMaxValue(char first, char second) {
        return (char) Math.max(first, second);
    }

    private static String getMaxValue(String first, String second) {
        if (first.compareTo(second) >= 0) {
            return first;
        }
        return second;
    }
}
