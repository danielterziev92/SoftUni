package Methods.Exercise;

import java.util.Scanner;

public class PalindromeIntegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String input = scanner.nextLine();

            if (input.equals("END")) break;

            int number = Integer.parseInt(input);

            if (isPalindrome(number)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
    }

    private static boolean isPalindrome(int number) {
        String numStr = String.valueOf(number);

        for (int i = 0; i < numStr.length() / 2; i++) {
            if (numStr.charAt(i) != numStr.charAt(numStr.length() - 1 - i)) {
                return false;
            }
        }

        return true;
    }
}
