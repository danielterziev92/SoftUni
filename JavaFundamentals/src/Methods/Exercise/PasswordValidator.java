package Methods.Exercise;

import java.util.Scanner;

public class PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String password = scanner.nextLine();
        boolean isValid = true;

        if (!isLengthValid(password)) {
            System.out.println("Password must be between 6 and 10 characters");
            isValid = false;
        }

        if (!containsOnlyLettersAndDigits(password)) {
            System.out.println("Password must consist only of letters and digits");
            isValid = false;
        }

        if (!hasAtLeastTwoDigits(password)) {
            System.out.println("Password must have at least 2 digits");
            isValid = false;
        }

        if (isValid) {
            System.out.println("Password is valid");
        }
    }

    private static boolean isLengthValid(String password) {
        return password.length() >= 6 && password.length() <= 10;
    }

    private static boolean containsOnlyLettersAndDigits(String password) {
        for (char c : password.toCharArray()) {
            if (!Character.isLetterOrDigit(c)) {
                return false;
            }
        }
        return true;
    }

    private static boolean hasAtLeastTwoDigits(String password) {
        int digitCount = 0;
        for (char c : password.toCharArray()) {
            if (Character.isDigit(c)) {
                digitCount++;
            }
        }
        return digitCount >= 2;
    }
}
