package DataTypesAndVariables.Exercise;

import java.util.Scanner;

public class TriplesOfLatinLetters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int charOfA = 97;
        for (int i = 0; i < n; i++) {
            String first = Character.toString(charOfA + i);
            for (int j = 0; j < n; j++) {
                String second = Character.toString(charOfA + j);
                for (int k = 0; k < n; k++) {
                    String third = Character.toString(charOfA + k);
                    System.out.printf("%s%s%s%n", first, second, third);
                }
            }
        }
    }
}
