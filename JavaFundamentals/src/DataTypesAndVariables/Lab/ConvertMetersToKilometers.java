package DataTypesAndVariables.Lab;

import java.util.Scanner;

public class ConvertMetersToKilometers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double kilometers = Short.parseShort(scanner.nextLine()) / 1000.0;
        System.out.printf("%.2f", kilometers);
    }
}
