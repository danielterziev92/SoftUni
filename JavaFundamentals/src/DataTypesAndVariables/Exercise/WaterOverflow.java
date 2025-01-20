package DataTypesAndVariables.Exercise;

import java.util.Scanner;

public class WaterOverflow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int maxCapacity = 255;
        int currentCapacity = 0;
        for (int i = 0; i < n; i++) {
            int liter = Integer.parseInt(scanner.nextLine());

            if (liter + currentCapacity > maxCapacity) {
                System.out.println("Insufficient capacity!");
                continue;
            }

            currentCapacity += liter;
        }

        System.out.println(currentCapacity);
    }
}
