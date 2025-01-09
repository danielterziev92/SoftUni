package DataTypesAndVariables.Lab;

import java.util.Scanner;

public class PoundsToDollars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        float dollars = Float.parseFloat(scanner.nextLine()) * 1.36f;
        System.out.printf("%.3f", dollars);
    }
}
