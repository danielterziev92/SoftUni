package Methods.Lab;

import java.util.Scanner;

public class MathPower {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double number = Double.parseDouble(scanner.nextLine());
        double power = Double.parseDouble(scanner.nextLine());

        double result = getPowerNumber(number, power);
        System.out.printf("%.0f", result);
    }

    private static double getPowerNumber(double number, double power) {
        return Math.pow(number, power);
    }
}
