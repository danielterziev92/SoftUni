package Methods.Exercise;

import java.util.Scanner;

public class CharactersInRange {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char start = scanner.nextLine().charAt(0);
        char end = scanner.nextLine().charAt(0);

        printCharactersBetween(start, end);
    }

    public static void printCharactersBetween(char start, char end) {
        if (start > end) {
            char temp = start;
            start = end;
            end = temp;
        }

        for (char c = (char)(start + 1); c < end; c++) {
            System.out.print(c + " ");
        }
    }
}
