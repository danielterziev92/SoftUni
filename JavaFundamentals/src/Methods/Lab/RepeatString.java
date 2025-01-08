package Methods.Lab;

import java.util.Scanner;

public class RepeatString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String basicString = scanner.nextLine();
        int repeatingCount = Integer.parseInt(scanner.nextLine());

        String newString = repeatString(basicString, repeatingCount);
        System.out.println(newString);
    }

    private static String repeatString(String str, int count) {
        return str.repeat(count);
    }
}
