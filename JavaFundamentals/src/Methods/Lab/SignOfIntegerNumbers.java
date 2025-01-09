package Methods.Lab;

import java.util.Scanner;

public class SignOfIntegerNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());

        signOfInteger(number);
    }

    private static void signOfInteger(int number) {
        String output = "The number ";

        if (number < 0) {
            output += number + " is negative.";
        } else if (number > 0) {
            output += number + " is positive.";
        } else {
            output += "0 is zero.";
        }

        System.out.println(output);
    }
}
