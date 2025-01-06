package DataTypesAndVariables.Lab;

import java.util.Scanner;

public class CharsToString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String result = "";
        for (int i = 0; i < 3; i++) {
            result = result.concat(scanner.nextLine());
        }

        System.out.println(result);
    }
}
